import { InputText } from 'primereact/inputtext'
import type { CardFormData } from '../types/CardFormData'
import { getOpcionesArmador } from '../utils/OpcionesArmador'
import DropdownFondo from './estilos/DropdownFondo'
import DropdownFuente from './estilos/DropdownFuente'
import DropdownColor from './estilos/DropdownColor'
import DropdownDecoration from './estilos/DropdownDecoration'
import DropdownSize from './estilos/DropdownSize'
import DropdownNombreOrden from './estilos/DropdownNombreOrden'
import DropdownCuantosOrden from './estilos/DropdownCuantosOrden'
import DropdownAlinear from './estilos/DropdownAlinear'
import DropdownPlantillas from './estilos/DropdownPlantillas'
import DropdownAnimar from './estilos/DropdownAnimar'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { useCallback, useState } from 'react'
import DropdownCuantosDistribucion from './estilos/DropdownCuantosDistribucion'
import { fondos } from '../utils/FondosArmador'
import { useTranslation } from 'react-i18next'

type ArmadorProps = {
  formData: CardFormData
  setFormData: React.Dispatch<React.SetStateAction<CardFormData>>
}

const Armador = ({ formData, setFormData }: ArmadorProps) => {
  const { t } = useTranslation(['armador', 'fondos'])
  const opcionesArmador = getOpcionesArmador(t)
  const [visibleDialog, setVisibleDialog] = useState<string | null>(null)
  const [visibleFondoPreview, setVisibleFondoPreview] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleColorChange = useCallback(
    (fieldId: string, colorValue: string) => {
      const colorKey = `${fieldId}Color` as keyof CardFormData
      setFormData((prev) => ({ ...prev, [colorKey]: colorValue }))
    },
    [setFormData]
  )

  const handleDecorationChange = (fieldId: string, decorationValue: string) => {
    const decorationKey = `${fieldId}Decoration` as keyof CardFormData
    setFormData({ ...formData, [decorationKey]: decorationValue })
  }

  const handleSizeChange = (fieldId: string, sizeValue: string) => {
    const sizeKey = `${fieldId}Size` as keyof CardFormData
    setFormData({ ...formData, [sizeKey]: sizeValue })
  }

  const handleAnimarChange = (fieldId: string, animarValue: string) => {
    const animarKey = `${fieldId}Animar` as keyof CardFormData
    setFormData({ ...formData, [animarKey]: animarValue })
  }

  const handleOrderChange = (fieldId: string, orderValue: string) => {
    const orderKey = `${fieldId}Orden` as keyof CardFormData
    setFormData({ ...formData, [orderKey]: orderValue })
  }

  const handleAlinearChange = (fieldId: string, alinearValue: string) => {
    const alinearKey = `${fieldId}Alinear` as keyof CardFormData
    setFormData({ ...formData, [alinearKey]: alinearValue })
  }

  const handleFondoSelection = (fondoValue: string) => {
    setFormData({ ...formData, fondo: fondoValue })
    setVisibleFondoPreview(false)
  }

  return (
    <>
      <div className="p-3 bg-white border-round-lg">
        <DropdownPlantillas
          value={formData}
          onChange={(selectedPlantilla) => setFormData(selectedPlantilla)}
        />
        <div className="mt-2 flex flex-row gap-2">
          <div className="flex-grow-1 mt-4">
            <DropdownFondo
              value={formData.fondo || ''}
              onChange={(nuevoFondo: string) =>
                setFormData({ ...formData, fondo: nuevoFondo })
              }
            />
          </div>
          <div className="flex align-items-end">
            <Button
              className="p-3 bg-green-200"
              type="button"
              icon="pi pi-image"
              onClick={() => setVisibleFondoPreview(true)}
              tooltip={t('verPreview')}
            />
          </div>
        </div>
        <div className="mt-4">
          <DropdownFuente
            value={formData.fuente || ''}
            onChange={(nuevaFuente) =>
              setFormData({ ...formData, fuente: nuevaFuente })
            }
          />
        </div>
      </div>

      {/* Dialog de Preview de Fondos */}
      <Dialog
        header={t('selectBackground', 'Seleccionar Fondo')}
        visible={visibleFondoPreview}
        onHide={() => setVisibleFondoPreview(false)}
        style={{ width: '80vw', maxWidth: '1200px' }}
        breakpoints={{ '960px': '90vw', '641px': '95vw' }}
        modal
        draggable={false}
        resizable={false}
        maximizable
      >
        <div className="p-3">
          <div className="grid">
            {fondos.map((fondo) => (
              <div
                key={fondo.value}
                className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2 text-center"
              >
                <div
                  className={`border-2 border-round-lg p-2 cursor-pointer transition-all transition-duration-200 hover:border-green-200 ${
                    formData.fondo === fondo.value
                      ? 'border-green-200 bg-green-50'
                      : 'border-300'
                  }`}
                  onClick={() => handleFondoSelection(fondo.value)}
                >
                  <div className="relative">
                    <img
                      src={
                        fondo.thumbnail ||
                        fondo.value ||
                        '/placeholder-image.jpg'
                      }
                      alt={t(`fondos:${fondo.key}`)}
                      className="w-5rem h-8rem object-cover border-round"
                      style={{ aspectRatio: '16/9' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-image.jpg'
                      }}
                    />
                    {formData.fondo === fondo.value && (
                      <div className="absolute top-0 right-0 bg-green-200 text-white border-round-sm p-1 m-1">
                        <i className="pi pi-check text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-sm font-medium">
                      {t(`fondos:${fondo.key}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {fondos.length === 0 && (
            <div className="text-center p-4">
              <i className="pi pi-image text-6xl text-300"></i>
              <div className="mt-2 text-500">{t('noFondos')}</div>
            </div>
          )}
        </div>
      </Dialog>

      {opcionesArmador.map((opcion) => (
        <div className="mt-4" key={opcion.id}>
          <label htmlFor={opcion.id}>{opcion.label}</label>
          <div className="flex align-items-center gap-2">
            <InputText
              id={opcion.id}
              value={formData[opcion.id as keyof CardFormData] || ''}
              onChange={handleInputChange}
              className="w-full"
              placeholder={opcion.placeholder}
              maxLength={
                opcion.id === 'nombre'
                  ? 40
                  : opcion.id === 'cuantos'
                  ? 20
                  : opcion.id === 'direccion'
                  ? 150
                  : 50
              }
            />
            <Button
              className="p-3 bg-green-200"
              type="button"
              icon="pi pi-cog"
              onClick={() => setVisibleDialog(opcion.id)}
            />
          </div>

          <Dialog
            header={t('configurar', { label: opcion.label })}
            visible={visibleDialog === opcion.id}
            onHide={() => setVisibleDialog(null)}
            style={{ width: '50vw' }}
            breakpoints={{ '960px': '75vw', '641px': '90vw' }}
            modal
            draggable={false}
            resizable={false}
          >
            <div className="p-3">
              <div className="flex flex-column xs:flex-row gap-2">
                <DropdownColor
                  value={
                    (formData[
                      `${opcion.id}Color` as keyof CardFormData
                    ] as string) || ''
                  }
                  onChange={(colorValue) =>
                    handleColorChange(opcion.id, colorValue)
                  }
                />
                <DropdownDecoration
                  value={
                    (formData[
                      `${opcion.id}Decoration` as keyof CardFormData
                    ] as string) || ''
                  }
                  onChange={(decorationValue) =>
                    handleDecorationChange(opcion.id, decorationValue)
                  }
                />
                <DropdownSize
                  fieldId={opcion.id}
                  value={
                    (formData[
                      `${opcion.id}Size` as keyof CardFormData
                    ] as string) || ''
                  }
                  onChange={(sizeValue) =>
                    handleSizeChange(opcion.id, sizeValue)
                  }
                />
                <DropdownAnimar
                  fieldId={opcion.id}
                  value={
                    (formData[
                      `${opcion.id}Animar` as keyof CardFormData
                    ] as string) || ''
                  }
                  onChange={(animarValue) =>
                    handleAnimarChange(opcion.id, animarValue)
                  }
                />
              </div>

              {(opcion.id === 'nombre' ||
                opcion.id === 'cuantos' ||
                [
                  'nombre',
                  'cuantos',
                  'cuando',
                  'horario',
                  'direccion',
                ].includes(opcion.id)) && (
                <div className="mt-2 p-3 bg-verde border-round-lg">
                  {opcion.id === 'nombre' && (
                    <DropdownNombreOrden
                      value={
                        (formData[
                          `${opcion.id}Orden` as keyof CardFormData
                        ] as string) || ''
                      }
                      onChange={(orderValue) =>
                        handleOrderChange(opcion.id, orderValue)
                      }
                    />
                  )}

                  {opcion.id === 'cuantos' && (
                    <>
                      <DropdownCuantosOrden
                        value={
                          (formData[
                            `${opcion.id}Orden` as keyof CardFormData
                          ] as string) || ''
                        }
                        onChange={(orderValue) =>
                          handleOrderChange(opcion.id, orderValue)
                        }
                      />
                      <DropdownCuantosDistribucion
                        value={formData.cuantosDistribucion ?? ''}
                        onChange={(value) =>
                          setFormData({
                            ...formData,
                            cuantosDistribucion: value,
                          })
                        }
                      />
                    </>
                  )}

                  {[
                    'nombre',
                    'cuantos',
                    'cuando',
                    'horario',
                    'direccion',
                  ].includes(opcion.id) && (
                    <DropdownAlinear
                      value={
                        (formData[
                          `${opcion.id}Alinear` as keyof CardFormData
                        ] as string) || ''
                      }
                      onChange={(alinearValue) =>
                        handleAlinearChange(opcion.id, alinearValue)
                      }
                    />
                  )}
                </div>
              )}
            </div>
          </Dialog>
        </div>
      ))}
    </>
  )
}

export default Armador
