// "use client"

// import { useState } from "react"
// import Header from "@/components/header"
// import DonationsPage from "@/components/donations-page"
// import Footer from "@/components/footer"

// export default function DonationsPageComponent() {
//   const [language, setLanguage] = useState<"en" | "ur">("en")

//   return (
//     <div className={language === "ur" ? "rtl" : "ltr"}>
//       <Header language={language} setLanguage={setLanguage} />
//       <div className="pt-24">
//         <DonationsPage language={language} />
//       </div>
//       <Footer language={language} />
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import DonationsPage from "@/components/donations-page"

// export default function Page() {
//   const [language, setLanguage] = useState<"en" | "ur">("en")

//   return (
//     <div className={language === "ur" ? "rtl" : "ltr"}>
//       <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-emerald-600">Darul Uloom Dilkash</h1>
//           <button
//             onClick={() => setLanguage(language === "en" ? "ur" : "en")}
//             className="px-4 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all"
//           >
//             {language === "en" ? "اردو" : "English"}
//           </button>
//         </div>
//       </header>
//       <main className="pt-0">
//         <DonationsPage language={language} />
//       </main>
//       <footer className="bg-gray-900 text-white py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="mb-2">
//             © 2026 Darul Uloom Dilkash Trust. {language === "en" ? "All rights reserved." : "تمام حقوق محفوظ ہیں۔"}
//           </p>
//           <p className="text-gray-400">
//             {language === "en"
//               ? "Supporting Islamic education and student sponsorship"
//               : "دینی تعلیم اور طالب علموں کی سرپرستی میں معاونت"}
//           </p>
//         </div>
//       </footer>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import DonationsPage from "@/components/donations-page"

export default function Page() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-600">Darul Uloom Dilkash lil banat</h1>
          <button
            onClick={() => setLanguage(language === "en" ? "ur" : "en")}
            className="px-4 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all"
          >
            {language === "en" ? "اردو" : "English"}
          </button>
        </div>
      </header>
      <main className="pt-0">
        <DonationsPage language={language} />
      </main>
      <footer className="bg-emerald-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            © 2026 Darul Uloom Dilkash Trust. {language === "en" ? "All rights reserved." : "تمام حقوق محفوظ ہیں۔"}
          </p>
          <p className="text-white-400">
            {language === "en"
              ? "Supporting Islamic education and student sponsorship"
              : "دینی تعلیم اور طالب علموں کی سرپرستی میں معاونت"}
          </p>
        </div>
      </footer>
    </div>
  )
}
