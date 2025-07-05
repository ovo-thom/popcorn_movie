"use client";

import { useRouter } from "next/navigation";

export default function BackLink({ children = "← Retour", className = "" }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`text-blue-600 hover:text-blue-800 underline cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
