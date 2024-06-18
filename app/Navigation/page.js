'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop view for navbar */}
      <div className="navbar bg-base-100 hidden lg:flex">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Food Wala</a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ShowProducts">Get your favourite food</Link></li>
            <li><Link href="/">Cart</Link></li>
            <li><Link href="/">Orders</Link></li>
            <li><Link href="/ContactForm">Contact Form</Link></li>
            <li><Link href="/Login">Login</Link></li>
            <li><Link href="/Signup">Signup</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile view for navbar */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4">
          <a className="btn btn-ghost normal-case text-xl">Food Wala</a>
          <button className="btn btn-square btn-ghost" onClick={handleOnClick}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="navbar bg-base-100">
            <ul className="menu menu-vertical p-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ShowProducts">Get your favourite food</Link></li>
              <li><Link href="/">Cart</Link></li>
              <li><Link href="/">Orders</Link></li>
              <li><Link href="/ContactForm">Contact Form</Link></li>
              <li><Link href="/Login">Login</Link></li>
              <li><Link href="/Signup">Signup</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
