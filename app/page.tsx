"use client"

import Head from 'next/head';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialSection from "@/components/testimonial-section"
import FAQSection from "@/components/faq-section"
import { ArrowDown, ArrowLeft, ArrowRight, Star } from "lucide-react";
import BusinessSection from "@/components/BusinessSection"
import Timeline from "@/components/Timeline"
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import Threads from "@/components/threads"
// import Navbar from "@/components/Navbar"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Landing Page",
      description:
        "A dedicated web page built for digital campaigns, designed to boost conversions and improve SEO visibility.",
      imageAlt: "Landing Page Service",
      imageUrl: "/services/image.png",
    },
    {
      title: "Company Profile",
      description:
        "A business profile website to strengthen branding, build trust, and rank well on Google and search engines.",
      imageAlt: "Company Profile Service",
      imageUrl: "/services/image.png",
    },
    {
      title: "E-Commerce Website",
      description:
        "Create a complete online store with integrated payment and SEO structure to improve search engine rankings.",
      imageAlt: "E-Commerce Service",
      imageUrl: "/services/image.png",
    },
    {
      title: "Real Estate Website",
      description:
        "Attractive property websites with smart listings and SEO features to reach potential buyers more effectively.",
      imageAlt: "Real Estate Service",
      imageUrl: "/services/image.png",
    },
    {
      title: "School Website",
      description:
        "An all-in-one solution for schools to share announcements, news, and educational info with great SEO support.",
      imageAlt: "School Website Service",
      imageUrl: "/services/image.png",
    },
    {
      title: "Other Services",
      description:
        "Explore more web development services tailored to your brand and optimized to perform well on search engines.",
      imageAlt: "Other Services",
      imageUrl: "/services/image.png",
    },
  ];
  

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
  <>
    <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Nova Tech Vision",
            "url": "https://novatechvision.id",
            "sameAs": [
              "https://instagram.com/novatechvision",
              "https://linkedin.com/company/novatechvision"
            ],
            "logo": "https://novatechvision.id/logo.png",
            "description": "Jasa pembuatan website modern dan SEO-ready untuk bisnis skala kecil hingga besar.",
            "address": {
              "@type": "PostalAddress",
              "areaServed": [
                { "@type": "Country", "name": "Indonesia" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "United Kingdom" }
              ]
            }
          })
        }} />
      </Head>
      


    <div className={`${inter.className} flex flex-col  bg-[#F2F2F2] `}>
     
    
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="w-full relative overflow-hidden"
      >
        {/* Left Floating Element */}
        <motion.div
          animate={{ y: [-20, 0, -20], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-20px] opacity-85 top-[-150px] 
            xs:top-[-120px] lg:top-[-250px] 
            w-[300px] xs:w-[400px]  lg:w-[600px]"
        >
          <Image 
            src="/novatechv-elemen.svg" 
            alt="Novatech Element" 
            width={600} 
            height={600} 
          />
        </motion.div>

        {/* Right Floating Element */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-0 opacity-85 top-[-120px] 
            xs:top-[-150px]  lg:top-[-220px] 
             xs:block w-[250px] xs:w-[400px]"
        >
          <Image 
            src="/novatechv-elemen2.svg" 
            alt="Novatech Element" 
            width={500} 
            height={500} 
          />
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row px-4 sm:px-6  gap-6 pt-12 justify-center mx-auto max-w-7xl sm:pt-16 mt-36 py-20 items-center relative z-10">


          {/* Left Content */}
          <div className="mt-12vh xs:mt-0">
            <h1 className="font-bold text-4xl md:text-[3.50rem] md:leading-none lg:text-[80px] xl:text-[96px] leading-tight tracking-[-0.03em] text-black w-full">
              Professional Web<br />
              <span className="inline-block">Creative Agency</span>
            </h1>
            <p className="mt-6 font-[Lato] text-gray-700 text-xs xs:text-sm md:text-lg max-w-3xl">
              Nova Tech Vision delivers cutting-edge, full-stack web development services, from design to hosting, tailored to your business needs. We build scalable, high-performance websites that drive growth and create lasting impact.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start xs:mt-0 space-y-4 lg:mt-28 md:ml-[-20px] w-full md:w-auto">
            <motion.button 
              className="bg-white flex border items-center p-2  sm:p-4 md:p-5 font-light text-xs md:text-sm lg:text-base border-gray-300 shadow-md rounded-full hover:bg-gray-100 transition self-start"
              whileHover={{ scale: 1.05 }}
            >
              SCROLL DOWN 
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
              </motion.div>
            </motion.button>

            <div className="pt-6 xs:pt-0">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-black">Let's Talk</p>
              <p className="text-sm md:text-base lg:text-lg text-gray-800">kavushion@gmail.com</p>
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
        className="w-full pb-16 mt-[-300px]"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-normal text-4xl lg:text-7xl md:text-[3.50rem] md:leading-none lg:text-[80px] xl:text-[96px] leading-tight tracking-[-0.03em] text-black w-full">Our Services</h2>
            <div className="w-80 h-0.5 bg-black mt-4 mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-lg max-w-3xl font-[Lato]">{service.description}</p>
                <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className="transition-transform duration-300 hover:scale-105 w-full h-[250px] object-cover "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <PortfolioSection />
      
     
      {/* Business Potential Section */}
      <BusinessSection />

      {/* Process Section */}
      <div className="min-h-screen  text-black px-8">
       <Timeline />
      </div>z

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>

  </>
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
