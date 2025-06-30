import { useState } from 'react'
import Armador from './Armador'
import CustomCard from './CustomCard'
import type { CardFormData } from '../types/CardFormData'
import { generateCard } from '../services/cardService'
import { Button } from 'primereact/button'

const CardLayout = () => {
  const [formData, setFormData] = useState<CardFormData>({
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
  })
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const handleGenerate = async () => {
    setLoading(true)
    setGeneratedUrl(null)

    try {
      const url = await generateCard(formData)
      setGeneratedUrl(url)
    } catch (error) {
      alert('Error: ' + error)
    } finally {
      setLoading(false)
    }
  }

  console.log(JSON.stringify(formData, null, 2))

  return (
    <div className="flex justify-content-center p-4">
      <div className="border-1 border-dashed border-round-lg hidden md:block col-4">
        <Armador formData={formData} setFormData={setFormData} />
        <div className="flex justify-content-end mt-3">
          <Button
            className="bg-green-200"
            label={loading ? 'Generando...' : 'Generar Tarjeta'}
            onClick={handleGenerate}
            disabled={loading}
          />
        </div>

        {generatedUrl && (
          <div className="mt-2">
            <p>Enlace generado:</p>
            <a href={generatedUrl} target="_blank" rel="noopener noreferrer">
              {generatedUrl}
            </a>
          </div>
        )}
      </div>
      <div className="col-12 md:col-6 centrado">
        <CustomCard {...formData} />
      </div>
    </div>
  )
}

export default CardLayout
