'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";


const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const [heroInView, setHeroInView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) setHeroInView(true);
  }, [inView]);

  return (
    
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
      className="w-full  relative overflow-hidden py-20 px-4 md:px-16"
    >
      {/* Floating Left Element */}
      

      {/* Floating Right Element */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 top-[-120px] xs:top-[-150px] lg:top-[-220px] w-[250px] xs:w-[400px] opacity-85"
      >
        <Image src="/novatechv-elemen2.svg" alt="Element" width={500} height={500} />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Design products<br />Deliver experience
          </h1>
          <p className="text-gray-700 mb-6 max-w-md border-l-4 border-black pl-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition text-sm md:text-base">
            Get started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/HeroService.png  " // Ganti jika perlu
            alt="Service Preview"
            width={500}
            height={500}
            className="object-contain max-h-[400px] w-auto"
            priority
          />
        </div>
      </div>
     
    </motion.section>
  );
}
