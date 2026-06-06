"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebase/auth"
import { useState } from "react";

const GoogleSignInButton = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      console.log(result.user);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="
        w-full
        p-3
        rounded-lg
        font-medium
        transition-all
        duration-200
        hover:scale-[1.02]
        hover:shadow-lg
        active:scale-[0.98]
        disabled:opacity-60
      "
    >
      {loading
        ? "Signing In..."
        : "Continue with Google"}
    </button>
  );
};

export default GoogleSignInButton;