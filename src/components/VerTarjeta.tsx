import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tarjeta from '../pages/Tarjeta'
import type { CardFormData } from '../types/CardFormData'
import config from '../config'

const VerTarjeta = () => {
  const { code } = useParams<{ code: string }>()
  const shortCode = code?.split('-')[0] || ''
  const [cardData, setCardData] = useState<CardFormData | null>(null)

  useEffect(() => {
    if (!shortCode) return
    fetch(`${config.VITE_BACKEND_URL}/api/card/${shortCode}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setCardData)
      .catch(console.error)
  }, [shortCode])
  console.log('shortCode', shortCode)

  useEffect(() => {
    if (cardData?.nombre) {
      document.title = `Cumple de ${cardData.nombre}!`
    } else {
      document.title = 'Estas invitado a mi cumple!'
    }
  }, [cardData])

  if (!cardData)
    return (
      <div className="flex justify-content-center align-items-center min-h-screen">
        <div className="flex flex-column max-w-25rem md:max-w-40rem relative overflow-hidden"></div>
      </div>
    )

  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <Tarjeta {...cardData} />
    </div>
  )
}

export default VerTarjeta
