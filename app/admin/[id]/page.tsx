// "use client"

// import { useState, useEffect } from "react"
// import type { AdmissionForm } from "@/lib/types"
// import { storageUtils } from "@/lib/storage"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { ArrowLeft, Download, Trash2 } from "lucide-react"
// import { toast } from "sonner"
// import { useParams, useRouter } from "next/navigation"

// export default function ApplicationDetail() {
//   const params = useParams()
//   const router = useRouter()
//   const id = params.id as string
//   const [form, setForm] = useState<AdmissionForm | null>(null)
//   const [isEditing, setIsEditing] = useState(false)
//   const [adminNotes, setAdminNotes] = useState("")
//   const [isAdminVerified, setIsAdminVerified] = useState(false)
//   const [adminPassword, setAdminPassword] = useState("")

//   useEffect(() => {
//     const adminAuth = localStorage.getItem("adminAuthenticated")
//     if (!adminAuth) {
//       // Redirect to admin dashboard which will ask for password
//       router.push("/admin")
//       return
//     }
//     setIsAdminVerified(true)

//     const data = storageUtils.getFormById(id)
//     setForm(data)
//     setAdminNotes(data?.adminNotes || "")
//   }, [id, router])

//   const handleStatusChange = (status: "approved" | "rejected" | "pending") => {
//     if (form) {
//       storageUtils.updateForm(form.id, { status })
//       setForm({ ...form, status })
//       toast.success(`Application marked as ${status}`)
//     }
//   }

//   const handleSaveNotes = () => {
//     if (form) {
//       storageUtils.updateForm(form.id, { adminNotes })
//       toast.success("Notes saved successfully")
//       setIsEditing(false)
//     }
//   }

//   const handleDelete = () => {
//     if (confirm("Are you sure you want to delete this application?")) {
//       storageUtils.deleteForm(id)
//       window.location.href = "/admin"
//       toast.success("Application deleted")
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-yellow-100 text-yellow-800"
//     }
//   }

//   if (!isAdminVerified) {
//     return (
//       <main className="min-h-screen bg-gray-50 p-4">
//         <div className="max-w-4xl mx-auto">
//           <Card className="p-8 text-center">
//             <p className="text-gray-500">Verifying admin access...</p>
//           </Card>
//         </div>
//       </main>
//     )
//   }

//   if (!form) {
//     return (
//       <main className="min-h-screen bg-gray-50 p-4">
//         <div className="max-w-4xl mx-auto">
//           <Link href="/admin">
//             <Button variant="outline" className="mb-6 bg-transparent">
//               <ArrowLeft className="mr-2 h-4 w-4" /> Back
//             </Button>
//           </Link>
//           <Card className="p-8 text-center">
//             <p className="text-gray-500">Application not found</p>
//           </Card>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <Link href="/admin">
//           <Button variant="outline" className="mb-6 bg-transparent">
//             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
//           </Button>
//         </Link>

//         <div className="space-y-6">
//           {/* Header */}
//           <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
//             <div className="flex items-center justify-between gap-4 flex-wrap">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">{form.studentName}</h1>
//                 <p className="text-gray-600 mt-1">Application ID: {form.id}</p>
//               </div>
//               <Badge className={`${getStatusColor(form.status)} text-lg px-4 py-2`}>
//                 {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
//               </Badge>
//             </div>
//           </Card>

//           {/* Personal Information */}
//           <Card className="p-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Father/Guardian Name</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.fatherName}</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Date of Birth</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.dateOfBirth}</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Age</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.age} years</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Email</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.email}</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Phone Number</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.phone}</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Course</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.course}</p>
//               </div>
//             </div>
//           </Card>

//           {/* Education Information */}
//           <Card className="p-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Education Information</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Previous Education</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.previousEducation}</p>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-600">Full Address</label>
//                 <p className="text-lg text-gray-900 mt-1">{form.address}</p>
//               </div>
//             </div>
//           </Card>

//           {/* Photo & Signature */}
//           <Card className="p-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Submitted Documents</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="border rounded-lg p-4">
//                 <label className="text-sm font-medium text-gray-600">Photo</label>
//                 <img
//                   src={form.photoUrl || "/placeholder.svg"}
//                   alt="Student Photo"
//                   className="w-full h-64 object-cover rounded-lg mt-3"
//                 />
//               </div>
//               <div className="border rounded-lg p-4">
//                 <label className="text-sm font-medium text-gray-600">Signature</label>
//                 <img
//                   src={form.signatureUrl || "/placeholder.svg"}
//                   alt="Signature"
//                   className="w-full h-64 object-contain bg-gray-50 rounded-lg mt-3"
//                 />
//               </div>
//             </div>
//           </Card>

//           {/* Status Management */}
//           <Card className="p-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Status</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
//                 <Select value={form.status} onValueChange={(value: any) => handleStatusChange(value)}>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending Review</SelectItem>
//                     <SelectItem value="approved">Approve Application</SelectItem>
//                     <SelectItem value="rejected">Reject Application</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
//                 {isEditing ? (
//                   <div className="space-y-3">
//                     <Textarea
//                       value={adminNotes}
//                       onChange={(e) => setAdminNotes(e.target.value)}
//                       placeholder="Add notes about this application..."
//                       className="min-h-[150px]"
//                     />
//                     <div className="flex gap-3">
//                       <Button onClick={handleSaveNotes} className="bg-green-600 hover:bg-green-700">
//                         Save Notes
//                       </Button>
//                       <Button variant="outline" onClick={() => setIsEditing(false)}>
//                         Cancel
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <div className="bg-gray-50 rounded-lg p-4 min-h-[150px] border border-gray-200">
//                       <p className="text-gray-700 whitespace-pre-wrap">{adminNotes || "No notes added yet"}</p>
//                     </div>
//                     <Button variant="outline" onClick={() => setIsEditing(true)} className="mt-3">
//                       Edit Notes
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </Card>

//           {/* Action Buttons */}
//           <div className="flex gap-3 pt-6">
//             <Button disabled className="flex-1 bg-gray-600">
//               <Download className="mr-2 h-4 w-4" /> Export PDF
//             </Button>
//             <Button variant="destructive" onClick={handleDelete} className="flex-1">
//               <Trash2 className="mr-2 h-4 w-4" /> Delete Application
//             </Button>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import type { AdmissionForm } from "@/lib/types"
import { storageUtils } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Download, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useParams, useRouter } from "next/navigation"

export default function ApplicationDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [form, setForm] = useState<AdmissionForm | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [adminNotes, setAdminNotes] = useState("")
  const [isAdminVerified, setIsAdminVerified] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuthenticated")
    if (!adminAuth) {
      // Redirect to admin dashboard which will ask for password
      router.push("/admin")
      return
    }
    setIsAdminVerified(true)

    const data = storageUtils.getFormById(id)
    setForm(data)
    setAdminNotes(data?.adminNotes || "")
  }, [id, router])

  const handleStatusChange = (status: "approved" | "rejected" | "pending") => {
    if (form) {
      storageUtils.updateForm(form.id, { status })
      setForm({ ...form, status })
      toast.success(`Application marked as ${status}`)
    }
  }

  const handleSaveNotes = () => {
    if (form) {
      storageUtils.updateForm(form.id, { adminNotes })
      toast.success("Notes saved successfully")
      setIsEditing(false)
    }
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this application?")) {
      storageUtils.deleteForm(id)
      toast.success("Application deleted")
      setTimeout(() => {
        window.location.href = "/admin"
      }, 500)
    }
  }

  const handleExportPDF = () => {
    if (!form) return

    const pdfWindow = window.open("", "", "width=800,height=600")
    if (!pdfWindow) {
      toast.error("Failed to open PDF window")
      return
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Application - ${form.studentName}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
          .header { background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
          .header h1 { margin: 0; color: #333; }
          .section { margin-bottom: 20px; page-break-inside: avoid; }
          .section h2 { border-bottom: 2px solid #007bff; padding-bottom: 10px; color: #333; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; margin-top: 3px; }
          .row { display: flex; gap: 30px; }
          .col { flex: 1; }
          .image { max-width: 200px; margin: 10px 0; border: 1px solid #ddd; padding: 5px; }
          .status { display: inline-block; padding: 5px 10px; border-radius: 3px; font-weight: bold; margin-top: 10px; }
          .status.approved { background-color: #d4edda; color: #155724; }
          .status.rejected { background-color: #f8d7da; color: #721c24; }
          .status.pending { background-color: #fff3cd; color: #856404; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${form.studentName}</h1>
          <p><strong>Application ID:</strong> ${form.id}</p>
          <p><strong>Submitted:</strong> ${new Date(form.submittedAt).toLocaleDateString()}</p>
          <div class="status ${form.status}">${form.status.charAt(0).toUpperCase() + form.status.slice(1)}</div>
        </div>

        <div class="section">
          <h2>Personal Information</h2>
          <div class="row">
            <div class="col">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${form.studentName}</div>
              </div>
              <div class="field">
                <div class="label">Father/Guardian Name</div>
                <div class="value">${form.fatherName}</div>
              </div>
              <div class="field">
                <div class="label">Date of Birth</div>
                <div class="value">${form.dateOfBirth}</div>
              </div>
              <div class="field">
                <div class="label">Age</div>
                <div class="value">${form.age} years</div>
              </div>
            </div>
            <div class="col">
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${form.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${form.phone}</div>
              </div>
              <div class="field">
                <div class="label">Course</div>
                <div class="value">${form.course}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Education Information</h2>
          <div class="field">
            <div class="label">Previous Education</div>
            <div class="value">${form.previousEducation}</div>
          </div>
          <div class="field">
            <div class="label">Address</div>
            <div class="value">${form.address}</div>
          </div>
        </div>

        <div class="section">
          <h2>Documents</h2>
          <div class="row">
            <div class="col">
              <div class="label">Photo</div>
              <img src="${form.photoUrl}" alt="Photo" class="image" style="max-height: 250px; object-fit: cover;">
            </div>
            <div class="col">
              <div class="label">Signature</div>
              <img src="${form.signatureUrl}" alt="Signature" class="image" style="max-height: 150px; object-fit: contain; background: #f9f9f9;">
            </div>
          </div>
        </div>

        ${
          form.adminNotes
            ? `
        <div class="section">
          <h2>Admin Notes</h2>
          <div class="field">
            <div class="value">${form.adminNotes.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        `
            : ""
        }

        <div class="no-print" style="margin-top: 30px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
            Print / Save as PDF
          </button>
        </div>
      </body>
      </html>
    `

    pdfWindow.document.write(htmlContent)
    pdfWindow.document.close()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  if (!isAdminVerified) {
    return (
      <main className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-gray-500">Verifying admin access...</p>
          </Card>
        </div>
      </main>
    )
  }

  if (!form) {
    return (
      <main className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/admin">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </Link>
          <Card className="p-8 text-center">
            <p className="text-gray-500">Application not found</p>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/admin">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </Link>

        <div className="space-y-6">
          {/* Header */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{form.studentName}</h1>
                <p className="text-gray-600 mt-1">Application ID: {form.id}</p>
              </div>
              <Badge className={`${getStatusColor(form.status)} text-lg px-4 py-2`}>
                {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
              </Badge>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">Father/Guardian Name</label>
                <p className="text-lg text-gray-900 mt-1">{form.fatherName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                <p className="text-lg text-gray-900 mt-1">{form.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Age</label>
                <p className="text-lg text-gray-900 mt-1">{form.age} years</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-lg text-gray-900 mt-1">{form.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Phone Number</label>
                <p className="text-lg text-gray-900 mt-1">{form.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Course</label>
                <p className="text-lg text-gray-900 mt-1">{form.course}</p>
              </div>
            </div>
          </Card>

          {/* Education Information */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Previous Education</label>
                <p className="text-lg text-gray-900 mt-1">{form.previousEducation}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Full Address</label>
                <p className="text-lg text-gray-900 mt-1">{form.address}</p>
              </div>
            </div>
          </Card>

          {/* Photo & Signature */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submitted Documents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <label className="text-sm font-medium text-gray-600">Photo</label>
                <img
                  src={form.photoUrl || "/placeholder.svg"}
                  alt="Student Photo"
                  className="w-full h-64 object-cover rounded-lg mt-3"
                />
              </div>
              <div className="border rounded-lg p-4">
                <label className="text-sm font-medium text-gray-600">Signature</label>
                <img
                  src={form.signatureUrl || "/placeholder.svg"}
                  alt="Signature"
                  className="w-full h-64 object-contain bg-gray-50 rounded-lg mt-3"
                />
              </div>
            </div>
          </Card>

          {/* Status Management */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Status</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
                <Select value={form.status} onValueChange={(value: any) => handleStatusChange(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending Review</SelectItem>
                    <SelectItem value="approved">Approve Application</SelectItem>
                    <SelectItem value="rejected">Reject Application</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
                {isEditing ? (
                  <div className="space-y-3">
                    <Textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add notes about this application..."
                      className="min-h-[150px]"
                    />
                    <div className="flex gap-3">
                      <Button onClick={handleSaveNotes} className="bg-green-600 hover:bg-green-700">
                        Save Notes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[150px] border border-gray-200">
                      <p className="text-gray-700 whitespace-pre-wrap">{adminNotes || "No notes added yet"}</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsEditing(true)} className="mt-3">
                      Edit Notes
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6">
            <Button onClick={handleExportPDF} className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Export PDF
            </Button>
            <Button variant="destructive" onClick={handleDelete} className="flex-1">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Application
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
