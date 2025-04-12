"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const portfolioItems = [
  {
    id: "tab1",
    title: "Tab 1",
    image: "/services/image.png",
  },
  {
    id: "tab2",
    title: "Tab 2",
    image: "/services/image.png",
  },
  {
    id: "tab3",
    title: "Tab 3",
    image: "/services/image.png",
  },
  {
    id: "tab4",
    title: "Tab 4",
    image: "/services/image.png",
  },
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-20 bg-gray-50"
    >
      <div className="container mx-[5%] px-4 w-full">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-5xl font-normal mb-4">Website Design Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our portfolio of custom website design projects built for businesses,
            schools, and online stores. Each site is responsive, SEO-optimized, and tailored
            to our clients' goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-8 py-3 rounded-full"
          >
            Explore
          </motion.button>
        </motion.div>

        {/* Main Portfolio Display */}
        <div className="space-y-8">
          {/* Featured Project */}
          <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden">
            {/* Navigation Tabs */}
            <div className="absolute top-6 left-6 z-10 flex space-x-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
              {['Title 1', 'Title 2', 'Title 3', 'Title 4'].map((title, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              ))}
            </div>
            <Image
              src="/services/image.png" // Update with your image path
              alt="Featured Project"
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden">
              <Image
                src="/services/image.png" // Update with your image path
                alt="Portfolio Project 1"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden">
              <Image
                src="/services/image.png" // Update with your image path
                alt="Portfolio Project 2"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden">
              <Image
                src="/services/image.png" // Update with your image path
                alt="Portfolio Project 3"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
