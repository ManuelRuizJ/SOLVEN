import { apiRequest } from "./client"

export function register(nombre, correo, contrasena) {
  return apiRequest("/auth/register", {
    method: "POST",
    auth: false,
    body: JSON.stringify({
      nombre,
      correo,
      contrasena,
    }),
  })
}

export function login(correo, contrasena) {
  const form = new URLSearchParams()

  form.append("username", correo)
  form.append("password", contrasena)

  return apiRequest("/auth/login", {
    method: "POST",
    auth: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  })
}

export function getCurrentUser() {
  return apiRequest("/auth/me")
}

export function checkHealth() {
  return apiRequest("/health", {
    auth: false,
  })
}