"use client";
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutPage() {
  useEffect(() => {
    signOut({ callbackUrl: '/' });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-gray-700 text-lg">Cerrando sesión...</p>
    </div>
  );
}