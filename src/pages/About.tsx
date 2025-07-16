import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const About = () => {
  const { t } = useTranslation('about')
  const aportes = t('agradecimiento.usuarios', {
    returnObjects: true,
  }) as string[]
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

          <p className="text-lg mt-4">{t('presentacion')}</p>

          <ul className="list-disc text-left px-5 space-y-2 text-lg mt-4">
            <li>{t('lista.mentores')}</li>
            <li>{t('lista.creatividad')}</li>
            <li>{t('lista.ideas')}</li>
            <li>{t('lista.colaboracion')}</li>
            <li>{t('lista.conexion')}</li>
          </ul>

          <p className="text-lg mt-5">{t('lanzamiento')}</p>

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

          <h3 className="text-lg mt-6">
            <strong>{t('agradecimiento.familia')}</strong>
          </h3>
          <p className="text-lg mt-2">{t('agradecimiento.parrafo')}</p>
          <h4 className="text-lg mt-6">{t('agradecimiento.lista_titulo')}</h4>
          <ul className="text-lg">
            {aportes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-lg mt-2">
            {t('agradecimiento.agradecimiento_general')}
          </p>

          <p className="text-lg mt-4">
            {t('invitacion_contacto')}&nbsp;
            <a
              href="https://www.linkedin.com/in/exequiel-sabatie/"
              target="_blank"
              className="underline text-blue-500"
            >
              LinkedIn
            </a>
            ,
            <a
              href="https://x.com/ExeRebootLife"
              target="_blank"
              className="underline text-blue-500"
            >
              Twitter
            </a>
          </p>
          <p className="text-sm mt-5 text-gray-500">{t('nota_legal')}</p>
        </div>
      </div>
    </>
  )
}

export default About
