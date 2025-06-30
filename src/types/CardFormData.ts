export type CardFormData = {
  /* Globales */
  fondo: string
  fuente: string

  /* Inputs */
  nombre: string
  cuantos: string
  cuando: string
  horario: string
  direccion: string

  /* Colores */
  nombreColor?: string
  cuantosColor?: string
  cuandoColor?: string
  horarioColor?: string
  direccionColor?: string

  /* Decoraciones */
  nombreDecoration?: string
  cuantosDecoration?: string
  cuandoDecoration?: string
  horarioDecoration?: string
  direccionDecoration?: string

  /* Tamaños */
  nombreSize?: string
  cuantosSize?: string
  cuandoSize?: string
  horarioSize?: string
  direccionSize?: string

  /* Animaciones */
  nombreAnimar?: string
  cuantosAnimar?: string
  cuandoAnimar?: string
  horarioAnimar?: string
  direccionAnimar?: string

  /* Orden */
  nombreOrden?: string
  cuantosOrden?: string

  /* Alineaciones */
  nombreAlinear?: string
  cuantosAlinear?: string
  cuandoAlinear?: string
  horarioAlinear?: string
  direccionAlinear?: string
}
