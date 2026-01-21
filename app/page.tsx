"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Hero from "@/components/hero"
import GalleryPreview from "@/components/gallery-preview"
import PrincipalMessage from "@/components/principal-message"
import FAQs from "@/components/faqs"
import Footer from "@/components/footer"
import { FaWhatsapp } from "react-icons/fa"


export default function Home() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  const content = {
    en: {
      aboutUs: "About Us",
      aboutUsDesc: "Learn about our institution, values, and commitment to Islamic education for girls",
      aboutTrust: "Dilkash Educational & Welfare Trust",
      aboutTrustDesc: "Discover the organization behind our mission and our legal framework",
      courses: "Courses Offered",
      coursesDesc: "Explore our comprehensive Islamic curriculum designed for modern Muslim women",
      events: "Events & Programs",
      eventsDesc: "Stay updated with our latest events, celebrations, and educational programs",
      admissionGuidelines: "Admission Guidelines",
      admissionGuidelinesDesc: "Understand our admission process and requirements for enrollment",
      support: "Support Our Mission",
      supportDesc: "Make a meaningful contribution to our educational mission through donations",
      learnMore: "Learn More",
    },
    ur: {
      aboutUs: "ہمارے بارے میں",
      aboutUsDesc: "اپنے ادارے، اقدار اور لڑکیوں کی اسلامی تعلیم کے لیے اپنی مشن کے بارے میں جانیں",
      aboutTrust: "ٹرسٹ کے بارے میں",
      aboutTrustDesc: "ہماری مشن کے پیچھے کی تنظیم اور قانونی فریم ورک کو دریافت کریں",
      courses: "پیش کردہ نصاب",
      coursesDesc: "ہماری جامع اسلامی نصاب کی تلاش کریں جو جدید مسلمان خواتین کے لیے ڈیزائن کیا گیا ہے",
      events: "تقریبات اور پروگرام",
      eventsDesc: "ہماری تازہ ترین تقریبات، جشن اور تعلیمی پروگراموں سے آپڈیٹ رہیں",
      admissionGuidelines: "داخلہ کی رہنمائی",
      admissionGuidelinesDesc: "ہماری داخلہ کے عمل اور نام زد ہونے کی ضروریات کو سمجھیں",
      support: "اپنی مشن کی حمایت کریں",
      supportDesc: "عطیات کے ذریعے ہماری تعلیمی مشن میں معنی خیز حصہ ڈالیں",
      learnMore: "مزید جانیں",
    },
  }

  const text = content[language]

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />

      <section id="preview-sections" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Us Card */}
            <Link href="/about">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-emerald-500">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-emerald-400 overflow-hidden">
                  <img
                    src="/islamic-girls-madrasa-classroom.jpg"
                    alt="About Us"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">📚</span> {text.aboutUs}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.aboutUsDesc}</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* About Trust Card */}
            <Link href="/trust">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-teal-500">
                <div className="relative h-48 bg-gradient-to-br from-teal-400 to-blue-400 overflow-hidden">
                  <img
                    src="/islamic-trust-organization-building.jpg"
                    alt="About Trust"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-teal-600">🏛️</span> {text.aboutTrust}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.aboutTrustDesc}</p>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Courses Card */}
            <Link href="/courses">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-green-500">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-400 overflow-hidden">
                  <img
                    src="/islamic-quran-books-education.jpg"
                    alt="Courses"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-green-600">📖</span> {text.courses}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.coursesDesc}</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Events Card */}
            <Link href="/events">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-blue-500">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
                  <img
                    src="/islamic-celebration-event-girls.jpg"
                    alt="Events"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🎉</span> {text.events}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.eventsDesc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Admission Card */}
            <Link href="/admissions">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-emerald-500">
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-teal-400 overflow-hidden">
                  <img
                    src="/islamic-school-registration-admission.jpg"
                    alt="Admissions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">✍️</span> {text.admissionGuidelines}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.admissionGuidelinesDesc}</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Donations Card */}
            <Link href="/donations">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-transparent hover:border-green-500">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-400 overflow-hidden">
                  <img
                    src="/charity-donation-islamic-support.jpg"
                    alt="Support"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-green-600">❤️</span> {text.support}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{text.supportDesc}</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                    {text.learnMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <GalleryPreview language={language} />

      <PrincipalMessage language={language} />

      <FAQs language={language} />

      <Footer language={language} />
    
     
       {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/917782907822"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-all"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}
