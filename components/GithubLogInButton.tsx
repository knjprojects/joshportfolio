"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "./ui/Toast";
const GitHubLoginButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const handleLogin = async () => {
    try {
      setLoading(true);

      const result = await signIn("github", {
        redirect: false, // 🔥 important (prevents auto redirect)
      });

      // 🔥 check success
      if (result?.ok) {
        router.push("/repos"); // or /profile
      } else {

        //console.error("Login failed:", result);
        showToast("Login failed. Try again")

      }

    } catch (err:any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? "Signing in..." : "GitHub Login"}
    </button>
  );
};

export default GitHubLoginButton;