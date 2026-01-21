"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EventsPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  const events = {
    en: [
      {
        id: 1,
        name: "Seerah of Prophet ﷺ Programs",
        category: "Educational",
        description: "Monthly gatherings to learn about the life and teachings of Prophet Muhammad ﷺ",
        image: "/islamic-classroom-girls-studying-quran.jpg",
      },
      {
        id: 2,
        name: "Annual Islamic Gatherings",
        category: "Celebration",
        description: "Yearly celebration with lectures, Qur'an recitation competitions, and community engagement",
        image: "/islamic-girls-stage-ceremony.jpg",
      },
      {
        id: 3,
        name: "Hifz Completion Ceremony",
        category: "Recognition",
        description: "Special recognition event for students completing Qur'an memorization",
        image: "/girls-quran-ceremony-celebration.jpg",
      },
      {
        id: 4,
        name: "Parent-Teacher Meetings",
        category: "Academic",
        description: "Regular sessions for discussing student progress and cooperation",
        image: "/parents-teacher-meeting-discussion.jpg",
      },
      {
        id: 5,
        name: "Moral & Spiritual Sessions",
        category: "Development",
        description: "Workshops and seminars on character development and Islamic values",
        image: "/islamic-workshop-spiritual-learning.jpg",
      },
    ],
    ur: [
      {
        id: 1,
        name: "سیرت النبی ﷺ کے پروگرام",
        category: "تعلیمی",
        description: "رسول اللہ ﷺ کی زندگی اور تعلیمات سے متعلق ماہانہ محفلیں",
        image: "/islamic-classroom-girls-studying-quran.jpg",
      },
      {
        id: 2,
        name: "سالانہ دینی جلسے",
        category: "تقریب",
        description: "سالانہ تقریبات جن میں خطابات، قرآن میں مقابلے اور معاشرتی تعاون",
        image: "/islamic-girls-stage-ceremony.jpg",
      },
      {
        id: 3,
        name: "حفظ تکمیل تقریب",
        category: "اعزاز",
        description: "قرآن حفظ مکمل کرنے والی طالبات کی خصوصی تقریب",
        image: "/girls-quran-ceremony-celebration.jpg",
      },
      {
        id: 4,
        name: "والدین و اساتذہ اجلاس",
        category: "تعلیمی",
        description: "طالبات کی پیش رفت پر تبادل خیال کے لیے باقاعدہ نشستیں",
        image: "/parents-teacher-meeting-discussion.jpg",
      },
      {
        id: 5,
        name: "اصلاحی و روحانی سیشن",
        category: "ترقی",
        description: "کردار کی تشکیل اور اسلامی اقدار پر ورکشاپس",
        image: "/islamic-workshop-spiritual-learning.jpg",
      },
    ],
  }

  const content = {
    en: {
      title: "Events & Programs",
      viewEvent: "View Event Details",
      category: "Category",
    },
    ur: {
      title: "تقریبات و پروگرام",
      viewEvent: "تفصیلات دیکھیں",
      category: "زمرہ",
    },
  }

  const currentEvents = events[language]
  const currentContent = content[language]

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{currentContent.title}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image Container */}
                  <div className="md:col-span-1 h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <p className="text-white text-center font-bold text-lg">{event.name}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
                        <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Button */}
                    <Link href={`/events/${event.id}`}>
                      <button className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all">
                        {currentContent.viewEvent}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
