"use client";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="bg-pink-500 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Luxe Beauty</h1>
                <div className="space-x-6">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/shop" className="text-white">Shop</Link>
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                    {session ? (
  <button onClick={() => signOut()} className="text-white">Logout</button>
) : (
  <Link href="/auth/login" className="text-white">Login</Link>
)}


                </div>
            </div>
        </nav>
    );
}
