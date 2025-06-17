export type CardFormData = {
  /* Globales */
  fondo: string
  fuente: string

  /* Inputs */
  nombre: string
  cuantos: string
  frase: string
  cuando: string
  horario: string
  direccion: string

  /* Colores */
  nombreColor?: string
  cuantosColor?: string
  fraseColor?: string
  cuandoColor?: string
  horarioColor?: string
  direccionColor?: string

  /* Decoraciones */
  nombreDecoration?: string
  cuantosDecoration?: string
  fraseDecoration?: string
  cuandoDecoration?: string
  horarioDecoration?: string
  direccionDecoration?: string

  /* Tamaños */
  nombreSize?: string
  cuantosSize?: string
  fraseSize?: string
  cuandoSize?: string
  horarioSize?: string
  direccionSize?: string

  /* Orden */
  nombreOrden?: string
  cuantosOrden?: string

  /* Alineaciones */
  nombreAlinear?: string
  cuantosAlinear?: string
  cuandoAlinear?: string
  direccionAlinear?: string
}
