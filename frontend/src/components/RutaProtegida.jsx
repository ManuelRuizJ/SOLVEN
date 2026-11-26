import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import SessionLoading from "./SessionLoading"

export default function RutaProtegida() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <SessionLoading />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}