"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://food-ordering-webapplication-nodejs-backend.vercel.app/contact",
        data
      );
      console.log(response);

      // Show the toast
      setShowToast(true);

      // Hide the toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      alert("Data is not able to send to server from client side");
      console.log(error.message);
    }
  };

  return (
    <div className="border text-black max-w-4xl mx-auto mb-10 mt-12 p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-black">
      <h1 className="text-center py-7 text-opacity-5 text-2xl dark:text-white drop-shadow-xl">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-xl mx-auto pb-12 px-10"
      >
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xl"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xl"
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
        <div>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="input input-bordered w-full max-w-xl"
            {...register('phoneNumber', { 
              required: 'Phone number is required', 
              pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number'
              }
            })}
          />
          {errors.phoneNumber && <span className="text-red-600 text-sm">{errors.phoneNumber.message}</span>}
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full max-w-xl h-32"
            placeholder="Enter your message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary w-full max-w-xl"
        />
      </form>

      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}
