import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Wallet, Eye, EyeOff, LoaderCircle } from "lucide-react"
import { register } from "../api/auth"

export default function Registro() {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [confirmarContrasena, setConfirmarContrasena] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")

    if (nombre.trim().length < 2 || nombre.trim().length > 100) {
      setError("El nombre debe tener entre 2 y 100 caracteres.")
      return
    }

    if (!correo.trim()) {
      setError("Introduce tu correo electrónico.")
      return
    }

    if (contrasena.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.")
      return
    }

    if (new TextEncoder().encode(contrasena).length > 72) {
      setError("La contraseña no puede superar los 72 bytes.")
      return
    }

    if (contrasena !== confirmarContrasena) {
      setError("Las contraseñas no coinciden.")
      return
    }

    setLoading(true)

    try {
      await register(
        nombre.trim(),
        correo.trim(),
        contrasena
      )

      navigate("/login", {
        replace: true,
        state: {
          message: "Cuenta creada correctamente. Ya puedes iniciar sesión.",
        },
      })
    } catch (error) {
      setError(
        error instanceof TypeError
          ? "No se pudo conectar con el servidor."
          : error.message || "No fue posible crear la cuenta."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="solven-background min-h-screen flex items-center justify-center p-6">

      <section className="glass-panel w-full max-w-[460px] p-7 sm:p-10">

        <div className="flex flex-col items-center mb-8">

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

        <div className="mb-7">

          <h2 className="text-[28px] font-bold leading-tight">
            Crea tu cuenta
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#91a8b9]">
            Comienza a tomar el control de tus finanzas.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium mb-2"
            >
              Nombre completo
            </label>

            <input
              id="nombre"
              type="text"
              autoComplete="name"
              className="glass-input"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              maxLength={100}
              disabled={loading}
              required
            />
          </div>

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
                autoComplete="new-password"
                className="glass-input pr-12"
                placeholder="Mínimo 8 caracteres"
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

          <div>
            <label
              htmlFor="confirmarContrasena"
              className="block text-sm font-medium mb-2"
            >
              Confirmar contraseña
            </label>

            <div className="relative">

              <input
                id="confirmarContrasena"
                type={showConfirmation ? 'text' : 'password'}
                autoComplete="new-password"
                className="glass-input pr-12"
                placeholder="Repite tu contraseña"
                value={confirmarContrasena}
                onChange={(event) => setConfirmarContrasena(event.target.value)}
                disabled={loading}
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmation(!showConfirmation)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#91a8b9] hover:text-[#65cbe5] cursor-pointer"
                aria-label={showConfirmation ? 'Ocultar confirmación' : 'Mostrar confirmación'}
              >
                {showConfirmation ? <EyeOff size={18} /> : <Eye size={18} />}
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
                <LoaderCircle
                  size={18}
                  className="motion-safe:animate-spin"
                />
                Creando cuenta...
              </>
            ) : (
              'Crear cuenta'
            )}
          </button>

        </form>

        <p className="mt-7 text-center text-xs leading-relaxed text-[#91a8b9]">
          ¿Ya tienes una cuenta?

          <Link
            to="/login"
            className="ml-2 font-semibold text-[#65cbe5] hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>

      </section>

    </main>
  )
}