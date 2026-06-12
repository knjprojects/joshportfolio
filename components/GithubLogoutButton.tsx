"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./ui/Toast";

const GitHubLogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleLogout = async () => {
    try {
      setLoading(true);

      await signOut({
        redirect: false,
      });

      showToast("Successfully logged out");

    } catch (err) {
      console.error(err);
      showToast("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="
        relative
        overflow-hidden
        px-3
        py-2
        rounded-lg
        bg-red-500/20
        text-red-300
        hover:bg-red-500/50
        transition
        flex
        items-center
        justify-center
        gap-2
        font-semibold
      "
    >
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear",
          }}
          className="
            w-4
            h-4
            border-2
            border-red-300
            border-t-transparent
            rounded-full
          "
        />
      )}

      <span>
        {loading ? "Logging out..." : "Logout"}
      </span>
    </button>
  );
};

export default GitHubLogoutButton;