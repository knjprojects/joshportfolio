// utils/themeStore.ts
import { create } from "zustand"

export type ThemeName = "forest" | "cloud" | "cosmic"

    type ThemeStore = {
    theme: ThemeName
    setTheme: (t: ThemeName) => void
    }

    export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "forest",
    setTheme: (t) => set({ theme: t }),
}))