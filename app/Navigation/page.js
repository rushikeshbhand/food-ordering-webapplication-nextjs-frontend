import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../Login">Login</Link></li>
                        <li><Link href="../Signup">Signup</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
