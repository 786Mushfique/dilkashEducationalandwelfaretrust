// interface TrustInfoProps {
//   language: "en" | "ur"
// }

// export default function TrustInfo({ language }: TrustInfoProps) {
//   const content = {
//     en: {
//       title: "About Trust (Legal Description)",
//       description: "Darul Uloom Dilkash lil Banath Trust is a registered charitable, non-profit educational trust.",
//       objectives: [
//         "Promotion of Islamic education and religious training",
//         "Moral and spiritual development of Muslim girls",
//         "Support for underprivileged and orphan students",
//         "Proper utilization of Zakat and donations as per Shariah",
//         "Publication and distribution of Islamic literature",
//         "Community welfare and social services",
//       ],
//     },
//     ur: {
//       title: "ٹرسٹ کے بارے میں (قانونی تعریف)",
//       description: "دار العلوم دلکش للبنات ٹرسٹ ایک رجسٹرڈ، فلاحی، غیر منافع بخش تعلیمی ٹرسٹ ہے۔",
//       objectives: [
//         "اسلامی تعلیم کا فروغ اور دینی تربیت",
//         "مسلمان بچیوں کی اخلاقی و روحانی نشوونما",
//         "غریب اور یتیم طالبات کی معاونت",
//         "زکوٰۃ اور عطیات کا شریعت کے مطابق استعمال",
//         "اسلامی کتابوں کی اشاعت و تقسیم",
//         "سماجی خدمات اور کمیونٹی کی فلاح",
//       ],
//     },
//   }

//   const text = content[language]

//   return (
//     <section id="trust" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
//         </div>

//         <div className="max-w-3xl mx-auto mb-12">
//           <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">{text.description}</p>

//           <div className="grid md:grid-cols-2 gap-4">
//             {text.objectives.map((objective, idx) => (
//               <div key={idx} className="flex gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
//                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex-shrink-0 mt-1 flex items-center justify-center text-white text-sm font-bold">
//                   ✓
//                 </div>
//                 <p className="text-gray-700">{objective}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
