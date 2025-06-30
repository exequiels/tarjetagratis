import type { CardFormData } from '../types/CardFormData'

const CustomCard = ({
  /* Globales */
  fondo,
  fuente,

  /* Inputs */
  nombre,
  cuantos,
  cuando,
  horario,
  direccion,

  /* Colores */
  nombreColor,
  cuantosColor,
  cuandoColor,
  horarioColor,
  direccionColor,

  /* Decoraciones */
  nombreDecoration,
  cuantosDecoration,
  cuandoDecoration,
  horarioDecoration,
  direccionDecoration,

  /* Tamaños */
  nombreSize,
  cuantosSize,
  cuandoSize,
  horarioSize,
  direccionSize,

  /* Orden */
  nombreOrden,
  cuantosOrden,

  /* Alineaciones */
  nombreAlinear,
  cuantosAlinear,
  cuandoAlinear,
  horarioAlinear,
  direccionAlinear,
}: CardFormData) => {
  const getClasses = (color: string, decoration: string, size: string) => {
    return [color, decoration, size]
      .filter((cls) => cls && typeof cls === 'string' && cls.trim() !== '')
      .join(' ')
      .trim()
  }

  const getOrderClass = (order?: string) => {
    return ['flex-order-0', 'flex-order-1', 'flex-order-2'].includes(
      order || ''
    )
      ? order
      : 'flex-order-0'
  }

  const isCuantosReversed = cuantosOrden === 'flex-row-reverse'

  return (
    <div className="centrado w-full" style={{ fontFamily: fuente }}>
      {/* <div
        className="flex flex-column max-w-25rem md:max-w-40rem fondo-imagen border-1"
        style={{ backgroundImage: `url(${fondo})` }}
      > */}

      <div
        className="flex flex-column max-w-25rem md:max-w-40rem border-1 relative overflow-hidden fondo-imagen"
        style={{ fontFamily: fuente }}
      >
        {fondo.endsWith('.mp4') ? (
          <video
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
                    nombreSize ?? ''
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
                      cuantosSize ?? ''
                    )}
                  >
                    {cuantos || ''}
                  </span>
                </div>

                {/* Cuando/Horario */}
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
                        cuandoSize ?? ''
                      )}
                    >
                      {cuando || ''}
                    </span>
                  </div>

                  {/* Horario */}
                  <div
                    className={`flex w-full ${horarioAlinear} justify-content-center`}
                    style={{ flexBasis: '50%' }}
                  >
                    <span
                      className={
                        getClasses(
                          horarioColor ?? '',
                          horarioDecoration ?? '',
                          horarioSize ?? ''
                        ) + ' mt-3'
                      }
                    >
                      {horario || ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Donde/Dirección */}
              <div
                className={`flex ${direccionAlinear} ${
                  nombreOrden === 'flex-order-0'
                    ? 'flex-order-2'
                    : nombreOrden === 'flex-order-1'
                    ? 'flex-order-2'
                    : 'flex-order-0'
                }`}
                style={{ flexBasis: '30%', flexShrink: 0, flexGrow: 0 }}
              >
                <div>
                  <span
                    className={getClasses(
                      direccionColor ?? '',
                      direccionDecoration ?? '',
                      direccionSize ?? ''
                    )}
                  >
                    {direccion || ''}
                  </span>
                </div>
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

export default CustomCard
