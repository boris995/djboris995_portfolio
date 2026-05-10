export interface ContactFormData {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}