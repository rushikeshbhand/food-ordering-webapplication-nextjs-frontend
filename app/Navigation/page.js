'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* Desktop view for navbar */}
      <div className="navbar bg-base-100 hidden lg:flex">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl"><Image src="/logo.png" width={80} height={80} alt="" /></a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ShowProducts">Get your favourite food</Link></li>
            <li><Link href="/Cart">Cart</Link></li>
            <li><Link href="/GetInfo">GetInfo</Link></li>
            <li><Link href="/ContactForm">Contact Us</Link></li>
            <li><Link href="/Login">Login</Link></li>
            <li><Link href="/Signup">Signup</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile view for navbar */}
      <div className="lg:hidden ">
        <div className="flex justify-between items-center p-4 sticky top-0 z-50">
          <a className="btn btn-ghost normal-case text-xl"><Image src="/logo.png" width={80} height={80} alt="" /></a>
          <button className="btn btn-square btn-ghost" onClick={handleOnClick}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="bg-base-500 sticky top-0 z-50">
            <ul className="flex flex-col gap-4 text-center p-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ShowProducts">Get your favourite food</Link></li>
              <li><Link href="/Cart">Cart</Link></li>
              <li><Link href="/">Orders</Link></li>
              <li><Link href="/ContactForm">Contact Us</Link></li>
              <li><Link href="/Login">Login</Link></li>
              <li><Link href="/Signup">Signup</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
