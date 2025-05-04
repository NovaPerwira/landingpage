'use client'

import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'

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
    { label: 'Blog', href: '/blog' },
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
  }

  return (
    <nav className={`${inter.className} calm relative z-50`}>
      <div className="bg-[#f2f2f2] pt-4 md:pt-6">
        <div className="flex items-center justify-between w-[95%] md:w-[92%] lg:w-[90%] mx-auto rounded-full px-3 md:px-4 lg:px-6 shadow-sm bg-[#0A0D17]
          h-16 sm:h-20 md:h-24 text-white relative transition-all duration-300">

          {/* Logo */}
          <Image
            src="/logo nova tech vision.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-[50px] sm:w-[65px] md:w-[70px]"
          />

          {/* Desktop Nav Tabs */}
          <div className="hidden md:flex relative bg-gray-800 rounded-full p-1">
            <div
              className="absolute top-1 left-1 h-10 rounded-full bg-white transition-transform duration-300 ease-in-out z-0"
              style={{
                width: `${100 / navItems.length}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleTabClick(i, item.href)}
                className={`relative z-10 text-sm px-5 py-2 rounded-full transition-colors duration-300 ${
                  activeIndex === i ? 'text-black' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Order Now */}
          <div className="hidden md:block">
            <Link
              href="/consultation"
              className="bg-[#F2F2F2] text-black text-xs md:text-sm lg:text-base px-4 md:px-3 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-medium hover:bg-[#0A0D17] hover:text-[#0099FF] transition-all duration-200 flex items-center gap-2 max-w-[180px]"
            >
              <Image src="/shopping-cart.svg" alt="Cart" width={18} height={18} />
              <span className="text-center">Order Now</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-[#0A0D17] transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } z-40 flex flex-col items-center pt-28 space-y-6 px-6 md:hidden`}
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-lg sm:text-xl font-medium text-white hover:text-[#0099FF] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/consultation"
          className="bg-[#F2F2F2] text-black text-center px-5 py-3 rounded-full font-medium hover:bg-[#0A0D17] hover:text-[#0099FF] transition flex items-center gap-2 text-base sm:text-lg"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/shopping-cart.svg" alt="Shopping Cart" width={20} height={20} />
          Free Consultation
        </Link>
      </div>
    </nav>
  )
}
