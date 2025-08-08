import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tarjeta from '../pages/Tarjeta'
import type { CardFormData } from '../types/CardFormData'
import config from '../config'
import SEO from './SEO'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useTranslation } from 'react-i18next'

const VerTarjeta = () => {
  const { t } = useTranslation('verTarjeta')
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

  useEffect(() => {
    if (cardData?.nombre) {
      document.title = t('titulo_personalizado', { nombre: cardData.nombre })
    } else {
      document.title = t('titulo_generico')
    }
  }, [cardData, t])

  if (!cardData)
    return (
      <div className="flex justify-content-center align-items-center min-h-screen">
        <div className="flex flex-column max-w-25rem md:max-w-40rem relative overflow-hidden">
          <ProgressSpinner />
        </div>
      </div>
    )

  return (
    <div className="flex justify-content-center align-items-center min-h-screen p-3">
      <SEO
        title={t('seo.titulo')}
        description={t('seo.descripcion')}
        canonicalUrl={`https://tarjetagratis.com/tarjeta/${encodeURIComponent(
          code || ''
        )}`}
        keywords={t('seo.keywords')}
      />

      <Tarjeta {...cardData} />
    </div>
  )
}

export default VerTarjeta
