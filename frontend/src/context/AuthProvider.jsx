import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { login, getCurrentUser } from "../api/auth"

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionError, setSessionError] = useState(null)

  useEffect(() => {
    let active = true

    async function restoreSession() {
      const token = localStorage.getItem("solven_token")

      try {
        if (token) {
          const currentUser = await getCurrentUser()

          if (active) {
            setUser(currentUser)
          }
        }
      } catch (error) {
        if (active) {
          if (error.status === 401) {
            localStorage.removeItem("solven_token")
            setUser(null)
          } else {
            setSessionError(error.message)
          }
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    restoreSession()

    return () => {
      active = false
    }
  }, [])

  async function signIn(correo, contrasena) {
    const data = await login(correo, contrasena)

    localStorage.setItem("solven_token", data.access_token)

    try {
      const currentUser = await getCurrentUser()

      setUser(currentUser)
      setSessionError(null)

      return currentUser
    } catch (error) {
      localStorage.removeItem("solven_token")
      setUser(null)

      throw error
    }
  }

  function signOut() {
    localStorage.removeItem("solven_token")
    setUser(null)
    setSessionError(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        sessionError,
        isAuthenticated: Boolean(user),
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}