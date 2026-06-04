import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./auth"
import { useAuthStore } from "@/utils/zustand/authStore"

export const initAuthListener = () => {
  onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user)
    useAuthStore.getState().setLoading(false)
  })
}