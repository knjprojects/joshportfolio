"use client"

import { useThemeStore } from "@/utils/zustand/theme.store"

export default function ThemeSwitcher() {
  const setTheme = useThemeStore((s) => s.setTheme)

  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme("forest")}>
        Forest
      </button>

      <button onClick={() => setTheme("cloud")}>
        Cloud
      </button>

      <button onClick={() => setTheme("cosmic")}>
        Cosmic
      </button>
    </div>
  )
}