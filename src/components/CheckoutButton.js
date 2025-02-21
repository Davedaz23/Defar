"use client";
import { useState } from "react";

export default function CheckoutButton({ cart }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items: cart }),
    });

    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <button onClick={handleCheckout} className="bg-pink-500 text-white p-3 rounded" disabled={loading}>
      {loading ? "Processing..." : "Checkout"}
    </button>
  );
}
