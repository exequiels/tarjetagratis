import { Routes, Route } from 'react-router-dom'
import CardLayout from '../components/layouts/CardLayout'
import VerTarjeta from '../components/VerTarjeta'
import About from '../pages/About'
import FullLayout from '../components/layouts/fullLayout'
import SimpleLayout from '../components/layouts/simpleLayout'

const Rutas = () => {
  return (
    <Routes>
      {/* Header & footer */}
      <Route element={<FullLayout />}>
        <Route path="/" element={<CardLayout />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Simple */}
      <Route element={<SimpleLayout />}>
        <Route path="/tarjeta/:code" element={<VerTarjeta />} />
      </Route>
    </Routes>
  )
}

export default Rutas
