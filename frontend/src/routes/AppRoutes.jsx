import { Routes, Route, Navigate } from 'react-router-dom'

import Login from "../pages/Login"
import Registro from "../pages/Registro"
import Dashboard from "../pages/Dashboard"
import Cuentas from "../pages/Cuentas"
import Movimientos from "../pages/Movimientos"
import Categorias from "../pages/Categorias"
import Presupuestos from "../pages/Presupuestos"
import Analisis from "../pages/Analisis"

import RutaProtegida from '../components/RutaProtegida'
import RutaPublica from '../components/RutaPublica'

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route element={<RutaPublica />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
      <Route element={<RutaProtegida />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/presupuestos" element={<Presupuestos />} />
        <Route path="/analisis" element={<Analisis />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  )
}