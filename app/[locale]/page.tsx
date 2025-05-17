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
import { useLocale } from 'next-intl';


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
      imageUrl: "/portofolio/landingpage.webp",
    },
    {
      title: t("services.companyProfile.title"),
      description: t("services.companyProfile.description"),
      imageAlt: t("services.companyProfile.imageAlt"),
      imageUrl: "/portofolio/companyprofile.webp",
    },
    {
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      imageAlt: t("services.ecommerce.imageAlt"),
      imageUrl: "/portofolio/ecommerce.webp",
    },
    {
      title: t("services.realEstate.title"),
      description: t("services.realEstate.description"),
      imageAlt: t("services.realEstate.imageAlt"),
      imageUrl: "/portofolio/real estate.webp",
    },
    {
      title: t("services.school.title"),
      description: t("services.school.description"),
      imageAlt: t("services.school.imageAlt"),
      imageUrl: "/portofolio/school.webp",
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

  const locale = useLocale();

  const data = {
    en: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kavushion",
      "url": "https://www.kavushion.com",
      "description": "Kavushion is a web development agency offering creative, SEO-optimized websites for businesses and startups.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Kavushion",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kavushion.com/logo.png"
        }
      }
    },
    id: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kavushion",
      "url": "https://www.kavushion.com/id",
      "description": "Kavushion adalah agensi pengembangan web yang menawarkan situs kreatif dan SEO-friendly untuk bisnis dan startup.",
      "inLanguage": "id",
      "publisher": {
        "@type": "Organization",
        "name": "Kavushion",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kavushion.com/logo.png"
        }
      }
    },
    jp: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kavushion",
      "url": "https://www.kavushion.com/jp",
      "description": "Kavushionは、ビジネスやスタートアップ向けにSEO最適化されたウェブサイトを提供する開発エージェンシーです。",
      "inLanguage": "ja",
      "publisher": {
        "@type": "Organization",
        "name": "Kavushion",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kavushion.com/logo.png"
        }
      }
    }
  };

  return (
    <>
      <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data[locale as 'en' | 'id' | 'jp']),
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
                  <div className="aspect-w-4 h-[250px] overflow-y-scroll aspect-h-3 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={service.imageAlt}
                      width={400}
                      height={600}
                      className="transition-transform  duration-300 hover:scale-105 w-full h-[250px] object-cover "
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

 
        
        {/* Testimonial Section */}
        <TestimonialSection />
{/* FAQ Section */}
        <FAQSection />
       
      </div>
    </>
  )
}
