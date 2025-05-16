"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./HoverSection.css"
import { useTranslations } from 'next-intl'

const featuredProject = {
  title: "Real Estate Website",
  image: "/services/image.png",
}

const portfolioItems = [
  {
    id: "1",
    title: "Landing Page",
    image: "/services/image.png",
    hoverImage: "/services/image2.png",
  },
  {
    id: "2",
    title: "E-Commerce",
    image: "/services/image.png",
    hoverImage: "/services/image2.png",
  },
  {
    id: "3",
    title: "School Website",
    image: "/services/image.png",
    hoverImage: "/services/image2.png",
  },
]

export default function PortfolioSection() {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }
const t = useTranslations()
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-20 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            {t("Home.portofolio.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
            {t('Home.portofolio.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-8 py-3 rounded-full text-sm sm:text-base"
          >
            {t('Home.portofolio.explore')}
          </motion.button>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          variants={itemVariants}
          className="relative cursor-none rounded-3xl overflow-hidden mb-16"
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={(e) => {
            const parent = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - parent.left
            const y = e.clientY - parent.top
            if (cursorRef.current && hoveredIndex === -1) {
              cursorRef.current.style.left = `${x}px`
              cursorRef.current.style.top = `${y}px`
            }
          }}
        >
          

          <Image
            src={featuredProject.image}
            alt="Featured Project"
            width={1200}
            height={600}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-all"
          />

          {hoveredIndex === -1 && (
            <div ref={cursorRef} className="custom-cursor-button">
              VIEW <span className="arrow">↓</span>
            </div>
          )}
        </motion.div>

        {/* Portfolio Grid - 1:1 aspect */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, index) => {
            const isHovered = hoveredIndex === index
            const imageSrc = isHovered ? item.hoverImage : item.image

            return (
              <motion.div
                key={item.id}
                className="hover-container cursor-none relative rounded-3xl overflow-hidden aspect-square"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => {
                  const parent = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - parent.left
                  const y = e.clientY - parent.top
                  if (cursorRef.current && isHovered) {
                    cursorRef.current.style.left = `${x}px`
                    cursorRef.current.style.top = `${y}px`
                  }
                }}
              >
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    opacity: isHovered ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={imageSrc}
                    alt={`Portfolio Project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {isHovered && (
                  <div ref={cursorRef} className="custom-cursor-button">
                    VIEW <span className="arrow">↓</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
