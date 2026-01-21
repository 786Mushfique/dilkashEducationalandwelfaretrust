// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, Globe } from "lucide-react"

// interface HeaderProps {
//   language: "en" | "ur"
//   setLanguage: (lang: "en" | "ur") => void
// }

// export default function Header({ language, setLanguage }: HeaderProps) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const pathname = usePathname()

//   const navItems = {
//     en: [
//       { label: "Home", href: "/" },
//       { label: "About", href: "/about" },
//       { label: "Trust", href: "/trust" },
//       { label: "Objectives", href: "/objectives" },
//       { label: "Courses", href: "/courses" },
//       { label: "Events", href: "/events" },
//       { label: "Gallery", href: "/gallery" },
//       { label: "Admissions", href: "/admissions" },
//       { label: "Donations", href: "/donations" },
//       { label: "Contact", href: "/contact" },
//     ],
//     ur: [
//       { label: "ہوم", href: "/" },
//       { label: "تعارف", href: "/about" },
//       { label: "ٹرسٹ", href: "/trust" },
//       { label: "اغراض", href: "/objectives" },
//       { label: "نصاب", href: "/courses" },
//       { label: "تقریبات", href: "/events" },
//       { label: "گیلری", href: "/gallery" },
//       { label: "داخلہ", href: "/admissions" },
//       { label: "عطیات", href: "/donations" },
//       { label: "رابطہ", href: "/contact" },
//     ],
//   }

//   const currentNav = navItems[language]

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//             <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//               <img
//                 src="/images/chatgpt-20image-20jan-2015-2c-202026-2c-2010-43-00-20am.png"
//                 alt="Logo"
//                 className="w-full h-full rounded-lg object-cover"
//               />
//             </div>
//             <div className="hidden sm:block">
//               <p className="font-bold text-sm text-teal-800">DILKASH EDUCATIONAL & </p>
//               <p className="font-bold text-sm text-teal-800">WELFARE TRUST</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-4 overflow-x-auto">
//             {currentNav.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className={`${
//                   pathname === item.href ? "text-teal-600 font-bold" : "text-gray-700"
//                 } hover:text-teal-600 transition-colors font-medium text-sm whitespace-nowrap`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Controls */}
//           <div className="flex items-center gap-4">
//             {/* Language Toggle */}
//             <button
//               onClick={() => setLanguage(language === "en" ? "ur" : "en")}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200"
//             >
//               <Globe className="w-4 h-4 text-blue-600" />
//               <span className="text-sm font-medium text-blue-700">{language === "en" ? "اردو" : "EN"}</span>
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <nav className="lg:hidden pb-4 border-t border-teal-100 mt-4 max-h-96 overflow-y-auto">
//             {currentNav.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block py-2 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"

interface HeaderProps {
  language: "en" | "ur"
  setLanguage: (lang: "en" | "ur") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = {
    en: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Trust", href: "/trust" },
      { label: "Objectives", href: "/objectives" },
      { label: "Courses", href: "/courses" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Admissions", href: "/admissions" },
      { label: "Donations", href: "/donations" },
      { label: "Contact", href: "/contact" },
    ],
    ur: [
      { label: "ہوم", href: "/" },
      { label: "تعارف", href: "/about" },
      { label: "ٹرسٹ", href: "/trust" },
      { label: "اغراض", href: "/objectives" },
      { label: "نصاب", href: "/courses" },
      { label: "تقریبات", href: "/events" },
      { label: "گیلری", href: "/gallery" },
      { label: "داخلہ", href: "/admissions" },
      { label: "عطیات", href: "/donations" },
      { label: "رابطہ", href: "/contact" },
    ],
  }

  const currentNav = navItems[language]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#00978B] border-b border-[#007F75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-20 h-20  rounded-lg overflow-hidden">
              <img
                src="/images/logodilkash.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-bold text-lg text-white">
               Darul Uloom Dilkash Lil Banat
              </p>
              <p className="font-bold text-sm text-white">
                
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {currentNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-[#33B5AB] font-bold border-b-2 border-[#33B5AB]"
                    : "text-white"
                } hover:text-[#33B5AB] transition-colors font-medium text-sm`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ur" : "en")}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/30 transition"
            >
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {language === "en" ? "اردو" : "EN"}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 bg-[#00978B] border border-[#007F75] rounded-lg">
            {currentNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 text-white hover:text-[#33B5AB] hover:bg-[#007F75] rounded transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
