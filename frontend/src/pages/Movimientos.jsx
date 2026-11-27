import {ArrowDownLeft,ArrowUpRight,ArrowLeftRight,Wallet,Plus,Search,ListFilter,Info} from 'lucide-react'

const summary = [
  {
    title: "Ingresos",
    icon: ArrowDownLeft,
    color: "#6ee7b7",
  },
  {
    title: "Gastos",
    icon: ArrowUpRight,
    color: "#fda4af",
  },
  {
    title: "Balance mensual",
    icon: Wallet,
    color: "#65cbe5",
  },
]
export default function Movimientos() {
  return (
    <section className="finance-page">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
        <div>
          <span className="section-label">
            Actividad financiera
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Mis movimientos
          </h1>
          <p className="mt-3 text-sm text-[#91a8b9]">
            Detalle y administración de tus ingresos y gastos.
          </p>

        </div>
        <button
          type="button"
          className="finance-primary-button"
          title="Pendiente de integración con el backend"
          disabled
        >
          <Plus size={18} />
          Nuevo movimiento
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {summary.map((item) => {
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
              <h2 className="mt-3 text-3xl font-semibold">
                —
              </h2>
              <p className="mt-3 text-xs text-[#91a8b9]">
                Este mes
              </p>
            </article>
          )
        })}
      </div>
      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Historial de movimientos
        </h2>

        <p className="mt-2 text-sm text-[#91a8b9]">
          Detalle de tus operaciones financieras.
        </p>

      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="finance-search flex-1">
          <Search size={18} />
          <input
            type="search"
            placeholder="Buscar movimiento..."
            aria-label="Buscar movimiento"
            disabled
          />
        </div>

        <button
          type="button"
          className="finance-secondary-button"
          disabled
        >
          <ListFilter size={18} />
          Filtros
        </button>
      </div>
      <div className="finance-table-container">
        <div className="overflow-x-auto">
          <table className="finance-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th className="text-right">Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6">
                    <div className="finance-empty-icon">
                      <ArrowLeftRight size={30} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">
                      Tu actividad financiera
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-[#91a8b9] leading-relaxed">
                      Aquí podrás consultar tus ingresos,
                      gastos y demás movimientos financieros.
                    </p>
                    <button
                      type="button"
                      className="finance-primary-button mt-6"
                      disabled
                    >
                      <Plus size={18} />
                      Registrar movimiento
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[#91a8b9]">
        <Info size={14} className="shrink-0" />
        <p>
           Pendiente de integración con FastAPI.
        </p>
      </div>
    </section>
  )
}