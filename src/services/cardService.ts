import type { CardFormData } from '../types/CardFormData'

export const generateCard = async (formData: CardFormData): Promise<string> => {
  const response = await fetch('http://127.0.0.1:8000/api/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'Error creating card')
  }

  return result.url
}
