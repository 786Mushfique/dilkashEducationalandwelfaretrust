"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface GalleryPreviewProps {
  language: "en" | "ur"
}

export default function GalleryPreview({ language }: GalleryPreviewProps) {
  const galleryImages = [
    {
      id: 1,
      image: "/islamic-girls-madrasa-students-studying.jpg",
      title: language === "en" ? "Students in Classroom" : "کلاس میں طالبات",
    },
    {
      id: 2,
      image: "/islamic-school-girls-quran-class.jpg",
      title: language === "en" ? "Quranic Studies" : "قرآن کی تعلیم",
    },
    {
      id: 3,
      image: "/girls-madrasa-learning-together.jpg",
      title: language === "en" ? "Group Learning" : "اجتماعی تعلیم",
    },
    {
      id: 4,
      image: "/islamic-girls-education-classroom.jpg",
      title: language === "en" ? "Islamic Education" : "اسلامی تعلیم",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">
            {language === "en" ? "Gallery Preview" : "گیلری کا نمونہ"}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === "en"
              ? "Glimpses of our students and campus life"
              : "ہماری طالبات اور کیمپس کی زندگی کی جھلکیاں"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 w-full">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            {language === "en" ? "View Full Gallery" : "مکمل گیلری دیکھیں"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
