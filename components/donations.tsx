// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"

// interface DonationsProps {
//   language: "en" | "ur"
// }

// export default function Donations({ language }: DonationsProps) {
//   const [selectedType, setSelectedType] = useState<string>("")
//   const [amount, setAmount] = useState<string>("")
//   const [showPaymentDetails, setShowPaymentDetails] = useState(false)

//   const content = {
//     en: {
//       title: "Support Our Mission",
//       subtitle: "Your contributions help sustain Islamic education and support deserving students",
//       types: [
//         { id: "zakat", title: "Zakat", desc: "Obligatory alms for those who qualify" },
//         { id: "sadaqah", title: "Sadaqah", desc: "Voluntary charity and donations" },
//         { id: "lillah", title: "Lillah", desc: "Donations dedicated for Allah's sake" },
//         { id: "sponsorship", title: "Sponsorship", desc: "Support a student's complete education" },
//       ],
//       impact: "Your contribution is Sadaqah Jariyah - a continuous act of charity",
//       donate: "Donate Now",
//       form: {
//         title: "Make a Donation",
//         selectType: "Select Donation Type",
//         amount: "Amount (PKR)",
//         submit: "Proceed to Payment",
//         successMessage: "Thank you for your generous donation! We pray Allah accepts from you.",
//       },
//       paymentDetails: {
//         title: "Payment Details",
//         bankTitle: "Bank Transfer",
//         bankName: "HBL - Habib Bank Limited",
//         accountTitle: "Darul Uloom Dilkash Trust",
//         accountNumber: "IBAN: PK49 0011 0110 0029 4001",
//         qrCode: "Scan QR Code for Mobile Payment",
//       },
//     },
//     ur: {
//       title: "ہمارے مقصد میں معاونت کریں",
//       subtitle: "آپ کے عطیات سے دینی تعلیم کا سلسلہ جاری رہتا ہے",
//       types: [
//         { id: "zakat", title: "زکوٰۃ", desc: "اہل افراد کے لیے واجب خیرات" },
//         { id: "sadaqah", title: "صدقہ", desc: "رضا کارانہ خیرات و عطیات" },
//         { id: "lillah", title: "للہ", desc: "اللہ کی خاطر کے عطیات" },
//         { id: "sponsorship", title: "سرپرستی", desc: "ایک طالبہ کی مکمل تعلیم میں معاونت" },
//       ],
//       impact: "آپ کا تعاون صدقۂ جاریہ ہے - خیرات کا مسلسل عمل",
//       donate: "عطیہ دیں",
//       form: {
//         title: "عطیہ دیں",
//         selectType: "عطیہ کی قسم منتخب کریں",
//         amount: "رقم (روپے)",
//         submit: "ادائیگی کے لیے آگے بڑھیں",
//         successMessage: "آپ کے سخی عطیہ کے لیے شکریہ! ہم دعا کرتے ہیں اللہ قبول فرمائے۔",
//       },
//       paymentDetails: {
//         title: "ادائیگی کی تفصیلات",
//         bankTitle: "بینک ٹرانسفر",
//         bankName: "ایچ بی ایل - حبیب بینک لمیٹڈ",
//         accountTitle: "دار العلوم دلکش ٹرسٹ",
//         accountNumber: "IBAN: PK49 0011 0110 0029 4001",
//         qrCode: "موبائل ادائیگی کے لیے QR کوڈ اسکین کریں",
//       },
//     },
//   }

//   const text = content[language]

//   const handleProceed = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (selectedType && amount) {
//       setShowPaymentDetails(true)
//     }
//   }

//   return (
//     <section id="donations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
//           <p className="text-lg text-gray-600 mb-4">{text.subtitle}</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {text.types.map((type) => (
//             <div
//               key={type.id}
//               onClick={() => {
//                 setSelectedType(type.id)
//                 setShowPaymentDetails(false)
//               }}
//               className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
//                 selectedType === type.id
//                   ? "bg-teal-50 border-teal-500 shadow-lg transform scale-105"
//                   : "bg-white border-teal-200 hover:shadow-lg"
//               }`}
//             >
//               <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-xl">
//                 💚
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2 text-lg">{type.title}</h3>
//               <p className="text-sm text-gray-600">{type.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-2xl mx-auto">
//           {!showPaymentDetails ? (
//             <div className="bg-white rounded-xl p-8 border-2 border-teal-200 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.form.title}</h3>

//               <form onSubmit={handleProceed} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.selectType}</label>
//                   <select
//                     value={selectedType}
//                     onChange={(e) => setSelectedType(e.target.value)}
//                     required
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   >
//                     <option value="">Select donation type...</option>
//                     {text.types.map((type) => (
//                       <option key={type.id} value={type.id}>
//                         {type.title}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.amount}</label>
//                   <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     placeholder="Enter amount"
//                     required
//                     min="100"
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
//                 >
//                   {text.form.submit}
//                 </button>
//               </form>

//               <div className="mt-8 pt-8 border-t border-teal-200 text-center">
//                 <p className="text-lg text-gray-700">
//                   <span className="font-semibold text-teal-700">✨ {text.impact}</span>
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.paymentDetails.title}</h3>

//               <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 mb-6 border border-emerald-200">
//                 <p className="text-sm text-gray-600 mb-2">{text.form.selectType}:</p>
//                 <p className="text-lg font-bold text-gray-900 mb-4">
//                   {text.types.find((t) => t.id === selectedType)?.title} - PKR {amount}
//                 </p>
//               </div>

//               <div className="space-y-6 mb-8">
//                 <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-blue-500">
//                   <h4 className="text-lg font-bold text-gray-900 mb-3">{text.paymentDetails.bankTitle}</h4>
//                   <div className="space-y-2 text-gray-700">
//                     <p>
//                       <span className="font-semibold">{text.paymentDetails.bankName}</span>
//                     </p>
//                     <p>
//                       <span className="font-semibold">Account Title:</span> {text.paymentDetails.accountTitle}
//                     </p>
//                     <p>
//                       <span className="font-semibold">IBAN:</span> {text.paymentDetails.accountNumber}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg bg-green-50 border-l-4 border-green-500">
//                   <h4 className="text-lg font-bold text-gray-900 mb-4">{text.paymentDetails.qrCode}</h4>
//                   <img
//                     src="/qr-code-payment.png"
//                     alt="QR Code"
//                     className="w-40 h-40 mx-auto rounded-lg border-2 border-green-300"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <button
//                   onClick={() => setShowPaymentDetails(false)}
//                   className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
//                 >
//                   {language === "en" ? "Back" : "واپس"}
//                 </button>
//                 <Link
//                   href="/"
//                   className="block text-center py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
//                 >
//                   {language === "en" ? "Back to Home" : "ہوم پر جائیں"}
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }
