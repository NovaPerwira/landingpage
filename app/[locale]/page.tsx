"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialSection from "@/components/testimonial-section"
import FAQSection from "@/components/faq-section"
import BusinessSection from "@/components/BusinessSection"
import Timeline from "@/components/Timeline"
import { useTranslations } from "next-intl"
import Head from "next/head"
import HeroGeometric from "@/components/MainHero"



export default function Home() {
  const t = useTranslations("Home")

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: t("services.landingPage.title"),
      description: t("services.landingPage.description"),
      imageAlt: t("services.landingPage.imageAlt"),
      imageUrl: "/services/image.png",
    },
    {
      title: t("services.companyProfile.title"),
      description: t("services.companyProfile.description"),
      imageAlt: t("services.companyProfile.imageAlt"),
      imageUrl: "/services/image.png",
    },
    {
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      imageAlt: t("services.ecommerce.imageAlt"),
      imageUrl: "/services/image.png",
    },
    {
      title: t("services.realEstate.title"),
      description: t("services.realEstate.description"),
      imageAlt: t("services.realEstate.imageAlt"),
      imageUrl: "/services/image.png",
    },
    {
      title: t("services.school.title"),
      description: t("services.school.description"),
      imageAlt: t("services.school.imageAlt"),
      imageUrl: "/services/image.png",
    },
    {
      title: t("services.other.title"),
      description: t("services.other.description"),
      imageAlt: t("services.other.imageAlt"),
      imageUrl: "/services/image.png",
    },
  ]

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nova Tech Vision",
              url: "https://novatechvision.id",
              sameAs: ["https://instagram.com/novatechvision", "https://linkedin.com/company/novatechvision"],
              logo: "https://novatechvision.id/logo.png",
              description: t("schemaDescription"),
              address: {
                "@type": "PostalAddress",
                areaServed: [
                  { "@type": "Country", name: "Indonesia" },
                  { "@type": "Country", name: "United States" },
                  { "@type": "Country", name: "Singapore" },
                  { "@type": "Country", name: "United Kingdom" },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="flex flex-col bg-[#F2F2F2]">
        

        {/* Hero Section */}
        
        <motion.section
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="w-full h-full relative "
        >
          <HeroGeometric />
          
          
          
        </motion.section>

        {/* Services Section */}
        <motion.section
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="w-full py-16 mt-[0px]"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.div variants={itemVariants} className="flex ">
              <div className="">
                <h2 className="font-normal text-4xl lg:text-7xl md:text-[3.50rem] md:leading-none lg:text-[80px] xl:text-[96px] leading-tight tracking-[-0.03em] text-black w-full">
                {t("services.title")}
              </h2>
              <div className="w-80 h-0.5 bg-black mt-4 mb-12" />
              </div>
              
              
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-lg max-w-3xl font-[Lato]">
                    {service.description}
                  </p>
                  <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
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
        <div className="min-h-screen text-black px-8">
          <Timeline />
        </div>

 {/* FAQ Section */}
        <FAQSection />
        
        {/* Testimonial Section */}
        <TestimonialSection />

       
      </div>
    </>
  )
}
