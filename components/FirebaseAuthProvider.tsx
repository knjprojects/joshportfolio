"use client"

import { useEffect } from "react"
import { initAuthListener } from "@/utils/firebase/authListener"

export default function FirebaseAuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initAuthListener()
  }, [])

  return <>{children}</>
}