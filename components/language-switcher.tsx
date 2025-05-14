"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useState, useEffect, useRef } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const languages = [
    { code: "en", name: "EN", fullName: "English" },
    { code: "id", name: "ID", fullName: "Indonesia" },
    { code: "jp", name: "JP", fullName: "日本語" },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageChange = (newLocale) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, "")

    // Construct the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`

    router.push(newPath)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-3 py-2 transition-all duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex items-center w-full px-4 py-2 text-sm ${
                    locale === language.code ? "bg-gray-700 text-white" : "text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-2 font-bold">{language.name}</span>
                  <span className="text-xs text-gray-400">{language.fullName}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
