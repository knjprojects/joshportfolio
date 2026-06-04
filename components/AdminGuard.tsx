"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/utils/zustand/authStore"

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode
}) {
    const router = useRouter()

    const { user, loading } = useAuthStore()

    useEffect(() => {
        if (!loading && !user) {
        router.push("/")
        }
    }, [user, loading, router])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return null
    }

    return <>{children}</>
}