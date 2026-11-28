import { useState } from "react"
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom"

import {
  Wallet,
  LayoutDashboard,
  ArrowLeftRight,
  Layers,
  Target,
  ChartNoAxesCombined,
  PanelLeft,
  LogOut,
  UserRound,
  X,
} from "lucide-react"

import useAuth from "../hooks/useAuth"

const navigation = [
  {
    name: "Inicio",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Cuentas",
    path: "/cuentas",
    icon: Wallet,
  },
  {
    name: "Movimientos",
    path: "/movimientos",
    icon: ArrowLeftRight,
  },
  {
    name: "Categorías",
    path: "/categorias",
    icon: Layers,
  },
  {
    name: "Presupuestos",
    path: "/presupuestos",
    icon: Target,
  },
  {
    name: "Análisis",
    path: "/analisis",
    icon: ChartNoAxesCombined,
  },
]

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { user, signOut } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = navigation.find(
    (item) => item.path === location.pathname
  )?.name || "Inicio"

  const initials = user?.nombre
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join('') || "U"

  function handleLogout() {
    signOut()
    navigate("/login', { replace: true }")
  }

  return (
    <div className="solven-background min-h-screen lg:h-dvh flex gap-3 p-3">

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
        />
      )}

      <aside
        id="solven-sidebar"
        className={`
          glass-sidebar fixed lg:relative z-40
          top-3 bottom-3 left-3 lg:inset-auto
          flex flex-col shrink-0 overflow-hidden
          ${mobileOpen ? 'translate-x-0' : '-translate-x-[110%]'}
          lg:translate-x-0
          w-[250px]
          ${collapsed ? 'lg:w-[80px]' : 'lg:w-[250px]'}
        `}
      >

        <div className="flex items-center gap-3 px-4 py-6">

          <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center">
            <Wallet size={21} className="text-[#65cbe5]" />
          </div>

          <div className={collapsed ? 'lg:hidden' : ''}>
            <h1 className="font-bold tracking-[0.16em] text-sm">
              SOLVEN
            </h1>

            <p className="text-[9px] text-[#91a8b9]">
              Finanzas inteligentes
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="ml-auto lg:hidden text-[#91a8b9]"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>

        </div>

        <div className="mx-4 border-b border-white/10" />

        <nav
          className="flex-1 overflow-y-auto px-3 py-6"
          aria-label="Navegación principal"
        >

          <p
            className={`
              section-label px-3 mb-4
              ${collapsed ? 'lg:hidden' : ''}
            `}
          >
            General
          </p>

          <div className="space-y-2">

            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  title={item.name}
                  aria-label={item.name}
                  className={({ isActive }) => `
                    sidebar-link
                    ${isActive ? 'sidebar-link-active' : ''}
                    ${collapsed ? 'lg:justify-center' : ''}
                  `}
                >

                  <Icon size={19} className="shrink-0" />

                  <span className={collapsed ? 'lg:hidden' : ''}>
                    {item.name}
                  </span>

                </NavLink>
              )
            })}

          </div>

        </nav>

        <div className="border-t border-white/10 p-3">

          <div
            className={`
              flex items-center gap-3 p-2 mb-3
              ${collapsed ? 'lg:justify-center' : ''}
            `}
          >

            <div className="w-10 h-10 rounded-full shrink-0 bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center text-sm font-semibold text-[#a1e7f7]">
              {initials}
            </div>

            <div className={`min-w-0 ${collapsed ? 'lg:hidden' : ''}`}>

              <p className="text-sm font-medium truncate">
                {user?.nombre || 'Usuario'}
              </p>

              <p className="text-xs text-[#91a8b9] truncate">
                {user?.correo}
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
            className={`
              sidebar-link w-full
              hover:text-red-300
              ${collapsed ? 'lg:justify-center' : ''}
            `}
          >

            <LogOut size={19} className="shrink-0" />

            <span className={collapsed ? 'lg:hidden' : ''}>
              Cerrar sesión
            </span>

          </button>

        </div>

      </aside>

      <div className="flex flex-col flex-1 min-w-0 gap-3">

        <header className="glass-header flex items-center justify-between px-4 sm:px-6 py-3">

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex header-button"
              aria-label="Colapsar o expandir menú"
              aria-expanded={!collapsed}
              aria-controls="solven-sidebar"
            >
              <PanelLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden header-button"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              aria-controls="solven-sidebar"
            >
              <PanelLeft size={20} />
            </button>

            <h2 className="text-sm font-medium">
              {currentPage}
            </h2>

          </div>

          <div className="flex items-center gap-3">

            <span className="hidden sm:block text-xs text-[#91a8b9]">
              {user?.nombre}
            </span>

            <div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center">
              <UserRound size={17} className="text-[#65cbe5]" />
            </div>

          </div>

        </header>

        <main className="flex-1 min-h-0 overflow-y-auto">

          <Outlet />

        </main>

      </div>

    </div>
  )
}