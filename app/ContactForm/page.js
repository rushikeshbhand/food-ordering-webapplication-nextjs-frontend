'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://food-ordering-webapplication-nodejs-backend.vercel.app/contact', {
                name, email, phoneNumber, message
            });
            console.log(response);
            
            // Clear the form fields after successful submission
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");

            // Show the toast
            setShowToast(true);

            // Hide the toast after 3 seconds
            setTimeout(() => setShowToast(false), 5000);
        } catch (error) {
            alert("Data is not able to send to server from client side")
            console.log(error.message);
        }
    }

    return (
        <div className='border max-w-4xl mx-auto mb-10 mt-12 p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white'>
            <h1 className='text-center py-7 text-opacity-5 text-2xl  drop-shadow-xl'>Contact Us</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-xl mx-auto pb-12 px-10'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input input-bordered w-full max-w-xl" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input input-bordered w-full max-w-xl" />
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" className="input input-bordered w-full max-w-xl" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="textarea textarea-bordered w-full max-w-xl h-32" placeholder="Enter your message"></textarea>
                <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xl" />
            </form>
            

            {showToast && (
                <div className="toast toast-top toast-end">
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            )}
        </div>
    )
}
