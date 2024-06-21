'use client'

import axios from 'axios';
import React, { useState } from 'react'

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const productData = {name, price:parseFloat(price), imageUrl}
        try{
            const response = await axios.post('https://food-ordering-webapplication-nodejs-backend.vercel.app/createProduct', productData)

            alert("product created successfully")
        }catch(err){
            console.log("error to send product data" + err);

            alert("error creating product");
        }
    }
    return (
        <div className='border max-w-4xl mx-auto mt-12 mb-10'>
            <h1 className='text-center py-7 font-mono text-3xl underline drop-shadow-xl '>Create Product</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-xl mx-auto pb-12 px-10 '>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" className="input input-bordered w-full max-w-xl" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" className="grow input input-bordered flex items-center gap-2" />
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter product image url" className="input input-bordered w-full max-w-xl" />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    )
}
