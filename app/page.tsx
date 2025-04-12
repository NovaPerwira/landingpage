"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialSection from "@/components/testimonial-section"
import FAQSection from "@/components/faq-section"
import { ArrowDown, ArrowLeft, ArrowRight, Star } from "lucide-react";

import Threads from "@/components/threads"
// import Navbar from "@/components/Navbar"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [businessRef, businessInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col font-[Inter] bg-[#F2F2F2] min-h-screen">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="w-full relative overflow-hidden"
      >
        <motion.div
          animate={{ 
            y: [-20, 0, -20],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-150px] left-[-20px]"
        >
          <Image 
            src="/novatechv-elemen.svg" 
            alt="Novatech Element" 
            width={600} 
            height={600} 
            className="opacity-100"
          />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [5, -5, 5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-[-120px] right-0"
        >
          <Image 
            src="/novatechv-elemen2.svg" 
            alt="Novatech Element" 
            width={500} 
            height={500} 
            className="opacity-100"
          />
        </motion.div>

        <div className="flex justify-start pt-12 md:pt-16 mt-36 px-[8%] py-20 items-center relative z-10">
          {/* Kiri */}
          <div className="mt-12vh">
            <h1 className="font-[Inter] font-bold text-[128px] leading-[116px] tracking-[-0.01em] text-black w-full">
            Professional Web  <br />
              <span className="inline-block">Design Services</span>
            </h1>
            <p className="mt-6 font-[Lato] text-gray-700 text-lg max-w-2xl">
              Get a responsive, high-performance business website with modern UI/UX design. We offer expert website development services tailored to your brand. Affordable, fast, and SEO-ready.
            </p>
          </div>

          {/* Kanan */}
          <div className="flex flex-col justify-center items-start space-y-4 mt-28 ml-[-120px]">
          <motion.button 
            className="bg-white font-[Inter] flex border items-center text-xl border-gray-300 shadow-md rounded-full p-8 font-medium hover:bg-gray-100 transition self-start"
            whileHover={{ scale: 1.05 }}
          >
            SCROLL DOWN 
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="ml-2 h-5 w-5" />
            </motion.div>
          </motion.button>

            <div className="pt-6">
              <p className="text-2xl font-semibold text-black">Let's Talk</p>
              <p className="text-xl text-gray-800">novatechvision.id@gmail.com</p>
            </div>
          </div>
        </div>
        

        <div style={{ width: 'full', top: '-250px', height: '600px', marginLeft: '-200vh', marginBottom: '-100px', position: 'relative' }}>
          <Threads
            
            enableMouseInteraction={false}
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        variants={containerVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        className="w-full py-16 mt-[-100px] bg-white"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-8xl font-normal tracking-tighter">Our Services</h2>
            <div className="w-80 h-0.5 bg-black mt-4 mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Landing Page */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">Landing Page</h3>
              <p className="text-gray-600 text-sm">
                A dedicated web page built for digital campaigns, designed to boost conversions and improve SEO visibility.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/services/image.png"
                  alt="Landing Page Service"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Company Profile */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">Company Profile</h3>
              <p className="text-gray-600 text-sm">
                A business profile website to strengthen branding, build trust, and rank well on Google and search engines.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/services/image.png"
                  alt="Company Profile Service"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* E-Commerce Website */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">E-Commerce Website</h3>
              <p className="text-gray-600 text-sm">
                Create a complete online store with integrated payment and SEO structure to improve search engine rankings.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/services/image.png"
                  alt="E-Commerce Service"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Real Estate Website */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">Real Estate Website</h3>
              <p className="text-gray-600 text-sm">
                Attractive property websites with smart listings and SEO features to reach potential buyers more effectively.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/services/image.png"
                  alt="Real Estate Service"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* School Website */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">School Website</h3>
              <p className="text-gray-600 text-sm">
                An all-in-one solution for schools to share announcements, news, and educational info with great SEO support.
              </p>
              <div className="rounded-2xl overflow-hidden">
                  <Image
                  src="/services/image.png"
                  alt="School Website Service"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
            </motion.div>

            {/* Other Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">Other Services</h3>
              <p className="text-gray-600 text-sm">
                Explore more web development services tailored to your brand and optimized to perform well on search engines.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/services/image.png"
                  alt="Other Services"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
                </div>
              </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Business Potential Section */}
      <motion.section
        ref={businessRef}
        variants={containerVariants}
        initial="hidden"
        animate={businessInView ? "visible" : "hidden"}
        className="w-full py-16 bg-black text-white rounded-[40px] overflow-hidden"
      >
        <div className="container px-8 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <h2 className="text-5xl font-light leading-tight">
                Unlock Your <span className="font-normal">Business</span>
                <br />Potential with Nova Tech Vision
              </h2>
              
              <p className="text-gray-300 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cursus imperdiet sed id elementum. Quam vel aliquam
                sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cursus imperdiet sed id elementum.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-white rounded-full px-8 py-4 flex items-center space-x-2 hover:bg-white hover:text-black transition-colors"
              >
                <span>SCROLL DOWN</span>
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Center Image */}
            <motion.div variants={itemVariants} className="lg:col-span-4 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[40px] opacity-80" />
              <Image
                src="/business-person.jpg/services/image.png" // Update with your image path
                alt="Business Professional"
                width={500}
                height={600}
                className="relative z-10 rounded-[40px]"
              />
            </motion.div>

            {/* Right Content with Timeline */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-4 space-y-12 relative"
            >
              {/* Timeline curve image */}
              <Image
                src="/timeline-curve.svg" // Pastikan file SVG garis ada di folder public
                alt="Timeline Curve"
                width={200}
                height={600}
                className="absolute right-0 top-0 h-full w-auto z-0"
              />

              {/* Timeline Items with dots */}
              <div className="relative flex flex-col space-y-16 z-10">
                {[
                  { text: "Fast, Easy Icon Application", delay: 0 },
                  { text: "Fast, Easy Icon Application", delay: 0.2 },
                  { text: "Fast, Easy Icon Application", delay: 0.4 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    className="flex items-center"
                  >
                    {/* Blue dot */}
                    <div className="w-5 h-5 rounded-full bg-blue-500 z-20" />
                    {/* Text content */}
                    <div className="ml-12">
                      <p className="text-sm text-white">{item.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Client Count at the bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 flex items-center space-x-4"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden"
                      >
                        <Image
                          src={`/client-${index + 1}.jpg`}
                          alt={`Client ${index + 1}`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-bold">+1K</span>
                    <p className="text-sm">Clients</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Element */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0"
        >
          <Image
            src="/novatechv-elemen.svg"
            alt="Background Pattern"
            width={300}
            height={300}
            className="opacity-10"
          />
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        variants={containerVariants}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        className="w-full py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-normal mb-4">Effortless Process</h2>
            <h3 className="text-4xl font-normal">Continous Supply</h3>
          </motion.div>

          {/* Timeline Process */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-black" />

            {/* Process Steps */}
            {[
              {
                title: "Consultation & Planning",
                description: "We discuss your goals, needs, and vision to create a tailored strategy for your website.We discuss your goals, needs, and vision to create a tailored strategy for your website."
              },
              {
                title: "Design & Prototyping",
                description: "We discuss your goals, needs, and vision to create a tailored strategy for your website.We discuss your goals, needs, and vision to create a tailored strategy for your website."
              },
              {
                title: "Development & Implementation",
                description: "We discuss your goals, needs, and vision to create a tailored strategy for your website.We discuss your goals, needs, and vision to create a tailored strategy for your website."
              },
              {
                title: "Testing & Optimization",
                description: "We discuss your goals, needs, and vision to create a tailored strategy for your website.We discuss your goals, needs, and vision to create a tailored strategy for your website."
              },
              {
                title: "Launch & Support",
                description: "We discuss your goals, needs, and vision to create a tailored strategy for your website.We discuss your goals, needs, and vision to create a tailored strategy for your website."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="flex mb-16 last:mb-0"
              >
                {/* Dot */}
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 mr-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}

const services = [
  {
    title: "Landing Page",
    description: "High-converting landing pages designed to capture leads and drive conversions.",
    image: "/images/service1.jpg",
  },
  {
    title: "Company Profile",
    description: "Professional company profiles that showcase your brand identity and values.",
    image: "/images/service2.jpg",
  },
  {
    title: "E-Commerce Website",
    description: "Fully-functional online stores with secure payment gateways and inventory management.",
    image: "/images/service3.jpg",
  },
  {
    title: "Real Estate Website",
    description: "Property listing websites with advanced search and filtering capabilities.",
    image: "/images/service4.jpg",
  },
  {
    title: "School Website",
    description: "Educational websites with student portals, course management, and online resources.",
    image: "/images/service5.jpg",
  },
  {
    title: "Other Services",
    description: "Custom web solutions tailored to your specific business needs and requirements.",
    image: "/images/service6.jpg",
  },
]

const processSteps = [
  {
    title: "Consultation & Planning",
    description:
      "We begin by understanding your business goals, target audience, and requirements. This initial phase helps us create a strategic plan for your website.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and visual mockups of your website, focusing on user experience, brand consistency, and modern design principles.",
  },
  {
    title: "Development & Implementation",
    description:
      "Our development team brings the designs to life, coding a responsive, fast-loading website with all the functionality you need.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test your website across devices and browsers, optimizing for performance, SEO, and user experience.",
  },
  {
    title: "Launch & Support",
    description:
      "After final approval, we launch your website and provide ongoing support and maintenance to ensure it continues to perform optimally.",
  },
]
