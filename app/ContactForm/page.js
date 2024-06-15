'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/contact', {
                name, email, phoneNumber, message
            })
            console.log(response);
            
            // Log the state before clearing
            console.log("Before clearing: ", { name, email, phoneNumber, message });
            
            // Clear the form fields after successful submission
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");

            // Log the state after clearing
            console.log("After clearing: ", { name, email, phoneNumber, message });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='border max-w-4xl mx-auto mt-12 rounded-lg'>
            <h1 className='text-center py-7 font-mono text-3xl underline drop-shadow-xl '>Contact Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-xl mx-auto pb-12 px-10 '>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input input-bordered w-full max-w-xl" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="grow input input-bordered flex items-center gap-2" />
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" className="input input-bordered w-full max-w-xl" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="textarea text-lg" placeholder="Enter your message"></textarea>
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    )
}
