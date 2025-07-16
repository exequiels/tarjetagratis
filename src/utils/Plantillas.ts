import type { TFunction } from 'i18next'
import type { CardFormData } from '../types/CardFormData'

export const getPlantillas = (t: TFunction) => [
  {
    label: t('base.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/images/blank.png',
      fuente: 'Arial, sans-serif',

      /* Inputs */
      nombre: t('base.nombre', { ns: 'plantillas' }),
      cuantos: t('base.cuantos', { ns: 'plantillas' }),
      cuando: t('base.cuando', { ns: 'plantillas' }),
      horario: t('base.horario', { ns: 'plantillas' }),
      direccion: t('base.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-gray-700',
      cuantosColor: 'text-gray-700',
      cuandoColor: 'text-gray-700',
      horarioColor: 'text-gray-700',
      direccionColor: 'text-gray-700',

      /* Decoraciones */
      nombreDecoration: '',
      cuantosDecoration: '',
      cuandoDecoration: '',
      horarioDecoration: '',
      direccionDecoration: '',

      /* Tamaños */
      nombreSize: 'text-xl',
      cuantosSize: 'text-xl',
      cuandoSize: 'text-xl',
      horarioSize: 'text-xl',
      direccionSize: 'text-xl',

      /* Animaciones */
      nombreAnimar: '',
      cuantosAnimar: '',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: '',

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row-reverse',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: t('campanita.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/videos/hadas_marco_01_mov.mp4',
      fuente: 'HennyPenny, cursive',

      /* Inputs */
      nombre: t('campanita.nombre', { ns: 'plantillas' }),
      cuantos: t('campanita.cuantos', { ns: 'plantillas' }),
      cuando: t('campanita.cuando', { ns: 'plantillas' }),
      horario: t('campanita.horario', { ns: 'plantillas' }),
      direccion: t('campanita.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-cyan-500',
      cuantosColor: 'text-blue-500',
      cuandoColor: 'text-red-300',
      horarioColor: 'text-red-500',
      direccionColor: 'text-blue-500',

      /* Decoraciones */
      nombreDecoration: 'decoration-sombraDifusa-white',
      cuantosDecoration: 'decoration-sombraDifusa-lightblue',
      cuandoDecoration: 'decoration-sombraDifusa-pinkpastel',
      horarioDecoration: 'decoration-sombra-pinkpastel',
      direccionDecoration: 'decoration-contorno-lightblue',

      /* Tamaños */
      nombreSize: 'text-7xl',
      cuantosSize: 'text-7xl',
      cuandoSize: 'text-6xl',
      horarioSize: 'text-4xl',
      direccionSize: 'text-2xl',

      /* Animaciones */
      nombreAnimar: 'animate__animated animate__flipInX',
      cuantosAnimar: '',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: 'animate__animated animate__rubberBand',

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row-reverse',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: t('carlitos.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/images/dinosaurios_01.png',
      fuente: 'CalSans, sans-serif',

      /* Inputs */
      nombre: t('carlitos.nombre', { ns: 'plantillas' }),
      cuantos: t('carlitos.cuantos', { ns: 'plantillas' }),
      cuando: t('carlitos.cuando', { ns: 'plantillas' }),
      horario: t('carlitos.horario', { ns: 'plantillas' }),
      direccion: t('carlitos.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-orange-500',
      cuantosColor: 'text-orange-500',
      cuandoColor: 'text-gray-50',
      horarioColor: 'text-gray-900',
      direccionColor: 'text-gray-900',

      /* Decoraciones */
      nombreDecoration: 'decoration-sombra-black',
      cuantosDecoration: 'decoration-sombra-black',
      cuandoDecoration: 'decoration-resaltado-yellowsoft',
      horarioDecoration: '',
      direccionDecoration: 'decoration-contorno-white',

      /* Tamaños */
      nombreSize: 'text-7xl',
      cuantosSize: 'text-18xl',
      cuandoSize: 'text-xl',
      horarioSize: 'text-xl',
      direccionSize: 'text-xl',

      /* Animaciones */
      nombreAnimar: '',
      cuantosAnimar: '',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: '',

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',
      cuantosDistribucion: 'row',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: t('dieguito.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/videos/argentina_futbol_marco_mov.mp4',
      fuente: 'LoveYaLikeASister, cursive',

      /* Inputs */
      nombre: t('dieguito.nombre', { ns: 'plantillas' }),
      cuantos: t('dieguito.cuantos', { ns: 'plantillas' }),
      cuando: t('dieguito.cuando', { ns: 'plantillas' }),
      horario: t('dieguito.horario', { ns: 'plantillas' }),
      direccion: t('dieguito.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-blue-500',
      cuantosColor: 'text-blue-500',
      cuandoColor: 'text-red-600',
      horarioColor: 'text-red-500',
      direccionColor: 'text-blue-500',

      /* Decoraciones */
      nombreDecoration: 'decoration-contorno-white',
      cuantosDecoration: 'decoration-contorno-white',
      cuandoDecoration: 'decoration-sombraDifusa-peach',
      horarioDecoration: 'decoration-sombraDifusa-peach',
      direccionDecoration: 'decoration-contorno-white',

      /* Tamaños */
      nombreSize: 'text-7xl',
      cuantosSize: 'text-12xl',
      cuandoSize: 'text-6xl',
      horarioSize: 'text-4xl',
      direccionSize: 'text-2xl',

      /* Animaciones */
      nombreAnimar: 'animate__animated animate__heartBeat',
      cuantosAnimar: 'animate__animated animate__fadeInLeft',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: '',

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',
      cuantosDistribucion: 'row',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: t('margarita.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/images/mundo_marino_03.png',
      fuente: 'Kablammo, cursive',

      /* Inputs */
      nombre: t('margarita.nombre', { ns: 'plantillas' }),
      cuantos: t('margarita.cuantos', { ns: 'plantillas' }),
      cuando: t('margarita.cuando', { ns: 'plantillas' }),
      horario: t('margarita.horario', { ns: 'plantillas' }),
      direccion: t('margarita.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-green-500',
      cuantosColor: 'text-cyan-500',
      cuandoColor: 'text-purple-600',
      horarioColor: 'text-red-500',
      direccionColor: 'text-cyan-500',

      /* Decoraciones */
      nombreDecoration: 'decoration-sombra-black',
      cuantosDecoration: 'decoration-sombraDifusa-green',
      cuandoDecoration: 'decoration-sombraDifusa-peach',
      horarioDecoration: 'decoration-sombraDifusa-peach',
      direccionDecoration: 'decoration-sombraDifusa-black',

      /* Tamaños */
      nombreSize: 'text-7xl',
      cuantosSize: 'text-12xl',
      cuandoSize: 'text-6xl',
      horarioSize: 'text-4xl',
      direccionSize: 'text-4xl',

      /* Animaciones */
      nombreAnimar: '',
      cuantosAnimar: '',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: '',

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',
      cuantosDistribucion: 'column',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-center',
    } as CardFormData,
  },
  {
    label: t('neil.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/images/espacio_01.png',
      fuente: 'RubikMoonrocks, sans-serif',

      /* Inputs */
      nombre: t('neil.nombre', { ns: 'plantillas' }),
      cuantos: t('neil.cuantos', { ns: 'plantillas' }),
      cuando: t('neil.cuando', { ns: 'plantillas' }),
      horario: t('neil.horario', { ns: 'plantillas' }),
      direccion: t('neil.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-purple-500',
      cuantosColor: 'text-gray-400',
      cuandoColor: 'text-yellow-500',
      horarioColor: 'text-gray-50',
      direccionColor: 'text-gray-900',

      /* Decoraciones */
      nombreDecoration: 'decoration-sombraDifusa-white',
      cuantosDecoration: 'decoration-sombraDifusa-white',
      cuandoDecoration: 'decoration-resaltado-black',
      horarioDecoration: '',
      direccionDecoration: 'decoration-sombraDifusa-white',

      /* Tamaños */
      nombreSize: 'text-10xl',
      cuantosSize: 'text-18xl',
      cuandoSize: 'text-6xl',
      horarioSize: 'text-4xl',
      direccionSize: 'text-4xl',

      /* Animaciones */
      nombreAnimar: '',
      cuantosAnimar: '',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: '',

      /* Orden */
      nombreOrden: 'flex-order-1',
      cuantosOrden: 'flex-row',
      cuantosDistribucion: 'row',

      /* Alineaciones */
      nombreAlinear: 'align-items-start',
      cuantosAlinear: 'align-items-end',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-center',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: t('tomy.label', { ns: 'plantillas' }),
    value: {
      /* Globales */
      fondo: '/images/halloween_04.png',
      fuente: 'Eater, cursive',

      /* Inputs */
      nombre: t('tomy.nombre', { ns: 'plantillas' }),
      cuantos: t('tomy.cuantos', { ns: 'plantillas' }),
      cuando: t('tomy.cuando', { ns: 'plantillas' }),
      horario: t('tomy.horario', { ns: 'plantillas' }),
      direccion: t('tomy.direccion', { ns: 'plantillas' }),

      /* Colores */
      nombreColor: 'text-red-500',
      cuantosColor: 'text-gray-400',
      cuandoColor: 'text-yellow-500',
      horarioColor: 'text-purple-700',
      direccionColor: 'text-gray-800',

      /* Decoraciones */
      nombreDecoration: 'decoration-sombraDifusa-peachorange',
      cuantosDecoration: 'decoration-sombraDifusa-black',
      cuandoDecoration: 'decoration-resaltado-black',
      horarioDecoration: 'decoration-contorno-beige',
      direccionDecoration: 'decoration-sombraDifusa-white',

      /* Tamaños */
      nombreSize: 'text-8xl',
      cuantosSize: 'text-6xl',
      cuandoSize: 'text-6xl',
      horarioSize: 'text-2xl',
      direccionSize: 'text-xl',

      /* Animaciones */
      nombreAnimar: 'animate__animated animate__jackInTheBox',
      cuantosAnimar: 'animate__animated animate__fadeInLeft',
      cuandoAnimar: '',
      horarioAnimar: '',
      direccionAnimar: 'animate__animated animate__fadeInBottomRight',

      /* Orden */
      nombreOrden: 'flex-order-1',
      cuantosOrden: 'flex-row',
      cuantosDistribucion: 'row',

      /* Alineaciones */
      nombreAlinear: 'align-items-start',
      cuantosAlinear: 'align-items-end',
      cuandoAlinear: 'align-items-start',
      horarioAlinear: 'align-items-center',
      direccionAlinear: 'align-items-end',
    } as CardFormData,
  },
]
