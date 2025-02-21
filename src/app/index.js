import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-pink-500 p-4 text-white text-center text-2xl font-bold">
        Glamour Cosmetics
      </header>

      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to Glamour Cosmetics</h1>
        <p className="text-center text-gray-600 mt-2">
          Discover the best beauty products for your skin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <div key={product} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Product"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">Product Name</h2>
              <p className="text-gray-600">$20.00</p>
              <Link
                href="/product/1"
                className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
