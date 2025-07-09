import { useEffect, useState } from 'react'
import type { CardFormData } from '../types/CardFormData'

const Tarjeta = ({
  fondo,
  fuente,
  nombre,
  cuantos,
  cuando,
  horario,
  direccion,
  nombreColor,
  cuantosColor,
  cuandoColor,
  horarioColor,
  direccionColor,
  nombreDecoration,
  cuantosDecoration,
  cuandoDecoration,
  horarioDecoration,
  direccionDecoration,
  nombreSize,
  cuantosSize,
  cuandoSize,
  horarioSize,
  direccionSize,
  nombreAnimar,
  cuantosAnimar,
  cuandoAnimar,
  horarioAnimar,
  direccionAnimar,
  nombreOrden,
  cuantosOrden,
  nombreAlinear,
  cuantosAlinear,
  cuandoAlinear,
  horarioAlinear,
  direccionAlinear,
}: CardFormData) => {
  const [isReady, setIsReady] = useState(false)
  const [isTaped, setIsTaped] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const getClasses = (
    color: string,
    decoration: string,
    size: string,
    animar?: string
  ) => {
    const animationClass = isReady ? animar : ''
    const invisibleBeforeReady = isReady ? '' : 'opacity-0'
    return [color, decoration, size, animationClass, invisibleBeforeReady]
      .filter((cls) => cls && typeof cls === 'string' && cls.trim() !== '')
      .join(' ')
      .trim()
  }

  const getOrderClass = (order?: string) => {
    return ['flex-order-0', 'flex-order-1', 'flex-order-2'].includes(
      order || ''
    )
      ? order!
      : 'flex-order-0'
  }

  const isCuantosReversed = cuantosOrden === 'flex-row-reverse'

  return (
    <div
      className={`centrado w-full tarjeta-3d ${isTaped ? 'active' : ''}`}
      style={{ fontFamily: fuente }}
      onClick={() => setIsTaped(!isTaped)}
    >
      <div
        className={`flex flex-column max-w-25rem md:max-w-40rem relative overflow-hidden fondo-imagen ${
          !isReady ? 'tarjeta-cargando' : ''
        }`}
      >
        {fondo.endsWith('.mp4') ? (
          <video
            key={fondo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={fondo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div
          className="relative z-10 w-full flex flex-column"
          style={{ minHeight: '100%' }}
        >
          <div className="w-full" style={{ flexBasis: '5%' }}></div>

          <div className="w-full flex flex-row flex-1">
            <div className="flex-shrink-1" style={{ flexBasis: '10%' }}></div>

            <div
              className="flex-1 flex-shrink-1 w-full centrado"
              style={{ flexBasis: '80%' }}
            >
              {/* Nombre */}
              <div
                className={`flex justify-content-center ${nombreAlinear} w-full ${getOrderClass(
                  nombreOrden
                )}`}
                style={{ flexBasis: '30%', flexShrink: 0, flexGrow: 0 }}
              >
                <span
                  className={getClasses(
                    nombreColor ?? '',
                    nombreDecoration ?? '',
                    nombreSize ?? '',
                    nombreAnimar
                  )}
                >
                  {nombre || ''}
                </span>
              </div>

              {/* Cuantos */}
              <div
                className={`flex ${
                  isCuantosReversed ? 'flex-row-reverse' : 'flex-row'
                } w-full ${
                  nombreOrden === 'flex-order-0'
                    ? 'flex-order-1'
                    : nombreOrden === 'flex-order-1'
                    ? 'flex-order-0'
                    : 'flex-order-1'
                }`}
                style={{ flexBasis: '40%', flexShrink: 0, flexGrow: 0 }}
              >
                <div
                  className={`col-6 flex ${cuantosAlinear} justify-content-center`}
                >
                  <span
                    className={getClasses(
                      cuantosColor ?? '',
                      cuantosDecoration ?? '',
                      cuantosSize ?? '',
                      cuantosAnimar
                    )}
                  >
                    {cuantos || ''}
                  </span>
                </div>

                <div className="col-6 flex flex-column">
                  {/* Cuando */}
                  <div
                    className={`flex w-full ${cuandoAlinear} justify-content-center`}
                    style={{ flexBasis: '50%' }}
                  >
                    <span
                      className={getClasses(
                        cuandoColor ?? '',
                        cuandoDecoration ?? '',
                        cuandoSize ?? '',
                        cuandoAnimar
                      )}
                    >
                      {cuando || ''}
                    </span>
                  </div>

                  {/* Horario */}
                  <div
                    className={`flex w-full ${horarioAlinear} justify-content-center mt-3`}
                    style={{ flexBasis: '50%' }}
                  >
                    <span
                      className={getClasses(
                        horarioColor ?? '',
                        horarioDecoration ?? '',
                        horarioSize ?? '',
                        horarioAnimar
                      )}
                    >
                      {horario || ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dirección */}
              <div
                className={`flex w-full ${direccionAlinear} justify-content-center ${
                  nombreOrden === 'flex-order-0'
                    ? 'flex-order-2'
                    : nombreOrden === 'flex-order-1'
                    ? 'flex-order-2'
                    : 'flex-order-0'
                }`}
                style={{ flexBasis: '30%', flexShrink: 0, flexGrow: 0 }}
              >
                <span
                  className={getClasses(
                    direccionColor ?? '',
                    direccionDecoration ?? '',
                    direccionSize ?? '',
                    direccionAnimar
                  )}
                >
                  {direccion || ''}
                </span>
              </div>
            </div>

            <div className="flex-shrink-1" style={{ flexBasis: '10%' }}></div>
          </div>

          <div className="w-full" style={{ flexBasis: '5%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Tarjeta
