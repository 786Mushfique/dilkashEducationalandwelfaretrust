interface CoursesProps {
  language: "en" | "ur"
}

export default function Courses({ language }: CoursesProps) {
  const content = {
    en: {
      title: "Courses Offered",
      courses: [
        { name: "Noorani Qaida", desc: "Basic Qur'an reading fundamentals" },
        { name: "Qur'an Recitation", desc: "Nazira - fluent Qur'an reading" },
        { name: "Hifz-ul-Qur'an", desc: "Complete Qur'an memorization" },
        { name: "Tajweed", desc: "Proper Qur'anic pronunciation rules" },
        { name: "Islamic Fiqh", desc: "Women-oriented Islamic jurisprudence" },
        { name: "Seerah", desc: "Life and teachings of Prophet Muhammad ﷺ" },
      ],
    },
    ur: {
      title: "نصاب",
      courses: [
        { name: "نورانی قاعدہ", desc: "قرآن پڑھنے کی بنیادی تعلیم" },
        { name: "ناظرہ قرآن", desc: "روانی سے قرآن پڑھنا" },
        { name: "حفظ القرآن", desc: "مکمل قرآن حفظ کرنا" },
        { name: "تجوید", desc: "قرآن پڑھنے کے صحیح اصول" },
        { name: "فقہ اسلامی", desc: "خواتین کے مسائل کے ساتھ" },
        { name: "سیرت النبی", desc: "نبی کریم ﷺ کی زندگی اور تعلیمات" },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.courses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-teal-200 hover:shadow-lg hover:border-teal-400 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-gray-600">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
