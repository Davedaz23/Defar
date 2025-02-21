'use client';
import { useSession } from "next-auth/react";

export default function AdminPanel() {
  const { data: session } = useSession();

  if (!session || session.user.role !== "admin") {
    return <p className="text-red-500 text-center">Access Denied</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Manage products and orders</p>
    </div>
  );
}
 