import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const About = () => {
  const { t } = useTranslation('about')
  // const aportes = t('agradecimiento.usuarios', {
  //   returnObjects: true,
  // }) as string[]
  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        canonicalUrl="https://tarjetagratis.com/about"
        keywords={t('seo.keywords')}
      />
      <div className="col-12 flex justify-content-center">
        <div className="col-12 md:col-4 border-1 border-dashed border-round-lg p-3 bg-gray-50">
          <h1 className="text-4xl font-bold">{t('titulo')}</h1>
          <p className="text-lg mt-3">{t('presentacion')}</p>
          <p className="text-lg mt-3">{t('lanzamiento')}</p>
          <p className="text-lg mt-3">{t('agradecimiento.familia')}</p>
          <p className="text-lg mt-3">{t('agradecimiento.parrafo')}</p>
          <p className="text-lg mt-3">{t('lista.ideas')}</p>

          <h2 className="text-2xl font-semibold mt-6">
            {t('tecnologias_titulo')}
          </h2>
          <ul className="list-disc text-left px-5 space-y-2 text-lg mt-2">
            <li>
              <strong>{t('tecnologias.stack')}</strong>
            </li>
            <li>
              {t('tecnologias.primereact')}&nbsp;
              <a
                href="https://primereact.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Sitio oficial
              </a>
            </li>
            <li>
              {t('tecnologias.animate')}&nbsp;
              <a
                href="https://animate.style/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Animate.css
              </a>
            </li>
            <li>
              {t('tecnologias.hover_effect')}&nbsp;
              <a
                href="https://www.youtube.com/watch?v=LRiORDWOoXI&t=8s"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Video
              </a>
            </li>
            <li>
              {t('tecnologias.fuentes')}&nbsp;
              <a
                href="https://fonts.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Google Fonts
              </a>
            </li>
            <li>
              {t('tecnologias.imagenes')}&nbsp;
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Google AI Studio
              </a>
            </li>
          </ul>

          {/* <h4 className="text-lg mt-3">{t('agradecimiento.lista_titulo')}</h4>
          <ul className="text-lg">
            {aportes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul> */}

          <p className="text-lg mt-3">
            {t('invitacion_contacto')}&nbsp;
            <a
              href="https://x.com/ExeRebootLife"
              target="_blank"
              className="underline text-blue-500"
            >
              Twitter
            </a>
          </p>
          <p className="text-sm mt-3 text-gray-500">{t('nota_legal')}</p>
        </div>
      </div>
    </>
  )
}

export default About
