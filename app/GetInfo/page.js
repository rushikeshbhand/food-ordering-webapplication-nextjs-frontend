'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function GetInfo() {
    const [data, setData] = useState("");

    const handleClick = async () => {
        try {
            // Get token from localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                console.log("No token found");
                alert('Token not found Please login again or signup if you dont have account')
                return;
            }

            // Make GET request to protected route with token in headers
            const response = await axios.get('http://localhost:5000/getInfo', {
                headers: {
                    'auth-token': token
                }
            });

            setData(response.data.message);
        } catch (error) {
            console.log("Error while getting data", error);
        }
    }

    return (
        <div>
            <button onClick={handleClick} className='text-white bg-blue-500 text-xl p-5 rounded-xl'>Show Information</button>
            <h1>{data}</h1>

            
        </div>
        
    );
}
