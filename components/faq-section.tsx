'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is ManyReach Used For?',
    answer:
      'ManyReach is used to automate outreach and manage campaigns by uploading contacts and tracking engagement.',
  },
  {
    question: 'Can I Upload As Many Contacts As I Want?',
    answer: 'Yes, you can upload unlimited contacts depending on your subscription plan.',
  },
  {
    question: 'What is a credit?',
    answer: 'A credit is a unit that represents one outreach attempt or contact search depending on the service.',
  },
  {
    question: 'What is ManyReach Used For?',
    answer:
      'ManyReach is used to automate outreach and manage campaigns by uploading contacts and tracking engagement.',
  },
  {
    question: 'What is ManyReach Used For?',
    answer:
      'ManyReach is used to automate outreach and manage campaigns by uploading contacts and tracking engagement.',
  },
  {
    question: 'What is ManyReach Used For?',
    answer:
      'ManyReach is used to automate outreach and manage campaigns by uploading contacts and tracking engagement.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className=" text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-8xl mx-auto rounded-2xl bg-gradient-to-br from-[#111216] to-[#1a1b22] border border-gray-800 p-6 md:p-12 flex flex-col lg:flex-row gap-10 shadow-xl">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-sm text-[#4f90ff] font-medium uppercase mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Get all your questions answered here
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md">
            It’s extremely embarrassing adding the same contact in two different campaigns.
          </p>
          <button className="mt-2 w-fit bg-[#111216] hover:bg-[#1d1e26] border border-[#4f90ff] text-white py-3 px-6 rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-blue-500/30">
            Start for Free Now →
          </button>
        </div>

        {/* Right FAQ List */}
        <div className="flex-1">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#1b1c23] overflow-hidden border border-[#2c2d33]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-white focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}