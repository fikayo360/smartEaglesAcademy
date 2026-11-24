import { Moon, Sun } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`size-4 transition-opacity ${isDark ? "opacity-40" : "opacity-100"}`}
        aria-hidden="true"
      />
      <Switch
       className="size-4 border-4"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon
        className={`size-4 transition-opacity ${isDark ? "opacity-100" : "opacity-40"}`}
        aria-hidden="true"
      />
    </div>
  )
}