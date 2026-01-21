// "use client"

// import type React from "react"
// import { useState } from "react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"

// export default function AdmissionsPage() {
//   const [language, setLanguage] = useState<"en" | "ur">("en")
//   const [formData, setFormData] = useState({
//     studentName: "",
//     fatherName: "",
//     dateOfBirth: "",
//     age: "",
//     address: "",
//     phone: "",
//     education: "",
//     course: "",
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const content = {
//     en: {
//       title: "Admission Form",
//       subtitle: "Apply to Darul Uloom Dilkash",
//       description:
//         "Complete the form below to apply for admission. We welcome motivated students who are passionate about Islamic education.",
//       requirements: "Requirements",
//       reqItems: [
//         "Age eligibility (5+ years)",
//         "Previous education verification",
//         "Interest in Islamic studies",
//         "Commitment to Islamic values",
//         "Medical certificate",
//       ],
//       process: "Admission Process",
//       steps: ["Complete admission form", "Document submission", "Personal interview", "Final approval"],
//       form: {
//         studentName: "Student Full Name",
//         fatherName: "Father/Guardian Name",
//         dateOfBirth: "Date of Birth",
//         age: "Age",
//         address: "Full Address",
//         phone: "Mobile Number",
//         education: "Previous Education",
//         course: "Select Course",
//         courses: [
//           "Noorani Qaida",
//           "Qur'an Recitation (Nazira)",
//           "Hifz-ul-Qur'an",
//           "Tajweed (Advanced)",
//           "Islamic Fiqh",
//           "Seerah",
//         ],
//         submit: "Submit Application",
//         successMessage: "Application submitted successfully! We will contact you within 3 business days.",
//       },
//     },
//     ur: {
//       title: "داخلہ کی درخواست",
//       subtitle: "دار العلوم دلکش میں داخلہ کے لیے درخواست",
//       description: "نیچے دیا گیا فارم مکمل کریں۔ ہم اسلامی تعلیم میں دلچسپی رکھنے والی لڑکیوں کا خیرمقدم کرتے ہیں۔",
//       requirements: "ضروری شرائط",
//       reqItems: [
//         "عمر کی اہلیت (5+ سال)",
//         "پچھلی تعلیم کی تصدیق",
//         "اسلامی تعلیم میں دلچسپی",
//         "اسلامی اقدار پر عمل",
//         "میڈیکل سرٹیفکیٹ",
//       ],
//       process: "داخلہ کا طریقہ",
//       steps: ["درخواست مکمل کریں", "دستاویزات جمع کریں", "ذاتی انٹرویو", "حتمی منظوری"],
//       form: {
//         studentName: "طالبہ کا نام",
//         fatherName: "والد/سرپرست کا نام",
//         dateOfBirth: "پیدائش کی تاریخ",
//         age: "عمر",
//         address: "مکمل پتہ",
//         phone: "موبائل نمبر",
//         education: "پچھلی تعلیم",
//         course: "کورس منتخب کریں",
//         courses: ["نورانی قاعدہ", "ناظرہ قرآن", "حفظ القرآن", "تجوید", "فقہ اسلامی", "سیرت النبی"],
//         submit: "درخواست جمع کریں",
//         successMessage: "آپ کی درخواست کامیابی سے جمع ہو گئی! ہم 3 دن میں رابطہ کریں گے۔",
//       },
//     },
//   }

//   const text = content[language]

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     setSubmitted(true)
//     setTimeout(() => {
//       setFormData({
//         studentName: "",
//         fatherName: "",
//         dateOfBirth: "",
//         age: "",
//         address: "",
//         phone: "",
//         education: "",
//         course: "",
//       })
//       setSubmitted(false)
//     }, 3000)
//   }

//   return (
//     <div className={language === "ur" ? "rtl" : "ltr"}>
//       <Header language={language} setLanguage={setLanguage} />

//       <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h1>
//             <p className="text-xl text-teal-600 font-semibold mb-4">{text.subtitle}</p>
//             <p className="text-gray-600 max-w-2xl mx-auto">{text.description}</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
//             {/* Requirements */}
//             <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">{text.requirements}</h3>
//               <ul className="space-y-3">
//                 {text.reqItems.map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-gray-700">
//                     <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
//                       ✓
//                     </span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Process */}
//             <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">{text.process}</h3>
//               <ol className="space-y-3">
//                 {text.steps.map((step, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-gray-700">
//                     <span className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white flex items-center justify-center text-sm font-bold">
//                       {idx + 1}
//                     </span>
//                     {step}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border-2 border-teal-200 shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{text.form.studentName}</h3>

//             {submitted && (
//               <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-300 text-green-800 text-center font-semibold">
//                 {text.form.successMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.studentName}</label>
//                   <input
//                     type="text"
//                     name="studentName"
//                     value={formData.studentName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.fatherName}</label>
//                   <input
//                     type="text"
//                     name="fatherName"
//                     value={formData.fatherName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.dateOfBirth}</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.age}</label>
//                   <input
//                     type="number"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.address}</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.phone}</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.education}</label>
//                   <input
//                     type="text"
//                     name="education"
//                     value={formData.education}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{text.form.course}</label>
//                 <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
//                 >
//                   <option value="">Select a course...</option>
//                   {text.form.courses.map((course, idx) => (
//                     <option key={idx} value={course}>
//                       {course}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 mt-6"
//               >
//                 {text.form.submit}
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>

//       <Footer language={language} />
//     </div>
//   )
// }


// "use client"

// import { useState } from "react"
// import jsPDF from "jspdf"

// export default function AdmissionsPage() {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     fatherName: "",
//     dob: "",
//     age: "",
//     phone: "",
//     address: "",
//     education: "",
//     course: "",
//   })

//   const [pdfUrl, setPdfUrl] = useState<string | null>(null)

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = () => {
//     const doc = new jsPDF()

//     doc.setFontSize(18)
//     doc.text("Admission Form", 70, 20)

//     doc.setFontSize(12)
//     let y = 40
//     doc.text(`Student Name: ${formData.studentName}`, 20, y); y += 8
//     doc.text(`Father Name: ${formData.fatherName}`, 20, y); y += 8
//     doc.text(`Date of Birth: ${formData.dob}`, 20, y); y += 8
//     doc.text(`Age: ${formData.age}`, 20, y); y += 8
//     doc.text(`Phone: ${formData.phone}`, 20, y); y += 8
//     doc.text(`Education: ${formData.education}`, 20, y); y += 8
//     doc.text(`Course: ${formData.course}`, 20, y); y += 8
//     doc.text(`Address: ${formData.address}`, 20, y)

//     // Create preview URL
//     const pdfBlob = doc.output("blob")
//     const url = URL.createObjectURL(pdfBlob)
//     setPdfUrl(url)
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         Admission Form
//       </h1>

//       {/* FORM */}
//       <div className="space-y-3">
//         <input name="studentName" placeholder="Student Name" onChange={handleChange} className="w-full border p-2" />
//         <input name="fatherName" placeholder="Father Name" onChange={handleChange} className="w-full border p-2" />
//         <input type="date" name="dob" onChange={handleChange} className="w-full border p-2" />
//         <input name="age" placeholder="Age" onChange={handleChange} className="w-full border p-2" />
//         <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-2" />
//         <input name="education" placeholder="Education" onChange={handleChange} className="w-full border p-2" />
//         <input name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2" />

//         <select name="course" onChange={handleChange} className="w-full border p-2">
//           <option value="">Select Course</option>
//           <option>Noorani Qaida</option>
//           <option>Quran Nazira</option>
//           <option>Hifz-ul-Quran</option>
//           <option>Tajweed</option>
//         </select>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-teal-600 text-white py-3 rounded"
//         >
//           Submit & Generate PDF
//         </button>
//       </div>

//       {/* PDF PREVIEW */}
//       {pdfUrl && (
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-3">
//             Submitted Application (PDF Preview)
//           </h2>

//           <iframe
//             src={pdfUrl}
//             className="w-full h-[500px] border rounded"
//           />

//           <a
//             href={pdfUrl}
//             download="admission-form.pdf"
//             className="block mt-4 text-center bg-green-600 text-white py-2 rounded"
//           >
//             Download PDF
//           </a>
//         </div>
//       )}
//     </div>
//   )
// }
import { AdmissionFormComponent } from "@/components/admission-form"
import { SubmissionsList } from "@/components/submissions-list"

export const metadata = {
  title: "Admission Form - Darul Uloom Dilkash",
  description: "Apply for admission to Darul Uloom Dilkash",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <AdmissionFormComponent />
        <SubmissionsList />
      </div>
    </main>
  )
}