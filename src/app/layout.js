
"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import "./globals.css";





export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
        <Navbar />
          {children}</body>
      </html>
    </SessionProvider>
  );
}
