"use client"

import {
  Bell,
  Home,
  Moon,
  Sun,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface HeaderProps {
  unreadNotifCount?: number
  onOpenNotifs?: () => void
}

export function SiteHeader({
  unreadNotifCount = 0,
  onOpenNotifs,
}: HeaderProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const isDarkMode = theme === "dark"

  const handleToggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 min-w-0">

          <SidebarTrigger
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
          />

          <button
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Kembali ke Halaman Utama"
          >
            <Home className="w-3.5 h-3.5 text-emerald-600 dark:text-lime-400" />
            <span>Halaman Utama</span>
          </button>

        </div>

        <div className="flex items-center gap-2 sm:gap-3">

          {/* DARK MODE */}
          <button
            onClick={handleToggleDarkMode}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            title={
              isDarkMode
                ? "Beralih ke Mode Terang"
                : "Beralih ke Mode Gelap"
            }
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* NOTIFICATION */}
          <button
            onClick={onOpenNotifs}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl relative transition-colors"
            title="Lihat Notifikasi"
            aria-label="Lihat Notifikasi"
          >
            <Bell className="w-4 h-4" />

            {unreadNotifCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
            )}
          </button>

        </div>
      </div>
    </header>
  )
}