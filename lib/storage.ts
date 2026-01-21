import type { AdmissionForm } from "./types"

const STORAGE_KEY = "admission_forms"

export const storageUtils = {
  // Get all forms
  getAllForms: (): AdmissionForm[] => {
    if (typeof window === "undefined") return []
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  // Add new form
  addForm: (form: AdmissionForm): void => {
    const forms = storageUtils.getAllForms()
    forms.push(form)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(forms))
  },

  // Update form
  updateForm: (id: string, updates: Partial<AdmissionForm>): void => {
    const forms = storageUtils.getAllForms()
    const index = forms.findIndex((f) => f.id === id)
    if (index > -1) {
      forms[index] = { ...forms[index], ...updates }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(forms))
    }
  },

  // Delete form
  deleteForm: (id: string): void => {
    const forms = storageUtils.getAllForms()
    const filtered = forms.filter((f) => f.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  },

  // Get single form
  getFormById: (id: string): AdmissionForm | null => {
    const forms = storageUtils.getAllForms()
    return forms.find((f) => f.id === id) || null
  },
}


