'use client';  // Mark this file as a client component

import { useState } from "react";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            { name: "Product 1", price: 100, quantity: 1 },
            { name: "Product 2", price: 200, quantity: 2 },
          ],
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? "Processing..." : "Checkout"}
      </button>
    </div>
  );
}
