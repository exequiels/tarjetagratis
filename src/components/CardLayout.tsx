import { useState } from 'react'
import Armador from './Armador'
import CustomCard from './CustomCard'
import type { CardFormData } from '../types/CardFormData'

const CardLayout = () => {
  const [formData, setFormData] = useState<CardFormData>({
    /* Globales */
    fondo: 'https://placehold.co/450x800?',
    fuente: 'Arial, sans-serif',

    /* Inputs */
    nombre: '',
    cuantos: '',
    frase: '',
    cuando: '',
    horario: '',
    direccion: '',

    /* Colores */
    nombreColor: 'text-gray-900',
    cuantosColor: 'text-gray-900',
    fraseColor: 'text-gray-900',
    cuandoColor: 'text-gray-900',
    horarioColor: 'text-gray-900',
    direccionColor: 'text-gray-900',

    /* Decoraciones */
    nombreDecoration: '',
    cuantosDecoration: '',
    fraseDecoration: '',
    cuandoDecoration: '',
    horarioDecoration: '',
    direccionDecoration: '',

    /* Tamaños */
    nombreSize: 'text-4xl md:text-5xl lg:text-6xl',
    cuantosSize: 'text-base',
    fraseSize: 'text-base',
    cuandoSize: 'text-base',
    horarioSize: 'text-base',
    direccionSize: 'text-base',

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
