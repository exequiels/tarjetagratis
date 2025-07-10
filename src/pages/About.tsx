import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO
        title="Sobre mí - Creador de TarjetaGratis"
        description="Conocé a Exequiel, desarrollador detrás de TarjetaGratis. Ex-pintor de autos reconvertido en programador que busca crear, aprender y conectar en comunidad."
        canonicalUrl="https://tarjetagratis.com/about"
        keywords="sobre mí, desarrollador web, React, historia, comunidad, tarjetas digitales"
      />
      <div className="col-12 flex justify-content-center">
        <div className="col-12 md:col-4 border-1 border-dashed border-round-lg p-3">
          <h1 className="text-4xl font-bold">Hola, soy Exequiel</h1>

          <p className="text-lg mt-4">
            Ex pintor de autos reconvertido en desarrollador a los 37. Elijo la
            tecnología como camino para crear con propósito, aprender sin pausa
            y construir comunidad. Si sentís afinidad con esto, me encantaría
            conocerte.
          </p>

          <ul className="list-disc text-left px-5 space-y-2 text-base mt-4">
            <li>
              <strong>Mentores</strong> que me desafíen y den feedback honesto
            </li>
            <li>Espacios donde la creatividad rompa convenciones</li>
            <li>Ideas locas con propósito, bienvenidas</li>
            <li>Crecimiento que nace de la colaboración genuina</li>
            <li>Conexiones humanas antes que facturación</li>
          </ul>

          <p className="text-base mt-4">
            Si tenés una idea, proyecto o simplemente querés charlar sobre
            código o tecnología, sumame en&nbsp;
            <a
              href="https://www.linkedin.com/in/exequiel-sabatie/"
              target="_blank"
              className="underline text-blue-500"
            >
              LinkedIn
            </a>
            .
          </p>

          <p className="text-lg mt-5">
            Hoy, a los 41, creé <strong>tarjetagratis.com</strong> como excusa
            para practicar Context API en React y ofrecer a padres una forma de
            crear invitaciones mágicas para sus hijos. Sigo aprendiendo y
            buscando colaborar en proyectos que me desafíen.
          </p>
          <p className="text-lg mt-5">
            Este proyecto y mi carrera como desarrollador no serían posibles sin
            el apoyo incondicional de mi familia. Gracias a mi pareja e hijos
            por su paciencia durante las largas horas de aprendizaje y
            desarrollo. Su comprensión cuando estoy inmerso en el código es, sin
            duda, mi mayor motor.
          </p>
          <h2 className="text-2xl font-semibold mt-6">
            Tecnologías utilizadas
          </h2>
          <ul className="list-disc text-left px-5 space-y-2 text-base mt-2">
            <li>
              <strong>React, TypeScript y Laravel</strong>
            </li>
            <li>
              <strong>PrimeReact</strong>: biblioteca de componentes moderna y
              accesible.&nbsp;
              <a
                href="https://primereact.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Sitio oficial
              </a>
            </li>
            <li>
              <strong>Animate.css</strong>: animaciones suaves para texto y
              elementos.&nbsp;
              <a
                href="https://animate.style/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Animate.css
              </a>
            </li>
            <li>
              <strong>Efecto 3D de la tarjeta</strong>: inspirado en el video
              de&nbsp;
              <a
                href="https://www.youtube.com/watch?v=LRiORDWOoXI&t=8s"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                WebDev Diaries - Bird Hover Effect
              </a>
              .
            </li>
            <li>
              <strong>Fuentes</strong>: todas de&nbsp;
              <a
                href="https://fonts.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Google Fonts
              </a>
            </li>
            <li>
              <strong>Imágenes y fondos</strong>: generados con&nbsp;
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Google AI Studio
              </a>
            </li>
          </ul>

          <p className="text-sm mt-5 text-gray-500">
            Todos los archivos de licencia están incluidos dentro del proyecto.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
