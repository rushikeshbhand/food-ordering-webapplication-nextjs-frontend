'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const response = await axios.post('https://fastfood-nine.vercel.app/login', loginData);
      console.log(response.data);
  
      const { message, token, user } = response.data; // Correct destructuring
      localStorage.setItem('token', token);
      alert(`${user.username} is successfully logged in`);
      console.log("Login is successful");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred");
      alert("enter valid login details");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white mt-20 mb-10 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
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
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} id="LoggingEmailAddress" className="input input-bordered w-full" placeholder='rushikesh@example.com' type="email" />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
              <Link href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
                Forget Password?
              </Link>
            </div>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} id="loggingPassword" className="input input-bordered w-full" placeholder="Enter your password" type="password" />
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
  )
}
