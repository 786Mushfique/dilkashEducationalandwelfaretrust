// "use client"
// import Link from "next/link"

// interface AdmissionsProps {
//   language: "en" | "ur"
// }

// export default function Admissions({ language }: AdmissionsProps) {
//   const content = {
//     en: {
//       title: "Admissions",
//       description: "Join our community of dedicated students pursuing Islamic excellence",
//       guidelines: "Guidelines",
//       guidItems: ["Age eligibility (5+ years)", "Interest in Islamic education", "Commitment to values"],
//       scholarship: "Free Scholarship Program",
//       scholarDesc: "We offer full and partial scholarships for deserving students",
//       aboutAdmission: "About Our Admissions",
//       aboutText:
//         "Our admissions process is designed to identify motivated students who are passionate about Islamic education. We welcome girls from all backgrounds.",
//       applyNow: "Apply Now",
//     },
//     ur: {
//       title: "داخلہ",
//       description: "اسلامی تعلیم کے لیے وقف طالبات کی ہماری برادری میں شامل ہوں",
//       guidelines: "رہنمائی",
//       guidItems: ["عمر کی اہلیت (5+ سال)", "اسلامی تعلیم میں دلچسپی", "اقدار پر عمل"],
//       scholarship: "مفت وظیفہ پروگرام",
//       scholarDesc: "ہم لائق طالبات کو مکمل اور جزوی وظیفے دیتے ہیں",
//       aboutAdmission: "ہمارے داخلے کے بارے میں",
//       aboutText:
//         "ہمارا داخلہ کا طریقہ اسلامی تعلیم میں دلچسپی رکھنے والی لڑکیوں کو تلاش کرنے کے لیے ڈیزائن کیا گیا ہے۔",
//       applyNow: "اب درخواست کریں",
//     },
//   }

//   const text = content[language]

//   return (
//     <section id="admissions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
//           <p className="text-lg text-gray-600 mb-4">{text.description}</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-500 mx-auto"></div>
//         </div>

//         {/* Guidelines Card */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-300 hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl font-bold mb-4">
//               📋
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">{text.guidelines}</h3>
//             <ul className="space-y-2 mb-6">
//               {text.guidItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-2 text-gray-700">
//                   <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Scholarship Card */}
//           <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300 hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center text-xl font-bold mb-4">
//               🎓
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">{text.scholarship}</h3>
//             <p className="text-gray-700 mb-6">{text.scholarDesc}</p>
//             <div className="text-center">
//               <img src="/scholarship-award-certificate.jpg" alt="Scholarship" className="w-full rounded-lg mb-4" />
//             </div>
//           </div>

//           {/* About Admission Card */}
//           <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-300 hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl font-bold mb-4">
//               ℹ️
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-4">{text.aboutAdmission}</h3>
//             <p className="text-gray-700 text-sm">{text.aboutText}</p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center">
//           <Link
//             href="/admissions"
//             className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
//           >
//             {text.applyNow}
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import type React from "react"

import { useState, useRef } from "react"
import type { AdmissionForm } from "@/lib/types"
import { storageUtils } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { RotateCcw, Pen } from "lucide-react"

const courses = ["Noorani Qaida", "Quran Nazira", "Hifz-ul-Quran", "Tajweed", "Islamic Fiqh", "Seerah"]

export function AdmissionFormComponent() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    previousEducation: "",
    course: "",
  })

  const [photoUrl, setPhotoUrl] = useState("")
  const [signatureUrl, setSignatureUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const photoInputRef = useRef<HTMLInputElement>(null)
  const signatureCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [signatureMode, setSignatureMode] = useState<"draw" | "type">("draw")
  const [signatureText, setSignatureText] = useState("")
  const [textSize, setTextSize] = useState(40)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "dateOfBirth" && value) {
      const dob = new Date(value)
      const today = new Date()
      const age = today.getFullYear() - dob.getFullYear()
      const monthDiff = today.getMonth() - dob.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        setFormData((prev) => ({ ...prev, age: (age - 1).toString() }))
      } else {
        setFormData((prev) => ({ ...prev, age: age.toString() }))
      }
    }
  }

  const handleCourseChange = (value: string) => {
    setFormData((prev) => ({ ...prev, course: value }))
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (signatureMode !== "draw") return
    const canvas = signatureCanvasRef.current
    if (!canvas) return
    setIsDrawing(true)
    const ctx = canvas.getContext("2d")
    const rect = canvas.getBoundingClientRect()
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || signatureMode !== "draw") return
    const canvas = signatureCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const rect = canvas.getBoundingClientRect()
    if (ctx) {
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.stroke()
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = signatureCanvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      setSignatureUrl("")
      setSignatureText("")
    }
  }

  const drawTextSignature = () => {
    const canvas = signatureCanvasRef.current
    if (!canvas || !signatureText) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `italic ${textSize}px cursive`
    ctx.fillStyle = "#000000"
    ctx.textBaseline = "middle"
    const textX = 20
    const textY = canvas.height / 2
    ctx.fillText(signatureText, textX, textY)
  }

  const saveSignature = () => {
    const canvas = signatureCanvasRef.current
    if (canvas) {
      if (signatureMode === "type" && signatureText) {
        drawTextSignature()
      }
      setSignatureUrl(canvas.toDataURL())
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!photoUrl) {
      toast.error("Please upload a photo")
      return
    }

    if (!signatureUrl) {
      toast.error("Please provide your signature")
      return
    }

    setIsSubmitting(true)

    try {
      const newForm: AdmissionForm = {
        id: Date.now().toString(),
        ...formData,
        photoUrl,
        signatureUrl,
        submittedAt: new Date().toISOString(),
        status: "pending",
        adminNotes: "",
      }

      storageUtils.addForm(newForm)
      toast.success("Application submitted successfully!")

      setFormData({
        studentName: "",
        fatherName: "",
        dateOfBirth: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        previousEducation: "",
        course: "",
      })
      setPhotoUrl("")
      clearSignature()

      window.location.reload()
    } catch (error) {
      toast.error("Failed to submit application")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Admission Form</h2>
      <p className="text-gray-600 mb-8">Apply for admission to Darul Uloom Dilkash</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentName">Student Full Name *</Label>
              <Input
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="fatherName">Father/Guardian Name *</Label>
              <Input
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="Enter guardian name"
                required
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="age">Age *</Label>
              <Input id="age" name="age" type="number" value={formData.age} readOnly className="bg-gray-100" />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Mobile Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+92 300 0000000"
                required
              />
            </div>
          </div>
        </div>

        {/* Address & Education */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education Details</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Full Address *</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your complete address"
                className="resize-none"
                required
              />
            </div>
            <div>
              <Label htmlFor="previousEducation">Previous Education *</Label>
              <Input
                id="previousEducation"
                name="previousEducation"
                value={formData.previousEducation}
                onChange={handleInputChange}
                placeholder="e.g., SSC, Matriculation"
                required
              />
            </div>
            <div>
              <Label htmlFor="course">Select Course *</Label>
              <Select value={formData.course} onValueChange={handleCourseChange}>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Photo Upload *</h3>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-8 bg-blue-50">
            {photoUrl ? (
              <div className="text-center">
                <img
                  src={photoUrl || "/placeholder.svg"}
                  alt="Preview"
                  className="w-32 h-40 object-cover rounded-lg mb-4"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPhotoUrl("")
                    if (photoInputRef.current) photoInputRef.current.value = ""
                  }}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove Photo
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-600 mb-4">Upload your recent photo (JPG, PNG)</p>
                <Button
                  type="button"
                  onClick={() => photoInputRef.current?.click()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Choose Photo
                </Button>
              </div>
            )}
            <input ref={photoInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </div>
        </div>

        {/* Signature Canvas */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Signature *</h3>
          <div className="flex gap-2 mb-4">
            <Button
              type="button"
              variant={signatureMode === "draw" ? "default" : "outline"}
              onClick={() => {
                setSignatureMode("draw")
                clearSignature()
              }}
              className="flex-1"
            >
              <Pen className="mr-2 h-4 w-4" /> Draw Signature
            </Button>
            <Button
              type="button"
              variant={signatureMode === "type" ? "default" : "outline"}
              onClick={() => {
                setSignatureMode("type")
                clearSignature()
              }}
              className="flex-1"
            >
              Type Signature
            </Button>
          </div>

          {signatureMode === "draw" ? (
            <div>
              <p className="text-sm text-gray-600 mb-4">Sign below using your mouse or touchpad</p>
              <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-4">
                <canvas
                  ref={signatureCanvasRef}
                  width={500}
                  height={200}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full bg-white cursor-crosshair"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4 mb-4">
              <div>
                <Label htmlFor="signatureText">Type your signature/name *</Label>
                <Input
                  id="signatureText"
                  type="text"
                  value={signatureText}
                  onChange={(e) => setSignatureText(e.target.value)}
                  placeholder="Enter your name or signature"
                  className="text-lg font-cursive"
                />
              </div>
              <div>
                <Label htmlFor="textSize">Text Size: {textSize}px</Label>
                <input
                  id="textSize"
                  type="range"
                  min="20"
                  max="80"
                  value={textSize}
                  onChange={(e) => setTextSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="border-2 border-gray-300 rounded-lg overflow-hidden p-4 bg-white min-h-[200px] flex items-center justify-center">
                <canvas ref={signatureCanvasRef} width={500} height={200} className="w-full" />
              </div>
              <Button type="button" onClick={drawTextSignature} className="w-full bg-blue-600 hover:bg-blue-700">
                Preview Signature
              </Button>
            </div>
          )}

          {signatureUrl && (
            <div className="mb-4">
              <p className="text-sm font-medium text-green-600">Signature saved ✓</p>
            </div>
          )}
          <div className="flex gap-3">
            <Button type="button" onClick={saveSignature} className="bg-green-600 hover:bg-green-700 flex-1">
              Save Signature
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={clearSignature}
              className="text-red-600 hover:text-red-700 bg-transparent flex-1"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Clear
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg font-semibold"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}
