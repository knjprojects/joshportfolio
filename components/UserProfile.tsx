"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import GoogleSignInButton from "./GoogleSignInButton";
import GitHubLogoutButton from "./GithubLogoutButton";
import GitHubLoginButton from "./GithubLogInButton";
import { motionTheme } from "@/utils/lib/constants/motion";


export default function UserProfile() {
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false);

    if (status === "loading") {
        return <p className="text-white opacity-60">Loading...</p>;
    }

    if (!session) {
        return<GitHubLoginButton/> // keep your github login button here if you want
    }

    return (
        <div className="relative inline-block justify-end">

        {/* 🔥 PROFILE CHIP */}
        <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
        >
            <img
            src={session.user?.image ?? ""}
            className="w-8 h-8 rounded-full"
            />

            <span className="text-sm font-medium">
            {session.user?.name}
            </span>
        </button>

        {/* 🔻 DROPDOWN */}
        <AnimatePresence>
            {open && (
            <motion.div
                initial={motionTheme.dropdown.initial/*{ opacity: 0, scale: 0.9, y: -10 }*/}
                animate={motionTheme.dropdown.animate}
                exit={motionTheme.dropdown.exit}
                transition={motionTheme.dropdown.transition}
                className="absolute right-0 mt-2 w-72 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-white shadow-xl p-4 z-50"
            >
                {/* USER INFO */}
                <div className="flex items-center gap-3">
                <img
                    src={session.user?.image ?? ""}
                    className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col">
                    <p className="font-semibold">
                    {session.user?.name}
                    </p>
                    <p className="text-xs opacity-60">
                    {session.user?.email}
                    </p>
                </div>
                </div>

                <div className="my-3 h-px bg-white/10" />

                {/* META */}
                <p className="text-sm opacity-70">
                GitHub connected account
                </p>

                <p className="text-purple-300 text-sm">
                {(session as any)?.githubUsername || "No username"}
                </p>

                {/* ACTIONS */}
                <div className="mt-4 flex flex-col gap-2">
                <button className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
                    View Profile
                            </button>
                            <Link href={ "/repos"}
                                className="px-3 py-2 rounded-lg bg-black hover:bg-white/20 transition hover:scale-105 hover:animate-pulse hover:text-blue-500 text-white">
                    <p className="text-center">My Repos</p>
                </Link>

                <GitHubLogoutButton/>
                <GoogleSignInButton/>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}