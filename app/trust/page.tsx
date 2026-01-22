// "use client"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ChevronDown, Play, X } from "lucide-react"

// // ============================================================================
// // HEADER COMPONENT
// // ============================================================================

// interface HeaderProps {
//   language: "en" | "ur"
//   onLanguageChange: (lang: "en" | "ur") => void
//   onDonateClick: () => void
// }

// function Header({ language, onLanguageChange, onDonateClick }: HeaderProps) {
//   const content = {
//     en: {
//       email: "info@dikash.org",
//       phone: "+92-300-1234567",
//       address: "Karachi, Pakistan",
//     },
//     ur: {
//       email: "معلومات@dikash.org",
//       phone: "+92-300-1234567",
//       address: "کراچی، پاکستان",
//     },
//   }

//   return (
//     <header className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Name */}
//           <div className="flex items-center gap-4">
//             <img
//               src="/images/chatgpt-20image-20jan-2015-2c-202026-2c-2010-43-00-20am.png"
//               alt="Dikash Foundation"
//               className="h-16 w-16"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Dikash Foundation</h1>
//               <p className="text-sm text-gray-600">
//                 {language === "en" ? "A Public Charitable Trust" : "ایک سرکاری امدادی ٹرسٹ"}
//               </p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="hidden lg:flex items-center gap-8 text-sm">
//             <div className="flex items-center gap-2 text-gray-600">
//               <Mail size={18} />
//               <span>{content[language].email}</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <Phone size={18} />
//               <span>{content[language].phone}</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <MapPin size={18} />
//               <span>{content[language].address}</span>
//             </div>
//           </div>

//           {/* Right Side: Social Links, Language Toggle, Donate Button */}
//           <div className="flex items-center gap-6">
//             <div className="flex gap-4">
//               <a href="#" className="text-gray-600 hover:text-blue-600">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-pink-600">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-red-600">
//                 <Youtube size={20} />
//               </a>
//             </div>

//             {/* Language Toggle */}
//             <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
//               <button
//                 onClick={() => onLanguageChange("en")}
//                 className={`px-3 py-1 rounded text-sm font-medium transition ${
//                   language === "en" ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 EN
//               </button>
//               <button
//                 onClick={() => onLanguageChange("ur")}
//                 className={`px-3 py-1 rounded text-sm font-medium transition ${
//                   language === "ur" ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 اردو
//               </button>
//             </div>

//             {/* Donate Now Button */}
//             <button
//               onClick={onDonateClick}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
//             >
//               {language === "en" ? "Donate Now" : "ابھی عطیہ کریں"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// // ============================================================================
// // NAVBAR COMPONENT
// // ============================================================================

// interface NavbarProps {
//   currentPage: string
//   setCurrentPage: (page: string) => void
//   language: "en" | "ur"
// }

// function Navbar({ currentPage, setCurrentPage, language }: NavbarProps) {
//   const navItems = {
//     en: ["Home", "About Us", "Gallery", "Projects", "Donate", "Contact Us"],
//     ur: ["ہوم", "ہمارے بارے میں", "گیلری", "منصوبے", "عطیہ", "رابطہ کریں"],
//   }

//   const navKeys = ["home", "about", "gallery", "projects", "donate", "contact"]

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-center gap-8 py-4">
//           {navItems[language].map((label, index) => (
//             <button
//               key={navKeys[index]}
//               onClick={() => setCurrentPage(navKeys[index])}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 currentPage === navKeys[index] ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:text-blue-600"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// // ============================================================================
// // HOME PAGE COMPONENT
// // ============================================================================

// interface HomePageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
// }

// function HomePage({ language, onDonationClick }: HomePageProps) {
//   const [activeEventIndex, setActiveEventIndex] = useState(0)

//   const content = {
//     en: {
//       welcomeTitle: "Welcome to Dikash Foundation",
//       welcomeText:
//         "Dikash Foundation is a public charitable trust dedicated to serving humanity and uplifting communities. We work tirelessly to provide education, healthcare, food security, and spiritual development to those in need.",
//       upcomingEvents: "Upcoming Events",
//       secretarySpeech: "Secretary's Message",
//       donateForCause: "Support Our Cause",
//       donateDesc: "Your generous donation helps us continue our mission to serve the community.",
//     },
//     ur: {
//       welcomeTitle: "دکاش فاؤنڈیشن میں خوش آمدید",
//       welcomeText:
//         "دکاش فاؤنڈیشن ایک سرکاری امدادی ٹرسٹ ہے جو بنی نوع انسان کی خدمت اور کمیونٹی کی ترقی کے لیے وقف ہے۔ ہم ضرورت مندوں کو تعلیم، صحت کی دیکھ بھال، خوراک کی حفاظت اور روحانی ترقی فراہم کرنے کے لیے مسلسل کام کرتے ہیں۔",
//       upcomingEvents: "آنے والے ایونٹس",
//       secretarySpeech: "سیکریٹری کا پیغام",
//       donateForCause: "ہمارے مقصد کی حمایت کریں",
//       donateDesc: "آپ کا سخی عطیہ ہمیں کمیونٹی کی خدمت کا مشن جاری رکھنے میں مدد کرتا ہے۔",
//     },
//   }

//   const events = [
//     {
//       title: language === "en" ? "Qurbani Distribution" : "قربانی کی تقسیم",
//       image: "/qurbani-distribution-charity-event.jpg",
//       date: "2024-02-15",
//     },
//     {
//       title: language === "en" ? "Food Bazaar" : "خوراک بازار",
//       image: "/food-bazaar-community-event.jpg",
//       date: "2024-02-20",
//     },
//     {
//       title: language === "en" ? "Medical Camp" : "میڈیکل کیمپ",
//       image: "/medical-camp-health-service.jpg",
//       date: "2024-02-25",
//     },
//   ]

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Banner with Animation */}
//       <div className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg overflow-hidden mb-12 animate-pulse">
//         <img src="/islamic-charity-banner-mosque.jpg" alt="Banner" className="w-full h-full object-cover opacity-70" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h2 className="text-4xl font-bold mb-4">{content[language].welcomeTitle}</h2>
//             <p className="text-lg max-w-2xl mx-auto">{content[language].welcomeText}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Sidebar */}
//         <div className="lg:col-span-2">
//           {/* Activities Gallery */}
//           <section className="mb-12">
//             <h3 className="text-2xl font-bold mb-6">{language === "en" ? "Our Activities" : "ہماری سرگرمیاں"}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {["charity", "community", "education", "health"].map((activity, index) => (
//                 <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//                   <img
//                     src={`/.jpg?height=250&width=350&query=${activity}-activity-charity`}
//                     alt={activity}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4 bg-white">
//                     <h4 className="font-bold capitalize">{activity}</h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Video Section */}
//           <section className="mb-12">
//             <h3 className="text-2xl font-bold mb-6">{language === "en" ? "Feeding Program" : "خوراک کا پروگرام"}</h3>
//             <div className="relative bg-black rounded-lg overflow-hidden h-96">
//               <img
//                 src="/poor-people-food-distribution-charity.jpg"
//                 alt="Feeding Program"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition">
//                   <Play size={32} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Sidebar */}
//         <div className="space-y-8">
//           {/* Upcoming Events */}
//           <section className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-bold mb-4">{content[language].upcomingEvents}</h3>
//             <div className="space-y-4">
//               {events.map((event, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setActiveEventIndex(index)}
//                   className={`cursor-pointer rounded-lg overflow-hidden transition ${
//                     activeEventIndex === index ? "ring-2 ring-blue-600" : ""
//                   }`}
//                 >
//                   <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-32 object-cover" />
//                   <div className="p-2 bg-gray-50">
//                     <p className="font-semibold text-sm">{event.title}</p>
//                     <p className="text-xs text-gray-600">{event.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Secretary Speech */}
//           <section className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-bold mb-4">{content[language].secretarySpeech}</h3>
//             <div className="relative bg-black rounded-lg overflow-hidden h-48">
//               <img
//                 src="/secretary-speech-video.jpg"
//                 alt="Secretary"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-3 hover:bg-gray-100">
//                   <Play size={24} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Donate Section */}
//           <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white">
//             <img
//               src="/images/chatgpt-20image-20jan-2015-2c-202026-2c-2010-43-00-20am.png"
//               alt="Donate"
//               className="w-full h-40 object-contain mb-4"
//             />
//             <h3 className="text-lg font-bold mb-2">{content[language].donateForCause}</h3>
//             <p className="text-sm mb-4">{content[language].donateDesc}</p>
//             <button
//               onClick={() =>
//                 onDonationClick("general", "Support Our Cause", "Help us continue our mission to serve the community")
//               }
//               className="w-full bg-white text-green-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               {language === "en" ? "Donate Now" : "ابھی عطیہ کریں"}
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // ABOUT PAGE COMPONENT
// // ============================================================================

// interface AboutPageProps {
//   language: "en" | "ur"
// }

// function AboutPage({ language }: AboutPageProps) {
//   const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

//   const content = {
//     en: {
//       title: "About Us",
//       description: "Learn more about Dikash Foundation and our mission.",
//       documents: [
//         { id: "fcra", label: "FCRA Document" },
//         { id: "12aa", label: "12AA Document" },
//         { id: "80g", label: "80G Document" },
//         { id: "fcraacc", label: "FCRA Account Details" },
//         { id: "cert", label: "Certificate of Registration" },
//         { id: "receipt", label: "Donation Receipt" },
//       ],
//     },
//     ur: {
//       title: "ہمارے بارے میں",
//       description: "دکاش فاؤنڈیشن اور ہمارے مشن کے بارے میں مزید معلومات حاصل کریں۔",
//       documents: [
//         { id: "fcra", label: "FCRA دستاویز" },
//         { id: "12aa", label: "12AA دستاویز" },
//         { id: "80g", label: "80G دستاویز" },
//         { id: "fcraacc", label: "FCRA اکاؤنٹ تفصیلات" },
//         { id: "cert", label: "رجسٹریشن کا سرٹیفکیٹ" },
//         { id: "receipt", label: "عطیہ رسید" },
//       ],
//     },
//   }

//   const docs = content[language].documents

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
//       <p className="text-gray-600 mb-8">{content[language].description}</p>

//       <div className="space-y-4">
//         {docs.map((doc) => (
//           <div key={doc.id} className="border border-gray-300 rounded-lg">
//             <button
//               onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
//               className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
//             >
//               <span className="font-medium">{doc.label}</span>
//               <ChevronDown size={20} className={`transition ${expandedDoc === doc.id ? "rotate-180" : ""}`} />
//             </button>

//             {expandedDoc === doc.id && (
//               <div className="border-t border-gray-200 p-4 bg-gray-50">
//                 <div className="bg-white rounded-lg p-6 border-2 border-gray-300 flex items-center justify-center h-96">
//                   <p className="text-gray-500">
//                     {language === "en" ? `${doc.label} will be displayed here` : `${doc.label} یہاں دکھایا جائے گا`}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // GALLERY PAGE COMPONENT
// // ============================================================================

// interface GalleryPageProps {
//   language: "en" | "ur"
// }

// function GalleryPage({ language }: GalleryPageProps) {
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

//   const categories = {
//     en: [
//       { id: "dawah", label: "Dawah and Tarbiyah" },
//       { id: "water", label: "Water and Sanitation" },
//       { id: "community", label: "Community Support" },
//       { id: "nutrition", label: "Nutrition" },
//       { id: "health", label: "Health" },
//       { id: "masjid", label: "Masjid Construction" },
//       { id: "widow", label: "Widow Support" },
//     ],
//     ur: [
//       { id: "dawah", label: "دعوت اور تربیت" },
//       { id: "water", label: "پانی اور صفائی" },
//       { id: "community", label: "کمیونٹی کی حمایت" },
//       { id: "nutrition", label: "غذائی معیار" },
//       { id: "health", label: "صحت" },
//       { id: "masjid", label: "مسجد کی تعمیر" },
//       { id: "widow", label: "بیوہ ہلال" },
//     ],
//   }

//   const categoryList = categories[language]

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Gallery" : "گیلری"}</h1>

//       <div className="space-y-6">
//         {categoryList.map((category) => (
//           <div key={category.id}>
//             <button
//               onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
//               className="w-full flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//             >
//               <span className="font-medium text-lg">{category.label}</span>
//               <ChevronDown size={24} className={`transition ${expandedCategory === category.id ? "rotate-180" : ""}`} />
//             </button>

//             {expandedCategory === category.id && (
//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[1, 2, 3, 4, 5, 6].map((index) => (
//                   <div
//                     key={index}
//                     className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105"
//                   >
//                     <img
//                       src={`/.jpg?height=300&width=400&query=${category.id}-charity-activity-${index}`}
//                       alt={`${category.label} ${index}`}
//                       className="w-full h-64 object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // PROJECTS PAGE COMPONENT
// // ============================================================================

// interface ProjectsPageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
// }

// function ProjectsPage({ language, onDonationClick }: ProjectsPageProps) {
//   const [filter, setFilter] = useState<"all" | "running">("all")

//   const content = {
//     en: {
//       allProjects: "All Projects",
//       runningProjects: "Running Projects",
//     },
//     ur: {
//       allProjects: "تمام منصوبے",
//       runningProjects: "جاری منصوبے",
//     },
//   }

//   const projects = [
//     {
//       id: 1,
//       title: { en: "Water Well Installation", ur: "پانی کے کنویں کی تنصیب" },
//       description: {
//         en: "Providing clean drinking water to remote areas",
//         ur: "دور دراز علاقوں میں صاف پینے کا پانی فراہم کرنا",
//       },
//       status: "running",
//       image: "/water-well-installation-charity.jpg",
//     },
//     {
//       id: 2,
//       title: { en: "Education Scholarship", ur: "تعلیمی وظیفہ" },
//       description: {
//         en: "Supporting underprivileged students with scholarships",
//         ur: "محروم طلباء کو وظائف سے سہارا دینا",
//       },
//       status: "all",
//       image: "/education-scholarship-students.jpg",
//     },
//     {
//       id: 3,
//       title: { en: "Medical Health Camp", ur: "میڈیکل ہیلتھ کیمپ" },
//       description: {
//         en: "Free medical services for poor communities",
//         ur: "غریب کمیونٹیز کے لیے مفت میڈیکل سروسز",
//       },
//       status: "running",
//       image: "/medical-health-camp-charity.jpg",
//     },
//     {
//       id: 4,
//       title: { en: "Food Security Initiative", ur: "خوراک کی حفاظت کی کوشش" },
//       description: {
//         en: "Distributing food packages to needy families",
//         ur: "ضرورت مند خاندانوں کو خوراک کے پیکج تقسیم کرنا",
//       },
//       status: "all",
//       image: "/food-security-distribution-poor.jpg",
//     },
//   ]

//   const filteredProjects = filter === "running" ? projects.filter((p) => p.status === "running") : projects

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Projects" : "منصوبے"}</h1>

//       {/* Filter Dropdown */}
//       <div className="mb-8 flex gap-4">
//         <button
//           onClick={() => setFilter("all")}
//           className={`px-6 py-2 rounded-lg font-medium transition ${
//             filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {content[language].allProjects}
//         </button>
//         <button
//           onClick={() => setFilter("running")}
//           className={`px-6 py-2 rounded-lg font-medium transition ${
//             filter === "running" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {content[language].runningProjects}
//         </button>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {filteredProjects.map((project) => (
//           <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
//             {/* Project Image */}
//             <div className="relative h-48 bg-black overflow-hidden">
//               <img
//                 src={project.image || "/placeholder.svg"}
//                 alt={project.title[language]}
//                 className="w-full h-full object-cover opacity-70"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-3 hover:bg-gray-100">
//                   <Play size={28} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
//               <p className="text-gray-600 mb-4">{project.description[language]}</p>
//               <button
//                 onClick={() =>
//                   onDonationClick(project.id.toString(), project.title[language], project.description[language])
//                 }
//                 className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 {language === "en" ? "Support This Project" : "اس منصوبے کی حمایت کریں"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // DONATE PAGE COMPONENT
// // ============================================================================

// interface DonatePageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
// }

// function DonatePage({ language, onDonationClick }: DonatePageProps) {
//   const donationTypes = {
//     en: [
//       {
//         id: "qurbani",
//         title: "Donate for Qurbani",
//         description: "Help us perform Qurbani for the poor",
//         icon: "🐑",
//       },
//       {
//         id: "food",
//         title: "Donate for Food",
//         description: "Support our food distribution programs",
//         icon: "🍽️",
//       },
//       {
//         id: "education",
//         title: "Donate for Education",
//         description: "Help underprivileged students pursue education",
//         icon: "📚",
//       },
//       {
//         id: "house",
//         title: "Donate for House",
//         description: "Help families build their homes",
//         icon: "🏠",
//       },
//       {
//         id: "masjid",
//         title: "Donate for Masjid",
//         description: "Support the construction of masjids",
//         icon: "🕌",
//       },
//       {
//         id: "others",
//         title: "Donate for Others",
//         description: "Support other charitable causes",
//         icon: "❤️",
//       },
//     ],
//     ur: [
//       {
//         id: "qurbani",
//         title: "قربانی کے لیے عطیہ",
//         description: "غریبوں کے لیے قربانی کرنے میں ہمیں مدد کریں",
//         icon: "🐑",
//       },
//       {
//         id: "food",
//         title: "خوراک کے لیے عطیہ",
//         description: "ہمارے خوراک کی تقسیم کے پروگراموں کی حمایت کریں",
//         icon: "🍽️",
//       },
//       {
//         id: "education",
//         title: "تعلیم کے لیے عطیہ",
//         description: "محروم طلباء کو تعلیم حاصل کرنے میں مدد کریں",
//         icon: "📚",
//       },
//       {
//         id: "house",
//         title: "گھر کے لیے عطیہ",
//         description: "خاندانوں کو اپنے گھر بنانے میں مدد کریں",
//         icon: "🏠",
//       },
//       {
//         id: "masjid",
//         title: "مسجد کے لیے عطیہ",
//         description: "مساجد کی تعمیر کی حمایت کریں",
//         icon: "🕌",
//       },
//       {
//         id: "others",
//         title: "دوسری چیزوں کے لیے عطیہ",
//         description: "دوسری خیراتی وجوہات کی حمایت کریں",
//         icon: "❤️",
//       },
//     ],
//   }

//   const types = donationTypes[language]

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-4">{language === "en" ? "Donate" : "عطیہ دیں"}</h1>
//       <p className="text-gray-600 mb-12">
//         {language === "en"
//           ? "Choose a cause you want to support"
//           : "اپنی پسند کا مقصد منتخب کریں جس کی حمایت کرنا چاہتے ہیں"}
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {types.map((type) => (
//           <button
//             key={type.id}
//             onClick={() => onDonationClick(type.id, type.title, type.description)}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-left hover:transform hover:scale-105"
//           >
//             <div className="text-4xl mb-4">{type.icon}</div>
//             <h3 className="text-xl font-bold mb-2">{type.title}</h3>
//             <p className="text-gray-600 mb-4">{type.description}</p>
//             <div className="text-blue-600 font-medium">{language === "en" ? "Learn More →" : "مزید معلومات →"}</div>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // CONTACT PAGE COMPONENT
// // ============================================================================

// interface ContactPageProps {
//   language: "en" | "ur"
// }

// function ContactPage({ language }: ContactPageProps) {
//   const content = {
//     en: {
//       title: "Contact Us",
//       email: "Email: info@dikash.org",
//       phone: "Phone: +92-300-1234567",
//       address: "Address: Karachi, Pakistan",
//       form: {
//         name: "Your Name",
//         email: "Your Email",
//         message: "Your Message",
//         submit: "Send Message",
//       },
//     },
//     ur: {
//       title: "ہمسے رابطہ کریں",
//       email: "ای میل: معلومات@dikash.org",
//       phone: "فون: +92-300-1234567",
//       address: "پتہ: کراچی، پاکستان",
//       form: {
//         name: "آپ کا نام",
//         email: "آپ کی ای میل",
//         message: "آپ کا پیغام",
//         submit: "پیغام بھیجیں",
//       },
//     },
//   }

//   const c = content[language]

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{c.title}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.email}</p>
//           </div>
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.phone}</p>
//           </div>
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.address}</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder={c.form.name}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <input
//             type="email"
//             placeholder={c.form.email}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <textarea
//             placeholder={c.form.message}
//             rows={4}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {c.form.submit}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // DONATION MODAL COMPONENT
// // ============================================================================

// interface DonationModalProps {
//   isOpen: boolean
//   onClose: () => void
//   donation: {
//     type: string
//     title: string
//     description: string
//   }
//   language: "en" | "ur"
// }

// function DonationModal({ isOpen, onClose, donation, language }: DonationModalProps) {
//   if (!isOpen) return null

//   const content = {
//     en: {
//       bankDetails: "Bank Details",
//       qrCode: "QR Code for Payment",
//       accountName: "Account Name: Dikash Foundation",
//       accountNumber: "Account Number: 1234567890",
//       bankName: "Bank: Habib Bank Limited",
//       iban: "IBAN: PK36ABOC0000001234567890",
//       whyDonate: "Why Donate for This?",
//       close: "Close",
//     },
//     ur: {
//       bankDetails: "بینک کی تفصیلات",
//       qrCode: "ادائیگی کے لیے QR کوڈ",
//       accountName: "اکاؤنٹ کا نام: دکاش فاؤنڈیشن",
//       accountNumber: "اکاؤنٹ نمبر: 1234567890",
//       bankName: "بینک: ہبیب بینک لمیٹڈ",
//       iban: "IBAN: PK36ABOC0000001234567890",
//       whyDonate: "اس کے لیے عطیہ کیوں دیں؟",
//       close: "بند کریں",
//     },
//   }

//   const c = content[language]

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h2 className="text-2xl font-bold">{donation.title}</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-gray-900 transition">
//             <X size={28} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-6">
//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-bold mb-2">{c.whyDonate}</h3>
//             <p className="text-gray-700">{donation.description}</p>
//           </div>

//           {/* Bank Details */}
//           <div className="bg-gray-50 rounded-lg p-4">
//             <h3 className="text-lg font-bold mb-4">{c.bankDetails}</h3>
//             <div className="space-y-2 text-sm">
//               <p>
//                 <strong>{c.accountName}</strong>
//               </p>
//               <p>
//                 <strong>{c.accountNumber}</strong>
//               </p>
//               <p>
//                 <strong>{c.bankName}</strong>
//               </p>
//               <p>
//                 <strong>{c.iban}</strong>
//               </p>
//             </div>
//           </div>

//           {/* QR Code */}
//           <div className="bg-gray-50 rounded-lg p-4 text-center">
//             <h3 className="text-lg font-bold mb-4">{c.qrCode}</h3>
//             <img src="/qr-code-payment.jpg" alt="QR Code" className="h-64 w-64 mx-auto" />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex gap-4 p-6 border-t border-gray-200">
//           <button
//             onClick={onClose}
//             className="flex-1 px-4 py-2 bg-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-400 transition"
//           >
//             {c.close}
//           </button>
//           <button className="flex-1 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
//             {language === "en" ? "Copy Bank Details" : "بینک کی تفصیلات کاپی کریں"}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // MAIN APP COMPONENT
// // ============================================================================

// export default function TrustPagesApp() {
//   const [language, setLanguage] = useState<"en" | "ur">("en")
//   const [currentPage, setCurrentPage] = useState("home")
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [donation, setDonation] = useState({ type: "", title: "", description: "" })

//   const handleDonationClick = (type: string, title: string, description: string) => {
//     setDonation({ type, title, description })
//     setIsModalOpen(true)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header language={language} onLanguageChange={setLanguage} onDonateClick={() => setCurrentPage("donate")} />
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} language={language} />

//       <main>
//         {currentPage === "home" && <HomePage language={language} onDonationClick={handleDonationClick} />}
//         {currentPage === "about" && <AboutPage language={language} />}
//         {currentPage === "gallery" && <GalleryPage language={language} />}
//         {currentPage === "projects" && <ProjectsPage language={language} onDonationClick={handleDonationClick} />}
//         {currentPage === "donate" && <DonatePage language={language} onDonationClick={handleDonationClick} />}
//         {currentPage === "contact" && <ContactPage language={language} />}
//       </main>

//       <DonationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         donation={donation}
//         language={language}
//       />
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Youtube,
//   ChevronDown,
//   Play,
//   X,
//   LogOut,
//   Edit2,
//   Trash2,
//   Plus,
// } from "lucide-react"

// // ============================================================================
// // INTERFACES
// // ============================================================================

// interface Event {
//   id: string
//   title_en: string
//   title_ur: string
//   image: string
//   date: string
// }

// interface GalleryImage {
//   id: string
//   title: string
//   category: string
//   image: string
// }

// interface Video {
//   id: string
//   title: string
//   description: string
//   thumbnail: string
//   url: string
// }

// interface Project {
//   id: string
//   title_en: string
//   title_ur: string
//   description_en: string
//   description_ur: string
//   image: string
//   status: "running" | "completed"
// }

// // ============================================================================
// // ADMIN LOGIN COMPONENT
// // ============================================================================

// interface AdminLoginProps {
//   onLogin: () => void
// }

// function AdminLogin({ onLogin }: AdminLoginProps) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleLogin = () => {
//     if (email === "admin@dikash.org" && password === "Admin@2024") {
//       if (typeof window !== "undefined") {
//         localStorage.setItem("adminLoggedIn", "true")
//       }
//       onLogin()
//       setError("")
//     } else {
//       setError("Invalid email or password")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
//           <p className="text-gray-600">Dilkash Educational & Welfare Trust </p>
//         </div>

//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onKeyPress={(e) => e.key === "Enter" && handleLogin()}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />

//           {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </div>

        
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // ADMIN DASHBOARD COMPONENT
// // ============================================================================

// interface AdminDashboardProps {
//   onLogout: () => void
// }

// function AdminDashboard({ onLogout }: AdminDashboardProps) {
//   const [activeTab, setActiveTab] = useState<"events" | "gallery" | "videos" | "projects">("events")

//   const [events, setEvents] = useState<Event[]>([])
//   const [gallery, setGallery] = useState<GalleryImage[]>([])
//   const [videos, setVideos] = useState<Video[]>([])
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedEvents = localStorage.getItem("trust_events")
//       const savedGallery = localStorage.getItem("trust_gallery")
//       const savedVideos = localStorage.getItem("trust_videos")
//       const savedProjects = localStorage.getItem("trust_projects")

//       if (savedEvents) setEvents(JSON.parse(savedEvents))
//       if (savedGallery) setGallery(JSON.parse(savedGallery))
//       if (savedVideos) setVideos(JSON.parse(savedVideos))
//       if (savedProjects) setProjects(JSON.parse(savedProjects))
//     }
//   }, [])

//   const [editingEvent, setEditingEvent] = useState<Event | null>(null)
//   const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
//   const [editingVideo, setEditingVideo] = useState<Video | null>(null)
//   const [editingProject, setEditingProject] = useState<Project | null>(null)

//   const [newEvent, setNewEvent] = useState({ title_en: "", title_ur: "", image: "", date: "" })
//   const [newImage, setNewImage] = useState({ title: "", category: "charity", image: "" })
//   const [newVideo, setNewVideo] = useState({ title: "", description: "", thumbnail: "", url: "" })
//   const [newProject, setNewProject] = useState({
//     title_en: "",
//     title_ur: "",
//     description_en: "",
//     description_ur: "",
//     image: "",
//     status: "running" as "running" | "completed",
//   })

//   // ========== EVENTS MANAGEMENT ==========
//   const handleAddEvent = () => {
//     if (newEvent.title_en && newEvent.title_ur && newEvent.image && newEvent.date) {
//       const updatedEvents = [...events, { id: Date.now().toString(), ...newEvent }]
//       setEvents(updatedEvents)
//       if (typeof window !== "undefined") {
//         localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
//       }
//       setNewEvent({ title_en: "", title_ur: "", image: "", date: "" })
//       alert("Event added successfully!")
//     }
//   }

//   const handleUpdateEvent = (id: string, updated: Event) => {
//     const updatedEvents = events.map((e) => (e.id === id ? updated : e))
//     setEvents(updatedEvents)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
//     }
//     setEditingEvent(null)
//     alert("Event updated successfully!")
//   }

//   const handleDeleteEvent = (id: string) => {
//     const updatedEvents = events.filter((e) => e.id !== id)
//     setEvents(updatedEvents)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
//     }
//     alert("Event deleted successfully!")
//   }

//   // ========== GALLERY MANAGEMENT ==========
//   const handleAddImage = () => {
//     if (newImage.title && newImage.image) {
//       const updatedGallery = [...gallery, { id: Date.now().toString(), ...newImage }]
//       setGallery(updatedGallery)
//       if (typeof window !== "undefined") {
//         localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
//       }
//       setNewImage({ title: "", category: "charity", image: "" })
//       alert("Image added successfully!")
//     }
//   }

//   const handleUpdateImage = (id: string, updated: GalleryImage) => {
//     const updatedGallery = gallery.map((img) => (img.id === id ? updated : img))
//     setGallery(updatedGallery)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
//     }
//     setEditingImage(null)
//     alert("Image updated successfully!")
//   }

//   const handleDeleteImage = (id: string) => {
//     const updatedGallery = gallery.filter((img) => img.id !== id)
//     setGallery(updatedGallery)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
//     }
//     alert("Image deleted successfully!")
//   }

//   // ========== VIDEOS MANAGEMENT ==========
//   const handleAddVideo = () => {
//     if (newVideo.title && newVideo.thumbnail && newVideo.url) {
//       const updatedVideos = [...videos, { id: Date.now().toString(), ...newVideo }]
//       setVideos(updatedVideos)
//       if (typeof window !== "undefined") {
//         localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
//       }
//       setNewVideo({ title: "", description: "", thumbnail: "", url: "" })
//       alert("Video added successfully!")
//     }
//   }

//   const handleUpdateVideo = (id: string, updated: Video) => {
//     const updatedVideos = videos.map((v) => (v.id === id ? updated : v))
//     setVideos(updatedVideos)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
//     }
//     setEditingVideo(null)
//     alert("Video updated successfully!")
//   }

//   const handleDeleteVideo = (id: string) => {
//     const updatedVideos = videos.filter((v) => v.id !== id)
//     setVideos(updatedVideos)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
//     }
//     alert("Video deleted successfully!")
//   }

//   // ========== PROJECTS MANAGEMENT ==========
//   const handleAddProject = () => {
//     if (
//       newProject.title_en &&
//       newProject.title_ur &&
//       newProject.description_en &&
//       newProject.description_ur &&
//       newProject.image
//     ) {
//       const updatedProjects = [...projects, { id: Date.now().toString(), ...newProject }]
//       setProjects(updatedProjects)
//       if (typeof window !== "undefined") {
//         localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
//       }
//       setNewProject({
//         title_en: "",
//         title_ur: "",
//         description_en: "",
//         description_ur: "",
//         image: "",
//         status: "running",
//       })
//       alert("Project added successfully!")
//     }
//   }

//   const handleUpdateProject = (id: string, updated: Project) => {
//     const updatedProjects = projects.map((p) => (p.id === id ? updated : p))
//     setProjects(updatedProjects)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
//     }
//     setEditingProject(null)
//     alert("Project updated successfully!")
//   }

//   const handleDeleteProject = (id: string) => {
//     const updatedProjects = projects.filter((p) => p.id !== id)
//     setProjects(updatedProjects)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
//     }
//     alert("Project deleted successfully!")
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-gray-900">Dilkah Educational & Welfare Trust Admin</h1>
//           <button
//             onClick={onLogout}
//             className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//           >
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Tabs */}
//         <div className="flex gap-4 mb-8 flex-wrap">
//           {["events", "gallery", "videos", "projects"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab as "events" | "gallery" | "videos" | "projects")}
//               className={`px-6 py-2 rounded-lg font-medium transition ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
//               }`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* EVENTS TAB */}
//         {activeTab === "events" && (
//           <div className="space-y-8">
//             {/* Add Event Form */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <Plus size={20} /> Add New Event
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Title (English)"
//                   value={newEvent.title_en}
//                   onChange={(e) => setNewEvent({ ...newEvent, title_en: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Title (Urdu)"
//                   value={newEvent.title_ur}
//                   onChange={(e) => setNewEvent({ ...newEvent, title_ur: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   value={newEvent.image}
//                   onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="date"
//                   value={newEvent.date}
//                   onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>
//               <button
//                 onClick={handleAddEvent}
//                 className="mt-4 w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Add Event
//               </button>
//             </div>

//             {/* Events List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {events.map((event) =>
//                 editingEvent?.id === event.id ? (
//                   <div key={event.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-600">
//                     <input
//                       type="text"
//                       value={editingEvent.title_en}
//                       onChange={(e) => setEditingEvent({ ...editingEvent, title_en: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       value={editingEvent.title_ur}
//                       onChange={(e) => setEditingEvent({ ...editingEvent, title_ur: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       value={editingEvent.image}
//                       onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="date"
//                       value={editingEvent.date}
//                       onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleUpdateEvent(event.id, editingEvent)}
//                         className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingEvent(null)}
//                         className="flex-1 bg-gray-400 text-white text-sm py-1 rounded hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     key={event.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img
//                       src={event.image || "/placeholder.svg"}
//                       alt={event.title_en}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-900 mb-1">{event.title_en}</h3>
//                       <p className="text-sm text-gray-600 mb-2">{event.title_ur}</p>
//                       <p className="text-xs text-gray-500 mb-3">{event.date}</p>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setEditingEvent(event)}
//                           className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700 flex items-center justify-center gap-1"
//                         >
//                           <Edit2 size={14} /> Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteEvent(event.id)}
//                           className="flex-1 bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700 flex items-center justify-center gap-1"
//                         >
//                           <Trash2 size={14} /> Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         )}

//         {/* GALLERY TAB */}
//         {activeTab === "gallery" && (
//           <div className="space-y-8">
//             {/* Add Image Form */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <Plus size={20} /> Add New Image
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Image Title"
//                   value={newImage.title}
//                   onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <select
//                   value={newImage.category}
//                   onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option value="charity">Charity</option>
//                   <option value="education">Education</option>
//                   <option value="health">Health</option>
//                   <option value="community">Community</option>
//                   <option value="water">Water & Sanitation</option>
//                   <option value="nutrition">Nutrition</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   value={newImage.image}
//                   onChange={(e) => setNewImage({ ...newImage, image: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
//                 />
//               </div>
//               <button
//                 onClick={handleAddImage}
//                 className="mt-4 w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Add Image
//               </button>
//             </div>

//             {/* Gallery Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {gallery.map((img) =>
//                 editingImage?.id === img.id ? (
//                   <div key={img.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-600">
//                     <input
//                       type="text"
//                       value={editingImage.title}
//                       onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <select
//                       value={editingImage.category}
//                       onChange={(e) => setEditingImage({ ...editingImage, category: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     >
//                       <option value="charity">Charity</option>
//                       <option value="education">Education</option>
//                       <option value="health">Health</option>
//                       <option value="community">Community</option>
//                       <option value="water">Water & Sanitation</option>
//                       <option value="nutrition">Nutrition</option>
//                     </select>
//                     <input
//                       type="text"
//                       value={editingImage.image}
//                       onChange={(e) => setEditingImage({ ...editingImage, image: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleUpdateImage(img.id, editingImage)}
//                         className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingImage(null)}
//                         className="flex-1 bg-gray-400 text-white text-sm py-1 rounded hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     key={img.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img src={img.image || "/placeholder.svg"} alt={img.title} className="w-full h-32 object-cover" />
//                     <div className="p-3">
//                       <h4 className="font-bold text-sm text-gray-900 mb-1">{img.title}</h4>
//                       <p className="text-xs text-gray-600 mb-2">{img.category}</p>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setEditingImage(img)}
//                           className="flex-1 bg-blue-600 text-white text-xs py-1 rounded hover:bg-blue-700"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteImage(img.id)}
//                           className="flex-1 bg-red-600 text-white text-xs py-1 rounded hover:bg-red-700"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         )}

//         {/* VIDEOS TAB */}
//         {activeTab === "videos" && (
//           <div className="space-y-8">
//             {/* Add Video Form */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <Plus size={20} /> Add New Video
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Video Title"
//                   value={newVideo.title}
//                   onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Thumbnail URL"
//                   value={newVideo.thumbnail}
//                   onChange={(e) => setNewVideo({ ...newVideo, thumbnail: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Video URL"
//                   value={newVideo.url}
//                   onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   value={newVideo.description}
//                   onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>
//               <button
//                 onClick={handleAddVideo}
//                 className="mt-4 w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Add Video
//               </button>
//             </div>

//             {/* Videos Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {videos.map((video) =>
//                 editingVideo?.id === video.id ? (
//                   <div key={video.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-600">
//                     <input
//                       type="text"
//                       value={editingVideo.title}
//                       onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       value={editingVideo.description}
//                       onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       value={editingVideo.thumbnail}
//                       onChange={(e) => setEditingVideo({ ...editingVideo, thumbnail: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm text-xs"
//                     />
//                     <input
//                       type="text"
//                       value={editingVideo.url}
//                       onChange={(e) => setEditingVideo({ ...editingVideo, url: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm text-xs"
//                     />
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleUpdateVideo(video.id, editingVideo)}
//                         className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingVideo(null)}
//                         className="flex-1 bg-gray-400 text-white text-sm py-1 rounded hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     key={video.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img
//                       src={video.thumbnail || "/placeholder.svg"}
//                       alt={video.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
//                       <p className="text-sm text-gray-600 mb-2">{video.description}</p>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setEditingVideo(video)}
//                           className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700 flex items-center justify-center gap-1"
//                         >
//                           <Edit2 size={14} /> Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteVideo(video.id)}
//                           className="flex-1 bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700 flex items-center justify-center gap-1"
//                         >
//                           <Trash2 size={14} /> Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         )}

//         {/* PROJECTS TAB */}
//         {activeTab === "projects" && (
//           <div className="space-y-8">
//             {/* Add Project Form */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <Plus size={20} /> Add New Project
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Title (English)"
//                   value={newProject.title_en}
//                   onChange={(e) => setNewProject({ ...newProject, title_en: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Title (Urdu)"
//                   value={newProject.title_ur}
//                   onChange={(e) => setNewProject({ ...newProject, title_ur: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <textarea
//                   placeholder="Description (English)"
//                   value={newProject.description_en}
//                   onChange={(e) => setNewProject({ ...newProject, description_en: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   rows={2}
//                 />
//                 <textarea
//                   placeholder="Description (Urdu)"
//                   value={newProject.description_ur}
//                   onChange={(e) => setNewProject({ ...newProject, description_ur: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   rows={2}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   value={newProject.image}
//                   onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <select
//                   value={newProject.status}
//                   onChange={(e) => setNewProject({ ...newProject, status: e.target.value as "running" | "completed" })}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option value="running">Running</option>
//                   <option value="completed">Completed</option>
//                 </select>
//               </div>
//               <button
//                 onClick={handleAddProject}
//                 className="mt-4 w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Add Project
//               </button>
//             </div>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {projects.map((project) =>
//                 editingProject?.id === project.id ? (
//                   <div key={project.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-600">
//                     <input
//                       type="text"
//                       value={editingProject.title_en}
//                       onChange={(e) => setEditingProject({ ...editingProject, title_en: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       value={editingProject.title_ur}
//                       onChange={(e) => setEditingProject({ ...editingProject, title_ur: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <textarea
//                       value={editingProject.description_en}
//                       onChange={(e) => setEditingProject({ ...editingProject, description_en: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                       rows={2}
//                     />
//                     <textarea
//                       value={editingProject.description_ur}
//                       onChange={(e) => setEditingProject({ ...editingProject, description_ur: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                       rows={2}
//                     />
//                     <input
//                       type="text"
//                       value={editingProject.image}
//                       onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     />
//                     <select
//                       value={editingProject.status}
//                       onChange={(e) =>
//                         setEditingProject({ ...editingProject, status: e.target.value as "running" | "completed" })
//                       }
//                       className="w-full px-3 py-1 mb-2 border border-gray-300 rounded text-sm"
//                     >
//                       <option value="running">Running</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleUpdateProject(project.id, editingProject)}
//                         className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingProject(null)}
//                         className="flex-1 bg-gray-400 text-white text-sm py-1 rounded hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     key={project.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title_en}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-900 mb-1">{project.title_en}</h3>
//                       <p className="text-sm text-gray-600 mb-2">{project.title_ur}</p>
//                       <p className="text-xs text-gray-500 mb-3">{project.status}</p>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setEditingProject(project)}
//                           className="flex-1 bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700 flex items-center justify-center gap-1"
//                         >
//                           <Edit2 size={14} /> Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteProject(project.id)}
//                           className="flex-1 bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700 flex items-center justify-center gap-1"
//                         >
//                           <Trash2 size={14} /> Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // HEADER COMPONENT
// // ============================================================================

// interface HeaderProps {
//   language: "en" | "ur"
//   onLanguageChange: (lang: "en" | "ur") => void
//   onDonateClick: () => void
//   onAdminClick: () => void // Added for admin navigation
// }

// function Header({ language, onLanguageChange, onDonateClick, onAdminClick }: HeaderProps) {
//   const content = {
//     en: {
//       email: "info@dikash.org",
//       phone: "+91 - 7782907822",
//       address: "Lalganj, Purnea ",
//     },
//     ur: {
//       email: "معلومات@dikash.org",
//       phone: "+91 - 7782907822",
//       address: "لالگانج، پورنیا",
//     },
//   }

//   return (
//     <header className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Name */}
//           <div className="flex items-center gap-4">
//             <img
//               src="/images/logodilkash.png"
//               alt="Dilkash Educational & Welfare Trust"
//               className="h-16 w-16"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Dilkash Educational & Welfare Trust</h1>
//               <p className="text-sm text-gray-600">
//                 {language === "en" ? "A Public Charitable Trust" : "ایک سرکاری امدادی ٹرسٹ"}
//               </p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="hidden lg:flex items-center gap-8 text-sm">
//             <div className="flex items-center gap-2 text-gray-600">
//               <Mail size={18} />
//               <span>{content[language].email}</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <Phone size={18} />
//               <span>{content[language].phone}</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-600">
//               <MapPin size={18} />
//               <span>{content[language].address}</span>
//             </div>
//           </div>

//           {/* Right Side: Social Links, Language Toggle, Donate Button, Admin Button */}
//           <div className="flex items-center gap-6">
//             <div className="flex gap-4">
//               <a href="#" className="text-gray-600 hover:text-blue-600">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-pink-600">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-red-600">
//                 <Youtube size={20} />
//               </a>
//             </div>

//             {/* Language Toggle */}
//             <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
//               <button
//                 onClick={() => onLanguageChange("en")}
//                 className={`px-3 py-1 rounded text-sm font-medium transition ${
//                   language === "en" ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 EN
//               </button>
//               <button
//                 onClick={() => onLanguageChange("ur")}
//                 className={`px-3 py-1 rounded text-sm font-medium transition ${
//                   language === "ur" ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 اردو
//               </button>
//             </div>

//             {/* Donate Now Button */}
//             <button
//               onClick={onDonateClick}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
//             >
//               {language === "en" ? "Donate Now" : "ابھی عطیہ کریں"}
//             </button>

//             {/* Admin Button */}
//             <button
//               onClick={onAdminClick}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm"
//             >
//               Admin
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// // ============================================================================
// // NAVBAR COMPONENT
// // ============================================================================

// interface NavbarProps {
//   currentPage: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin"
//   setCurrentPage: (page: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin") => void
//   language: "en" | "ur"
// }

// function Navbar({ currentPage, setCurrentPage, language }: NavbarProps) {
//   const navItems = {
//     en: ["Home", "About Us", "Gallery", "Videos", "Projects", "Donate", "Contact Us"],
//     ur: ["ہوم", "ہمارے بارے میں", "گیلری", "ویڈیوز", "منصوبے", "عطیہ", "رابطہ کریں"],
//   }

//   const navKeys = ["home", "about", "gallery", "videos", "projects", "donate", "contact"]

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-center gap-8 py-4">
//           {navItems[language].map((label, index) => (
//             <button
//               key={navKeys[index]}
//               onClick={() => setCurrentPage(navKeys[index] as NavbarProps["currentPage"])}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 currentPage === navKeys[index] ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:text-blue-600"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// // ============================================================================
// // HOME PAGE COMPONENT
// // ============================================================================

// interface HomePageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
//   onAdminClick: () => void
//   isAdminLoggedIn: boolean
//   setCurrentPage: (page: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin") => void
// }

// function HomePage({ language, onDonationClick, onAdminClick, isAdminLoggedIn, setCurrentPage }: HomePageProps) {
//   const [activeEventIndex, setActiveEventIndex] = useState(0)
//   const [events, setEvents] = useState<Event[]>([])
//   const [gallery, setGallery] = useState<GalleryImage[]>([])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedEvents = localStorage.getItem("trust_events")
//       const savedGallery = localStorage.getItem("trust_gallery")
//       if (savedEvents) setEvents(JSON.parse(savedEvents))
//       if (savedGallery) setGallery(JSON.parse(savedGallery))
//     }
//   }, []) // Empty dependency array ensures this runs only once on mount

//   const content = {
//     en: {
//       welcomeTitle: "Welcome to Dilkash Educational & Welfare Trust",
//       welcomeText:
//         "Dilkash Educational  is a public charitable trust dedicated to serving humanity and uplifting communities. We work tirelessly to provide education, healthcare, food security, and spiritual development to those in need.",
//       upcomingEvents: "Upcoming Events",
//       secretarySpeech: "Secretary's Message",
//       donateForCause: "Support Our Cause",
//       donateDesc: "Your generous donation helps us continue our mission to serve the community.",
//     },
//     ur: {
//       welcomeTitle: "دکاش فاؤنڈیشن میں خوش آمدید",
//       welcomeText:
//         "دکاش فاؤنڈیشن ایک سرکاری امدادی ٹرسٹ ہے جو بنی نوع انسان کی خدمت اور کمیونٹی کی ترقی کے لیے وقف ہے۔ ہم ضرورت مندوں کو تعلیم، صحت کی دیکھ بھال، خوراک کی حفاظت اور روحانی ترقی فراہم کرنے کے لیے مسلسل کام کرتے ہیں۔",
//       upcomingEvents: "آنے والے ایونٹس",
//       secretarySpeech: "سیکریٹری کا پیغام",
//       donateForCause: "ہمارے مقصد کی حمایت کریں",
//       donateDesc: "آپ کا سخی عطیہ ہمیں کمیونٹی کی خدمت کا مشن جاری رکھنے میں مدد کرتا ہے۔",
//     },
//   }

//   const displayEvents =
//     events.length > 0
//       ? events
//       : [
//           {
//             id: "1",
//             title_en: "Qurbani Distribution",
//             title_ur: "قربانی کی تقسیم",
//             image: "/qurbani-distribution-charity-event.jpg",
//             date: "2024-02-15",
//           },
//           {
//             id: "2",
//             title_en: "Food Bazaar",
//             title_ur: "خوراک بازار",
//             image: "/food-bazaar-community-event.jpg",
//             date: "2024-02-20",
//           },
//           {
//             id: "3",
//             title_en: "Medical Camp",
//             title_ur: "میڈیکل کیمپ",
//             image: "/medical-camp-health-service.jpg",
//             date: "2024-02-25",
//           },
//         ]

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Banner with Animation */}
//       <div className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg overflow-hidden animate-pulse">
//         <img src="/islamic-charity-banner-mosque.jpg" alt="Banner" className="w-full h-full object-cover opacity-70" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h2 className="text-4xl font-bold mb-4">{content[language].welcomeTitle}</h2>
//             <p className="text-lg max-w-2xl mx-auto">{content[language].welcomeText}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Sidebar */}
//         <div className="lg:col-span-2">
//           {/* Activities Gallery */}
//           <section className="mb-12">
//             <h3 className="text-2xl font-bold mb-6">{language === "en" ? "Our Activities" : "ہماری سرگرمیاں"}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {gallery.slice(0, 4).map((img) => (
//                 <div key={img.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//                   <img src={img.image || "/placeholder.svg"} alt={img.title} className="w-full h-48 object-cover" />
//                   <div className="p-4 bg-white">
//                     <h4 className="font-bold capitalize">{img.title}</h4>
//                     <p className="text-xs text-gray-600">{img.category}</p>
//                   </div>
//                 </div>
//               ))}
//               {/* Show placeholder if no gallery items */}
//               {gallery.length === 0 && (
//                 <>
//                   {["charity", "community", "education", "health"].map((activity, index) => (
//                     <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//                       <img
//                         src={`/.jpg?key=1vtne&height=250&width=350&query=${activity}-activity-charity`}
//                         alt={activity}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4 bg-white">
//                         <h4 className="font-bold capitalize">{activity}</h4>
//                       </div>
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//           </section>

//           {/* Video Section */}
//           <section className="mb-12">
//             <h3 className="text-2xl font-bold mb-6">{language === "en" ? "Feeding Program" : "خوراک کا پروگرام"}</h3>
//             <div className="relative bg-black rounded-lg overflow-hidden h-96">
//               <img
//                 src="/poor-people-food-distribution-charity.jpg"
//                 alt="Feeding Program"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition">
//                   <Play size={32} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Sidebar */}
//         <div className="space-y-8">
//           {/* Upcoming Events */}
//           <section className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-bold mb-4">{content[language].upcomingEvents}</h3>
//             <div className="space-y-4">
//               {displayEvents.slice(0, 3).map((event, index) => (
//                 <div
//                   key={event.id}
//                   onClick={() => setActiveEventIndex(index)}
//                   className={`cursor-pointer rounded-lg overflow-hidden transition ${
//                     activeEventIndex === index ? "ring-2 ring-blue-600" : ""
//                   }`}
//                 >
//                   <img
//                     src={event.image || "/placeholder.svg"}
//                     alt={event.title_en}
//                     className="w-full h-32 object-cover"
//                   />
//                   <div className="p-2 bg-gray-50">
//                     <p className="font-semibold text-sm">{language === "en" ? event.title_en : event.title_ur}</p>
//                     <p className="text-xs text-gray-600">{event.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Secretary Speech */}
//           <section className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-bold mb-4">{content[language].secretarySpeech}</h3>
//             <div className="relative bg-black rounded-lg overflow-hidden h-48">
//               <img
//                 src="/secretary-speech-video.jpg"
//                 alt="Secretary"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-3 hover:bg-gray-100">
//                   <Play size={24} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Donate Section */}
//           <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white">
//             <img
//               src="/images/chatgpt-20image-20jan-2015-2c-202026-2c-2010-43-00-20am.png"
//               alt="Donate"
//               className="w-full h-40 object-contain mb-4"
//             />
//             <h3 className="text-lg font-bold mb-2">{content[language].donateForCause}</h3>
//             <p className="text-sm mb-4">{content[language].donateDesc}</p>
//             <button
//               onClick={() =>
//                 onDonationClick("general", "Support Our Cause", "Help us continue our mission to serve the community")
//               }
//               className="w-full bg-white text-green-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               {language === "en" ? "Donate Now" : "ابھی عطیہ کریں"}
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // ABOUT PAGE COMPONENT
// // ============================================================================

// interface AboutPageProps {
//   language: "en" | "ur"
// }

// function AboutPage({ language }: AboutPageProps) {
//   const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

//   const content = {
//     en: {
//       title: "About Us",
//       description: "Learn more about Dikash Foundation and our mission.",
//       documents: [
//         { id: "fcra", label: "FCRA Document" },
//         { id: "12aa", label: "12AA Document" },
//         { id: "80g", label: "80G Document" },
//         { id: "fcraacc", label: "FCRA Account Details" },
//         { id: "cert", label: "Certificate of Registration" },
//         { id: "receipt", label: "Donation Receipt" },
//       ],
//     },
//     ur: {
//       title: "ہمارے بارے میں",
//       description: "دکاش فاؤنڈیشن اور ہمارے مشن کے بارے میں مزید معلومات حاصل کریں۔",
//       documents: [
//         { id: "fcra", label: "FCRA دستاویز" },
//         { id: "12aa", label: "12AA دستاویز" },
//         { id: "80g", label: "80G دستاویز" },
//         { id: "fcraacc", label: "FCRA اکاؤنٹ تفصیلات" },
//         { id: "cert", label: "رجسٹریشن کا سرٹیفکیٹ" },
//         { id: "receipt", label: "عطیہ رسید" },
//       ],
//     },
//   }

//   const docs = content[language].documents

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
//       <p className="text-gray-600 mb-8">{content[language].description}</p>

//       <div className="space-y-4">
//         {docs.map((doc) => (
//           <div key={doc.id} className="border border-gray-300 rounded-lg">
//             <button
//               onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
//               className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
//             >
//               <span className="font-medium">{doc.label}</span>
//               <ChevronDown size={20} className={`transition ${expandedDoc === doc.id ? "rotate-180" : ""}`} />
//             </button>

//             {expandedDoc === doc.id && (
//               <div className="border-t border-gray-200 p-4 bg-gray-50">
//                 <div className="bg-white rounded-lg p-6 border-2 border-gray-300 flex items-center justify-center h-96">
//                   <p className="text-gray-500">
//                     {language === "en" ? `${doc.label} will be displayed here` : `${doc.label} یہاں دکھایا جائے گا`}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // GALLERY PAGE COMPONENT
// // ============================================================================

// interface GalleryPageProps {
//   language: "en" | "ur"
// }

// function GalleryPage({ language }: GalleryPageProps) {
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
//   const [gallery, setGallery] = useState<GalleryImage[]>([])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedGallery = localStorage.getItem("trust_gallery")
//       if (savedGallery) setGallery(JSON.parse(savedGallery))
//     }
//   }, []) // Empty dependency array ensures this runs only once on mount

//   const categories = {
//     en: [
//       { id: "charity", label: "Charity" },
//       { id: "education", label: "Education" },
//       { id: "health", label: "Health" },
//       { id: "community", label: "Community" },
//       { id: "water", label: "Water & Sanitation" },
//       { id: "nutrition", label: "Nutrition" },
//     ],
//     ur: [
//       { id: "charity", label: "صدقہ خیرات" },
//       { id: "education", label: "تعلیم" },
//       { id: "health", label: "صحت" },
//       { id: "community", label: "کمیونٹی" },
//       { id: "water", label: "پانی اور صفائی" },
//       { id: "nutrition", label: "غذائیت" },
//     ],
//   }

//   const categoryList = categories[language]

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Gallery" : "گیلری"}</h1>

//       <div className="space-y-6">
//         {categoryList.map((category) => (
//           <div key={category.id}>
//             <button
//               onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
//               className="w-full flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//             >
//               <span className="font-medium text-lg">{category.label}</span>
//               <ChevronDown size={24} className={`transition ${expandedCategory === category.id ? "rotate-180" : ""}`} />
//             </button>

//             {expandedCategory === category.id && (
//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {gallery.filter((img) => img.category === category.id).length > 0
//                   ? gallery
//                       .filter((img) => img.category === category.id)
//                       .map((img) => (
//                         <div
//                           key={img.id}
//                           className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105"
//                         >
//                           <img
//                             src={img.image || "/placeholder.svg"}
//                             alt={img.title}
//                             className="w-full h-64 object-cover"
//                           />
//                           <div className="p-2 bg-gray-50">
//                             <p className="text-sm font-semibold">{img.title}</p>
//                           </div>
//                         </div>
//                       ))
//                   : // Show placeholder images if no admin content
//                     [1, 2, 3, 4, 5, 6].map((index) => (
//                       <div
//                         key={index}
//                         className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105"
//                       >
//                         <img
//                           src={`/.jpg?key=ancuu&height=300&width=400&query=${category.id}-charity-activity-${index}`}
//                           alt={`${category.label} ${index}`}
//                           className="w-full h-64 object-cover"
//                         />
//                       </div>
//                     ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // PROJECTS PAGE COMPONENT
// // ============================================================================

// interface ProjectsPageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
// }

// function ProjectsPage({ language, onDonationClick }: ProjectsPageProps) {
//   const [filter, setFilter] = useState<"all" | "running">("all")
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedProjects = localStorage.getItem("trust_projects")
//       if (savedProjects) setProjects(JSON.parse(savedProjects))
//     }
//   }, [])

//   const content = {
//     en: {
//       allProjects: "All Projects",
//       runningProjects: "Running Projects",
//     },
//     ur: {
//       allProjects: "تمام منصوبے",
//       runningProjects: "جاری منصوبے",
//     },
//   }

//   const defaultProjects: Project[] = [
//     {
//       id: "1",
//       title_en: "Water Well Installation",
//       title_ur: "پانی کے کنویں کی تنصیب",
//       description_en: "Providing clean drinking water to remote areas",
//       description_ur: "دور دراز علاقوں میں صاف پینے کا پانی فراہم کرنا",
//       status: "running" as const,
//       image: "/water-well-installation-charity.jpg",
//     },
//     {
//       id: "2",
//       title_en: "Education Scholarship",
//       title_ur: "تعلیمی وظیفہ",
//       description_en: "Supporting underprivileged students with scholarships",
//       description_ur: "محروم طلباء کو وظائف سے سہارا دینا",
//       status: "completed" as const,
//       image: "/education-scholarship-students.jpg",
//     },
//     {
//       id: "3",
//       title_en: "Medical Health Camp",
//       title_ur: "میڈیکل ہیلتھ کیمپ",
//       description_en: "Free medical services for poor communities",
//       description_ur: "غریب کمیونٹیز کے لیے مفت میڈیکل سروسز",
//       status: "running" as const,
//       image: "/medical-health-camp-charity.jpg",
//     },
//     {
//       id: "4",
//       title_en: "Food Security Initiative",
//       title_ur: "خوراک کی حفاظت کی کوشش",
//       description_en: "Distributing food packages to needy families",
//       description_ur: "ضرورت مند خاندانوں کو خوراک کے پیکج تقسیم کرنا",
//       status: "completed" as const,
//       image: "/food-security-distribution-poor.jpg",
//     },
//   ]

//   const displayProjects = projects.length > 0 ? projects : defaultProjects
//   const filteredProjects =
//     filter === "running" ? displayProjects.filter((p) => p.status === "running") : displayProjects

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Projects" : "منصوبے"}</h1>

//       {/* Filter Dropdown */}
//       <div className="mb-8 flex gap-4">
//         <button
//           onClick={() => setFilter("all")}
//           className={`px-6 py-2 rounded-lg font-medium transition ${
//             filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {content[language].allProjects}
//         </button>
//         <button
//           onClick={() => setFilter("running")}
//           className={`px-6 py-2 rounded-lg font-medium transition ${
//             filter === "running" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {content[language].runningProjects}
//         </button>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {filteredProjects.map((project) => (
//           <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
//             {/* Project Image */}
//             <div className="relative h-48 bg-black overflow-hidden">
//               <img
//                 src={project.image || "/placeholder.svg"}
//                 alt={project.title_en}
//                 className="w-full h-full object-cover opacity-70"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white rounded-full p-3 hover:bg-gray-100">
//                   <Play size={28} className="text-blue-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">{project.title_en}</h3>
//               <p className="text-gray-600 mb-4">{project.description_en}</p>
//               <button
//                 onClick={() => onDonationClick(project.id, project.title_en, project.description_en)}
//                 className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 {language === "en" ? "Support This Project" : "اس منصوبے کی حمایت کریں"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // DONATE PAGE COMPONENT
// // ============================================================================

// interface DonatePageProps {
//   language: "en" | "ur"
//   onDonationClick: (type: string, title: string, description: string) => void
// }

// function DonatePage({ language, onDonationClick }: DonatePageProps) {
//   const donationTypes = {
//     en: [
//       {
//         id: "qurbani",
//         title: "Donate for Qurbani",
//         description: "Help us perform Qurbani for the poor",
//         icon: "🐑",
//       },
//       {
//         id: "food",
//         title: "Donate for Food",
//         description: "Support our food distribution programs",
//         icon: "🍽️",
//       },
//       {
//         id: "education",
//         title: "Donate for Education",
//         description: "Help underprivileged students pursue education",
//         icon: "📚",
//       },
//       {
//         id: "house",
//         title: "Donate for House",
//         description: "Help families build their homes",
//         icon: "🏠",
//       },
//       {
//         id: "masjid",
//         title: "Donate for Masjid",
//         description: "Support the construction of masjids",
//         icon: "🕌",
//       },
//       {
//         id: "others",
//         title: "Donate for Others",
//         description: "Support other charitable causes",
//         icon: "❤️",
//       },
//     ],
//     ur: [
//       {
//         id: "qurbani",
//         title: "قربانی کے لیے عطیہ",
//         description: "غریبوں کے لیے قربانی کرنے میں ہمیں مدد کریں",
//         icon: "🐑",
//       },
//       {
//         id: "food",
//         title: "خوراک کے لیے عطیہ",
//         description: "ہمارے خوراک کی تقسیم کے پروگراموں کی حمایت کریں",
//         icon: "🍽️",
//       },
//       {
//         id: "education",
//         title: "تعلیم کے لیے عطیہ",
//         description: "محروم طلباء کو تعلیم حاصل کرنے میں مدد کریں",
//         icon: "📚",
//       },
//       {
//         id: "house",
//         title: "گھر کے لیے عطیہ",
//         description: "خاندانوں کو اپنے گھر بنانے میں مدد کریں",
//         icon: "🏠",
//       },
//       {
//         id: "masjid",
//         title: "مسجد کے لیے عطیہ",
//         description: "مساجد کی تعمیر کی حمایت کریں",
//         icon: "🕌",
//       },
//       {
//         id: "others",
//         title: "دوسری چیزوں کے لیے عطیہ",
//         description: "دوسری خیراتی وجوہات کی حمایت کریں",
//         icon: "❤️",
//       },
//     ],
//   }

//   const types = donationTypes[language]

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-4">{language === "en" ? "Donate" : "عطیہ دیں"}</h1>
//       <p className="text-gray-600 mb-12">
//         {language === "en"
//           ? "Choose a cause you want to support"
//           : "اپنی پسند کا مقصد منتخب کریں جس کی حمایت کرنا چاہتے ہیں"}
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {types.map((type) => (
//           <button
//             key={type.id}
//             onClick={() => onDonationClick(type.id, type.title, type.description)}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-left hover:transform hover:scale-105"
//           >
//             <div className="text-4xl mb-4">{type.icon}</div>
//             <h3 className="text-xl font-bold mb-2">{type.title}</h3>
//             <p className="text-gray-600 mb-4">{type.description}</p>
//             <div className="text-blue-600 font-medium">{language === "en" ? "Learn More →" : "مزید معلومات →"}</div>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // CONTACT PAGE COMPONENT
// // ============================================================================

// interface ContactPageProps {
//   language: "en" | "ur"
// }

// function ContactPage({ language }: ContactPageProps) {
//   const content = {
//     en: {
//       title: "Contact Us",
//       email: "Email: info@dikash.org",
//       phone: "Phone: +91-7782907822",
//       address: "Address: lalganj, Purnea",
//       form: {
//         name: "Your Name",
//         email: "Your Email",
//         message: "Your Message",
//         submit: "Send Message",
//       },
//     },
//     ur: {
//       title: "ہم سے رابطہ کریں",
//       email: "ای میل: معلومات@dikash.org",
//       phone: "فون: +91-7782907822",
//       address: "پتہ: لالگانج، پورنیا",
//       form: {
//         name: "آپ کا نام",
//         email: "آپ کی ای میل",
//         message: "آپ کا پیغام",
//         submit: "پیغام بھیجیں",
//       },
//     },
//   }

//   const c = content[language]

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{c.title}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.email}</p>
//           </div>
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.phone}</p>
//           </div>
//           <div>
//             <p className="text-lg font-medium text-gray-900">{c.address}</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder={c.form.name}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <input
//             type="email"
//             placeholder={c.form.email}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <textarea
//             placeholder={c.form.message}
//             rows={4}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {c.form.submit}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // DONATION MODAL COMPONENT
// // ============================================================================

// interface DonationModalProps {
//   isOpen: boolean
//   onClose: () => void
//   donation: {
//     type: string
//     title: string
//     description: string
//   }
//   language: "en" | "ur"
// }

// function DonationModal({ isOpen, onClose, donation, language }: DonationModalProps) {
//   if (!isOpen) return null

//   const content = {
//     en: {
//       bankDetails: "Bank Details",
//       qrCode: "QR Code for Payment",
//       accountName: "Account Name: Dikash Foundation",
//       accountNumber: "Account Number: 1234567890",
//       bankName: "Bank: Habib Bank Limited",
//       iban: "IBAN: PK36ABOC0000001234567890",
//       whyDonate: "Why Donate for This?",
//       close: "Close",
//     },
//     ur: {
//       bankDetails: "بینک کی تفصیلات",
//       qrCode: "ادائیگی کے لیے QR کوڈ",
//       accountName: "اکاؤنٹ کا نام: دکاش فاؤنڈیشن",
//       accountNumber: "اکاؤنٹ نمبر: 1234567890",
//       bankName: "بینک: ہبیب بینک لمیٹڈ",
//       iban: "IBAN: PK36ABOC0000001234567890",
//       whyDonate: "اس کے لیے عطیہ کیوں دیں؟",
//       close: "بند کریں",
//     },
//   }

//   const c = content[language]

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h2 className="text-2xl font-bold">{donation.title}</h2>
//           <button onClick={onClose} className="text-gray-600 hover:text-gray-900 transition">
//             <X size={28} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-6">
//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-bold mb-2">{c.whyDonate}</h3>
//             <p className="text-gray-700">{donation.description}</p>
//           </div>

//           {/* Bank Details */}
//           <div className="bg-gray-50 rounded-lg p-4">
//             <h3 className="text-lg font-bold mb-4">{c.bankDetails}</h3>
//             <div className="space-y-2 text-sm">
//               <p>
//                 <strong>{c.accountName}</strong>
//               </p>
//               <p>
//                 <strong>{c.accountNumber}</strong>
//               </p>
//               <p>
//                 <strong>{c.bankName}</strong>
//               </p>
//               <p>
//                 <strong>{c.iban}</strong>
//               </p>
//             </div>
//           </div>

//           {/* QR Code */}
//           <div className="bg-gray-50 rounded-lg p-4 text-center">
//             <h3 className="text-lg font-bold mb-4">{c.qrCode}</h3>
//             <img src="/qr-code-payment.jpg" alt="QR Code" className="h-64 w-64 mx-auto" />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex gap-4 p-6 border-t border-gray-200">
//           <button
//             onClick={onClose}
//             className="flex-1 px-4 py-2 bg-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-400 transition"
//           >
//             {c.close}
//           </button>
//           <button className="flex-1 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
//             {language === "en" ? "Copy Bank Details" : "بینک کی تفصیلات کاپی کریں"}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ============================================================================
// // VIDEOS PAGE COMPONENT
// // ============================================================================

// interface VideosPageProps {
//   language: "en" | "ur"
// }

// function VideosPage({ language }: VideosPageProps) {
//   const [videos, setVideos] = useState<Video[]>([])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedVideos = localStorage.getItem("trust_videos")
//       if (savedVideos) setVideos(JSON.parse(savedVideos))
//     }
//   }, []) // Empty dependency array ensures this runs only once on mount

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Videos" : "ویڈیوز"}</h1>

//       {videos.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
//               <div className="relative bg-black h-48 overflow-hidden group">
//                 <img
//                   src={video.thumbnail || "/placeholder.svg"}
//                   alt={video.title}
//                   className="w-full h-full object-cover group-hover:opacity-70 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <a
//                     href={video.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white rounded-full p-4 hover:bg-gray-100"
//                   >
//                     <Play size={32} className="text-blue-600" />
//                   </a>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg mb-2">{video.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{video.description}</p>
//                 <a
//                   href={video.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   {language === "en" ? "Watch Video" : "ویڈیو دیکھیں"}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-gray-600 text-lg">
//             {language === "en" ? "No videos available yet." : "ابھی کوئی ویڈیو دستیاب نہیں ہے۔"}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// // ============================================================================
// // MAIN APP COMPONENT
// // ============================================================================

// export default function TrustPagesApp() {
//   const [language, setLanguage] = useState<"en" | "ur">("en")
//   const [currentPage, setCurrentPage] = useState<
//     "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin"
//   >("home")
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [donation, setDonation] = useState({ type: "", title: "", description: "" })
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("adminLoggedIn") === "true"
//     }
//     return false
//   })

//   const [showAdminLogin, setShowAdminLogin] = useState(false)

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
//       setIsAdminLoggedIn(isLoggedIn)
//     }
//   }, [])

//   const handleDonationClick = (type: string, title: string, description: string) => {
//     setDonation({ type, title, description })
//     setIsModalOpen(true)
//   }

//   const closeDonationModal = () => {
//     setIsModalOpen(false)
//   }

//   const handleAdminClick = () => {
//     if (!isAdminLoggedIn) {
//       setShowAdminLogin(true)
//     } else {
//       setCurrentPage("admin")
//     }
//   }

//   const handleAdminLogin = () => {
//     setIsAdminLoggedIn(true)
//     setShowAdminLogin(false)
//     setCurrentPage("admin")
//   }

//   const handleAdminLogout = () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("adminLoggedIn")
//     }
//     setIsAdminLoggedIn(false)
//     setShowAdminLogin(false)
//     setCurrentPage("home") // Redirect to home page after logout
//   }

//   if (showAdminLogin && !isAdminLoggedIn) {
//     return <AdminLogin onLogin={handleAdminLogin} />
//   }

//   // Render AdminDashboard if logged in and admin page is selected
//   if (isAdminLoggedIn && currentPage === "admin") {
//     return <AdminDashboard onLogout={handleAdminLogout} />
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header
//         language={language}
//         onLanguageChange={setLanguage}
//         onDonateClick={() => setCurrentPage("donate")}
//         onAdminClick={handleAdminClick}
//       />
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} language={language} />

//       <main>
//         {currentPage === "home" && (
//           <HomePage
//             language={language}
//             onDonationClick={handleDonationClick}
//             onAdminClick={handleAdminClick}
//             isAdminLoggedIn={isAdminLoggedIn}
//             setCurrentPage={setCurrentPage}
//           />
//         )}
//         {currentPage === "about" && <AboutPage language={language} />}
//         {currentPage === "gallery" && <GalleryPage language={language} />}
//         {currentPage === "videos" && <VideosPage language={language} />}
//         {currentPage === "projects" && <ProjectsPage language={language} onDonationClick={handleDonationClick} />}
//         {currentPage === "donate" && <DonatePage language={language} onDonationClick={handleDonationClick} />}
//         {currentPage === "contact" && <ContactPage language={language} />}
//       </main>

//       <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} donation={donation} language={language} />
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  Play,
  X,
  LogOut,
  Edit2,
  Trash2,
  Plus,
  Menu,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Heart,
  Globe,
  Download,
  Share2,
  Award,
  Users,
  Target,
  Sparkles,
  Shield,
  Star,
  Calendar,
  Camera,
  Video as VideoIcon,
  Home,
  Info,
  Image as ImageIcon,
  BookOpen,
  MessageSquare,
  Sun,
  Moon,
  Lock,
  FileText,
} from "lucide-react"

// ============================================================================
// INTERFACES
// ============================================================================

interface Event {
  id: string
  title_en: string
  title_ur: string
  image: string
  date: string
}

interface GalleryImage {
  id: string
  title: string
  category: string
  image: string
}

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
}

interface Project {
  id: string
  title_en: string
  title_ur: string
  description_en: string
  description_ur: string
  image: string
  status: "running" | "completed"
}

// ============================================================================
// ADMIN LOGIN COMPONENT - Modern Design
// ============================================================================

interface AdminLoginProps {
  onLogin: () => void
}

function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (email === "admin@dikash.org" && password === "Admin@2024") {
      if (typeof window !== "undefined") {
        localStorage.setItem("adminLoggedIn", "true")
      }
      onLogin()
      setError("")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-10 max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-lg mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Admin Portal
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-medium">Dilkash Educational & Welfare Trust</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="admin@dikash.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="w-full pl-12 pr-4 py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50/50"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// ADMIN DASHBOARD COMPONENT - Modern Design
// ============================================================================

interface AdminDashboardProps {
  onLogout: () => void
}

function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"events" | "gallery" | "videos" | "projects">("events")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [events, setEvents] = useState<Event[]>([])
  const [gallery, setGallery] = useState<GalleryImage[]>([])
  const [videos, setVideos] = useState<Video[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("trust_events")
      const savedGallery = localStorage.getItem("trust_gallery")
      const savedVideos = localStorage.getItem("trust_videos")
      const savedProjects = localStorage.getItem("trust_projects")

      if (savedEvents) setEvents(JSON.parse(savedEvents))
      if (savedGallery) setGallery(JSON.parse(savedGallery))
      if (savedVideos) setVideos(JSON.parse(savedVideos))
      if (savedProjects) setProjects(JSON.parse(savedProjects))
    }
  }, [])

  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [editingVideo, setEditingVideo] = useState<Video | null>(null)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const [newEvent, setNewEvent] = useState({ title_en: "", title_ur: "", image: "", date: "" })
  const [newImage, setNewImage] = useState({ title: "", category: "charity", image: "" })
  const [newVideo, setNewVideo] = useState({ title: "", description: "", thumbnail: "", url: "" })
  const [newProject, setNewProject] = useState({
    title_en: "",
    title_ur: "",
    description_en: "",
    description_ur: "",
    image: "",
    status: "running" as "running" | "completed",
  })

  // Statistics
  const stats = [
    { label: "Events", value: events.length, color: "bg-teal-500" },
    { label: "Gallery Items", value: gallery.length, color: "bg-blue-500" },
    { label: "Videos", value: videos.length, color: "bg-teal-500" },
    { label: "Projects", value: projects.length, color: "bg-blue-500" },
  ]

  // ========== EVENT MANAGEMENT ==========
  const handleAddEvent = () => {
    if (newEvent.title_en && newEvent.title_ur && newEvent.date) {
      const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%230d9488'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3E" + 
                      encodeURIComponent(newEvent.title_en) + "%3C/text%3E%3C/svg%3E";
      
      const updatedEvents = [...events, { 
        id: Date.now().toString(), 
        ...newEvent,
        image: newEvent.image || defaultImage
      }]
      setEvents(updatedEvents)
      if (typeof window !== "undefined") {
        localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
      }
      setNewEvent({ title_en: "", title_ur: "", image: "", date: "" })
      alert("Event added successfully!")
    } else {
      alert("Please fill in all required fields: English Title, Urdu Title, and Date")
    }
  }

  const handleUpdateEvent = (id: string, updated: Event) => {
    const updatedEvents = events.map((e) => (e.id === id ? updated : e))
    setEvents(updatedEvents)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
    }
    setEditingEvent(null)
    alert("Event updated successfully!")
  }

  const handleDeleteEvent = (id: string) => {
    const updatedEvents = events.filter((e) => e.id !== id)
    setEvents(updatedEvents)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_events", JSON.stringify(updatedEvents))
    }
    alert("Event deleted successfully!")
  }

  // ========== GALLERY MANAGEMENT ==========
  const handleAddImage = () => {
    if (newImage.title && newImage.image) {
      const updatedGallery = [...gallery, { id: Date.now().toString(), ...newImage }]
      setGallery(updatedGallery)
      if (typeof window !== "undefined") {
        localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
      }
      setNewImage({ title: "", category: "charity", image: "" })
      alert("Image added successfully!")
    }
  }

  const handleUpdateImage = (id: string, updated: GalleryImage) => {
    const updatedGallery = gallery.map((img) => (img.id === id ? updated : img))
    setGallery(updatedGallery)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
    }
    setEditingImage(null)
    alert("Image updated successfully!")
  }

  const handleDeleteImage = (id: string) => {
    const updatedGallery = gallery.filter((img) => img.id !== id)
    setGallery(updatedGallery)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_gallery", JSON.stringify(updatedGallery))
    }
    alert("Image deleted successfully!")
  }

  // ========== VIDEO MANAGEMENT ==========
  const handleAddVideo = () => {
    if (newVideo.title && newVideo.thumbnail && newVideo.url) {
      const updatedVideos = [...videos, { id: Date.now().toString(), ...newVideo }]
      setVideos(updatedVideos)
      if (typeof window !== "undefined") {
        localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
      }
      setNewVideo({ title: "", description: "", thumbnail: "", url: "" })
      alert("Video added successfully!")
    }
  }

  const handleUpdateVideo = (id: string, updated: Video) => {
    const updatedVideos = videos.map((v) => (v.id === id ? updated : v))
    setVideos(updatedVideos)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
    }
    setEditingVideo(null)
    alert("Video updated successfully!")
  }

  const handleDeleteVideo = (id: string) => {
    const updatedVideos = videos.filter((v) => v.id !== id)
    setVideos(updatedVideos)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_videos", JSON.stringify(updatedVideos))
    }
    alert("Video deleted successfully!")
  }

  // ========== PROJECT MANAGEMENT ==========
  const handleAddProject = () => {
    if (
      newProject.title_en &&
      newProject.title_ur &&
      newProject.description_en &&
      newProject.description_ur &&
      newProject.image
    ) {
      const updatedProjects = [...projects, { id: Date.now().toString(), ...newProject }]
      setProjects(updatedProjects)
      if (typeof window !== "undefined") {
        localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
      }
      setNewProject({
        title_en: "",
        title_ur: "",
        description_en: "",
        description_ur: "",
        image: "",
        status: "running",
      })
      alert("Project added successfully!")
    }
  }

  const handleUpdateProject = (id: string, updated: Project) => {
    const updatedProjects = projects.map((p) => (p.id === id ? updated : p))
    setProjects(updatedProjects)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
    }
    setEditingProject(null)
    alert("Project updated successfully!")
  }

  const handleDeleteProject = (id: string) => {
    const updatedProjects = projects.filter((p) => p.id !== id)
    setProjects(updatedProjects)
    if (typeof window !== "undefined") {
      localStorage.setItem("trust_projects", JSON.stringify(updatedProjects))
    }
    alert("Project deleted successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-6 left-6 z-50 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-xl shadow-lg shadow-teal-500/30"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity backdrop-blur-sm ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Admin Menu
            </h2>
          </div>
          <div className="p-4 space-y-2">
            {["events", "gallery", "videos", "projects"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as "events" | "gallery" | "videos" | "projects")
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-teal-300 hover:text-teal-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all mt-6 shadow-lg"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Dilkash Trust Admin
              </h1>
              <p className="text-xs text-gray-500">Content Management System</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-sm text-gray-600">Welcome, Admin</div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Tabs */}
        <div className="hidden md:flex gap-3 mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
          {["events", "gallery", "videos", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "events" | "gallery" | "videos" | "projects")}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
                  : "text-gray-700 hover:text-teal-600 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Active Tab */}
        <div className="md:hidden mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h2>
          </div>
        </div>

        {/* EVENTS TAB */}
        {activeTab === "events" && (
          <div className="space-y-8">
            {/* Add Event Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add New Event</h2>
                  <p className="text-sm text-gray-500">Create and manage upcoming events</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Event Title (English)"
                    value={newEvent.title_en}
                    onChange={(e) => setNewEvent({ ...newEvent, title_en: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {!newEvent.title_en && (
                    <p className="text-xs text-red-500 mt-1">English title is required</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Event Title (Urdu)"
                    value={newEvent.title_ur}
                    onChange={(e) => setNewEvent({ ...newEvent, title_ur: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {!newEvent.title_ur && (
                    <p className="text-xs text-red-500 mt-1">Urdu title is required</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Image URL (e.g., https://example.com/image.jpg)"
                    value={newEvent.image}
                    onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {!newEvent.image && (
                    <p className="text-xs text-gray-500 mt-1">Enter a valid image URL or leave empty for default</p>
                  )}
                  {newEvent.image && !newEvent.image.startsWith('http') && (
                    <p className="text-xs text-yellow-600 mt-1">Please enter a valid URL starting with http:// or https://</p>
                  )}
                </div>
                <div>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {!newEvent.date && (
                    <p className="text-xs text-red-500 mt-1">Date is required</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs text-gray-500 mb-2">
                  Required fields: Title (English & Urdu), Date. Image URL is optional.
                </div>
              </div>
              <button
                onClick={handleAddEvent}
                disabled={!newEvent.title_en || !newEvent.title_ur || !newEvent.date}
                className={`mt-6 w-full md:w-auto px-8 py-3 rounded-xl font-semibold transition-all shadow-lg ${
                  !newEvent.title_en || !newEvent.title_ur || !newEvent.date
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 hover:shadow-xl'
                }`}
              >
                Add Event
              </button>
            </div>

            {/* Events List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) =>
                editingEvent?.id === event.id ? (
                  <div key={event.id} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-500">
                    <h3 className="font-bold text-gray-900 mb-4">Edit Event</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingEvent.title_en}
                        onChange={(e) => setEditingEvent({ ...editingEvent, title_en: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingEvent.title_ur}
                        onChange={(e) => setEditingEvent({ ...editingEvent, title_ur: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingEvent.image}
                        onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="date"
                        value={editingEvent.date}
                        onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdateEvent(event.id, editingEvent)}
                          className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingEvent(null)}
                          className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title_en}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EEvent Image%3C/text%3E%3C/svg%3E"
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-teal-100 to-blue-100 flex items-center justify-center">
                          <Calendar className="w-12 h-12 text-teal-400" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-teal-600">{event.date}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{event.title_en}</h3>
                      <p className="text-gray-600 text-sm mb-4">{event.title_ur}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingEvent(event)}
                          className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all"
                        >
                          <Edit2 size={16} className="inline mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all"
                        >
                          <Trash2 size={16} className="inline mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            {/* Add Image Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add New Image</h2>
                  <p className="text-sm text-gray-500">Upload and manage gallery images</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Image Title"
                  value={newImage.title}
                  onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <select
                  value={newImage.category}
                  onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="charity">Charity</option>
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="community">Community</option>
                </select>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newImage.image}
                  onChange={(e) => setNewImage({ ...newImage, image: e.target.value })}
                  className="md:col-span-2 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                onClick={handleAddImage}
                className="mt-6 w-full md:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Add Image
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((img) =>
                editingImage?.id === img.id ? (
                  <div key={img.id} className="bg-white rounded-2xl shadow-xl p-4 border-2 border-teal-500">
                    <input
                      type="text"
                      value={editingImage.title}
                      onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
                      className="w-full px-3 py-2 mb-2 border border-gray-200 rounded-lg"
                    />
                    <select
                      value={editingImage.category}
                      onChange={(e) => setEditingImage({ ...editingImage, category: e.target.value })}
                      className="w-full px-3 py-2 mb-2 border border-gray-200 rounded-lg"
                    >
                      <option value="charity">Charity</option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="community">Community</option>
                    </select>
                    <input
                      type="text"
                      value={editingImage.image}
                      onChange={(e) => setEditingImage({ ...editingImage, image: e.target.value })}
                      className="w-full px-3 py-2 mb-3 border border-gray-200 rounded-lg"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateImage(img.id, editingImage)}
                        className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingImage(null)}
                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div key={img.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={img.image || "/placeholder.svg"}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EGallery Image%3C/text%3E%3C/svg%3E"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-gray-900 mb-1 truncate">{img.title}</h4>
                      <p className="text-xs text-teal-600 font-medium mb-3">{img.category}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingImage(img)}
                          className="flex-1 bg-teal-500 text-white text-xs py-2 rounded-lg hover:bg-teal-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteImage(img.id)}
                          className="flex-1 bg-red-500 text-white text-xs py-2 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div className="space-y-8">
            {/* Add Video Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <VideoIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add New Video</h2>
                  <p className="text-sm text-gray-500">Upload and manage video content</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Video Title"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Thumbnail URL"
                  value={newVideo.thumbnail}
                  onChange={(e) => setNewVideo({ ...newVideo, thumbnail: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Video URL"
                  value={newVideo.url}
                  onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                  className="md:col-span-2 px-4 py-3 border border-gray-200 rounded-xl"
                />
                <textarea
                  placeholder="Description"
                  value={newVideo.description}
                  onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                  rows={3}
                  className="md:col-span-2 px-4 py-3 border border-gray-200 rounded-xl"
                />
              </div>
              <button
                onClick={handleAddVideo}
                className="mt-6 w-full md:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Add Video
              </button>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) =>
                editingVideo?.id === video.id ? (
                  <div key={video.id} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-500">
                    <h3 className="font-bold text-gray-900 mb-4">Edit Video</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingVideo.title}
                        onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingVideo.description}
                        onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingVideo.thumbnail}
                        onChange={(e) => setEditingVideo({ ...editingVideo, thumbnail: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingVideo.url}
                        onChange={(e) => setEditingVideo({ ...editingVideo, url: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdateVideo(video.id, editingVideo)}
                          className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingVideo(null)}
                          className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EVideo Thumbnail%3C/text%3E%3C/svg%3E"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingVideo(video)}
                          className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            {/* Add Project Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add New Project</h2>
                  <p className="text-sm text-gray-500">Create and manage projects</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title (English)"
                  value={newProject.title_en}
                  onChange={(e) => setNewProject({ ...newProject, title_en: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Title (Urdu)"
                  value={newProject.title_ur}
                  onChange={(e) => setNewProject({ ...newProject, title_ur: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <textarea
                  placeholder="Description (English)"
                  value={newProject.description_en}
                  onChange={(e) => setNewProject({ ...newProject, description_en: e.target.value })}
                  rows={2}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <textarea
                  placeholder="Description (Urdu)"
                  value={newProject.description_ur}
                  onChange={(e) => setNewProject({ ...newProject, description_ur: e.target.value })}
                  rows={2}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newProject.image}
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                />
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value as "running" | "completed" })}
                  className="px-4 py-3 border border-gray-200 rounded-xl"
                >
                  <option value="running">Running</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button
                onClick={handleAddProject}
                className="mt-6 w-full md:w-auto bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Add Project
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) =>
                editingProject?.id === project.id ? (
                  <div key={project.id} className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-500">
                    <h3 className="font-bold text-gray-900 mb-4">Edit Project</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingProject.title_en}
                        onChange={(e) => setEditingProject({ ...editingProject, title_en: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingProject.title_ur}
                        onChange={(e) => setEditingProject({ ...editingProject, title_ur: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <textarea
                        value={editingProject.description_en}
                        onChange={(e) => setEditingProject({ ...editingProject, description_en: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <textarea
                        value={editingProject.description_ur}
                        onChange={(e) => setEditingProject({ ...editingProject, description_ur: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingProject.image}
                        onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      />
                      <select
                        value={editingProject.status}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, status: e.target.value as "running" | "completed" })
                        }
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                      >
                        <option value="running">Running</option>
                        <option value="completed">Completed</option>
                      </select>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdateProject(project.id, editingProject)}
                          className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProject(null)}
                          className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title_en}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EProject Image%3C/text%3E%3C/svg%3E"
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'running' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title_en}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description_en}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setEditingProject(project)}
                          className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// HEADER COMPONENT - Modern Design
// ============================================================================

interface HeaderProps {
  language: "en" | "ur"
  onLanguageChange: (lang: "en" | "ur") => void
  onDonateClick: () => void
  onAdminClick: () => void
}

function Header({ language, onLanguageChange, onDonateClick, onAdminClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const content = {
    en: {
      email: "info@dikash.org",
      phone: "+91 - 7782907822",
      address: "Lalganj, Purnea",
    },
    ur: {
      email: "معلومات@dikash.org",
      phone: "+91 - 7782907822",
      address: "لالگانج، پورنیا",
    },
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{content[language].email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{content[language].phone}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <a href="#" className="hover:text-teal-200 transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-teal-200 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-teal-200 transition">
                <Youtube size={16} />
              </a>
            </div>
            <button
              onClick={() => onLanguageChange(language === "en" ? "ur" : "en")}
              className="flex items-center gap-1 hover:text-teal-200 transition"
            >
              <Globe size={14} />
              <span>{language === "en" ? "EN" : "اردو"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-teal-600"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Dilkash Trust
                </h1>
                <p className="text-xs text-gray-500">Educational & Welfare Trust</p>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={onDonateClick}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Donate Now" : "عطیہ کریں"}
            </button>
            <button
              onClick={onAdminClick}
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all"
            >
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">{content[language].email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">{content[language].phone}</span>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                onClick={onDonateClick}
                className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2.5 rounded-xl font-semibold"
              >
                {language === "en" ? "Donate" : "عطیہ"}
              </button>
              <button
                onClick={onAdminClick}
                className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2.5 rounded-xl font-semibold"
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ============================================================================
// NAVBAR COMPONENT - Modern Design
// ============================================================================

interface NavbarProps {
  currentPage: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin"
  setCurrentPage: (page: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin") => void
  language: "en" | "ur"
}

function Navbar({ currentPage, setCurrentPage, language }: NavbarProps) {
  const navItems = {
    en: ["Home", "About Us", "Gallery", "Videos", "Projects", "Donate", "Contact"],
    ur: ["ہوم", "ہمارے بارے میں", "گیلری", "ویڈیوز", "منصوبے", "عطیہ", "رابطہ"],
  }

  const navIcons = [Home, Info, ImageIcon, VideoIcon, Target, Heart, MessageSquare]
  const navKeys = ["home", "about", "gallery", "videos", "projects", "donate", "contact"]

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-[98px] md:top-[66px] z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-1 py-4">
          {navItems[language].map((label, index) => {
            const Icon = navIcons[index]
            return (
              <button
                key={navKeys[index]}
                onClick={() => setCurrentPage(navKeys[index] as NavbarProps["currentPage"])}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentPage === navKeys[index]
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-3">
          <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-hide px-1">
            {navItems[language].map((label, index) => {
              const Icon = navIcons[index]
              return (
                <button
                  key={navKeys[index]}
                  onClick={() => setCurrentPage(navKeys[index] as NavbarProps["currentPage"])}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg min-w-[70px] transition-all ${
                    currentPage === navKeys[index]
                      ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-xs">{label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================================================
// HOME PAGE COMPONENT - Modern Design
// ============================================================================

interface HomePageProps {
  language: "en" | "ur"
  onDonationClick: (type: string, title: string, description: string) => void
  onAdminClick: () => void
  isAdminLoggedIn: boolean
  setCurrentPage: (page: "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin") => void
}

function HomePage({ language, onDonationClick, setCurrentPage }: HomePageProps) {
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const [events, setEvents] = useState<Event[]>([])
  const [gallery, setGallery] = useState<GalleryImage[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("trust_events")
      const savedGallery = localStorage.getItem("trust_gallery")
      if (savedEvents) setEvents(JSON.parse(savedEvents))
      if (savedGallery) setGallery(JSON.parse(savedGallery))
    }
  }, [])

  const content = {
    en: {
      welcomeTitle: "Dilkash Educational & Welfare Trust",
      welcomeText: "Serving humanity with compassion and dedication since 2024",
      upcomingEvents: "Upcoming Events",
      secretarySpeech: "Message from Our Founder",
      donateForCause: "Make a Difference",
      donateDesc: "Your donation helps transform lives and build better communities",
      ourActivities: "Our Impact",
      feedingProgram: "Community Support",
      stats: {
        beneficiaries: "10K+",
        projects: "50+",
        volunteers: "200+",
        villages: "30+",
      },
    },
    ur: {
      welcomeTitle: "دکاش تعلیمی و بہبودی ٹرسٹ",
      welcomeText: "۲۰۲۴ سے ہمدردی اور لگن کے ساتھ انسانیت کی خدمت",
      upcomingEvents: "آئندہ واقعات",
      secretarySpeech: "ہمارے بانی کا پیغام",
      donateForCause: "فرق پیدا کریں",
      donateDesc: "آپ کا عطیہ زندگیوں کو بدلنے اور بہتر معاشرے بنانے میں مدد کرتا ہے",
      ourActivities: "ہمارا اثر",
      feedingProgram: "کمیونٹی سپورٹ",
      stats: {
        beneficiaries: "۱۰ ہزار+",
        projects: "۵۰+",
        volunteers: "۲۰۰+",
        villages: "۳۰+",
      },
    },
  }

  const stats = [
    { value: content[language].stats.beneficiaries, label: "Beneficiaries", icon: Users },
    { value: content[language].stats.projects, label: "Projects", icon: Target },
    { value: content[language].stats.volunteers, label: "Volunteers", icon: Heart },
    { value: content[language].stats.villages, label: "Villages", icon: MapPin },
  ]

  const displayEvents = events.length > 0 ? events : [
    {
      id: "1",
      title_en: "Qurbani Distribution",
      title_ur: "قربانی کی تقسیم",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%230d9488'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EQurbani Distribution%3C/text%3E%3C/svg%3E",
      date: "2024-02-15",
    },
    {
      id: "2",
      title_en: "Food Bazaar",
      title_ur: "خوراک بازار",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%232565eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EFood Bazaar%3C/text%3E%3C/svg%3E",
      date: "2024-02-20",
    },
    {
      id: "3",
      title_en: "Medical Camp",
      title_ur: "میڈیکل کیمپ",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%230d9488'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EMedical Camp%3C/text%3E%3C/svg%3E",
      date: "2024-02-25",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-8 py-12 md:py-16 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content[language].welcomeTitle}</h1>
            <p className="text-lg mb-8 opacity-90">{content[language].welcomeText}</p>
            <button
              onClick={() => onDonationClick("general", "General Donation", "Support our various initiatives")}
              className="bg-white text-teal-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Join Our Mission" : "ہمارے مشن میں شامل ہوں"}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Activities Gallery */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{content[language].ourActivities}</h3>
              <button
                onClick={() => setCurrentPage("gallery")}
                className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
              >
                View All
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 4).map((img) => (
                <div key={img.id} className="relative group rounded-2xl overflow-hidden">
                  <img
                    src={img.image || "/placeholder.svg"}
                    alt={img.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EGallery Image%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <h4 className="font-bold text-white">{img.title}</h4>
                      <p className="text-sm text-white/80 capitalize">{img.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{content[language].feedingProgram}</h3>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/poor-people-food-distribution-charity.jpg"
                alt="Community Support"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-blue-600/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play size={32} className="text-white" />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Upcoming Events */}
          <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200/50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{content[language].upcomingEvents}</h3>
            <div className="space-y-4">
              {displayEvents.slice(0, 3).map((event, index) => (
                <div
                  key={event.id}
                  onClick={() => setActiveEventIndex(index)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    activeEventIndex === index
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{event.title_en}</h4>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Founder's Message */}
          <section className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{content[language].secretarySpeech}</h3>
            </div>
            <p className="text-white/90 mb-4">
              "Every contribution, big or small, helps us create lasting change in our community."
            </p>
            <button className="w-full bg-white text-teal-600 font-bold py-2.5 rounded-lg hover:bg-gray-100 transition">
              Watch Message
            </button>
          </section>

          {/* Quick Donate */}
          <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200/50">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{content[language].donateForCause}</h3>
              <p className="text-gray-600 text-sm">{content[language].donateDesc}</p>
            </div>
            <button
              onClick={() => onDonationClick("general", "Support Our Cause", "Help us continue our mission")}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Donate Now" : "ابھی عطیہ کریں"}
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// ABOUT PAGE COMPONENT - Modern Design
// ============================================================================

interface AboutPageProps {
  language: "en" | "ur"
}

function AboutPage({ language }: AboutPageProps) {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

  const content = {
    en: {
      title: "About Dilkash Trust",
      subtitle: "Transforming lives through education and community support",
      description: "Learn about our mission, vision, and the impact we're creating in communities across the region.",
      documents: [
        { id: "mission", label: "Our Mission", icon: Target },
        { id: "vision", label: "Our Vision", icon: Sparkles },
        { id: "fcra", label: "FCRA Document", icon: Shield },
        { id: "12aa", label: "12AA Document", icon: FileText },
        { id: "80g", label: "80G Document", icon: Award },
        { id: "cert", label: "Registration Certificate", icon: Star },
      ],
    },
    ur: {
      title: "دکاش ٹرسٹ کے بارے میں",
      subtitle: "تعلیم اور کمیونٹی سپورٹ کے ذریعے زندگیوں کو بدلنا",
      description: "ہمارے مشن، ویژن اور خطے میں کمیونٹیز میں پیدا ہونے والے اثرات کے بارے میں جانیں۔",
      documents: [
        { id: "mission", label: "ہمارا مشن", icon: Target },
        { id: "vision", label: "ہمارا ویژن", icon: Sparkles },
        { id: "fcra", label: "ایف سی آر اے دستاویز", icon: Shield },
        { id: "12aa", label: "۱۲ اے دستاویز", icon: FileText },
        { id: "80g", label: "۸۰ جی دستاویز", icon: Award },
        { id: "cert", label: "رجسٹریشن سرٹیفکیٹ", icon: Star },
      ],
    },
  }

  const docs = content[language].documents

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {content[language].title}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{content[language].subtitle}</p>
        <p className="text-gray-500">{content[language].description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {docs.map((doc) => {
          const Icon = doc.icon
          return (
            <div key={doc.id} className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
              <button
                onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{doc.label}</span>
                </div>
                <ChevronDown
                  className={`transition-transform ${expandedDoc === doc.id ? "rotate-180 text-teal-600" : "text-gray-400"}`}
                />
              </button>

              {expandedDoc === doc.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="bg-white rounded-xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[200px]">
                    <Download className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-center">
                      {language === "en"
                        ? `${doc.label} document will be displayed here`
                        : `${doc.label} دستاویز یہاں دکھائی جائے گی`}
                    </p>
                    <button className="mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition">
                      {language === "en" ? "Download PDF" : "پی ڈی ایف ڈاؤن لوڈ کریں"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================================
// GALLERY PAGE COMPONENT - Modern Design
// ============================================================================

function GalleryPage({ language }: AboutPageProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("charity")
  const [gallery, setGallery] = useState<GalleryImage[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedGallery = localStorage.getItem("trust_gallery")
      if (savedGallery) setGallery(JSON.parse(savedGallery))
    }
  }, [])

  const categories = {
    en: [
      { id: "charity", label: "Charity", icon: Heart },
      { id: "education", label: "Education", icon: BookOpen },
      { id: "health", label: "Health", icon: Users },
      { id: "community", label: "Community", icon: Users },
    ],
    ur: [
      { id: "charity", label: "صدقہ خیرات", icon: Heart },
      { id: "education", label: "تعلیم", icon: BookOpen },
      { id: "health", label: "صحت", icon: Users },
      { id: "community", label: "کمیونٹی", icon: Users },
    ],
  }

  const categoryList = categories[language]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {language === "en" ? "Our Gallery" : "ہماری گیلری"}
        </h1>
        <p className="text-gray-600">
          {language === "en"
            ? "Witness the impact of our work through these moments"
            : "ہمارے کام کے اثرات کو ان لمحات کے ذریعے دیکھیں"}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {categoryList.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setExpandedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                expandedCategory === category.id
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Icon size={18} />
              {category.label}
            </button>
          )
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery
          .filter((img) => img.category === expandedCategory)
          .map((img) => (
            <div
              key={img.id}
              className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.image || "/placeholder.svg"}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EGallery Image%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="font-bold text-white">{img.title}</h4>
                  <p className="text-sm text-white/80 capitalize">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

// ============================================================================
// PROJECTS PAGE COMPONENT - Modern Design
// ============================================================================

interface ProjectsPageProps {
  language: "en" | "ur"
  onDonationClick: (type: string, title: string, description: string) => void
}

function ProjectsPage({ language, onDonationClick }: ProjectsPageProps) {
  const [filter, setFilter] = useState<"all" | "running">("all")
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProjects = localStorage.getItem("trust_projects")
      if (savedProjects) setProjects(JSON.parse(savedProjects))
    }
  }, [])

  const content = {
    en: {
      allProjects: "All Projects",
      runningProjects: "Ongoing Projects",
      supportProject: "Support This Project",
      impact: "Direct Impact",
      volunteers: "Volunteers Involved",
      duration: "Project Duration",
    },
    ur: {
      allProjects: "تمام منصوبے",
      runningProjects: "جاری منصوبے",
      supportProject: "اس منصوبے کی حمایت کریں",
      impact: "براہ راست اثر",
      volunteers: "شامل رضاکار",
      duration: "منصوبے کی مدت",
    },
  }

  const defaultProjects: Project[] = [
    {
      id: "1",
      title_en: "Water Well Installation",
      title_ur: "پانی کے کنویں کی تنصیب",
      description_en: "Providing clean drinking water to remote areas",
      description_ur: "دور دراز علاقوں میں صاف پینے کا پانی فراہم کرنا",
      status: "running" as const,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%230d9488'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EWater Well Installation%3C/text%3E%3C/svg%3E",
    },
    {
      id: "2",
      title_en: "Education Scholarship",
      title_ur: "تعلیمی وظیفہ",
      description_en: "Supporting underprivileged students with scholarships",
      description_ur: "محروم طلباء کو وظائف سے سہارا دینا",
      status: "completed" as const,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%232565eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EEducation Scholarship%3C/text%3E%3C/svg%3E",
    },
    {
      id: "3",
      title_en: "Medical Health Camp",
      title_ur: "میڈیکل ہیلتھ کیمپ",
      description_en: "Free medical services for poor communities",
      description_ur: "غریب کمیونٹیز کے لیے مفت میڈیکل سروسز",
      status: "running" as const,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%230d9488'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EMedical Health Camp%3C/text%3E%3C/svg%3E",
    },
    {
      id: "4",
      title_en: "Food Security Initiative",
      title_ur: "خوراک کی حفاظت کی کوشش",
      description_en: "Distributing food packages to needy families",
      description_ur: "ضرورت مند خاندانوں کو خوراک کے پیکج تقسیم کرنا",
      status: "completed" as const,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%232565eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='white'%3EFood Security Initiative%3C/text%3E%3C/svg%3E",
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects
  const filteredProjects =
    filter === "running" ? displayProjects.filter((p) => p.status === "running") : displayProjects

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {language === "en" ? "Our Projects" : "ہمارے منصوبے"}
        </h1>
        <p className="text-gray-600">
          {language === "en"
            ? "Discover the initiatives that are transforming communities"
            : "ان اقدامات کو دریافت کریں جو کمیونٹیز کو تبدیل کر رہے ہیں"}
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-4 mb-12 justify-center">
        <button
          onClick={() => setFilter("all")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all ${
            filter === "all"
              ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {content[language].allProjects}
        </button>
        <button
          onClick={() => setFilter("running")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all ${
            filter === "running"
              ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {content[language].runningProjects}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title_en}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EProject Image%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    project.status === "running"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title_en}</h3>
              <p className="text-gray-600 mb-6">{project.description_en}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">{content[language].impact}</div>
                  <div className="text-lg font-bold text-teal-600">500+</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">{content[language].volunteers}</div>
                  <div className="text-lg font-bold text-blue-600">20+</div>
                </div>
              </div>

              <button
                onClick={() => onDonationClick(project.id, project.title_en, project.description_en)}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
              >
                {content[language].supportProject}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// DONATE PAGE COMPONENT - Modern Design
// ============================================================================

interface DonatePageProps {
  language: "en" | "ur"
  onDonationClick: (type: string, title: string, description: string) => void
}

function DonatePage({ language, onDonationClick }: DonatePageProps) {
  const donationTypes = {
    en: [
      {
        id: "qurbani",
        title: "Qurbani Donation",
        description: "Help us perform Qurbani for underprivileged families",
        icon: "🐑",
        color: "from-amber-500 to-orange-500",
      },
      {
        id: "food",
        title: "Food Support",
        description: "Support our food distribution programs",
        icon: "🍽️",
        color: "from-green-500 to-teal-500",
      },
      {
        id: "education",
        title: "Education Fund",
        description: "Help students pursue quality education",
        icon: "📚",
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: "health",
        title: "Medical Aid",
        description: "Support healthcare initiatives",
        icon: "🏥",
        color: "from-red-500 to-pink-500",
      },
      {
        id: "water",
        title: "Clean Water",
        description: "Provide clean drinking water",
        icon: "💧",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "general",
        title: "General Donation",
        description: "Support our various initiatives",
        icon: "❤️",
        color: "from-teal-500 to-blue-500",
      },
    ],
    ur: [
      {
        id: "qurbani",
        title: "قربانی کا عطیہ",
        description: "غریب خاندانوں کے لیے قربانی کرنے میں مدد کریں",
        icon: "🐑",
        color: "from-amber-500 to-orange-500",
      },
      {
        id: "food",
        title: "خوراک کی مدد",
        description: "ہمارے خوراک کی تقسیم کے پروگراموں کی حمایت کریں",
        icon: "🍽️",
        color: "from-green-500 to-teal-500",
      },
      {
        id: "education",
        title: "تعلیمی فنڈ",
        description: "طلباء کو معیاری تعلیم حاصل کرنے میں مدد کریں",
        icon: "📚",
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: "health",
        title: "طبی امداد",
        description: "صحت کی دیکھ بھال کے اقدامات کی حمایت کریں",
        icon: "🏥",
        color: "from-red-500 to-pink-500",
      },
      {
        id: "water",
        title: "صاف پانی",
        description: "صاف پینے کا پانی فراہم کریں",
        icon: "💧",
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "general",
        title: "عام عطیہ",
        description: "ہمارے مختلف اقدامات کی حمایت کریں",
        icon: "❤️",
        color: "from-teal-500 to-blue-500",
      },
    ],
  }

  const types = donationTypes[language]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {language === "en" ? "Support Our Causes" : "ہماری وجوہات کی حمایت کریں"}
        </h1>
        <p className="text-gray-600 text-lg">
          {language === "en"
            ? "Choose a cause close to your heart and make a difference"
            : "اپنے دل کے قریب ایک مقصد منتخب کریں اور فرق پیدا کریں"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onDonationClick(type.id, type.title, type.description)}
            className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-200/50 hover:border-teal-300 transition-all hover:shadow-xl text-left"
          >
            <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
              {type.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <div className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              {language === "en" ? "Support Now" : "ابھی حمایت کریں"}
              <ChevronRight size={16} />
            </div>
          </button>
        ))}
      </div>

      {/* Quick Donate Section */}
      <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === "en" ? "Make a Quick Donation" : "فوری عطیہ کریں"}
          </h3>
          <p className="mb-6 opacity-90">
            {language === "en"
              ? "Choose a preset amount or enter your own"
              : "پہلے سے طے شدہ رقم منتخب کریں یا اپنی رقم درج کریں"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {[500, 1000, 2500, 5000, 10000].map((amount) => (
              <button
                key={amount}
                onClick={() => onDonationClick("quick", `₹${amount} Donation`, "Quick donation to support our causes")}
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition"
              >
                ₹{amount}
              </button>
            ))}
          </div>
          <button className="bg-white text-teal-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
            {language === "en" ? "Enter Custom Amount" : "اپنی مرضی کی رقم درج کریں"}
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// CONTACT PAGE COMPONENT - Modern Design
// ============================================================================

function ContactPage({ language }: { language: "en" | "ur" }) {
  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      email: "info@dikash.org",
      phone: "+91-7782907822",
      address: "Lalganj, Purnea, Bihar",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message",
      },
    },
    ur: {
      title: "رابطہ کریں",
      subtitle: "ہم آپ سے سننا پسند کریں گے",
      email: "معلومات@dikash.org",
      phone: "+91-7782907822",
      address: "لالگانج، پورنیا، بہار",
      form: {
        name: "آپ کا نام",
        email: "ای میل پتہ",
        message: "آپ کا پیغام",
        submit: "پیغام بھیجیں",
      },
    },
  }

  const c = content[language]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {c.title}
        </h1>
        <p className="text-gray-600 text-lg">{c.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200/50">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.email}</p>
                  <p className="text-sm text-gray-500">{language === "en" ? "Email" : "ای میل"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.phone}</p>
                  <p className="text-sm text-gray-500">{language === "en" ? "Phone" : "فون"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.address}</p>
                  <p className="text-sm text-gray-500">{language === "en" ? "Address" : "پتہ"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200/50">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {language === "en" ? "Follow Us" : "ہمیں فالو کریں"}
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200/50">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.name}</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.email}</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.message}</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg"
            >
              {c.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// VIDEOS PAGE COMPONENT - Modern Design
// ============================================================================

function VideosPage({ language }: { language: "en" | "ur" }) {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVideos = localStorage.getItem("trust_videos")
      if (savedVideos) setVideos(JSON.parse(savedVideos))
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {language === "en" ? "Impact Stories" : "اثرات کی کہانیاں"}
        </h1>
        <p className="text-gray-600">
          {language === "en"
            ? "Watch how your support is making a difference"
            : "دیکھیں کہ آپ کی حمایت کیسے فرق پیدا کر رہی ہے"}
        </p>
      </div>

      {videos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='%23e5e7eb'%3E%3Crect width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EVideo Thumbnail%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition"
                >
                  <Play size={16} />
                  {language === "en" ? "Watch Now" : "ابھی دیکھیں"}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <VideoIcon className="w-12 h-12 text-white" />
          </div>
          <p className="text-gray-600 text-lg">
            {language === "en" ? "No videos available yet." : "ابھی تک کوئی ویڈیو دستیاب نہیں ہے۔"}
          </p>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// DONATION MODAL COMPONENT - Modern Design
// ============================================================================

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  donation: {
    type: string
    title: string
    description: string
  }
  language: "en" | "ur"
}

function DonationModal({ isOpen, onClose, donation, language }: DonationModalProps) {
  if (!isOpen) return null

  const content = {
    en: {
      bankDetails: "Bank Transfer Details",
      qrCode: "Scan QR Code",
      accountName: "Account Name",
      accountNumber: "Account Number",
      bankName: "Bank Name",
      ifsc: "IFSC Code",
      whyDonate: "How Your Donation Helps",
      close: "Close",
      copyDetails: "Copy All Details",
      accountInfo: {
        name: "Dilkash Educational & Welfare Trust",
        number: "1234567890",
        bank: "State Bank of India",
        ifsc: "SBIN0001234",
      },
    },
    ur: {
      bankDetails: "بینک ٹرانسفر کی تفصیلات",
      qrCode: "QR کوڈ اسکین کریں",
      accountName: "اکاؤنٹ کا نام",
      accountNumber: "اکاؤنٹ نمبر",
      bankName: "بینک کا نام",
      ifsc: "IFSC کوڈ",
      whyDonate: "آپ کا عطیہ کیسے مدد کرتا ہے",
      close: "بند کریں",
      copyDetails: "تمام تفصیلات کاپی کریں",
      accountInfo: {
        name: "دکاش تعلیمی و بہبودی ٹرسٹ",
        number: "1234567890",
        bank: "اسٹیٹ بینک آف انڈیا",
        ifsc: "SBIN0001234",
      },
    },
  }

  const c = content[language]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {donation.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-600 mt-2">{donation.description}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Why Donate */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{c.whyDonate}</h3>
            <p className="text-gray-600">
              Your donation directly supports our initiatives and helps create sustainable change in communities.
            </p>
          </div>

          {/* Bank Details */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{c.bankDetails}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">{c.accountName}</p>
                  <p className="font-semibold">{c.accountInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{c.accountNumber}</p>
                  <p className="font-semibold">{c.accountInfo.number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{c.bankName}</p>
                  <p className="font-semibold">{c.accountInfo.bank}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{c.ifsc}</p>
                  <p className="font-semibold">{c.accountInfo.ifsc}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 inline-block">
                  <img
                    src="/qr-code-payment.jpg"
                    alt="QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4">{c.qrCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-200">
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
            >
              {c.close}
            </button>
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-600 transition shadow-lg">
              {c.copyDetails}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// FOOTER COMPONENT - Modern Design
// ============================================================================

function Footer({ language }: { language: "en" | "ur" }) {
  const content = {
    en: {
      about: "About",
      links: "Quick Links",
      contact: "Contact",
      aboutText: "Dilkash Educational & Welfare Trust is dedicated to serving humanity through education, healthcare, and community support.",
      copyright: "© 2024 Dilkash Educational & Welfare Trust. All rights reserved.",
      madeWith: "Made with ❤️ for humanity",
    },
    ur: {
      about: "ہمارے بارے میں",
      links: "فوری لنکس",
      contact: "رابطہ",
      aboutText: "دکاش تعلیمی و بہبودی ٹرسٹ تعلیم، صحت کی دیکھ بھال اور کمیونٹی سپورٹ کے ذریعے انسانیت کی خدمت کے لیے وقف ہے۔",
      copyright: "© ۲۰۲۴ دکاش تعلیمی و بہبودی ٹرسٹ۔ جملہ حقوق محفوظ ہیں۔",
      madeWith: "انسانیت کے لیے ❤️ کے ساتھ بنایا گیا",
    },
  }

  const c = content[language]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Dilkash Trust</h3>
            </div>
            <p className="text-gray-400">{c.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{c.links}</h4>
            <div className="space-y-3">
              {["Home", "About", "Gallery", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{c.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                <span className="text-gray-400">info@dikash.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400" />
                <span className="text-gray-400">+91-7782907822</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-400" />
                <span className="text-gray-400">Lalganj, Purnea</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">{c.copyright}</p>
          <p className="text-gray-400 text-sm">{c.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

export default function TrustPagesApp() {
  const [language, setLanguage] = useState<"en" | "ur">("en")
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "gallery" | "videos" | "projects" | "donate" | "contact" | "admin"
  >("home")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [donation, setDonation] = useState({ type: "", title: "", description: "" })
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminLoggedIn") === "true"
    }
    return false
  })

  const [showAdminLogin, setShowAdminLogin] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
      setIsAdminLoggedIn(isLoggedIn)
    }
  }, [])

  const handleDonationClick = (type: string, title: string, description: string) => {
    setDonation({ type, title, description })
    setIsModalOpen(true)
  }

  const closeDonationModal = () => {
    setIsModalOpen(false)
  }

  const handleAdminClick = () => {
    if (!isAdminLoggedIn) {
      setShowAdminLogin(true)
    } else {
      setCurrentPage("admin")
    }
  }

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true)
    setShowAdminLogin(false)
    setCurrentPage("admin")
  }

  const handleAdminLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminLoggedIn")
    }
    setIsAdminLoggedIn(false)
    setShowAdminLogin(false)
    setCurrentPage("home")
  }

  if (showAdminLogin && !isAdminLoggedIn) {
    return <AdminLogin onLogin={handleAdminLogin} />
  }

  if (isAdminLoggedIn && currentPage === "admin") {
    return <AdminDashboard onLogout={handleAdminLogout} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/50 via-blue-50/30 to-white">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onDonateClick={() => setCurrentPage("donate")}
        onAdminClick={handleAdminClick}
      />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} language={language} />

      <main>
        {currentPage === "home" && (
          <HomePage
            language={language}
            onDonationClick={handleDonationClick}
            onAdminClick={handleAdminClick}
            isAdminLoggedIn={isAdminLoggedIn}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "about" && <AboutPage language={language} />}
        {currentPage === "gallery" && <GalleryPage language={language} />}
        {currentPage === "videos" && <VideosPage language={language} />}
        {currentPage === "projects" && <ProjectsPage language={language} onDonationClick={handleDonationClick} />}
        {currentPage === "donate" && <DonatePage language={language} onDonationClick={handleDonationClick} />}
        {currentPage === "contact" && <ContactPage language={language} />}
      </main>

      <Footer language={language} />
      
      <DonationModal
        isOpen={isModalOpen}
        onClose={closeDonationModal}
        donation={donation}
        language={language}
      />
    </div>
  )
}