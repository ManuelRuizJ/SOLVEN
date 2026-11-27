import {ArrowDownLeft,ArrowUpRight,Layers,Plus,Lightbulb,Info} from 'lucide-react'

const categoryGroups = [
  {
    title: "Ingresos",
    subtitle: "Categorías de ingresos",
    description: "Organiza las diferentes fuentes de tu dinero.",
    icon: ArrowDownLeft,
    color: "#6ee7b7",
  },
  {
    title: "Gastos",
    subtitle: "Categorías de gastos",
    description: "Identifica en qué utilizas tu dinero.",
    icon: ArrowUpRight,
    color: "#fda4af",
  },
]

export default function Categorias() {
  return (
    <section className="finance-page">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

        <div>

          <span className="section-label">
            Organización
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Mis categorías
          </h1>

          <p className="mt-3 text-sm text-[#91a8b9]">
            Organiza y clasifica tus ingresos y gastos.
          </p>

        </div>

        <button
          type="button"
          className="finance-primary-button"
          title="Pendiente de integración con el backend"
          disabled
        >
          <Plus size={18} />
          Nueva categoría
        </button>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

        {categoryGroups.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="finance-card"
            >

              <div className="flex items-center gap-4">

                <div
                  className="finance-icon"
                  style={{ color: item.color }}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">

                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs text-[#91a8b9]">
                    Categorías disponibles
                  </p>

                </div>
                <span className="text-2xl font-semibold">
                  —
                </span>
              </div>
              <div className="border-t border-white/10 mt-6" />
              <div className="flex flex-col items-center justify-center text-center min-h-[280px] px-3 py-8">
                <div
                  className="finance-empty-icon"
                  style={{ color: item.color }}
                >
                  <Layers size={30} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  {item.subtitle}
                </h3>
                <p className="mt-3 text-sm text-[#91a8b9] leading-relaxed">
                  {item.description}
                </p>
                <button
                  type="button"
                  className="finance-secondary-button mt-6"
                  disabled
                >
                  <Plus size={17} />
                  Agregar categoría
                </button>
              </div>
            </article>
          )
        })}
      </div>
      <div className="finance-card flex items-start gap-4 mt-6">
        <div className="finance-icon shrink-0">
          <Lightbulb size={22} />
        </div>
        <div>
          <h2 className="text-sm font-semibold">
            Organiza mejor tus finanzas
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#91a8b9]">
            Clasificar tus movimientos te ayudará a identificar
            hábitos de consumo y establecer mejores presupuestos.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[#91a8b9]">
      </div>
    </section>
  )
}