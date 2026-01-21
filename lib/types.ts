export interface AdmissionForm {
  id: string
  studentName: string
  fatherName: string
  dateOfBirth: string
  age: string
  email: string
  phone: string
  address: string
  previousEducation: string
  course: string
  photoUrl: string
  signatureUrl: string
  submittedAt: string
  status: "pending" | "approved" | "rejected"
  adminNotes: string
}


