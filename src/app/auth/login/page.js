"use client"; // ✅ Required for client-side hooks

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", { email, password, redirect: false });
    if (result?.error) alert("Invalid login");
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" }); // Redirects after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white shadow-md rounded-lg w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email & Password Login */}
        <input
          className="w-full p-2 mb-3 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 mb-3 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        {/* Google Login Button */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="w-full bg-red-500 text-white p-2 rounded flex items-center justify-center"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.35 11.1h-9.4v2.88h5.42c-.56 2.74-2.94 4.58-5.42 4.58-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 3.1.6 4.2 1.6l2.2-2.2c-1.7-1.6-4.1-2.6-6.4-2.6C6.92 3.88 3 7.8 3 12s3.92 8.12 8.12 8.12c4.16 0 7.88-3 7.88-8 0-.5-.1-1.1-.15-1.6z"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
