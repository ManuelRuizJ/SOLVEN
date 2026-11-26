const API_URL = import.meta.env.VITE_API_URL

export async function apiRequest(endpoint, options = {}) {
  const { auth = true, ...requestOptions } = options
  const token = localStorage.getItem("solven_token")
  const headers = new Headers(requestOptions.headers)

  if (requestOptions.body && !(requestOptions.body instanceof URLSearchParams)) {
    headers.set("Content-Type", "application/json")
  }

  if (token && auth) {
    headers.set("Authorization", `Bearer ${token}`)
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...requestOptions,
    headers,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const detail = data?.detail

    const message = Array.isArray(detail)
      ? detail.map(error => error.msg).join(', ')
      : detail || "Error en la solicitud"

    const error = new Error(message)
    error.status = response.status

    throw error
  }

  return data
}