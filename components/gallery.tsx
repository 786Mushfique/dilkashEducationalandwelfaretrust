// interface GalleryProps {
//   language: "en" | "ur"
// }

// export default function Gallery({ language }: GalleryProps) {
//   const content = {
//     en: {
//       title: "Gallery",
//       description:
//         "The gallery displays educational activities, Islamic programs, annual events, and important moments while strictly maintaining Islamic modesty and privacy.",
//       note: "Photo Gallery coming soon - All images maintain Islamic guidelines and privacy standards",
//     },
//     ur: {
//       title: "گیلری",
//       description:
//         "گیلری میں مدرسہ کی تعلیمی سرگرمیاں، دینی پروگرامز، سالانہ تقریبات اور اہم لمحات دکھائے گئے ہیں۔ تمام تصاویر میں مکمل اسلامی پردے اور رازداری کا خیال رکھا جاتا ہے۔",
//       note: "تصویری گیلری جلد آنے والی ہے - تمام تصاویر اسلامی رہنمائی کی پابندیوں کے مطابق ہیں",
//     },
//   }

//   const text = content[language]

//   return (
//     <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <p className="text-lg text-gray-700 text-center mb-12">{text.description}</p>

//           <div className="bg-gradient-to-br from-teal-50 to-green-50 p-12 rounded-xl border-2 border-dashed border-teal-300 text-center">
//             <div className="text-6xl mb-4">📷</div>
//             <p className="text-gray-600 text-lg">{text.note}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
