// interface FooterProps {
//   language: "en" | "ur"
// }

// export default function Footer({ language }: FooterProps) {
//   const content = {
//     en: {
//       about: "About",
//       courses: "Courses",
//       admissions: "Admissions",
//       donations: "Donations",
//       contact: "Contact Us",
//       quickLinks: "Quick Links",
//       address: "Address",
//       phone: "Phone",
//       email: "Email",
//       rights: "© 2026 Darul Uloom Dilkash Lil Banath. All rights reserved.",
//       mission: "Nurturing Muslim women grounded in faith, knowledge, and values.",
//     },
//     ur: {
//       about: "تعارف",
//       courses: "نصاب",
//       admissions: "داخلہ",
//       donations: "عطیات",
//       contact: "رابطہ کریں",
//       quickLinks: "فوری روابط",
//       address: "پتہ",
//       phone: "فون",
//       email: "ای میل",
//       rights: "© 2026 دار العلوم دلکش للبنات - تمام حقوق محفوظ ہیں",
//       mission: "مسلمان خواتین کی تعلیم اور تربیت میں مبادرت",
//     },
//   }

//   const text = content[language]

//   return (
//     <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-12">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Darul Uloom</h3>
//             <p className="text-gray-400 mb-4">{text.mission}</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold mb-4">{text.quickLinks}</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <a href="#about" className="hover:text-teal-400 transition-colors">
//                   {text.about}
//                 </a>
//               </li>
//               <li>
//                 <a href="#courses" className="hover:text-teal-400 transition-colors">
//                   {text.courses}
//                 </a>
//               </li>
//               <li>
//                 <a href="#admissions" className="hover:text-teal-400 transition-colors">
//                   {text.admissions}
//                 </a>
//               </li>
//               <li>
//                 <a href="#donations" className="hover:text-teal-400 transition-colors">
//                   {text.donations}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold mb-4">{text.contact}</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li className="flex items-center gap-2">
//                 <span>📍</span>
//                 <span>{text.address}</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <span>📞</span>
//                 <span>+92 300 1234567</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <span>✉️</span>
//                 <span>info@darululoom.edu</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h4 className="font-bold mb-4">Connect</h4>
//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors"
//               >
//                 f
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors"
//               >
//                 𝕏
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors"
//               >
//                 📷
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//           <p>{text.rights}</p>
//         </div>
//       </div>
//     </footer>
//   )
// }


"use client"

import Link from "next/link"

interface FooterProps {
  language: "en" | "ur"
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      logo: "Darul Uloom Dilkash Lil Banath",
      about: ["Mission", "Team", "Newsletter"],
      support: ["Contact", "Refund Policy", "FAQ’s"],
      social: ["Instagram", "LinkedIn", "YouTube"],
      copyright: "© 2026 Darul Uloom Dilkash Lil Banath",
      terms: "Terms of Service",
    },
    ur: {
      logo: "دار العلوم دلکش للبنات",
      about: ["مشن", "ٹیم", "نیوز لیٹر"],
      support: ["رابطہ", "ریفنڈ پالیسی", "عمومی سوالات"],
      social: ["انسٹاگرام", "لنکڈ ان", "یوٹیوب"],
      copyright: "© 2026 دار العلوم دلکش للبنات",
      terms: "استعمال کی شرائط",
    },
  }

  const text = content[language]

  return (
    <footer className="bg-gradient-to-tr from-teal-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top section: logo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{text.logo}</h2>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {text.about.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-green-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {text.support.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-green-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              {text.social.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-green-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/40 mb-4" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <span>{text.copyright}</span>
          <span className="my-2 md:my-0">{text.terms}</span>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:text-green-200 transition-colors"
          >
            Back to top <span className="ml-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}


