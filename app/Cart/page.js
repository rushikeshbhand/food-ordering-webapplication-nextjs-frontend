'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found");
          alert('Token not found. Please login or signup if you don\'t have an account.');
          return;
        }

        const response = await axios.get('https://food-ordering-webapplication-nodejs-backend.vercel.app/cart', {
          headers: {
            'auth-token': token
          }
        });

        setCart(response.data.cart);
      } catch (err) {
        console.log("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token found");
        alert('Token not found. Please login or signup if you don\'t have an account.');
        return;
      }

      const response = await axios.post(
        'https://food-ordering-webapplication-nodejs-backend.vercel.app/removeFromCart',
        { productId },
        {
          headers: {
            'auth-token': token
          }
        }
      );

      console.log(response.data);
      setCart(response.data.cart);
    } catch (error) {
      console.log("Error removing product from cart:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token found");
        alert('Token not found. Please login or signup if you don\'t have an account.');
        return;
      }

      const response = await axios.post(
        'https://food-ordering-webapplication-nodejs-backend.vercel.app/placeOrder',
        {},
        {
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Order placed successfully", response.data);
      var orderId = response.data.id;

      if (razorpayLoaded) {
        initiatePayment(orderId, response.data.amount);
      } else {
        console.log('Razorpay SDK not loaded');
      }
    } catch (error) {
      console.log("Error placing order:", error);
    }
  };

  const initiatePayment = (orderId, amount) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Ensure this key is available in the environment variables
      amount: amount,
      currency: 'INR',
      name: 'Fast Foods India',
      description: 'Payment for order',
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

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        setRazorpayLoaded(true);
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  const totalPrice = cart.products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-lg">
              <div className="relative w-24 h-24 overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">₹ {product.price}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(product._id)} className="ml-auto px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between w-full mb-4">
            <span className="text-gray-700">Subtotal:</span>
            <span className="text-gray-700">₹ {totalPrice}</span>
          </div>
          <div className="flex justify-between w-full mb-4">
            <span className="text-gray-700">Shipping:</span>
            <span className="text-gray-700">Free</span>
          </div>
          <div className="flex justify-between w-full mb-4 font-bold text-lg">
            <span>Total:</span>
            <span>₹ {totalPrice}</span>
          </div>
          <button onClick={handlePlaceOrder} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
