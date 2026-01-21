"use client"

interface PrincipalMessageProps {
  language: "en" | "ur"
}

export default function PrincipalMessage({ language }: PrincipalMessageProps) {
  const content = {
    en: {
      title: "Principal's Message",
      message: `By the grace of Allah, Darul Uloom Dilkash lil Banath focuses equally on education and character building. Our goal is to nurture girls who are not only knowledgeable but also morally strong and spiritually grounded. With the cooperation of parents and teachers, we strive to prepare a righteous generation that will be a beacon of light for society.`,
      closing: "May Allah accept our efforts and guide us on the right path. Ameen.",
      signatory: "- Principal, Darul Uloom Dilkash Lil Banath",
    },
    ur: {
      title: "پرنسپل کا پیغام",
      message: `الحمد للہ، دار العلوم دلکش للبنات ایک ایسا ادارہ ہے جہاں تعلیم کے ساتھ تربیت کو بنیادی حیثیت حاصل ہے۔ ہم چاہتے ہیں کہ بچیاں صرف علم حاصل نہ کریں بلکہ اپنے کردار، حیا اور دین داری میں بھی مضبوط ہوں۔ والدین اور اساتذہ کے باہمی تعاون سے ہم ایک صالح نسل کی تیاری میں مبادرت ہیں۔`,
      closing: "اللہ تعالیٰ ہماری کوششوں کو قبول فرمائے اور ہمیں سیدھی راہ پر رکھے۔ آمین۔",
      signatory: "- پرنسپل، دار العلوم دلکش للبنات",
    },
  }

  const text = content[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Principal Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-400 rounded-2xl blur-lg opacity-50"></div>
              <img
                src="/female-principal-professional-portrait-islamic-dre.jpg"
                alt="Principal"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Message Content */}
          <div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 sm:p-12 rounded-xl border-2 border-teal-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{text.message}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">{text.closing}</p>
              <p className="text-right font-semibold text-teal-800 text-lg">{text.signatory}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
