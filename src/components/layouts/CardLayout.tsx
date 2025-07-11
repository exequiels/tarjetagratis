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

// const RECAPTCHA_SITE_KEY = config.VITE_RECAPTCHA

const CardLayout = () => {
  const toast = useRef<Toast>(null)
  const [formData, setFormData] = useState<CardFormData>({
    /* Globales */
    fondo: '/videos/hadas_marco_01_mov.mp4',
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
      summary: severity === 'error' ? 'Error' : '¡Listo!',
      detail: message,
      life: 3000,
    })
  }

  const copyToClipboard = () => {
    if (!generatedUrl) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'No hay enlace para copiar',
        life: 3000,
      })
      return
    }

    navigator.clipboard
      .writeText(generatedUrl)
      .then(() => {
        toast.current?.show({
          severity: 'success',
          summary: 'Alias',
          detail: 'Enlace copiado',
          life: 3000,
        })
      })
      .catch((err) => {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo copiar el enlace',
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
      showNotification('success', '¡Tarjeta generada con éxito!')
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
        title="TarjetaGratis - Invitaciones digitales personalizadas para cumpleaños"
        description="Crea tarjetas animadas gratis para cumpleaños infantiles con tu estilo. Elige fondos mágicos, colores, textos y efectos visuales. Compartilas por WhatsApp o Telegram."
        canonicalUrl="https://tarjetagratis.com/"
        keywords="tarjetas digitales, cumpleaños, invitaciones infantiles, tarjetas animadas, tarjetas gratis, React"
      />

      <Toast ref={toast} />
      {/* <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={recaptchaRef}
      /> */}
      <div className="justify-content-center p-4">
        <h1 className="text-lg font-semibold mb-3">
          Bienvenido a TarjetaGratis
        </h1>
        <p className="text-base">
          Crea invitaciones digitales personalizadas para cumpleaños y eventos
          especiales de forma fácil y gratuita. Elige una plantilla, edita los
          datos, genera el código y comparte tu invitación al instante. También
          puedes personalizarla fácilmente para que sea única.
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Esta aplicación está en fase de pruebas. La publiqué online para poder
          verla en mi celular y probar su funcionamiento. La información de cada
          tarjeta se guarda por un máximo de un mes, y se recomienda
          compartirlas con una anticipación no mayor a una semana. El uso es
          totalmente gratuito y sin garantía: no me responsabilizo por pérdidas
          de datos ni funcionamiento incorrecto. Se utiliza bajo propia
          responsabilidad.
          <br />
          <br />
          Si querés reportar un fallo, proponer ideas o simplemente colaborar,
          visitá la sección <strong>About</strong> y agregame a&nbsp;
          <a
            href="https://www.linkedin.com/in/exequiel-sabatie/"
            target="_blank"
            className="underline text-blue-500"
          >
            LinkedIn
          </a>
          .
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
                label={loading ? 'Generando...' : 'Generar Tarjeta'}
                disabled={loading}
              />
            </div>
            <Dialog
              header="Enlace generado"
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
                      Podés utilizar estos botones para compartir o abrir tu
                      tarjeta:
                    </small>
                  </div>

                  <div className="flex gap-2 mt-3 justify-content-center flex-wrap">
                    <Button
                      icon="pi pi-external-link"
                      onClick={() => window.open(generatedUrl!, '_blank')}
                      tooltip="Abrir el enlace en una nueva pestaña"
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-secondary"
                      label="Abrir"
                      disabled={!generatedUrl}
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-copy"
                      onClick={copyToClipboard}
                      tooltip="Copiar enlace al portapapeles"
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm"
                      label="Copiar"
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-whatsapp"
                      severity="success"
                      onClick={() => {
                        const text = encodeURIComponent(
                          `¡Te invito a mi cumpleaños! ${config.VITE_URL}${generatedUrl}`
                        )
                        window.open(`https://wa.me/?text=${text}`, '_blank')
                      }}
                      tooltip="Compartir en WhatsApp"
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-success"
                      label="WhatsApp"
                      disabled={!generatedUrl}
                      style={{ width: '8rem' }}
                    />

                    <Button
                      icon="pi pi-send"
                      severity="info"
                      onClick={() => {
                        const text = encodeURIComponent(
                          `¡Te invito a mi cumpleaños! ${config.VITE_URL}${generatedUrl}`
                        )
                        window.open(
                          `https://t.me/share/url?url=${generatedUrl}&text=${text}`,
                          '_blank'
                        )
                      }}
                      tooltip="Compartir en Telegram"
                      tooltipOptions={{ position: 'top' }}
                      className="p-button-sm p-button-info"
                      label="Telegram"
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
