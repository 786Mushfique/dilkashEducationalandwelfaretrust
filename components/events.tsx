interface EventsProps {
  language: "en" | "ur"
}

export default function Events({ language }: EventsProps) {
  const content = {
    en: {
      title: "Events & Programs",
      events: [
        {
          icon: "📅",
          name: "Seerah of Prophet ﷺ Programs",
          desc: "Monthly gatherings to learn about the life and teachings of Prophet Muhammad ﷺ",
        },
        {
          icon: "🎉",
          name: "Annual Islamic Gatherings",
          desc: "Yearly celebration with lectures, Qur'an recitation competitions, and community engagement",
        },
        {
          icon: "🏆",
          name: "Hifz Completion Ceremony",
          desc: "Special recognition event for students completing Qur'an memorization",
        },
        {
          icon: "👨‍👩‍👧",
          name: "Parent-Teacher Meetings",
          desc: "Regular sessions for discussing student progress and cooperation",
        },
        {
          icon: "💭",
          name: "Moral & Spiritual Sessions",
          desc: "Workshops and seminars on character development and Islamic values",
        },
      ],
    },
    ur: {
      title: "تقریبات و پروگرام",
      events: [
        {
          icon: "📅",
          name: "سیرت النبی ﷺ کے پروگرام",
          desc: "رسول اللہ ﷺ کی زندگی اور تعلیمات سے متعلق ماہانہ محفلیں",
        },
        {
          icon: "🎉",
          name: "سالانہ دینی جلسے",
          desc: "سالانہ تقریبات جن میں خطابات، قرآن میں مقابلے اور معاشرتی تعاون",
        },
        {
          icon: "🏆",
          name: "حفظ تکمیل تقریب",
          desc: "قرآن حفظ مکمل کرنے والی طالبات کی خصوصی تقریب",
        },
        {
          icon: "👨‍👩‍👧",
          name: "والدین و اساتذہ اجلاس",
          desc: "طالبات کی پیش رفت پر تبادل خیال کے لیے باقاعدہ نشستیں",
        },
        {
          icon: "💭",
          name: "اصلاحی و روحانی سیشن",
          desc: "کردار کی تشکیل اور اسلامی اقدار پر ورکشاپس",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {text.events.map((event, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white border border-blue-200 hover:shadow-lg transition-all flex gap-4"
            >
              <div className="text-4xl flex-shrink-0">{event.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
