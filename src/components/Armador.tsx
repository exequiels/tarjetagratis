import { InputText } from 'primereact/inputtext'
import type { CardFormData } from '../types/CardFormData'
import { opcionesArmador } from '../utils/OpcionesArmador'
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
import { OverlayPanel } from 'primereact/overlaypanel'
import { Button } from 'primereact/button'
import { useCallback, useRef } from 'react'
import DropdownCuantosDistribucion from './estilos/DropdownCuantosDistribucion'

type ArmadorProps = {
  formData: CardFormData
  setFormData: React.Dispatch<React.SetStateAction<CardFormData>>
}

const Armador = ({ formData, setFormData }: ArmadorProps) => {
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

  const ops = useRef<(OverlayPanel | null)[]>([])

  return (
    <>
      <div className="p-3 bg-white border-round-lg">
        <DropdownPlantillas
          value={formData}
          onChange={(selectedPlantilla) => setFormData(selectedPlantilla)}
        />
        <div className="mt-4">
          <DropdownFondo
            value={formData.fondo || ''}
            onChange={(nuevoFondo: string) =>
              setFormData({ ...formData, fondo: nuevoFondo })
            }
          />
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
      {opcionesArmador.map((opcion, i) => (
        <div className="mt-4" key={opcion.id}>
          <label htmlFor={opcion.id}>{opcion.label}</label>
          <div className="flex align-items-center gap-2" key={opcion.id}>
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
              icon="pi pi-angle-down"
              onClick={(e) => ops.current[i]?.toggle(e)}
            />
            <OverlayPanel
              ref={(el) => {
                ops.current[i] = el
              }}
            >
              <div className="flex flex-column xs:flex-row">
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
                  {/* {opcion.id === 'cuantos' && (
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
                  )} */}
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
            </OverlayPanel>
          </div>
        </div>
      ))}
    </>
  )
}

export default Armador
