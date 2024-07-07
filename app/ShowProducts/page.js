'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://food-ordering-webapplication-nodejs-backend.vercel.app/products');
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, products]);

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      setRazorpayLoaded(true);
    };
    document.body.appendChild(script);
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
        'http://localhost:5000/createOrder',
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
      key: 'rzp_test_B5AQGkgOO8mrC0', // Your Razorpay key
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
    <div className='dark:bg-slate-900 bg-white'>
      <div className="flex dark:bg-slate-900 rounded-md border-2  border-slate-800 dark:border-white overflow-hidden max-w-80 md:max-w-6xl mx-auto font-[sans-serif]">
        <input
          type="text"
          placeholder="Search Your Favourite Foods..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full outline-none dark:bg-slate-300 bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button type="button" className="flex items-center justify-center bg-slate-600 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-3 lg:gap-20 pt-10 dark:bg-slate-900">
        {filteredProducts.map((product) => (
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
