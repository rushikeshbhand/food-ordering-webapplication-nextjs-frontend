'use client'


import Spline from '@splinetool/react-spline/next';
import { useEffect } from 'react';

export default function Home() {

  return (
    <main className='min-h-screen flex flex-col md:flex-row items-center bg-teal-50'>
      <div className='p-8 md:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-semibold text-amber-500'>
          Hungry? We’ve Got You Covered <br />
          <span className='text-rose-600'>– Fresh, Tasty, and Delivered Fast!</span>
        </h1>
        <button className='mt-6 px-6 py-3 bg-rose-600 text-amber-100 font-medium text-lg rounded-lg shadow-lg hover:bg-amber-600 transition duration-300'>
          Order Now
        </button>
      </div>
      <div className='w-full md:w-1/2'>
      <Spline
        scene="https://prod.spline.design/NCyrkbqtxDoiZS1j/scene.splinecode" 
      />
      </div>
    </main>
  );
}
