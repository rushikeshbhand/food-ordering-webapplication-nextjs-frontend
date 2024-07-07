'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Script from 'next/script';

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://food-ordering-webapplication-nodejs-backend.vercel.app/products');
        setProducts(response.data.products);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token found");
        alert('Token not found. Please login or signup if you don\'t have an account.');
        return;
      }

      const response = await axios.post(
        'https://food-ordering-webapplication-nodejs-backend.vercel.app/addToCart',
        { productId },
        {
          headers: {
            'auth-token': token
          }
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log("Error adding product to cart:", error);
    }
  };

  const handleBuyNow = async (product) => {
    console.log('Product being bought:', product);
    console.log('Product price:', product.price);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token found");
        alert('Token not found. Please login or signup if you don\'t have an account.');
        return;
      }

      const response = await axios.post(
        'https://food-ordering-webapplication-nodejs-backend.vercel.app/createOrder',
        { amount: product.price, currency: 'INR' },
        {
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Data got in response", response.data);
      console.log("order id is ", response.data.id);
      var orderId = response.data.id;

      if (razorpayLoaded) {
        initiatePayment(orderId, product);
      } else {
        console.log('Razorpay SDK not loaded');
      }
    } catch (error) {
      console.log("Error buying product:", error);
    }
  };

  const initiatePayment = (orderId, product) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Ensure this key is available in the environment variables
      amount: product.price * 100,
      currency: 'INR',
      name: 'Fast Foods India',
      description: `Payment for ${product.name}`,
      order_id: orderId,
      handler: function (response) {
        alert('Payment successful!');
        console.log(response);
      },
      prefill: {
        name: 'Customer Name', // Optional: Replace with actual customer name
        email: 'customer@example.com', // Optional: Replace with actual customer email
        contact: '9999999999' // Optional: Replace with actual customer contact
      },
      theme: {
        color: '#F37254' // Optional: Replace with your brand color
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js" 
        strategy="lazyOnload" 
        onLoad={() => setRazorpayLoaded(true)} 
      />
      <div className="flex flex-wrap min-h-screen justify-center gap-3 lg:gap-20 pt-10 dark:bg-slate-900">
        {products.map((product) => (
          <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="h-full bg-slate-900 text-slate-300 rounded-lg shadow-lg dark:bg-slate-800 mx-auto transition-transform transform hover:scale-105">
              <div className="px-4 py-2 dark:text-black">
                <h1 className="text-xl font-bold text-slate-300 uppercase dark:text-white">{product.name}</h1>
              </div>
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 dark:bg-slate-800">
                <h1 className="text-lg font-bold text-white">₹ {product.price}</h1>
                <div>
                  <button onClick={() => handleAddToCart(product._id)} className="mr-5 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                  <button onClick={() => handleBuyNow(product)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
