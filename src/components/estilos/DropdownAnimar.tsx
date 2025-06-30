import { Dropdown } from 'primereact/dropdown'
import type { Props } from '../../types/Props'

const DropdownAnimar = ({ value, onChange }: Props) => {
  const animarOptions = [
    { label: 'Ninguna', value: '' },
    { label: 'Aparecer', value: 'animate__animated animate__fadeIn' },
    // { label: 'Desaparecer', value: 'animate__animated animate__fadeOut' },
    {
      label: 'Entrar desde la izquierda',
      value: 'animate__animated animate__fadeInLeft',
    },
    {
      label: 'Entrar desde la derecha',
      value: 'animate__animated animate__fadeInRight',
    },
    {
      label: 'Entrar desde arriba',
      value: 'animate__animated animate__fadeInDown',
    },
    {
      label: 'Entrar desde abajo',
      value: 'animate__animated animate__fadeInUp',
    },
    // {
    //   label: 'Salir hacia la izquierda',
    //   value: 'animate__animated animate__fadeOutLeft',
    // },
    // {
    //   label: 'Salir hacia la derecha',
    //   value: 'animate__animated animate__fadeOutRight',
    // },
    // {
    //   label: 'Salir hacia arriba',
    //   value: 'animate__animated animate__fadeOutUp',
    // },
    // {
    //   label: 'Salir hacia abajo',
    //   value: 'animate__animated animate__fadeOutDown',
    // },
    { label: 'Rebotar', value: 'animate__animated animate__bounce' },
    { label: 'Rebotar entrando', value: 'animate__animated animate__bounceIn' },
    // {
    //   label: 'Rebotar saliendo',
    //   value: 'animate__animated animate__bounceOut',
    // },
    {
      label: 'Rebotar izquierda',
      value: 'animate__animated animate__bounceInLeft',
    },
    {
      label: 'Rebotar derecha',
      value: 'animate__animated animate__bounceInRight',
    },
    {
      label: 'Rebotar arriba',
      value: 'animate__animated animate__bounceInDown',
    },
    { label: 'Rebotar abajo', value: 'animate__animated animate__bounceInUp' },
    { label: 'Girar', value: 'animate__animated animate__rotateIn' },
    // { label: 'Girar saliendo', value: 'animate__animated animate__rotateOut' },
    { label: 'Zoom', value: 'animate__animated animate__zoomIn' },
    // { label: 'Zoom salir', value: 'animate__animated animate__zoomOut' },
    { label: 'Girar en Y', value: 'animate__animated animate__flipInY' },
    { label: 'Girar en X', value: 'animate__animated animate__flipInX' },
    // { label: 'Girar Y salir', value: 'animate__animated animate__flipOutY' },
    // { label: 'Girar X salir', value: 'animate__animated animate__flipOutX' },
    { label: 'Agrandar', value: 'animate__animated animate__heartBeat' },
    { label: 'Sacudir', value: 'animate__animated animate__shakeX' },
    { label: 'Sacudir vertical', value: 'animate__animated animate__shakeY' },
    { label: 'Pulso', value: 'animate__animated animate__pulse' },
    { label: 'Cabeceo', value: 'animate__animated animate__headShake' },
    { label: 'Tambaleo', value: 'animate__animated animate__wobble' },
    { label: 'Jello', value: 'animate__animated animate__jello' },
    { label: 'Vibrar', value: 'animate__animated animate__vibrate' },
    { label: 'RubberBand', value: 'animate__animated animate__rubberBand' },
    { label: 'Flash', value: 'animate__animated animate__flash' },
    { label: 'BackInUp', value: 'animate__animated animate__backInUp' },
    { label: 'BackInDown', value: 'animate__animated animate__backInDown' },
    { label: 'BackInLeft', value: 'animate__animated animate__backInLeft' },
    { label: 'BackInRight', value: 'animate__animated animate__backInRight' },
    // { label: 'BackOutUp', value: 'animate__animated animate__backOutUp' },
    // { label: 'BackOutDown', value: 'animate__animated animate__backOutDown' },
    // { label: 'BackOutLeft', value: 'animate__animated animate__backOutLeft' },
    // { label: 'BackOutRight', value: 'animate__animated animate__backOutRight' },
    {
      label: 'LightSpeedInRight',
      value: 'animate__animated animate__lightSpeedInRight',
    },
    {
      label: 'LightSpeedInLeft',
      value: 'animate__animated animate__lightSpeedInLeft',
    },
    // {
    //   label: 'LightSpeedOutRight',
    //   value: 'animate__animated animate__lightSpeedOutRight',
    // },
    // {
    //   label: 'LightSpeedOutLeft',
    //   value: 'animate__animated animate__lightSpeedOutLeft',
    // },
    { label: 'SlideInUp', value: 'animate__animated animate__slideInUp' },
    { label: 'SlideInDown', value: 'animate__animated animate__slideInDown' },
    { label: 'SlideInLeft', value: 'animate__animated animate__slideInLeft' },
    { label: 'SlideInRight', value: 'animate__animated animate__slideInRight' },
    // { label: 'SlideOutUp', value: 'animate__animated animate__slideOutUp' },
    // { label: 'SlideOutDown', value: 'animate__animated animate__slideOutDown' },
    // { label: 'SlideOutLeft', value: 'animate__animated animate__slideOutLeft' },
    // {
    //   label: 'SlideOutRight',
    //   value: 'animate__animated animate__slideOutRight',
    // },
    { label: 'JackInTheBox', value: 'animate__animated animate__jackInTheBox' },
    { label: 'RollIn', value: 'animate__animated animate__rollIn' },
    // { label: 'RollOut', value: 'animate__animated animate__rollOut' },
    { label: 'Flip', value: 'animate__animated animate__flip' },
    {
      label: 'FadeInTopLeft',
      value: 'animate__animated animate__fadeInTopLeft',
    },
    {
      label: 'FadeInTopRight',
      value: 'animate__animated animate__fadeInTopRight',
    },
    {
      label: 'FadeInBottomLeft',
      value: 'animate__animated animate__fadeInBottomLeft',
    },
    {
      label: 'FadeInBottomRight',
      value: 'animate__animated animate__fadeInBottomRight',
    },
    // {
    //   label: 'FadeOutTopLeft',
    //   value: 'animate__animated animate__fadeOutTopLeft',
    // },
    // {
    //   label: 'FadeOutTopRight',
    //   value: 'animate__animated animate__fadeOutTopRight',
    // },
    // {
    //   label: 'FadeOutBottomLeft',
    //   value: 'animate__animated animate__fadeOutBottomLeft',
    // },
    // {
    //   label: 'FadeOutBottomRight',
    //   value: 'animate__animated animate__fadeOutBottomRight',
    // },
  ]

  return (
    <div className="flex justify-content-between align-items-center mt-2 p-3 bg-verde border-round-lg">
      <div>
        <label htmlFor="animar" className="text-lg">
          Animación:{' '}
        </label>
      </div>
      <Dropdown
        inputId="animar"
        filter
        filterIcon
        showFilterClear
        resetFilterOnHide
        filterPlaceholder="Que buscas?"
        emptyFilterMessage="No hay resultados para esa busqueda"
        value={value}
        options={animarOptions}
        onChange={(e) => onChange(e.value)}
        placeholder="Animar"
        itemTemplate={(option) => <div>{option.label}</div>}
        className="mt-2"
      />
    </div>
  )
}

export default DropdownAnimar
