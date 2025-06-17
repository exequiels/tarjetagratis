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
      <div
        className="flex flex-column max-w-25rem md:max-w-40rem fondo-imagen border-1"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="w-full" style={{ flexBasis: '5%' }}></div>

        <div className="w-full flex flex-row flex-1">
          <div style={{ flexBasis: '10%', flexShrink: 0, flexGrow: 0 }}></div>

          <div
            className="flex-1 w-full centrado"
            style={{ flexBasis: '80%', flexShrink: 0, flexGrow: 0 }}
          >
            {/* Nombre */}
            <div
              className={`flex justify-content-center ${nombreAlinear} w-full ${getOrderClass(
                nombreOrden
              )}`}
              style={{ flexBasis: '35%', flexShrink: 0, flexGrow: 0 }}
            >
              <span
                className={getClasses(
                  nombreColor ?? '',
                  nombreDecoration ?? '',
                  nombreSize ?? ''
                )}
              >
                <h2>{nombre || '[Nombre]'}</h2>
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
              style={{ flexBasis: '35%', flexShrink: 0, flexGrow: 0 }}
            >
              <div className={`col-6 flex ${cuantosAlinear}`}>
                <span
                  className={getClasses(
                    cuantosColor ?? '',
                    cuantosDecoration ?? '',
                    cuantosSize ?? ''
                  )}
                >
                  <h2>{cuantos || '[Cuantos cumple?]'}</h2>
                </span>
              </div>

              {/* Cuando/Horario */}
              <div className={`col-6 flex ${cuandoAlinear}`}>
                <div>
                  <span
                    className={getClasses(
                      cuandoColor ?? '',
                      cuandoDecoration ?? '',
                      cuandoSize ?? ''
                    )}
                  >
                    <h2>{cuando || '[Cuando]'}</h2>
                  </span>

                  <span
                    className={getClasses(
                      horarioColor ?? '',
                      horarioDecoration ?? '',
                      horarioSize ?? ''
                    )}
                  >
                    <h2>{horario || '[Horario]'}</h2>
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
                  <h2>{direccion || '[Dirección]'}</h2>
                </span>
              </div>
            </div>
          </div>

          <div style={{ flexBasis: '10%', flexShrink: 0, flexGrow: 0 }}></div>
        </div>

        <div className="w-full" style={{ flexBasis: '5%' }}></div>
      </div>
    </div>
  )
}

export default CustomCard
