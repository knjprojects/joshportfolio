import { create } from "zustand"

export type ThemeName = "forest" | "cloud" | "cosmic"

type ThemeStore = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "cosmic",
  setTheme: (theme) => set({ theme }),
}))