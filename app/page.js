'use client'

import Link from 'next/link'
import Portfolio from './Portfolio/page';
import Image from 'next/image';
import Testimonial from './Testimonials/page';
import Faq from './Faq/page';

export default function Home() {

  return (
    <div className=''>
      <main className='flex flex-col md:flex-row items-center bg-teal-50'>
        <div className='p-8 md:w-1/2'>
          <h1 className='text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-yellow-400'>
            Hungry? We’ve Got You Covered <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-rose-600'>– Fresh, Tasty, and Delivered Fast!</span>
          </h1>
          <button className='mt-6 px-6 py-3 bg-gradient-to-r from-rose-500 to-yellow-500 hover:from-yellow-500 hover:to-rose-500 font-medium text-lg rounded-lg shadow-lg hover:shadow-lg transition duration-300'>
            <Link href="/ShowProducts">Order Now</Link>
          </button>
        </div>
        <div className='w-full md:w-1/2'>
          <Image src="/images/food.avif" className='' width={20000} height={20000} alt=''></Image>
        </div>
      </main>


      <Portfolio/>
      <Testimonial/>
      <Faq/>
    </div>
  );
}
