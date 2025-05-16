"use client"

import { useTranslation } from "next-i18next"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function LatestProjects() {
  const t  = useTranslations("")
  const projects = t("portofolio.latest.projects", { returnObjects: true })
if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-16 w-full md:px-12 lg:px-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {t("portofolio.latest.title")}
        </h2>
        <p className="text-center text-gray-500">
          {t("portofolio.latest.noProjects")}
        </p>
      </section>
    )
  }

  return (
    <section className="py-16 w-full md:px-12 lg:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        {t("portofolio.latest.title")}
      </h2>
      <div className="grid grid-cols-1 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 transition-transform hover:scale-[1.02] duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <div className="text-sm font-semibold">{project.title}</div>
            <div className="text-xs text-gray-500">{project.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
