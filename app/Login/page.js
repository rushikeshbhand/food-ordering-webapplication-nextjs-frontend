'use client';

import axios from 'axios';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setTokenAndUser } from '../redux/authSlice';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [showToast, setshowToast] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://food-ordering-webapplication-nodejs-backend.vercel.app/login', data);

      const { message, token, user } = response.data;
      dispatch(setTokenAndUser({ token, user }));
      localStorage.setItem('token', token);
      
      setshowToast(true);
      router.push('/');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred");
      alert("Enter valid login details");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white mt-20 mb-10 rounded-lg shadow-lg dark:bg-slate-900 lg:max-w-4xl">
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg')" }}></div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <Image className="w-auto h-7 sm:h-8" src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p>
            {error && <p className="mt-3 text-center text-red-500">{error}</p>}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
              <input 
                id="LoggingEmailAddress"
                className="input input-bordered w-full" 
                placeholder='rushikesh@example.com' 
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address'
                  }
                })}
              />
              {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                <Link href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
                  Forget Password?
                </Link>
              </div>
              <input 
                id="loggingPassword"
                className="input input-bordered w-full" 
                placeholder="Enter your password" 
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long'
                  }
                })}
              />
              {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
            </div>
            <div className="mt-6">
              <button className="btn btn-primary w-full">
                Log In
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link href="../Signup" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </form>

      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>login successfully</span>
          </div>
        </div>
      )}
    </>
  )
}
