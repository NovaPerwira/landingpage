'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    // { label: "Blog", href: "/blog" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <footer className="bg-black mx-0 md:mx-[5%] md:rounded-t-[5rem] text-white px-6 py-12 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* TOP ROW: Logo, Nav, Sosmed */}
        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <Image
                      src="/full logo kavushion white.svg"
                      alt="Logo"
                      width={200}
                      height={200}
                       className="w-[120px] h-[120px] sm:w-[70px] sm:h-[70px] xl:w-36 xl:h-36"
          />

          {/* Nav Menu with Radio Tabs */}
          <div className="hidden md:flex gap-4 bg-[#1C1C2E] px-3 py-2 rounded-full relative overflow-hidden">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setActiveIndex(idx)}
                className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div
              className="absolute top-0 h-full w-[80px] bg-blue-500 rounded-full transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${activeIndex * 100}px)`,
              }}
            />
          </div>

          {/* Sosmed Icons */}
          <div className="flex gap-4 text-lg">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* MIDDLE ROW: Contact & Subscribe */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-between">

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold">Contact us:</span>
            <ul className="flex-1 text-base space-y-1">
              <li>Email: kavushion@gmail.com</li>
              <li>Phone: 555-567-8901</li>
              {/* <li>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</li> */}
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="flex-1 py-12 bg-[#1C1C2E] rounded-lg p-4 flex flex-col md:flex-row items-end gap-3 md:w-[500px] w-full max-w-xl">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-transparent border text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Subscribe to news</button>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:underline mt-2 md:mt-0">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
