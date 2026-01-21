"use client"

import { useState, useEffect } from "react"

interface HeroProps {
  language: "en" | "ur"
}

export default function Hero({ language }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const content = {
    en: {
      title: "Welcome to Darul Uloom Dilkash Lil Banat",
      subtitle: "Islamic Girls' Madarsa & Educational Trust",
      description: "Nurturing knowledgeable, modest, and confident Muslim women grounded in faith and values",
      cta: "Learn More",
    },
    ur: {
      title:"دارالعلوم دلکش للبنات میں آپ کا خیرمقدم ہے",
      subtitle: "اسلامی لڑکیوں کا مدرسہ و تعلیمی ٹرسٹ",
      description: "باحیا، باکردار اور باعلم مسلمان خواتین تیار کرنا جو دین اسلام کی صحیح نمائندگی کریں",
      cta: "مزید جانیں",
    },
  }

  const slides = [
    {
      image: "/islamic-girls-madrasa-students-studying.jpg",
      alt: "Girls studying",
    },
    {
      image: "/islamic-school-girls-quran-class.jpg",
      alt: "Quran class",
    },
    {
      image: "/girls-madrasa-learning-together.jpg",
      alt: "Learning together",
    },
    {
      image: "/islamic-girls-education-classroom.jpg",
      alt: "Classroom",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const text = content[language]

  return (
    <section id="home" className="pt-20 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-blue-900/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              {/* <img
                src="/images/chatgpt-20image-20jan-2015-2c-202026-2c-2010-43-00-20am.png"
                alt="Darul Uloom Dilkash Logo"
                className="w-40 h-40 mx-auto drop-shadow-lg rounded-lg border-4 border-white"
              /> */}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
              {text.title}
            </h1>

            <p className="text-xl sm:text-2xl text-emerald-100 font-semibold mb-4 drop-shadow-md">{text.subtitle}</p>

            <p className="text-white text-lg max-w-2xl mb-8 leading-relaxed drop-shadow-md">{text.description}</p>

            <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 drop-shadow-lg"
            >
              {text.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
