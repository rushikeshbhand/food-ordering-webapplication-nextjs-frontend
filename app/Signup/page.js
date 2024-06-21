'use client'

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://fastfood-nine.vercel.app/createUser', {
        username,
        email,
        password
      })
      const { message, token, createdUser } = response.data; // In axios response comes inside data object
      console.log(`message and token and created user is : ${message} and ${token} and user is ${JSON.stringify(createdUser)}`)

      // store the token in the local storage 
      localStorage.setItem('token', token)
      alert(`${response.data.createdUser.username} is successfully registered`)
    } catch (err) {
      console.log(err.message);
      alert(`enter all credentials to signup`)
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg')`,
          }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 ">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value) }}
                  placeholder="Enter username"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder="rushikesh@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              <button className="btn btn-primary w-full">
                <span>Sign Up </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
