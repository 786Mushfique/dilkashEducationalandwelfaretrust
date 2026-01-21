"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface GalleryImage {
  id: number
  title: string
  titleUr: string
  description: string
  descriptionUr: string
  image: string
}

export default function GalleryPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Islamic Studies Class",
      titleUr: "اسلامیات کی کلاس",
      description: "Students engaged in Quranic studies and Islamic education",
      descriptionUr: "قرآنی تعلیم اور اسلامی علوم میں مشغول طالبات",
      image: "/islamic-classroom-girls-studying-quran.jpg",
    },
    {
      id: 2,
      title: "Quran Recitation Program",
      titleUr: "قرآن تلاوت کا پروگرام",
      description: "Annual Quran recitation competition showcasing student excellence",
      descriptionUr: "سالانہ قرآن تلاوت مقابلہ میں طالبات کی بہترین کارکردگی",
      image: "/quran-recitation-event-girls-stage.jpg",
    },
    {
      id: 3,
      title: "Islamic Calligraphy Workshop",
      titleUr: "اسلامی خطاطی کی ورکشاپ",
      description: "Students learning traditional Islamic art and calligraphy",
      descriptionUr: "طالبات روایتی اسلامی فن اور خطاطی سیکھ رہی ہیں",
      image: "/islamic-calligraphy-workshop-girls-art.jpg",
    },
    {
      id: 4,
      title: "Eid Celebration",
      titleUr: "عید کی تقریب",
      description: "Annual Eid gathering celebrating Islamic festivals",
      descriptionUr: "سالانہ عید کی تقریب جہاں اسلامی تہوار منایا جاتا ہے",
      image: "/eid-celebration-girls-festival-islamic.jpg",
    },
    {
      id: 5,
      title: "Community Service",
      titleUr: "معاشرتی خدمت",
      description: "Students participating in community welfare activities",
      descriptionUr: "طالبات سماجی خدمت کی سرگرمیوں میں حصہ لے رہی ہیں",
      image: "/community-service-girls-helping-people.jpg",
    },
    {
      id: 6,
      title: "Library and Studies",
      titleUr: "لائبریری اور مطالعہ",
      description: "State-of-the-art library facility for student research",
      descriptionUr: "طالبات کی تحقیق کے لیے جدید لائبریری کی سہولت",
      image: "/library-girls-students-studying-books.jpg",
    },
  ]

  const content = {
    en: {
      title: "Gallery",
      description:
        "Explore our collection of educational activities, Islamic programs, and important moments from Darul Uloom Dilkash lil Banath",
    },
    ur: {
      title: "گیلری",
      description: "دار العلوم دلکش للبنات کی تعلیمی سرگرمیوں، دینی پروگراموں اور اہم لمحات کو دیکھیں",
    },
  }

  const text = content[language]

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{text.title}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{text.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={language === "en" ? item.title : item.titleUr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === "en" ? item.title : item.titleUr}
                  </h3>
                  <p className="text-gray-600">{language === "en" ? item.description : item.descriptionUr}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-white rounded-xl border-2 border-teal-200">
            <p className="text-gray-700 text-lg">
              {language === "en"
                ? "All images maintain Islamic guidelines and privacy standards"
                : "تمام تصاویر اسلامی رہنمائی کی پابندیوں کے مطابق ہیں"}
            </p>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
