import {
  Target,CircleCheck,TriangleAlert,Plus,} from "lucide-react"

const budgetSummary = [
  {
    title: "Presupuestos activos",
    icon: Target,
    color: "#65cbe5",
  },
  {
    title: "Dentro del límite",
    icon: CircleCheck,
    color: "#6ee7b7",
  },
  {
    title: "Límite superado",
    icon: TriangleAlert,
    color: "#fda4af",
  },
]

export default function Presupuestos() {
  return (
    <section className="finance-page">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

        <div>

          <span className="section-label">
            Planificación financiera
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Mis presupuestos
          </h1>

          <p className="mt-3 text-sm text-[#91a8b9]">
            Planifica tus gastos y alcanza tus objetivos.
          </p>

        </div>

        <button
          type="button"
          className="finance-primary-button"
          title="Pendiente de integración con el backend"
          disabled
        >
          <Plus size={18} />
          Nuevo presupuesto
        </button>

      </div>

      <div className="finance-balance-card mb-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-[#a1e7f7]">
            Presupuesto mensual
          </span>

          <div className="finance-icon">
            <Target size={24} />
          </div>

        </div>

        <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
          — <span className="text-xl text-[#91a8b9]">MXN</span>
        </h2>

        <div
          className="budget-progress-track mt-7"
          aria-hidden="true"
        />

        <div className="grid grid-cols-2 gap-4 mt-5">

          <div>

            <p className="text-xs text-[#91a8b9]">
              Utilizado
            </p>

            <p className="mt-2 text-lg font-semibold">
              — MXN
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs text-[#91a8b9]">
              Disponible
            </p>

            <p className="mt-2 text-lg font-semibold text-[#a1e7f7]">
              — MXN
            </p>

          </div>

        </div>

        <p className="mt-5 text-xs text-[#91a8b9]">
          Información pendiente de conexión
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

        {budgetSummary.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="finance-card"
            >

              <div
                className="finance-icon"
                style={{ color: item.color }}
              >
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm text-[#91a8b9]">
                {item.title}
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                —
              </h3>

            </article>
          )
        })}

      </div>

      <div className="mb-5">

        <h2 className="text-xl font-semibold">
          Tus presupuestos
        </h2>

        <p className="mt-2 text-sm text-[#91a8b9]">
          Administra tus límites de gasto por categoría.
        </p>

      </div>

      <div className="finance-empty-state">

        <div className="finance-empty-icon">
          <Target size={30} />
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          Toma el control de tus gastos
        </h3>

        <p className="mt-3 max-w-md text-sm text-[#91a8b9] leading-relaxed">
          Establece límites de gasto, organiza tus prioridades
          y administra mejor tu dinero con SOLVEN.
        </p>

        <button
          type="button"
          className="finance-primary-button mt-6"
          disabled
        >
          <Plus size={18} />
          Crear presupuesto
        </button>

      </div>

      <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[#91a8b9]">
      </div>

    </section>
  )
}