import { useState } from 'react'
import Armador from './Armador'
import CustomCard from './CustomCard'
import type { CardFormData } from '../types/CardFormData'
import { generateCard } from '../services/cardService'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'

const CardLayout = () => {
  const [formData, setFormData] = useState<CardFormData>({
    /* Globales */
    fondo: './videos/hadas_marco_01_mov.mp4',
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

    /* Animaciones */
    nombreAnimar: 'animate__animated animate__flipInX',
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
  const [visible, setVisible] = useState<boolean>(false)

  console.log(JSON.stringify(formData, null, 2))

  return (
    <div className="flex justify-content-center p-4">
      <div className="card flex justify-content-center border-1 border-dashed border-round-lg block md:hidden">
        <Sidebar
          className="bg-verde"
          visible={visible}
          onHide={() => setVisible(false)}
          blockScroll
        >
          <Armador formData={formData} setFormData={setFormData} />
        </Sidebar>
        <Button
          className="bg-green-200"
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="border-1 border-dashed border-round-lg hidden md:block col-4">
        <Armador formData={formData} setFormData={setFormData} />
      </div>
      <div className="col-12 md:col-6 centrado">
        <CustomCard {...formData} />
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
    </div>
  )
}

export default CardLayout
