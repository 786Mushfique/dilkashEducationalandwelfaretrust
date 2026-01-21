"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft } from "lucide-react"

export default function EventDetailPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")
  const [showVideo, setShowVideo] = useState(false)
  const params = useParams()
  const eventId = Number.parseInt(params.id as string)

  const events = {
    en: [
      {
        id: 1,
        name: "Seerah of Prophet ﷺ Programs",
        category: "Educational",
        description: "Monthly gatherings to learn about the life and teachings of Prophet Muhammad ﷺ",
        fullDescription:
          "Join us for our monthly Seerah programs where we explore the inspirational life of Prophet Muhammad ﷺ. These sessions include detailed teachings about his character, leadership, and guidance for modern times.",
        longContent:
          "The Seerah of the Prophet Muhammad ﷺ is the most comprehensive guide for humanity. In these monthly programs, we delve deep into his blessed life, his interactions with companions, his strategies of leadership, and his timeless wisdom. Each session is carefully structured to provide historical context, spiritual insights, and practical lessons we can apply in our daily lives. Participants learn about the Prophet's family life, his business dealings, his role as a judge, and his legacy that continues to shape Islamic civilization. These programs are designed for students to understand that every aspect of the Prophet's life is a beautiful example and source of guidance for us.",
        image: "/islamic-classroom-girls-studying-quran.jpg",
        galleryImages: [
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "Girls studying Quran" },
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "Spiritual learning workshop" },
          { src: "/parents-teacher-meeting-discussion.jpg", alt: "Teaching session" },
        ],
        videos: [
          { title: "Seerah Session 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Seerah Session 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "Monthly gatherings with expert speakers",
          "Interactive Q&A sessions",
          "Study materials in English and Urdu",
          "Certificate of participation",
        ],
      },
      {
        id: 2,
        name: "Annual Islamic Gatherings",
        category: "Celebration",
        description: "Yearly celebration with lectures, Qur'an recitation competitions, and community engagement",
        fullDescription:
          "Our annual Islamic gathering is a highlight of the year featuring prominent Islamic scholars, Qur'an recitation competitions, Naat competitions, and exciting community activities. This is a day of celebration, learning, and spiritual enrichment for all.",
        longContent:
          "The Annual Islamic Gathering is a spectacular celebration that brings together hundreds of community members. The day begins with inspirational lectures from renowned Islamic scholars who address contemporary issues through an Islamic lens. The highlight of the event includes Qur'an recitation competitions where students showcase their beautiful Tajweed skills, Naat competitions celebrating Islamic poetry, and various cultural performances. There are also exhibitions showcasing the achievements of our institution, interactive stalls for families, and networking opportunities. This event strengthens community bonds and provides an excellent platform for students to display their talents.",
        image: "/islamic-girls-stage-ceremony.jpg",
        galleryImages: [
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "Annual gathering stage" },
          { src: "/girls-quran-ceremony-celebration.jpg", alt: "Celebration event" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "Community gathering" },
        ],
        videos: [
          { title: "Highlights 2024", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Qur'an Recitation Competition", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "Lectures from renowned scholars",
          "Qur'an recitation competitions",
          "Naat and poetry competitions",
          "Cultural performances and exhibitions",
          "Community networking",
        ],
      },
      {
        id: 3,
        name: "Hifz Completion Ceremony",
        category: "Recognition",
        description: "Special recognition event for students completing Qur'an memorization",
        fullDescription:
          "We celebrate the incredible achievement of our students who have completed memorizing the entire Quran. This is a joyous occasion where families and community members gather to honor the dedication and hard work of these young Hafizahs.",
        longContent:
          "Completing the memorization of the entire Quran is one of the most significant achievements in a Muslim's life. Our Hifz Completion Ceremony is designed to celebrate this remarkable accomplishment with the honor and respect it deserves. The ceremony features families, teachers, community leaders, and religious scholars coming together to congratulate the Hafizahs. Each graduate recites a portion of the Quran, receives certificates and gifts, and is recognized for their dedication. This event serves as an inspiration for current students and reinforces the institution's commitment to Qur'anic education. The ceremony also includes Dua (prayers) for the continued success and spiritual protection of these young women.",
        image: "/girls-quran-ceremony-celebration.jpg",
        galleryImages: [
          { src: "/girls-quran-ceremony-celebration.jpg", alt: "Hifz ceremony celebration" },
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "Stage ceremony" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "Hafiz graduates" },
        ],
        videos: [
          { title: "Hifz Ceremony 2024", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Graduate Testimonies", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "Recognition of Hafizah achievement",
          "Certificate and gift presentations",
          "Qur'an recitations by graduates",
          "Family celebrations",
          "Collective Dua ceremony",
        ],
      },
      {
        id: 4,
        name: "Parent-Teacher Meetings",
        category: "Academic",
        description: "Regular sessions for discussing student progress and cooperation",
        fullDescription:
          "We conduct regular parent-teacher meetings to ensure strong communication between families and educators. These meetings provide updates on academic progress, character development, and collaborative strategies for student success.",
        longContent:
          "Parent-Teacher Meetings are an essential component of our educational approach. These sessions ensure that families are fully informed about their daughter's academic progress, behavioral development, and character growth. Teachers provide detailed feedback on strengths, areas for improvement, and specific suggestions for home support. Parents have the opportunity to discuss their concerns, share observations, and collaborate on strategies to help their daughters succeed. These meetings reinforce the partnership between school and home, which is crucial for holistic development. We believe that effective communication between educators and families creates a supportive environment where students thrive academically and spiritually.",
        image: "/parents-teacher-meeting-discussion.jpg",
        galleryImages: [
          { src: "/parents-teacher-meeting-discussion.jpg", alt: "Parent-teacher meeting" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "Classroom environment" },
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "Learning environment" },
        ],
        videos: [
          { title: "Meeting Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Parent Feedback", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "Individual student progress reports",
          "Academic performance analysis",
          "Character development discussion",
          "Home support strategies",
          "One-on-one consultations",
        ],
      },
      {
        id: 5,
        name: "Moral & Spiritual Sessions",
        category: "Development",
        description: "Workshops and seminars on character development and Islamic values",
        fullDescription:
          "These workshops focus on developing strong moral character and spiritual consciousness. Topics include Islamic ethics, personal development, social responsibility, and practical application of Islamic values in daily life.",
        longContent:
          "Moral and Spiritual Development is at the heart of our educational mission. Our workshops and seminars address contemporary challenges faced by young women through an Islamic perspective. Topics range from Islamic ethics and honesty, to dealing with peer pressure, managing emotions, developing resilience, and understanding social responsibility. Expert speakers, including Islamic scholars and counselors, lead interactive sessions where students can openly discuss issues and learn practical solutions. These programs empower our students to make righteous choices, build strong character, and become positive contributors to their families and society. By connecting spiritual principles with real-life situations, we help students develop a comprehensive Islamic worldview.",
        image: "/islamic-workshop-spiritual-learning.jpg",
        galleryImages: [
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "Spiritual workshop" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "Learning session" },
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "Presentation event" },
        ],
        videos: [
          { title: "Spiritual Development Workshop", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Student Testimonies", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "Islamic ethics workshops",
          "Personal development seminars",
          "Social responsibility training",
          "Interactive discussion sessions",
          "Expert mentorship programs",
        ],
      },
    ],
    ur: [
      {
        id: 1,
        name: "سیرت النبی ﷺ کے پروگرام",
        category: "تعلیمی",
        description: "رسول اللہ ﷺ کی زندگی اور تعلیمات سے متعلق ماہانہ محفلیں",
        fullDescription:
          "رسول اللہ ﷺ کی معطر زندگی کے بارے میں سیکھنے کے لیے ہمارے ساتھ شامل ہوں۔ یہ سیشنز آپ کو نبی کریم کے اخلاق، قیادت اور جدید دور میں رہنمائی کے بارے میں تفصیل سے آگاہ کریں گے۔",
        longContent:
          "سیرتِ رسول اللہ ﷺ پوری انسانیت کے لیے سب سے جامع رہنما ہے۔ ہماری ماہانہ سیرت پروگرام میں ہم آپ کو رسول کریم کی زندگی کے ہر پہلو سے آگاہ کرتے ہیں۔ ہر سیشن میں تاریخی پس منظر، روحانی نکات اور عملی سبق شامل ہوتے ہیں جو ہم اپنی روزمرہ زندگی میں لاگو کر سکتے ہیں۔",
        image: "/islamic-classroom-girls-studying-quran.jpg",
        galleryImages: [
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "سیرت کلاس" },
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "روحانی سیشن" },
          { src: "/parents-teacher-meeting-discussion.jpg", alt: "تعلیمی نشست" },
        ],
        videos: [
          { title: "سیرت سیشن 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "سیرت سیشن 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: ["ماہانہ سیشنز علماء کے ساتھ", "سوالات کے جوابات", "اردو میں تعلیمی مواد", "شرکت کا سرٹیفکیٹ"],
      },
      {
        id: 2,
        name: "سالانہ دینی جلسے",
        category: "تقریب",
        description: "سالانہ تقریبات جن میں خطابات، قرآن میں مقابلے اور معاشرتی تعاون",
        fullDescription:
          "ہماری سالانہ تقریب برس کا اہم دن ہے جس میں اہم اسلامی علماء، قرآن کی تلاوت کے مقابلے، ناعت کے مسابقے اور بہت سی معاشرتی سرگرمیاں ہوتی ہیں۔",
        longContent:
          "سالانہ اسلامی جلسہ ہمارے ادارے کا سب سے اہم واقعہ ہے جس میں سینکڑوں لوگ شامل ہوتے ہیں۔ یہ دن تعلیم، روحانیت اور کمیونٹی کو جوڑنے کا دن ہے۔ معروف علماء کے خطابات، قرآن کے مقابلے، ناعت کے مسابقے اور ثقافتی پروگرام اس دن کو یادگار بناتے ہیں۔",
        image: "/islamic-girls-stage-ceremony.jpg",
        galleryImages: [
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "سالانہ جلسہ" },
          { src: "/girls-quran-ceremony-celebration.jpg", alt: "تقریب" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "کمیونٹی جمع" },
        ],
        videos: [
          { title: "2024 کی تقریب", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "قرآن مقابلہ", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "معروف علماء کے خطابات",
          "قرآن تلاوت کے مسابقے",
          "ناعت کے مسابقے",
          "ثقافتی پروگرام",
          "کمیونٹی کے ساتھ رابطہ",
        ],
      },
      {
        id: 3,
        name: "حفظ تکمیل تقریب",
        category: "اعزاز",
        description: "قرآن حفظ مکمل کرنے والی طالبات کی خصوصی تقریب",
        fullDescription:
          "ہم ان بہادر طالبات کا جشن مناتے ہیں جنہوں نے پورا قرآن حفظ کیا۔ یہ خوشی کا دن ہے جب خاندان اور معاشرہ ان نوجوان حافظات کی محنت کا اعتراف کرتے ہیں۔",
        longContent:
          "قرآن کا مکمل حفظ ایک مسلمان کی زندگی میں سب سے بڑا کام ہے۔ ہماری حفظ تکمیل تقریب اس نمایاں کامیابی کو درخور احترام کے ساتھ منعقد کی جاتی ہے۔ اس تقریب میں خاندان، اساتذہ، معاشرتی رہنما اور علماء شامل ہوتے ہیں۔",
        image: "/girls-quran-ceremony-celebration.jpg",
        galleryImages: [
          { src: "/girls-quran-ceremony-celebration.jpg", alt: "حفظ تقریب" },
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "سٹیج تقریب" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "حافظات کے ساتھ" },
        ],
        videos: [
          { title: "حفظ تقریب 2024", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "طالبات کی شہادتیں", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: ["حافظات کی تعریف", "سرٹیفکیٹ اور تحائف", "قرآن کی تلاوتیں", "خاندانی جشن", "دعاؤں کی مجلس"],
      },
      {
        id: 4,
        name: "والدین و اساتذہ اجلاس",
        category: "تعلیمی",
        description: "طالبات کی پیش رفت پر تبادل خیال کے لیے باقاعدہ نشستیں",
        fullDescription:
          "ہم خاندان اور معلمین کے درمیان مضبوط رابطہ برقرار رکھنے کے لیے باقاعدہ ملاقاتیں کرتے ہیں۔ یہ ملاقاتیں تعلیمی پیش رفت اور کردار کی نشوونما پر بات کرتی ہیں۔",
        longContent:
          "والدین و اساتذہ کی ملاقاتیں ہماری تعلیمی نظام کا انتہائی اہم حصہ ہیں۔ یہ ملاقاتیں یقینی بناتی ہیں کہ خاندان کو اپنی بیٹی کی تعلیمی پیش رفت، رویے کی بہتری اور کردار کی نشوونما سے مکمل طور پر باخبر کیا جائے۔",
        image: "/parents-teacher-meeting-discussion.jpg",
        galleryImages: [
          { src: "/parents-teacher-meeting-discussion.jpg", alt: "والدین اجلاس" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "کلاس روم" },
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "سیکھنے کا ماحول" },
        ],
        videos: [
          { title: "ملاقات کی اہم باتیں", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "والدین کی رائے", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "انفرادی رپورٹس",
          "تعلیمی کارکردگی کا تجزیہ",
          "کردار کی ترقی",
          "گھر میں مدد کی حکمت عملی",
          "براہ راست مشورے",
        ],
      },
      {
        id: 5,
        name: "اصلاحی و روحانی سیشن",
        category: "ترقی",
        description: "کردار کی تشکیل اور اسلامی اقدار پر ورکشاپس",
        fullDescription:
          "یہ ورکشاپس مضبوط اخلاقی کردار اور روحانی شعور پیدا کرنے پر توجہ دیتے ہیں۔ موضوعات میں اسلامی اخلاقیات، نجی ترقی، سماجی ذمہ داری شامل ہے۔",
        longContent:
          "کردار اور روحانی ترقی ہمارے تعلیمی مقصد کا بنیادی حصہ ہے۔ ہماری ورکشاپس نوجوان خواتین کے سامنے آنے والے چیلنجز کو اسلامی نقطہ نظر سے حل کرتی ہیں۔",
        image: "/islamic-workshop-spiritual-learning.jpg",
        galleryImages: [
          { src: "/islamic-workshop-spiritual-learning.jpg", alt: "روحانی ورکشاپ" },
          { src: "/islamic-classroom-girls-studying-quran.jpg", alt: "سیکھنے کا سیشن" },
          { src: "/islamic-girls-stage-ceremony.jpg", alt: "پریزنٹیشن کی تقریب" },
        ],
        videos: [
          { title: "روحانی ترقی ورکشاپ", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "طالبات کی شہادتیں", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ],
        highlights: [
          "اسلامی اخلاقیات کی ورکشاپس",
          "نجی ترقی کی تربیت",
          "سماجی ذمہ داری",
          "تبادلہ خیال کی نشستیں",
          "علماء سے رہنمائی",
        ],
      },
    ],
  }

  const content = {
    en: {
      backToEvents: "← Back to Events",
      eventDetails: "Event Details",
      watchVideo: "Watch Video",
      highlights: "Program Highlights",
      relatedEvents: "Related Events",
      eventGallery: "Event Gallery",
      eventVideos: "Event Videos",
      viewAll: "View All",
    },
    ur: {
      backToEvents: "← واپس تقریبات",
      eventDetails: "تقریب کی تفصیلات",
      watchVideo: "ویڈیو دیکھیں",
      highlights: "اہم نکات",
      relatedEvents: "متعلقہ تقریبات",
      eventGallery: "تقریب کی تصویریں",
      eventVideos: "تقریب کی ویڈیوز",
      viewAll: "تمام دیکھیں",
    },
  }

  const event = events[language].find((e) => e.id === eventId)
  const currentContent = content[language]

  if (!event) {
    return (
      <div className={language === "ur" ? "rtl" : "ltr"}>
        <Header language={language} setLanguage={setLanguage} />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center">
            <p className="text-xl text-gray-600">Event not found</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link href="/events">
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8">
              <ChevronLeft className="w-5 h-5" />
              {currentContent.backToEvents}
            </button>
          </Link>

          {/* Event Name Header */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.name}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-green-500 mb-8"></div>

          {/* Event Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img src={event.image || "/placeholder.svg"} alt={event.name} className="w-full h-96 object-cover" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-600 mb-8">{event.fullDescription}</p>

              {/* Detailed Content */}
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">{event.longContent}</p>
              </div>

              {/* Image Gallery Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{currentContent.eventGallery}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.galleryImages &&
                    event.galleryImages.map((image, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group"
                      >
                        <div className="relative h-64 overflow-hidden bg-gray-900">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {/* Event Name Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center p-4">
                            <div className="text-center transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white font-bold text-xl text-balance">{event.name}</p>
                              <p className="text-gray-200 text-sm mt-2">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 border-t border-gray-200">
                          <p className="text-gray-700 font-medium text-center">{image.alt}</p>
                          <p className="text-gray-500 text-xs text-center mt-1">{event.name}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{currentContent.eventVideos}</h2>
                <div className="space-y-6">
                  {event.videos &&
                    event.videos.map((video, idx) => (
                      <div key={idx} className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
                        <iframe
                          className="w-full h-full"
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Highlights */}
              <div className="bg-white p-8 rounded-xl shadow-lg sticky top-28">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.highlights}</h3>
                <div className="space-y-4">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
