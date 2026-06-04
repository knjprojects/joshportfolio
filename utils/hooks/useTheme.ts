import { theme, ThemeName } from "@/utils/lib/constants"
import { useThemeStore } from "@/utils/zustand/theme.store"

export const useTheme = () => {
  const current = useThemeStore((s) => s.theme) as ThemeName
  return theme[current]
}