import { useRef, useState } from 'react'
import Armador from '../Armador'
import CustomCard from '../CustomCard'
import type { CardFormData } from '../../types/CardFormData'
import { generateCard } from '../../services/cardService'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { Toast } from 'primereact/toast'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
// import ReCAPTCHA from 'react-google-recaptcha'
import config from '../../config'
import { validaciones } from '../../utils/Validaciones'
import SEO from '../SEO'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

// const RECAPTCHA_SITE_KEY = config.VITE_RECAPTCHA

const CardLayout = () => {
  const { t } = useTranslation('cardlayout')
  const toast = useRef<Toast>(null)
  const isEnglish = i18n.language === 'en'
  const [formData, setFormData] = useState<CardFormData>({
    /* Globales */
    fondo: '/videos/hadas_marco_01_mov.mp4',
    fuente: 'HennyPenny, cursive',

    /* Inputs */
    nombre: isEnglish ? 'Tinkerbell' : 'Campanita',
    cuantos: isEnglish ? '6 years old' : '6 años',
    cuando: isEnglish ? 'Friday, July 12th' : 'Viernes 12 de Julio',
    horario: isEnglish ? '6 to 8 PM' : '18 a 20hs',
    direccion: isEnglish
      ? 'Any Street 123, Dream City'
      : 'Calle Cualquiera 123, Ciudad de los Sueños',

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
    direccionAnimar: 'animate__animated animate__rubberBand',

    /* Orden */
    nombreOrden: 'flex-order-0',
    cuantosOrden: 'flex-row-reverse',
    cuantosDistribucion: 'row',

    /* Alineaciones */
    nombreAlinear: 'align-items-end',
    cuantosAlinear: 'align-items-center',
    cuandoAlinear: 'align-items-end',
    horarioAlinear: 'align-items-start',
    direccionAlinear: 'align-items-start',
  })
  const [showDialog, setShowDialog] = useState(false)
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  // const recaptchaRef = useRef<ReCAPTCHA>(null)

  const showNotification = (severity: 'error' | 'success', message: string) => {
    toast!.current!.show({
      severity,
      summary: severity === 'error' ? t('error') : t('success'),
      detail: message,
      life: 3000,
    })
  }

  const copyToClipboard = () => {
    if (!generatedUrl) {
      toast.current?.show({
        severity: 'error',
        summary: t('error'),
        detail: t('couldNotCopy'),
        life: 3000,
      })
      return
    }

    const fullUrl = `${config.VITE_URL}${generatedUrl}`
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        toast.current?.show({
          severity: 'success',
          summary: t('alias'),
          detail: t('linkCopied'),
          life: 3000,
        })
      })
      .catch((err) => {
        toast.current?.show({
          severity: 'error',
          summary: t('error'),
          detail: t('couldNotCopy'),
          life: 3000,
        })
        console.error('Error al copiar: ', err)
      })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errores = validaciones(formData)

    if (errores.length > 0) {
      errores.forEach((err) => showNotification('error', err))
      return
    }

    setLoading(true)
    setGeneratedUrl(null)

    try {
      // const token = await recaptchaRef.current?.executeAsync()
      // recaptchaRef.current?.reset()

      // if (!token) {
      //   showNotification('error', 'Fallo al validar reCAPTCHA.')
      //   setLoading(false)
      //   return
      // }

      // const payload = {
      //   ...formData,
      //   'g-recaptcha-response': token,
      // }

      const url = await generateCard(formData)
      // const url = await generateCard(payload)
      setGeneratedUrl(url)
      setShowDialog(true)
      showNotification('success', t('cardGenerated'))
    } catch (error) {
      showNotification('error', (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        canonicalUrl={t('seo.canonicalUrl')}
        keywords={t('seo.keywords')}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'TarjetaGratis',
            url: 'https://tarjetagratis.com/',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TarjetaGratis',
            url: 'https://tarjetagratis.com/',
            logo: 'https://tarjetagratis.com/logo.png',
          },
        ]}
      />

      <Toast ref={toast} />
      {/* <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={recaptchaRef}
      /> */}
      <div className="justify-content-center p-4 bg-gray-50 border-1 border-dashed border-x-none">
        <h1 className="text-xl font-semibold mb-3">{t('bienvenida_titulo')}</h1>
        <h2 className="text-lg">{t('bienvenida_subtitulo')}</h2>
        <p className="text-base mt-4">
          {t('nota_legal')}
          <br />
          <br />
          {t('contacto')} <strong>About</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-column md:flex-row justify-content-center p-3">
          <div className="card flex justify-content-center border-1 border-round-lg block md:hidden">
            <Button
              type="button"
              className="bg-green-200 w-full"
              icon="pi pi-bars"
              onClick={() => setVisible(true)}
            />
            <Sidebar
              className="bg-verde border-1"
              visible={visible}
              onHide={() => setVisible(false)}
              position="left"
            >
              <Armador formData={formData} setFormData={setFormData} />
            </Sidebar>
          </div>

          <div className="border-1 border-round-lg hidden md:block col-4">
            <Armador formData={formData} setFormData={setFormData} />
          </div>
          <div className="col-12 md:col-6 centrado">
            <CustomCard {...formData} />
            <div className="flex justify-content-end mt-5">
              <Button
                type="submit"
                className="bg-green-200 elevation"
                label={loading ? t('generando') : t('generar')}
                disabled={loading}
              />
            </div>
            <Dialog
              header={t('dialogo_titulo')}
              visible={showDialog}
              style={{ width: '50vw' }}
              breakpoints={{ '960px': '75vw', '641px': '95vw' }}
              onHide={() => setShowDialog(false)}
              blockScroll
              draggable={false}
            >
              {generatedUrl && (
                <div>
                  <InputText
                    value={`${config.VITE_URL}${generatedUrl}` || ''}
                    placeholder="Generando..."
                    readOnly
                    className="text-center w-full"
                  />

                  <div className="mt-3">
                    <small className="text-gray-600 text-center block">
                      {t('dialogo_info')}
                    </small>
                  </div>

                  <div className="flex gap-2 mt-3 justify-content-center flex-wrap">
                    <Button
                      icon="pi pi-external-link"
                      onClick={() => window.open(generatedUrl!, '_blank')}
                      tooltip={t('tooltip_abrir')}
                      label={t('boton_abrir')}
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-secondary"
                      disabled={!generatedUrl}
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-copy"
                      onClick={copyToClipboard}
                      tooltip={t('tooltip_copiar')}
                      label={t('boton_copiar')}
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm"
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-whatsapp"
                      severity="success"
                      onClick={() => {
                        const text = encodeURIComponent(
                          `${t('mensaje_invitacion')} ${
                            config.VITE_URL
                          }${generatedUrl}`
                        )
                        window.open(`https://wa.me/?text=${text}`, '_blank')
                      }}
                      tooltip={t('tooltip_whatsapp')}
                      label={t('boton_whatsapp')}
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-success"
                      disabled={!generatedUrl}
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-send"
                      severity="info"
                      onClick={() => {
                        const text = encodeURIComponent(
                          `${t('mensaje_invitacion')} ${
                            config.VITE_URL
                          }${generatedUrl}`
                        )
                        window.open(
                          `https://t.me/share/url?url=${generatedUrl}&text=${text}`,
                          '_blank'
                        )
                      }}
                      tooltip={t('tooltip_telegram')}
                      label={t('boton_telegram')}
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-info"
                      disabled={!generatedUrl}
                      style={{ width: '8rem' }}
                    />
                  </div>
                </div>
              )}
            </Dialog>
          </div>
        </div>
      </form>
    </>
  )
}

export default CardLayout
