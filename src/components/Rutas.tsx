import { Routes, Route } from 'react-router-dom'
import CardLayout from '../pages/CardLayout'
import VerTarjeta from './VerTarjeta'

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<CardLayout />} />
      <Route path="/tarjeta/:code" element={<VerTarjeta />} />
    </Routes>
  )
}

export default Rutas
