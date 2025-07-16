import i18n from '../i18n' // Asegurate del path correcto a tu instancia
import type { CardFormData } from '../types/CardFormData'

export function validaciones(data: CardFormData): string[] {
  const t = i18n.t
  const errores: string[] = []

  if (!data.fondo?.trim()) {
    errores.push(t('fondo', { ns: 'validaciones' }))
  }

  if (!data.fuente?.trim()) {
    errores.push(t('fuente', { ns: 'validaciones' }))
  }

  if (!data.nombre?.trim()) {
    errores.push(t('nombre', { ns: 'validaciones' }))
  }

  if (!data.cuantos?.trim()) {
    errores.push(t('cuantos', { ns: 'validaciones' }))
  }

  if (!data.cuando?.trim()) {
    errores.push(t('cuando', { ns: 'validaciones' }))
  }

  if (!data.horario?.trim()) {
    errores.push(t('horario', { ns: 'validaciones' }))
  }

  if (!data.direccion?.trim()) {
    errores.push(t('direccion', { ns: 'validaciones' }))
  }

  return errores
}
