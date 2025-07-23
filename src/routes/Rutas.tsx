import { Routes, Route } from 'react-router-dom'
import CardLayout from '../components/layouts/CardLayout'
import VerTarjeta from '../components/VerTarjeta'
import About from '../pages/About'
import FullLayout from '../components/layouts/FullLayout'
import SimpleLayout from '../components/layouts/SimpleLayout'
import FAQ from '../pages/FAQ'

// import Tutorial from '../pages/Tutorial'

const Rutas = () => {
  return (
    <Routes>
      {/* Header & footer */}
      <Route element={<FullLayout />}>
        <Route path="/" element={<CardLayout />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/tutorial-como-crear-tarjeta" element={<Tutorial />} /> */}
        <Route path="/faq" element={<FAQ />} />
      </Route>

      {/* Simple */}
      <Route element={<SimpleLayout />}>
        <Route path="/tarjeta/:code" element={<VerTarjeta />} />
      </Route>
    </Routes>
  )
}

export default Rutas
