import type { TFunction } from 'i18next'

export const getOpcionesArmador = (t: TFunction) => [
  { id: 'nombre', label: t('nombre'), placeholder: t('placeholderNombre') },
  { id: 'cuantos', label: t('cuantos'), placeholder: t('placeholderCuantos') },
  { id: 'cuando', label: t('cuando'), placeholder: t('placeholderCuando') },
  { id: 'horario', label: t('horario'), placeholder: t('placeholderHorario') },
  {
    id: 'direccion',
    label: t('direccion'),
    placeholder: t('placeholderDireccion'),
  },
]
