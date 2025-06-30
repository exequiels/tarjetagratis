import { Dropdown } from 'primereact/dropdown'
import type { CardFormData } from '../../types/CardFormData'

type Props = {
  value: CardFormData | null
  onChange: (plantilla: CardFormData) => void
}

const plantillas = [
  {
    label: 'Cumple de Campanita',
    value: {
      /* Globales */
      fondo: './images/hadas_01.jpg',
      fuente: 'HennyPenny, cursive',

      /* Inputs */
      nombre: 'Campanita',
      cuantos: '6 años',
      cuando: 'Viernes 12 de Julio',
      horario: '18 a 20hs',
      direccion: 'Calle Cualquiera 123, Ciudad de los Sueños',

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
    label: 'Cumple de Carlitos',
    value: {
      /* Globales */
      fondo: './images/dinosaurios_01.png',
      fuente: 'CalSans, sans-serif',

      /* Inputs */
      nombre: 'CARLITOS',
      cuantos: '7',

      cuando: 'Viernes 25 de Agosto',
      horario: '16:30hs a 20:30hs',
      direccion: 'Calle Cualquiera 123, Ciudad de los Sueños',

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

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: 'Cumple de Dieguito',
    value: {
      /* Globales */
      fondo: './videos/argentina_futbol_marco_mov.mp4',
      fuente: 'LoveYaLikeASister, cursive',

      /* Inputs */
      nombre: 'Dieguito',
      cuantos: '10',

      cuando: 'Viernes 30 de Octubre',
      horario: '18pm',
      direccion: 'Calle Cualquiera 123, Ciudad de los Sueños',

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

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
  {
    label: 'Cumple de Margarita',
    value: {
      /* Globales */
      fondo: './images/mundo_marino_03.png',
      fuente: 'Kablammo, cursive',

      /* Inputs */
      nombre: 'Margarita',
      cuantos: '3',
      cuando: 'Lunes 02 de Abril',
      horario: '',
      direccion: 'Calle Cualquiera 123, Ciudad de los Sueños',

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

      /* Orden */
      nombreOrden: 'flex-order-0',
      cuantosOrden: 'flex-row',

      /* Alineaciones */
      nombreAlinear: 'align-items-end',
      cuantosAlinear: 'align-items-center',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-start',
      direccionAlinear: 'align-items-end',
    } as CardFormData,
  },
  {
    label: 'Cumple de Neil',
    value: {
      /* Globales */
      fondo: './images/espacio_01.png',
      fuente: 'RubikMoonrocks, sans-serif',

      /* Inputs */
      nombre: 'Neil',
      cuantos: '9',
      cuando: '05/08',
      horario: '14:45hs..',
      direccion: 'Calle Cualquiera 123, Ciudad Lunar',

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

      /* Orden */
      nombreOrden: 'flex-order-1',
      cuantosOrden: 'flex-row',

      /* Alineaciones */
      nombreAlinear: 'align-items-start',
      cuantosAlinear: 'align-items-end',
      cuandoAlinear: 'align-items-end',
      horarioAlinear: 'align-items-center',
      direccionAlinear: 'align-items-start',
    } as CardFormData,
  },
]

const DropdownPlantillas = ({ onChange, value }: Props) => {
  return (
    <div>
      <label htmlFor="plantillas">Plantillas:</label>
      <Dropdown
        inputId="plantillas"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={plantillas}
        onChange={(e) => onChange(e.value)}
        placeholder="Elegí una plantilla"
        optionLabel="label"
        className="w-full mt-2"
      />
    </div>
  )
}

export default DropdownPlantillas
