import config from '../config'
import type { CardFormData } from '../types/CardFormData'

export const generateCard = async (formData: CardFormData): Promise<string> => {
  const response = await fetch(`${config.VITE_BACKEND_URL}/api/card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const result = await response.json()

  if (!response.ok) {
    if (response.status === 422) {
      const errorMessages = Object.values(result.errors).flat()
      throw new Error(errorMessages.join(', '))
    }
    if (response.status === 429) {
      throw new Error(
        result.message || 'Demasiadas solicitudes, por favor esperá un momento.'
      )
    }
    throw new Error(result.error || 'Error creando tarjeta')
  }

  return result.url
}
