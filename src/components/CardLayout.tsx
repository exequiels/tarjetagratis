import { useState } from 'react'
import Armador from './Armador'
import CustomCard from './CustomCard'
import type { CardFormData } from '../types/CardFormData'

const CardLayout = () => {
  const [formData, setFormData] = useState<CardFormData>({
    /* Globales */
    fondo: 'https://placehold.co/450x800/D8D8D8/D8D8D8?text=',
    fuente: 'Arial, sans-serif',

    /* Inputs */
    nombre: '',
    cuantos: '',

    cuando: '',
    horario: '',
    direccion: '',

    /* Colores */
    nombreColor: 'text-gray-900',
    cuantosColor: 'text-gray-900',
    cuandoColor: 'text-gray-900',
    horarioColor: 'text-gray-900',
    direccionColor: 'text-gray-900',

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

    /* Orden */
    nombreOrden: 'flex-order-0',
    cuantosOrden: 'flex-row',

    /* Alineaciones */
    nombreAlinear: 'align-items-end',
    cuantosAlinear: 'align-items-center',
    cuandoAlinear: 'align-items-center',
    direccionAlinear: 'align-items-start',
  })

  return (
    <div className="flex justify-content-center p-4">
      <div className="border-1 hidden md:block col-4">
        <Armador formData={formData} setFormData={setFormData} />
      </div>
      <div className="col-12 md:col-6 centrado">
        <CustomCard {...formData} />
      </div>
    </div>
  )
}

export default CardLayout
