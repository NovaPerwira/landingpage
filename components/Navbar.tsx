'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion";
import GooeyNav from "./GooeyNav";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`${inter.className} calm`}>
  <div className="bg-[#f2f2f2] pt-5 md:pt-7">
    <div className="text-white text-lg flex items-center h-20 font-medium justify-between w-[84%] mx-auto bg-[#0A0D17] rounded-full px-2 shadow-sm">
      
      {/* Ganti list manual dengan GooeyNav */}
      <div className="hidden md:flex ml-8">
        <GooeyNav items={navItems}
        particleDistances={[100, 15]} // Nilai default [90, 10] - angka pertama untuk radius luar, kedua untuk radius dalam
        particleR={310} // Nilai default 100 - mengatur seberapa jauh particle berputar
        particleCount={20} 
         />
      </div>

      {/* Logo */}
      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="./logo nova tech vision.svg" alt="Logo" width={100} height={100} />
      </Link>

      {/* Right Button */}
      <div className="hidden md:block">
        <Link
          href="/consultation"
          className="bg-[#F2F2F2] text-black text-xl mr-0  px-12 py-5 rounded-full font-medium hover:bg-[#0A0D17] hover:text-[#0099FF] transition-colors duration-200 flex items-center gap-2"
        >
          <Image src="./shopping-cart.svg" alt="Shopping Cart" width={20} height={20} className="w-5 h-5" />
          Free Consultation
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white hover:text-[#0099FF] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>

  {/* Mobile Menu tetap pakai list manual */}
  {isOpen && (
    <div className="md:hidden mt-4 space-y-2 bg-[#0A0D17] rounded-lg p-4 shadow-sm">
      <Link href="/" className="block text-white hover:text-[#0099FF] transition-colors duration-200">Home</Link>
      <Link href="/portfolio" className="block text-white hover:text-[#0099FF] transition-colors duration-200">Portfolio</Link>
      <Link href="/services" className="block text-white hover:text-[#0099FF] transition-colors duration-200">Services</Link>
      <Link href="/blog" className="block text-white hover:text-[#0099FF] transition-colors duration-200">Blog</Link>
      <Link
        href="/consultation"
        className="block bg-[#F2F2F2] text-black text-center px-4 py-2 rounded-full font-medium mt-2 hover:bg-[#0A0D17] hover:text-[#0099FF] transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <Image src="./shopping-cart.svg" alt="Shopping Cart" width={20} height={20} className="w-5 h-5" />
        Free Consultation
      </Link>
    </div>
  )}
</nav>


  )
}
