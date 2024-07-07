// components/Navigation.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenAndUser, clearTokenAndUser } from '../redux/authSlice';

// react icons
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark'; // default theme
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            dispatch(setTokenAndUser({ token: storedToken, user: JSON.parse(localStorage.getItem('user')) }));
        }

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme, dispatch]);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(clearTokenAndUser());
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div>
            {/* Desktop view for navbar */}
            <div className="navbar hidden lg:flex dark:text-white dark:bg-slate-900">
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <Image src="/logo.png" width={80} height={80} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 dark:text-white navbar-headings">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/ShowProducts">Get your favourite food</Link></li>
                        {
                            (token) ? (<>
                                <li><Link href="/Cart">Cart</Link></li>
                                {/* <li><Link href="/Orders">Orders</Link></li> */}
                            </>) :
                                (<>
                                    {null}
                                </>)
                        }


                        <li><Link href="/ContactForm">Contact Us</Link></li>
                        <li>
                            <button onClick={toggleTheme}>
                                {theme === 'dark' ? (
                                    <IoIosSunny className='text-white text-xl transition ease-out duration-1000' />
                                ) : (
                                    <IoMdMoon className='text-xl transition ease-out duration-1000' />
                                )}
                            </button>
                        </li>
                        {token ? (
                            <>
                                <li><button onClick={handleLogout}>Logout</button></li>
                                <li className="relative">
                                    <button className="btn btn-ghost">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full">
                                                <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={32} height={32} alt="Profile" />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link href="/Login">Login</Link></li>
                                <li><Link href="/Signup">Signup</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            {/* Mobile view for navbar */}
            <div className="lg:hidden dark:bg-slate-900">
                <div className="flex justify-between items-center p-4">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <Image src="/logo.png" width={80} height={80} alt="Logo" />
                    </Link>
                    <div className='flex gap-4'>
                        <div className="flex items-center">
                            {token ? (
                                theme === 'dark' ? (
                                    <FaCartArrowDown  className='text-white text-3xl'/>
                                ) : (
                                    <Link className="text-3xl" href="/Cart">
                                        <FaCartArrowDown />
                                    </Link>
                                )
                            ) : null}
                        </div>

                        <button onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <IoIosSunny className='text-white text-3xl transition ease-out duration-1000' />
                            ) : (
                                <IoMdMoon className='text-3xl transition ease-out duration-1000' />
                            )}
                        </button>
                        <button className="btn btn-square btn-ghost" onClick={handleOnClick}>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full dark:bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full dark:bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="bg-base-500">
                        <ul className="flex flex-col gap-4 text-center p-2 text-black dark:text-white pb-10">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/ShowProducts">Get your favourite food</Link></li>
                            <li><Link href="/ContactForm">Contact Us</Link></li>
                            {token ? (
                                <>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                    <li className="relative">
                                        <button className="btn btn-ghost">
                                            <div className="avatar">
                                                <div className="w-8 rounded-full">
                                                    <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={32} height={32} alt="Profile" />
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link href="/Login">Login</Link></li>
                                    <li><Link href="/Signup">Signup</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
