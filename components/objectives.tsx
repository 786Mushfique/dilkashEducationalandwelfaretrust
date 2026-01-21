interface ObjectivesProps {
  language: "en" | "ur"
}

export default function Objectives({ language }: ObjectivesProps) {
  const content = {
    en: {
      title: "Our Objectives",
      intro: "Darul Uloom Dilkash is committed to the following noble objectives:",
      objectives: [
        {
          icon: "📚",
          title: "Islamic Education",
          desc: "Provide quality Islamic education in Qur'an, Hadith, and Fiqh",
        },
        {
          icon: "💎",
          title: "Character Building",
          desc: "Develop strong moral character and ethical values",
        },
        {
          icon: "🙏",
          title: "Spiritual Growth",
          desc: "Foster spiritual development in a safe Islamic environment",
        },
        {
          icon: "❤️",
          title: "Social Welfare",
          desc: "Support underprivileged and orphan students",
        },
        {
          icon: "📖",
          title: "Islamic Awareness",
          desc: "Spread Islamic knowledge and awareness in the community",
        },
        {
          icon: "🌟",
          title: "Leadership",
          desc: "Prepare girls to be positive role models in society",
        },
      ],
    },
    ur: {
      title: "ہمارے اغراض و مقاصد",
      intro: "دار العلوم دلکش درج ذیل اہم مقاصد کے لیے کام کر رہا ہے:",
      objectives: [
        {
          icon: "📚",
          title: "اسلامی تعلیم",
          desc: "قرآن، حدیث اور فقہ میں معیاری تعلیم فراہم کرنا",
        },
        {
          icon: "💎",
          title: "کردار کی تشکیل",
          desc: "مضبوط اخلاقی کردار اور اقدار کی تشکیل",
        },
        {
          icon: "🙏",
          title: "روحانی نشوونما",
          desc: "محفوظ اسلامی ماحول میں روحانی ترقی",
        },
        {
          icon: "❤️",
          title: "سماجی فلاح",
          desc: "غریب اور یتیم طالبات کی معاونت",
        },
        {
          icon: "📖",
          title: "دینی شعور",
          desc: "معاشرے میں دینی علم و شعور کا پھیلاؤ",
        },
        {
          icon: "🌟",
          title: "رہنمائی",
          desc: "بچیوں کو معاشرے میں مثالی کردار ادا کرنے کے لیے تیار کرنا",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="objectives" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">{text.intro}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.objectives.map((obj, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-green-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{obj.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{obj.title}</h3>
              <p className="text-gray-600">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
