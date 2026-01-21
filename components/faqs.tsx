"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQsProps {
  language: "en" | "ur"
}

export default function FAQs({ language }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const content = {
    en: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          q: "Is this institution only for girls?",
          a: "Yes, Darul Uloom Dilkash is exclusively for Muslim girls seeking Islamic education.",
        },
        {
          q: "What is the admission age?",
          a: "We accept students from age 5 onwards. Specific age requirements vary by course level.",
        },
        {
          q: "Do you provide residential facilities?",
          a: "Limited residential facilities are available. Please contact us for details on accommodation options.",
        },
        {
          q: "Are there scholarships for underprivileged students?",
          a: "Yes, we offer full support to deserving and underprivileged students based on need assessment.",
        },
        {
          q: "What is the fee structure?",
          a: "We operate on a needs-based fee system. Scholarships are available for eligible students. Contact us for details.",
        },
        {
          q: "How can I support this institution?",
          a: "You can contribute through Zakat, Sadaqah, sponsorship programs, or student support initiatives.",
        },
      ],
    },
    ur: {
      title: "عام سوالات کے جوابات",
      faqs: [
        {
          q: "کیا یہ ادارہ صرف لڑکیوں کے لیے ہے؟",
          a: "جی ہاں، دار العلوم دلکش صرف مسلمان بچیوں کے اسلامی تعلیم کے لیے ہے۔",
        },
        {
          q: "داخلہ کی عمر کیا ہے؟",
          a: "ہم 5 سال سے بڑی عمر کی بچیوں کو قبول کرتے ہیں۔ مختلف کورسز کے لیے مختلف شرائط ہیں۔",
        },
        {
          q: "کیا رہائشی سہولت موجود ہے؟",
          a: "محدود رہائشی سہولت دستیاب ہے۔ تفصیلات کے لیے براہ کرم ہم سے رابطہ کریں۔",
        },
        {
          q: "کیا غریب طالبات کے لیے وظائف ہیں؟",
          a: "جی ہاں، ہم مستحق اور ضروری طالبات کو مکمل معاونت فراہم کرتے ہیں۔",
        },
        {
          q: "فیس کی شرح کیا ہے؟",
          a: "ہم ضرورت کی بنیاد پر فیس لیتے ہیں۔ اہل طالبات کے لیے وظائف دستیاب ہیں۔",
        },
        {
          q: "میں اس ادارے کی معاونت کیسے کر سکتا ہوں؟",
          a: "آپ زکوٰۃ، صدقہ، یا طالبات کی سپورٹ پروگرام کے ذریعے معاونت کر سکتے ہیں۔",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {text.faqs.map((faq, idx) => (
            <div key={idx} className="border border-teal-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 transition-transform flex-shrink-0 ${
                    openIndex === idx ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-white border-t border-teal-200">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
