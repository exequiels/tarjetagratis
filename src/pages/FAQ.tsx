import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { Accordion, AccordionTab } from 'primereact/accordion'

const FAQ = () => {
  const { t } = useTranslation('faq')

  const preguntas = [
    { pregunta: 'faq.pregunta1', respuesta: 'faq.respuesta1' },
    { pregunta: 'faq.pregunta2', respuesta: 'faq.respuesta2' },
    { pregunta: 'faq.pregunta3', respuesta: 'faq.respuesta3' },
    { pregunta: 'faq.pregunta4', respuesta: 'faq.respuesta4' },
    { pregunta: 'faq.pregunta5', respuesta: 'faq.respuesta5' },
    { pregunta: 'faq.pregunta6', respuesta: 'faq.respuesta6' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map((p) => ({
      '@type': 'Question',
      name: t(p.pregunta),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(p.respuesta),
      },
    })),
  }

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        canonicalUrl="https://tarjetagratis.com/about"
        keywords={t('seo.keywords')}
        jsonLd={faqSchema}
      />
      <div className="col-12 flex justify-content-center">
        <div className="col-12 md:col-4 border-1 border-dashed border-round-lg p-3 bg-gray-50">
          <h1 className="text-4xl font-bold">{t('faq.titulo')}</h1>
          <div className="card mt-2">
            <Accordion activeIndex={0}>
              {preguntas.map((preg, index) => (
                <AccordionTab
                  key={index}
                  header={<strong>{t(preg.pregunta)}</strong>}
                >
                  <p className="m-0">{t(preg.respuesta)}</p>
                </AccordionTab>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
