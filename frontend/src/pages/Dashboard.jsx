import { useState, useRef } from "react"
import {ArrowDownLeft,ArrowUpRight,ChartNoAxesCombined,Sparkles,ArrowUp,Info,} from "lucide-react"

import useAuth from "../hooks/useAuth"

const suggestions = [
  {
    title: "Registrar un gasto",
    description: "Controla tus gastos diarios",
    prompt: "Gasté $80 en café",
    icon: ArrowDownLeft,
  },
  {
    title: "Registrar un ingreso",
    description: "Organiza tus ingresos",
    prompt: "Recibí $500",
    icon: ArrowUpRight,
  },
  {
    title: "Mi progreso financiero",
    description: "Consulta tu actividad del mes",
    prompt: "¿Cómo voy este mes?",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Consejos financieros",
    description: "Mejora tus hábitos financieros",
    prompt: "Dame consejos financieros",
    icon: Sparkles,
  },
]

export default function Dashboard() {
  const { user } = useAuth()

  const [message, setMessage] = useState("")
  const inputRef = useRef(null)

  const firstName =
    user?.nombre?.trim().split(/\s+/)[0] || "Usuario"

  function selectSuggestion(prompt) {
    setMessage(prompt)
    inputRef.current?.focus()
  }

  return (
    <section className="assistant-page">

      <div className="assistant-content">

        <div className="w-full max-w-[760px] mx-auto">

          <div className="flex flex-col items-center text-center">

            <span className="section-label">
              SOLVEN
            </span>

            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight">
              Hola, {firstName}.
            </h1>

            <p className="mt-5 text-sm sm:text-lg text-[#91a8b9] leading-relaxed">
              ¿Qué tal tus finanzas hoy finanzas hoy?
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12">

            {suggestions.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectSuggestion(item.prompt)}
                  className="assistant-suggestion text-left"
                >

                  <div className="flex items-center gap-4">
                    <div className="assistant-suggestion-icon">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm font-semibold">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs text-[#91a8b9]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <div className="assistant-composer">
        <div className="w-full max-w-[760px] mx-auto">
          <div className="assistant-input-container">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuéntame sobre tus finanzas..."
              aria-label="Mensaje para el asistente financiero"
              className="assistant-message-input"
            />
            <button
              type="button"
              className="assistant-send-button"
              aria-label="Enviar mensaje"
              title="Asistente pendiente de integración"
              disabled
            >
              <ArrowUp size={22} />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#91a8b9]">
            <Info size={14} className="shrink-0" />
            <p>
              Asistente financiero en desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}