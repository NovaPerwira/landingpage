'use client'

import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import LanguageSwitcher from './language-switcher'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    // { label: 'Blog', href: '/blog' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const current = navItems.findIndex(item => item.href === pathname)
    if (current !== -1) setActiveIndex(current)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleTabClick = (index, path) => {
    setActiveIndex(index)
    router.push(path)
    setIsOpen(false)
  }

  return (
    <nav className={`${inter.className} relative z-50`}>
      <div className="bg-[#f2f2f2] pt-4 md:pt-6">
        <div className="flex items-center justify-between w-[95%] md:w-[92%] lg:w-[90%] mx-auto h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Image
            src="/full logo kavushion.svg"
            alt="Logo"
            width={200}
            height={200}
             className="w-[120px] h-[120px] sm:w-[70px] sm:h-[70px] xl:w-36 xl:h-36"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative bg-[#0A0D17] rounded-full px-1 py-1">
              <div
                className="absolute top-1 left-1 bottom-1 rounded-full bg-white transition-transform duration-300 ease-in-out z-0"
                style={{
                  width: `${100 / navItems.length}%`,
                  transform: `translateX(${activeIndex * 100}%)`,
                }}
              />
              <div className="flex relative z-10">
                {navItems.map((item, i) => (
                  <button
                    key={item.href}
                    onClick={() => handleTabClick(i, item.href)}
                    className={`text-sm px-5 py-2 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      activeIndex === i ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA + Lang Switch + Burger */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Link
              href="/consultation"
              className="bg-[#0A0D17] text-white text-xs md:text-sm lg:text-base px-4 md:px-5 py-2 md:py-2.5 rounded-full font-medium hover:bg-white hover:text-[#0A0D17] border border-transparent hover:border-[#0A0D17] transition-all duration-200 flex items-center gap-2"
            >
              <Image src="/shopping-cart.svg" alt="Cart" width={18} height={18} />
              <span>Order Now</span>
            </Link>
            {/* Mobile burger */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay (auto height + transparent) */}
      <div
        className={`absolute left-0 right-0 top-[100%] mx-auto w-full max-w-md rounded-b-xl bg-[#0A0D17]/90 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden md:hidden ${
          isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-5 px-6">
          {navItems.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => handleTabClick(i, href)}
              className="text-base font-medium text-white hover:text-[#0099FF] transition-all duration-300"
            >
              {label}
            </button>
          ))}
          <Link
            href="/consultation"
            className="bg-[#F2F2F2] text-black text-center px-5 py-3 rounded-full font-medium hover:bg-[#0A0D17] hover:text-[#0099FF] transition flex items-center gap-2 text-base"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/shopping-cart.svg" alt="Shopping Cart" width={20} height={20} />
            Free Consultation
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
