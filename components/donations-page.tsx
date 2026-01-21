// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"

// interface DonationsPageProps {
//   language: "en" | "ur"
// }

// export default function DonationsPage({ language }: DonationsPageProps) {
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
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 min-h-screen">
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
//                     src="/qr-code-payment.jpg"
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

"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import StripeCheckout from "./stripe-checkout"
import { checkPaymentStatus } from "@/app/actions/donations"
import { DONATIONS } from "@/lib/donations"

interface DonationsPageProps {
  language: "en" | "ur"
}

export default function DonationsPage({ language }: DonationsPageProps) {
  const [selectedType, setSelectedType] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [donorName, setDonorName] = useState<string>("")
  const [donorEmail, setDonorEmail] = useState<string>("")
  const [step, setStep] = useState<"select" | "donor" | "payment" | "receipt">("select")
  const [receiptData, setReceiptData] = useState<any>(null)
  const [clientSecret, setClientSecret] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "qr" | "stripe" | "">("")

  const content = {
    en: {
      title: "Support Our Mission",
      subtitle: "Your contributions help sustain Islamic education and support deserving students",
      types: [
        { id: "zakat", title: "Zakat", desc: "Obligatory alms for those who qualify" },
        { id: "sadaqah", title: "Sadaqah", desc: "Voluntary charity and donations" },
        { id: "lillah", title: "Lillah", desc: "Donations dedicated for Allah's sake" },
        { id: "sponsorship", title: "Sponsorship", desc: "Support a student's complete education" },
      ],
      impact: "Your contribution is Sadaqah Jariyah - a continuous act of charity",
      donate: "Donate Now",
      form: {
        title: "Make a Donation",
        selectType: "Select Donation Type",
        amount: "Amount (PKR)",
        submit: "Continue",
        donorInfo: "Donor Information",
        donorName: "Your Full Name",
        donorEmail: "Your Email Address",
      },
      payment: {
        title: "Complete Your Payment",
        bankTitle: "Bank Transfer",
        bankName: "HBL - Habib Bank Limited",
        accountTitle: "Dilkash Educational Welfare and Trust",
        accountNumber: "IBAN: PK49 0011 0110 0029 4001",
        qrCode: "QR Code Payment",
        stripe: "Pay with Card (Stripe)",
      },
      receipt: {
        title: "Receipt",
        organizationName: "Dilkash Educational Welfare and Trust",
        receiptId: "Receipt ID",
        donationType: "Donation Type",
        donationAmount: "Amount",
        donorNameLabel: "Donor Name",
        donorEmailLabel: "Email",
        dateLabel: "Date",
        status: "Status",
        statusConfirmed: "Payment Confirmed",
        downloadReceipt: "Download Receipt",
        backToHome: "Back to Home",
        thankYou: "Thank you for your generous contribution!",
      },
    },
    ur: {
      title: "ہمارے مقصد میں معاونت کریں",
      subtitle: "آپ کے عطیات سے دینی تعلیم کا سلسلہ جاری رہتا ہے",
      types: [
        { id: "zakat", title: "زکوٰۃ", desc: "اہل افراد کے لیے واجب خیرات" },
        { id: "sadaqah", title: "صدقہ", desc: "رضا کارانہ خیرات و عطیات" },
        { id: "lillah", title: "للہ", desc: "اللہ کی خاطر کے عطیات" },
        { id: "sponsorship", title: "سرپرستی", desc: "ایک طالبہ کی مکمل تعلیم میں معاونت" },
      ],
      impact: "آپ کا تعاون صدقۂ جاریہ ہے - خیرات کا مسلسل عمل",
      donate: "عطیہ دیں",
      form: {
        title: "عطیہ دیں",
        selectType: "عطیہ کی قسم منتخب کریں",
        amount: "رقم (روپے)",
        submit: "جاری رکھیں",
        donorInfo: "عطیہ دہندہ کی معلومات",
        donorName: "آپ کا مکمل نام",
        donorEmail: "آپ کا ای میل پتہ",
      },
      payment: {
        title: "اپنی ادائیگی مکمل کریں",
        bankTitle: "بینک ٹرانسفر",
        bankName: "ایچ بی ایل - حبیب بینک لمیٹڈ",
        accountTitle: "دلکش تعلیمی بہبود اور ٹرسٹ",
        accountNumber: "IBAN: PK49 0011 0110 0029 4001",
        qrCode: "QR کوڈ ادائیگی",
        stripe: "کارڈ سے ادائیگی کریں (Stripe)",
      },
      receipt: {
        title: "رسید",
        organizationName: "دلکش تعلیمی بہبود اور ٹرسٹ",
        receiptId: "رسید نمبر",
        donationType: "عطیہ کی قسم",
        donationAmount: "رقم",
        donorNameLabel: "عطیہ دہندہ کا نام",
        donorEmailLabel: "ای میل",
        dateLabel: "تاریخ",
        status: "حالت",
        statusConfirmed: "✓ ادائیگی تصدیق شدہ",
        downloadReceipt: "رسید ڈاؤن لوڈ کریں",
        backToHome: "ہوم پر جائیں",
        thankYou: "آپ کے سخی عطیہ کے لیے شکریہ!",
      },
    },
  }

  const text = content[language]

  const handleSelectDonation = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedType && amount) {
      setStep("donor")
    }
  }

  const handleDonorInfo = (e: React.FormEvent) => {
    e.preventDefault()
    if (donorName && donorEmail) {
      setStep("payment")
    }
  }

  const handlePaymentSuccess = async (secret: string) => {
    setClientSecret(secret)
    console.log("[v0] Payment success callback triggered")

    try {
      const status = await checkPaymentStatus(secret)
      console.log("[v0] Payment status check result:", status)

      if (status.paid) {
        const donation = DONATIONS.find((d) => d.id === selectedType)
        const receiptId = `RCP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        setReceiptData({
          receiptId,
          donationType: donation?.name,
          amount: amount,
          date: new Date().toLocaleDateString(),
        })
        console.log("[v0] Setting step to receipt")
        setStep("receipt")
      } else {
        console.log("[v0] Payment not yet confirmed, will retry...")
        // Retry after a short delay
        setTimeout(() => handlePaymentSuccess(secret), 2000)
      }
    } catch (err) {
      console.error("[v0] Error checking payment status:", err)
      // Retry after a short delay
      setTimeout(() => handlePaymentSuccess(secret), 2000)
    }
  }

  const downloadReceipt = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 1100
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Organization name
    ctx.fillStyle = "#000"
    ctx.font = "bold 20px Arial"
    ctx.textAlign = "center"
    ctx.fillText(text.receipt.organizationName, canvas.width / 2, 40)

    // Receipt title
    ctx.font = "bold 24px Arial"
    ctx.fillText(text.receipt.title, canvas.width / 2, 80)

    ctx.font = "14px Arial"
    ctx.textAlign = "left"
    let yPos = 130

    const lines = [
      `${text.receipt.receiptId}: ${receiptData.receiptId}`,
      `${text.receipt.donationType}: ${receiptData.donationType}`,
      `${text.receipt.donationAmount}: PKR ${receiptData.amount}`,
      `${text.receipt.donorNameLabel}: ${donorName}`,
      `${text.receipt.donorEmailLabel}: ${donorEmail}`,
      `${text.receipt.dateLabel}: ${receiptData.date}`,
      `${text.receipt.status}: ${text.receipt.statusConfirmed}`,
    ]

    lines.forEach((line) => {
      ctx.fillText(line, 50, yPos)
      yPos += 35
    })

    // Thank you message
    ctx.fillStyle = "#00a86b"
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("✓ " + text.receipt.thankYou, canvas.width / 2, yPos + 50)

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = `receipt-${receiptData.receiptId}.png`
        link.click()
        URL.revokeObjectURL(url)
      }
    })
  }

  const handlePaymentMethodSelect = (method: "bank" | "qr" | "stripe") => {
    setPaymentMethod(method)
    if (method === "stripe") {
      setStep("payment")
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <p className="text-lg text-gray-600 mb-4">{text.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {text.types.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                selectedType === type.id
                  ? "bg-teal-50 border-teal-500 shadow-lg transform scale-105"
                  : "bg-white border-teal-200 hover:shadow-lg"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-4 text-white font-bold text-xl">
                💚
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {step === "select" && (
            <div className="bg-white rounded-xl p-8 border-2 border-teal-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.form.title}</h3>

              <form onSubmit={handleSelectDonation} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.selectType}</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select donation type...</option>
                    {text.types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.amount}</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                    min="100"
                    max="27900000"
                    className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "Maximum: PKR 27,900,000" : "زیادہ سے زیادہ: 27,900,000 روپے"}
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl"
                >
                  {text.form.submit}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-teal-200 text-center">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-teal-700">✨ {text.impact}</span>
                </p>
              </div>
            </div>
          )}

          {step === "donor" && (
            <div className="bg-white rounded-xl p-8 border-2 border-teal-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.form.donorInfo}</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-6 border border-emerald-200">
                <p className="text-sm text-gray-600 mb-1">{text.form.selectType}:</p>
                <p className="text-lg font-bold text-gray-900">
                  {text.types.find((t) => t.id === selectedType)?.title} - PKR {amount}
                </p>
              </div>

              <form onSubmit={handleDonorInfo} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.donorName}</label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.donorEmail}</label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl"
                >
                  {text.form.submit}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep("select")}
                  className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  {language === "en" ? "Back" : "واپس"}
                </button>
              </form>
            </div>
          )}

          {step === "payment" && paymentMethod === "" && (
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.payment.title}</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-8 border border-emerald-200">
                <p className="text-sm text-gray-600 mb-1">{text.form.selectType}:</p>
                <p className="text-lg font-bold text-gray-900">
                  {text.types.find((t) => t.id === selectedType)?.title} - PKR {amount}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Bank Transfer Option */}
                <button
                  onClick={() => handlePaymentMethodSelect("bank")}
                  className="p-6 border-2 border-teal-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                >
                  <div className="text-3xl mb-3">🏦</div>
                  <h4 className="font-bold text-gray-900 mb-2">{text.payment.bankTitle}</h4>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Direct bank transfer" : "براہ راست بینک منتقلی"}
                  </p>
                </button>

                {/* QR Code Option */}
                <button
                  onClick={() => handlePaymentMethodSelect("qr")}
                  className="p-6 border-2 border-teal-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                >
                  <div className="text-3xl mb-3">📱</div>
                  <h4 className="font-bold text-gray-900 mb-2">{text.payment.qrCode}</h4>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Scan QR code to pay" : "ادائیگی کے لیے QR کوڈ سکین کریں"}
                  </p>
                </button>

                {/* Stripe Card Option */}
                <button
                  onClick={() => handlePaymentMethodSelect("stripe")}
                  className="p-6 border-2 border-teal-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                >
                  <div className="text-3xl mb-3">💳</div>
                  <h4 className="font-bold text-gray-900 mb-2">{text.payment.stripe}</h4>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Credit or debit card" : "کریڈٹ یا ڈیبٹ کارڈ"}
                  </p>
                </button>
              </div>

              <button
                onClick={() => setStep("donor")}
                className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                {language === "en" ? "Back" : "واپس"}
              </button>
            </div>
          )}

          {step === "payment" && paymentMethod === "bank" && (
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.payment.bankTitle}</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-8 border border-emerald-200">
                <p className="text-sm text-gray-600 mb-1">{language === "en" ? "Donation Amount" : "عطیہ کی رقم"}:</p>
                <p className="text-2xl font-bold text-gray-900">PKR {amount}</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-8 space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  {language === "en" ? "Bank Transfer Details" : "بینک منتقلی کی تفصیلات"}
                </h4>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">{language === "en" ? "Bank Name" : "بینک کا نام"}:</p>
                  <p className="text-lg font-bold text-gray-900">{text.payment.bankName}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">{language === "en" ? "Account Title" : "اکاؤنٹ کا نام"}:</p>
                  <p className="text-lg font-bold text-gray-900">{text.payment.accountTitle}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">{language === "en" ? "IBAN" : "IBAN"}</p>
                  <p className="text-lg font-bold text-gray-900 font-mono">{text.payment.accountNumber}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(text.payment.accountNumber)
                      alert(language === "en" ? "IBAN copied to clipboard!" : "IBAN کاپی کر دیا گیا!")
                    }}
                    className="mt-2 text-sm text-teal-600 hover:text-teal-700 font-semibold"
                  >
                    {language === "en" ? "Copy IBAN" : "IBAN کاپی کریں"}
                  </button>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-amber-800 mb-2 font-semibold">{language === "en" ? "Important:" : "اہم:"}</p>
                <p className="text-sm text-amber-700">
                  {language === "en"
                    ? "After making the transfer, please upload a screenshot or receipt below to generate your payment receipt."
                    : "ٹرانسفر کرنے کے بعد، براہ کرم اپنی رسید بنانے کے لیے نیچے ایک اسکرین شاٹ یا رسید اپ لوڈ کریں۔"}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentMethod("")}
                  className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  {language === "en" ? "Back" : "واپس"}
                </button>
              </div>
            </div>
          )}

          {step === "payment" && paymentMethod === "qr" && (
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.payment.qrCode}</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-8 border border-emerald-200">
                <p className="text-sm text-gray-600 mb-1">{language === "en" ? "Donation Amount" : "عطیہ کی رقم"}:</p>
                <p className="text-2xl font-bold text-gray-900">PKR {amount}</p>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8 border-2 border-teal-200 flex flex-col items-center">
                <div className="mb-6">
                  <div className="w-64 h-64 bg-gray-100 rounded-lg border-2 border-teal-300 flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 3h8v8H3z"></path>
                      <path d="M13 3h8v8h-8z"></path>
                      <path d="M3 13h8v8H3z"></path>
                      <path d="M15 15h2v2h-2z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-600">
                  {language === "en" ? "QR code will be displayed here" : "QR کوڈ یہاں دکھایا جائے گا"}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-2">{language === "en" ? "Steps:" : "اقدامات:"}</p>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>
                    {language === "en"
                      ? "Scan the QR code with your mobile phone"
                      : "اپنے موبائل فون سے QR کوڈ سکین کریں"}
                  </li>
                  <li>
                    {language === "en" ? "Complete the payment as instructed" : "ہدایات کے مطابق ادائیگی مکمل کریں"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Upload the payment receipt screenshot"
                      : "ادائیگی کی رسید کا اسکرین شاٹ اپ لوڈ کریں"}
                  </li>
                </ol>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentMethod("")}
                  className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  {language === "en" ? "Back" : "واپس"}
                </button>
              </div>
            </div>
          )}

          {step === "payment" && paymentMethod === "stripe" && (
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.payment.stripe}</h3>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 mb-6 border border-emerald-200">
                <p className="text-sm text-gray-600 mb-1">{text.form.selectType}:</p>
                <p className="text-lg font-bold text-gray-900">
                  {text.types.find((t) => t.id === selectedType)?.title} - PKR {amount}
                </p>
              </div>

              <StripeCheckout
                donationId={selectedType}
                amountInPkr={Number.parseInt(amount)}
                donorName={donorName}
                donorEmail={donorEmail}
                onPaymentSuccess={handlePaymentSuccess}
              />

              <button
                onClick={() => setPaymentMethod("")}
                className="w-full mt-4 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                {language === "en" ? "Back" : "واپس"}
              </button>
            </div>
          )}

          {step === "receipt" && receiptData && (
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-200 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{text.receipt.organizationName}</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">✓ {text.receipt.title}</p>
                  <p className="text-gray-600">{text.receipt.thankYou}</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200 space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.receiptId}:</span>
                    <span className="text-gray-900 font-mono">{receiptData.receiptId}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.donationType}:</span>
                    <span className="text-gray-900">{receiptData.donationType}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.donationAmount}:</span>
                    <span className="text-gray-900 font-bold">PKR {receiptData.amount}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.donorNameLabel}:</span>
                    <span className="text-gray-900">{donorName}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.donorEmailLabel}:</span>
                    <span className="text-gray-900">{donorEmail}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{text.receipt.dateLabel}:</span>
                    <span className="text-gray-900">{receiptData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">{text.receipt.status}:</span>
                    <span className="text-green-600 font-bold">✓ {text.receipt.statusConfirmed}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                <Button
                  onClick={downloadReceipt}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl"
                >
                  {text.receipt.downloadReceipt}
                </Button>
                <Link
                  href="/"
                  className="block text-center py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  {text.receipt.backToHome}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
