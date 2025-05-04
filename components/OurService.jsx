'use client'

import { motion } from "framer-motion";
import Image from "next/image"; // Pastikan Anda mengimpor Image dari Next.js

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BusinessSection() {
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

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full pb-16 "
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="font-normal text-4xl lg:text-7xl md:text-[3.50rem] md:leading-none lg:text-[80px] xl:text-[96px] leading-tight tracking-[-0.03em] text-black w-full">
            Our Services
          </h2>
          <div className="w-80 h-0.5 bg-black mt-4 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-lg max-w-3xl font-[Lato]">
                {service.description}
              </p>
              <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="transition-transform duration-300 w-full h-[250px] object-cover"
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </motion.section>
  );
}
