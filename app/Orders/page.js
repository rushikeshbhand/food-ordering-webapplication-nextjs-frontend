import React from 'react';

export default function Orders() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-300 to-purple-600'>
      <div className='bg-white shadow-lg rounded-lg max-w-4xl w-full mx-5'>
        <h1 className='text-center text-4xl text-gray-800 pt-8 font-extrabold border-b-2 border-gray-200 pb-4'>
          Your Orders
        </h1>
        <div className='p-6'>
          <p className='text-center text-gray-600'>
            Here are the details of your recent orders.
          </p>
        </div>
      </div>
    </div>
  );
}
