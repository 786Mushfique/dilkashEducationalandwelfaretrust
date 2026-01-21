interface AboutProps {
  language: "en" | "ur"
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      title: "About Us",
      intro:
        "Darul Uloom Dilkash lil Banath is a premier Islamic institution dedicated to nurturing the minds, hearts, and characters of Muslim girls through comprehensive Islamic education, spiritual development, and practical life skills in a supportive, family-like environment.",
      mission: "Our Mission",
      missionText:
        "To provide authentic Islamic education rooted in the Quran and Sunnah, fostering intellectual growth, moral excellence, and spiritual consciousness among young Muslim women.",
      vision: "Our Vision",
      visionText:
        "Creating enlightened, virtuous, and confident Muslim women who serve as beacons of Islamic values in their families and communities.",
      points: [
        {
          title: "Qur'anic Excellence",
          desc: "Comprehensive Qur'anic studies, recitation, memorization, and Tajweed training",
        },
        {
          title: "Islamic Knowledge",
          desc: "In-depth Islamic studies including Fiqh, Hadith, Seerah, and Islamic ethics",
        },
        { title: "Character Building", desc: "Emphasis on developing virtuous character and Islamic values" },
        { title: "Practical Skills", desc: "Life skills, modern Islamic education, and community engagement" },
        { title: "Support System", desc: "Special assistance for underprivileged and orphan students" },
        { title: "Safe Environment", desc: "Islamic, nurturing, and secure atmosphere for optimal learning" },
      ],
    },
    ur: {
      title: "تعارف",
      intro:
        "دار العلوم دلکش للبنات ایک اہم اسلامی ادارہ ہے جو بچیوں کی ذہنی، دلی اور اخلاقی تربیت دینی تعلیم، روحانی نشوونما اور عملی زندگی کی مہارتیں کے ذریعے ایک خاندانی ماحول میں فراہم کرتا ہے۔",
      mission: "ہمارا مقصد",
      missionText:
        "قرآن و سنت سے ماخوذ اسلامی تعلیم فراہم کرنا اور نوجوان مسلمان لڑکیوں میں ذہنی نشوونما، اخلاقی بہتری اور روحانی شعور پیدا کرنا۔",
      vision: "ہمارا نظریہ",
      visionText:
        "روشن فکر، نیک چلن اور خود اعتماد سے لبریز مسلمان خواتین تیار کرنا جو اپنے خاندان اور سماج میں اسلامی اقدار کی مشعال بن سکیں۔",
      points: [
        {
          title: "قرآنی درستگی",
          desc: "قرآن کریم کی جامع تعلیم، تلاوت، حفظ اور تجوید کی تربیت",
        },
        {
          title: "اسلامی علوم",
          desc: "فقہ، حدیث، سیرت و اسلامی اخلاقیات کی گہری تعلیم",
        },
        { title: "کردار سازی", desc: "نیکوکاری اور اسلامی اقدار کی ترویج" },
        { title: "عملی مہارتیں", desc: "زندگی کی مہارتیں اور سماجی شراکت" },
        { title: "معاونت کا نظام", desc: "غریب اور یتیم بچیوں کی خصوصی مدد" },
        { title: "محفوظ ماحول", desc: "اسلامی، پرورش دہندہ اور محفوظ سیکھنے کا ماحول" },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/islamic-girls-madrasa-students-classroom.jpg"
              alt="Madrasa students learning"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{text.intro}</p>

            <div className="mb-6 p-6 rounded-lg bg-emerald-50 border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{text.mission}</h3>
              <p className="text-gray-700">{text.missionText}</p>
            </div>

            <div className="p-6 rounded-lg bg-teal-50 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{text.vision}</h3>
              <p className="text-gray-700">{text.visionText}</p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 text-white text-xl">
                {idx + 1}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{point.title}</h3>
              <p className="text-gray-700">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
