'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'What is a Payment Gateway?',
    answer: 'A payment gateway is a technology that captures and transfers payment data from the customer to the acquiring bank.',
  },
  {
    question: 'Do I need to pay to Instapay even when there is no transaction going on in my business?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!',
  },
  {
    question: 'What platforms does ACME payment gateway support?',
    answer: 'ACME supports all major e-commerce platforms including Shopify, WooCommerce, Magento, and custom integrations.',
  },
  {
    question: 'Does ACME provide international payments support?',
    answer: 'Yes, ACME provides international payment processing in multiple currencies and languages.',
  },
  {
    question: 'Is there any setup fee or annual maintenance fee that I need to pay regularly?',
    answer: 'No setup or annual maintenance fees. You only pay a small fee per transaction.',
  },
];

export default function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="p-4 sm:p-8 max-w-6xl w-full flex flex-col md:flex-row gap-6">
        {/* Left side - FAQ List */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex justify-between items-center text-left px-4 py-3 rounded-md border border-spacing-1 transition-colors duration-200 ${
                  index === selectedIndex
                    ? 'bg-violet-100 text-black bg-slate-200'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span>{faq.question}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Answer */}
        <div className="w-full pt-6 md:pt-16 bg-gray-50 rounded-md p-6 shadow-sm md:ml-6 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {faqs[selectedIndex].question}
          </h3>
          <p className="text-gray-700">{faqs[selectedIndex].answer}</p>
        </div>
      </div>
    </div>
  );
}
