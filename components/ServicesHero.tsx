"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { ArrowDown } from "lucide-react"


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesHero({
    
  badge = "Kokonut UI",
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }
 const t = useTranslations("Home")

  return (
    <div className="relative rounded-[3%] xs:rounded-none min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1b1b1b]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.5}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.7}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.9}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 gap-6 pt-12 justify-center mx-auto max-w-7xl sm:pt-16 my-36 py-20 items-center relative z-10">
    {/* Left Content */}
    <div className="mt-12vh xs:mt-0">
      <h1 className="font-bold text-4xl md:text-[3.50rem] md:leading-none lg:text-[80px] xl:text-[96px] leading-tight tracking-[-0.03em] text-white w-full">
        {t("hero.title")}
        <br />
        <span className="inline-block">{t("hero.subtitle")}</span>
      </h1>
      <p className="mt-6 font-[Lato] text-white/70 text-xs xs:text-sm md:text-lg max-w-3xl">
        {t("hero.description")}
      </p>
    </div>

    {/* Right Content */}
    <div className="flex flex-col items-start xs:mt-0 space-y-4 lg:mt-28 md:ml-[-20px] w-full md:w-auto">
      <motion.button
        className="bg-white flex border items-center p-2 sm:p-4 md:p-5 font-light text-xs md:text-sm lg:text-base border-gray-300 shadow-md rounded-full hover:bg-gray-100 transition self-start"
        whileHover={{ scale: 1.05 }}
      >
        {t("hero.scrollDown")}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
        </motion.div>
      </motion.button>

      <div className="pt-6 xs:pt-0">
        <p className="text-base md:text-lg lg:text-xl font-semibold text-white">{t("hero.contactTitle")}</p>
        <p className="text-sm md:text-base lg:text-lg text-white/80">kavushion@gmail.com</p>
      </div>
    </div>
  </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
