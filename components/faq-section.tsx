"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of web design and development services including responsive website design, e-commerce solutions, custom web applications, SEO optimization, and ongoing maintenance and support.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "The timeline for website completion varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months or more. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process includes discovery and planning, wireframing and prototyping, design and development, testing and refinement, and finally, launch and support. We involve our clients at every stage to ensure the final product meets their expectations.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer ongoing maintenance services to keep your website secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a website depends on various factors such as complexity, features, and scope. We offer customized quotes based on your specific requirements. Contact us for a free consultation and quote.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-16 bg-white"
    >
      <div className="container px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our web design services and process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-4 border-b border-gray-200 pb-4 ${index === 0 ? "border-t pt-4" : ""}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <div className="ml-2 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
