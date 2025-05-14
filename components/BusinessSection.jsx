'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ArrowDown } from "lucide-react";
import { Inter } from "next/font/google";

import { useTranslations } from 'next-intl'

const inter = Inter({ subsets: ["latin"], display: "swap" });

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BusinessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

const t = useTranslations('Home');
const featureKeys = ["1", "2", "3"];
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`${inter.className} w-full pt-20 bg-black text-white rounded-[40px] overflow-hidden relative`}
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-0">
          Unlock Your <span className="font-bold">Business</span><br />
          Potential with Nova Tech Vision
        </h2>

        {/* Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 xl:h-[600px]">

          {/* LEFT */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:w-[30%] items-center lg:items-start text-center lg:text-left space-y-6 "
          >
            <p className="text-gray-300 text-base md:text-lg leading-6 max-w-md">
              {t("businessSection.subtitle")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-colors"
            >
              <span>{t("businessSection.scrollDownButton.text")}</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* MIDDLE */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-end lg:w-[50%]"
          >
            <div className="relative w-full flex justify-center items-end">
              {/* Blue Background */}
              <div className="absolute bottom-0 w-[90%] h-[70%] bg-blue-600 rounded-t-[100px] z-0" />

              {/* People Image */}
              <Image
                src="/images/people.png"
                alt="Business Professional"
                width={400}
                height={600}
                className="relative z-10 object-contain w-full h-auto"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:w-[30%] pb-10 lg:pb-0"
            >
            <Image
              src="/Line bussines.svg"
              alt="Timeline Curve"
              width={200}
              height={600}
              className="w-full h-full object-fill -top-14 mb-6"
            />

         

            {featureKeys.map((key, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-base md:text-xl text-white"
              >
                {t(`businessSection.featureTitles.${key}`)}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
            >
              <div className="flex items-center">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300 border-2 border-black overflow-hidden ${
                      index !== 0 ? "-ml-4 md:-ml-8" : ""
                    }`}
                  >
                    <Image
                      src={`/client-${index + 1}.jpg`}
                      alt={`Client ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-white">+1K</span>
                <p className="text-sm text-white">Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dekorasi */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
  );
}
