import React from 'react'

export default function ContactForm() {
  return (
    <div className='border max-w-4xl mx-auto mt-12'>
        <h1 className='text-center py-7 font-mono text-3xl underline drop-shadow-xl '>Contact Form</h1>
        <form action="" className='flex flex-col gap-5 max-w-xl mx-auto pb-12 px-10 '>
        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xl" />
        <input type="text" placeholder="Enter your email" className="grow input input-bordered flex items-center gap-2"/>
        <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full max-w-xl" />
        <textarea className="textarea text-lg" placeholder="Enter your message"></textarea>
        <input type="submit" value="Submit" className="btn" />
        </form>
    </div>
  )
}
