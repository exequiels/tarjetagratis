import type { CardFormData } from '../types/CardFormData'

export function validaciones(data: CardFormData): string[] {
  const errores: string[] = []

  if (!data.fondo?.trim()) {
    errores.push('Debe seleccionar un fondo.')
  }

  if (!data.fuente?.trim()) {
    errores.push('Debe seleccionar una fuente.')
  }

  if (!data.nombre?.trim()) {
    errores.push('El nombre es obligatorio.')
  }

  if (!data.cuantos?.trim()) {
    errores.push('La edad es obligatoria.')
  }

  if (!data.cuando?.trim()) {
    errores.push('La fecha es obligatoria.')
  }

  if (!data.horario?.trim()) {
    errores.push('La hora es obligatoria.')
  }

  if (!data.direccion?.trim()) {
    errores.push('La dirección es obligatoria.')
  }

  return errores
}
