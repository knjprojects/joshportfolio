"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"

import GoogleSignInButton from "./FirebaseGoogleSignInButton"
import GitHubLogoutButton from "./GithubLogoutButton"
import GitHubLoginButton from "./GithubLogInButton"
import { motionTheme } from "@/utils/lib/constants/motion"

export default function UserProfile() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)

  if (status === "loading") {
    return <p className="text-white/60 text-sm">Loading...</p>
  }

  // NOT LOGGED IN
  if (!session) {
    return <GitHubLoginButton />
  }

  return (
    <div className="relative">

      {/* PROFILE BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
      >
       <Image
          src={session.user?.image || "https://37assets.37signals.com/svn/765-default-avatar.png"}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
/>
        <span className="text-sm font-medium">
          {session.user?.name || "User"}
        </span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={motionTheme.dropdown.initial}
            animate={motionTheme.dropdown.animate}
            exit={motionTheme.dropdown.exit}
            transition={motionTheme.dropdown.transition}
            className="absolute right-0 mt-2 w-72 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-white shadow-xl p-4 z-50"
          >

            {/* USER INFO */}
            <div className="flex items-center gap-3">
            <Image
              src={session.user?.image || "https://37assets.37signals.com/svn/765-default-avatar.png"}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
              <div className="flex flex-col">
                <p className="font-semibold">
                  {session.user?.name || "User"}
                </p>
                <p className="text-xs text-white/60">
                  {session.user?.email || "No email"}
                </p>
              </div>
            </div>

            <div className="my-3 h-px bg-white/10" />

            {/* META */}
            <p className="text-sm text-white/60">
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

              <Link
                href="/repos"
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-center"
              >
                My Repos
              </Link>

              <GitHubLogoutButton />
              <GoogleSignInButton />

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}