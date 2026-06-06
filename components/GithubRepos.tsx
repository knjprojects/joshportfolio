"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useToast } from "@/components/ui/Toast"
import { motion, AnimatePresence } from "framer-motion"

type Repo = {
  id: number
  name: string
  description: string
  language: string
  stars: number
  updatedAt: string
  url: string
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
}

export default function GitHubRepos() {
  const { showToast } = useToast()
  const { data: session }: any = useSession()

  const [repos, setRepos] = useState<Repo[]>([])
  const [openRepoId, setOpenRepoId] = useState<number | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      if (!session?.accessToken) return

      const res = await fetch("/api/github/repos", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })

      const data = await res.json()

      if (!res.ok || data?.message === "Bad credentials") {
        showToast("GitHub authentication failed", "error")
        setRepos([])
        return
      }

      setRepos(data as Repo[])
    }

    fetchRepos()
  }, [session])

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
    >
      {repos.map((repo) => {
        const isOpen = openRepoId === repo.id

        return (
          <motion.div
            key={repo.id}
                variants={{ item }}
            onClick={() =>
              setOpenRepoId(isOpen ? null : repo.id)
            }
            className={clsx(
              "relative p-5 rounded-xl border border-white/10 bg-white/5",
              "cursor-pointer hover:bg-white/10 transition-all"
            )}
          >
            {/* TOP ROW */}
            <div className="flex justify-between items-start">
              <h2 className="text-white font-semibold text-lg">
                {repo.name}
              </h2>

              <div className="text-yellow-400 text-sm font-medium">
                ⭐ {repo.stars}
              </div>
            </div>

            {/* META */}
            <p className="text-xs text-gray-400 mt-1">
              {repo.language || "Unknown"}
            </p>

            {/* DROPDOWN */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 overflow-hidden text-sm text-gray-300"
                >
                  <div className="pt-2 border-t border-white/10">
                    {repo.description || "No description provided"}
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    className="text-blue-400 text-xs mt-2 inline-block hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open Repo →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}