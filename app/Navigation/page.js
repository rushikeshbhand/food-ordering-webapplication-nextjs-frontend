'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/modeSlice';

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  // const darkMode = useSelector((state)=>{state.theme.darkMode})
  const [theme, setTheme] = useState('false');
  const darkMode = true;
  const handleTheme = () => {
    setTheme(true)
  }
  useEffect(() => {

    // this is the way to implement dark mode using tailwind css 
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const token = localStorage.getItem('token');
    if (token) {
      setToken(true)
    }
  }, [token, theme])

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Desktop view for navbar */}
      <div className="navbar hidden lg:flex dark:text-white dark:bg-slate-900">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl"><Image src="/logo.png" width={80} height={80} alt="" /></Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 dark:text-white navbar-headings">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ShowProducts">Get your favourite food</Link></li>
            <li><Link href="/Cart">Cart</Link></li>
            <li><Link href="/Orders">Orders</Link></li>
            <li><Link href="/ContactForm">Contact Us</Link></li>
            <li>
              <Link href="">
                <label onClick={() => { setTheme(!theme) }} className="swap swap-rotate max-w-3 max-h-4">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />

                  {theme ? (
                    <div className='dark:text-white menu menu-horizontal px-1'>
                      Light
                    </div>)
                    :
                    (<div className='dark:text-white menu menu-horizontal px-1'>
                      Dark
                    </div>)
                  }

                </label>
              </Link>
            </li>

            {
              token ? (
                <>
                  <li><button onClick={handleLogout}>Logout</button></li>
                  <li className="relative">
                    <button onClick={toggleDropdown} className="btn btn-ghost">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={32} height={32} alt="Profile" />
                        </div>
                      </div>
                    </button>
                    {isDropdownOpen && (
                      <ul className="menu dropdown-content mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute right-0">
                        <li><Link href="/UserProfile">Profile</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                      </ul>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li><Link href="/Login">Login</Link></li>
                  <li><Link href="/Signup">Signup</Link></li>
                </>
              )
            }
          </ul>
        </div>
      </div>

      {/* Mobile view for navbar */}
      <div className="lg:hidden dark:bg-slate-900">
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="btn btn-ghost normal-case text-xl"><Image src="/logo.png" width={80} height={80} alt="" /></Link>
          <button className="btn btn-square btn-ghost" onClick={handleOnClick}>
            {isOpen ? (
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="bg-base-500">
            <ul className="flex flex-col gap-4 text-center p-2 text-black dark:text-white pb-10">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ShowProducts">Get your favourite food</Link></li>
              <li><Link href="/Cart">Cart</Link></li>
              <li><Link href="/Orders">Orders</Link></li>
              <li><Link href="/ContactForm">Contact Us</Link></li>
              <li>
              <Link href="">
                <label onClick={() => { setTheme(!theme) }} className="swap swap-rotate max-w-3 max-h-4">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />

                  {theme ? (
                    <div className='text-black dark:text-white'>
                      Light
                    </div>)
                    :
                    (<div className='text-black dark:text-white'>
                      Dark
                    </div>)
                  }

                </label>
              </Link>
            </li>
              <li><Link href="/Login">Login</Link></li>
              <li><Link href="/Signup">Signup</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
