'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation"; 

export default function Navbar() {
    const path=usePathname();
    return (
       <nav>
        <ul>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="link-container">
                <Link className="link" href='/'>Home</Link>
                <Link className="link" href='/about'>About</Link>
                <Link className="link" href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
       </nav>
    );
}


