import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Wallet, LoaderCircle } from "lucide-react"
import useAuth from "../hooks/useAuth"

export default function Login() {
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")

    if (!correo.trim() || !contrasena) {
      setError("Completa todos los campos.")
      return
    }

    setLoading(true)

    try {
      await signIn(correo.trim(), contrasena)
      navigate("/dashboard", { replace: true })
    } catch (error) {
      setError(
        error instanceof TypeError
          ? "No se pudo conectar con el servidor."
          : error.message || "No fue posible iniciar sesión."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="solven-background min-h-screen flex items-center justify-center p-6">
      <section className="glass-panel w-full max-w-[460px] p-7 sm:p-10">
        <div className="flex flex-col items-center mb-9">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 mb-5">
            <Wallet size={28} className="text-[#65cbe5]" />
          </div>
          <h1 className="text-2xl font-bold tracking-[0.22em] text-[#eaf3fa]">
            SOLVEN
          </h1>
          <p className="mt-2 text-[9px] tracking-[0.25em] text-[#91a8b9]">
            FINANZAS INTELIGENTES
          </p>
        </div>
        <div className="mb-8">
          <h2 className="mt-3 text-[28px] font-bold leading-tight">
            Bienvenido de nuevo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#91a8b9]">
            Inicia sesión para tomar el control de tus finanzas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium mb-2"
            >
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              autoComplete="email"
              className="glass-input"
              placeholder="nombre@correo.com"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div>
            <label
              htmlFor="contrasena"
              className="block text-sm font-medium mb-2"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                id="contrasena"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                className="glass-input pr-12"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(event) => setContrasena(event.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#91a8b9] hover:text-[#65cbe5] cursor-pointer"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="glass-button flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle size={18} className="motion-safe:animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              'Iniciar sesión'
            )}
          </button>
        </form>

        <p className="mt-7 text-center text-xs leading-relaxed text-[#91a8b9]">
          ¿Aún no tienes una cuenta? Regístrate
          <Link
            to="/registro"
            className="ml-2 font-semibold text-[#65cbe5] hover:underline"
          >
            Crear cuenta
          </Link>
        </p>
      </section>
    </main>
  )
}