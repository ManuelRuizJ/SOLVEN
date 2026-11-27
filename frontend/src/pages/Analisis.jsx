import {TrendingUp,TrendingDown,PiggyBank,CalendarDays,ChevronDown,Percent,Wallet,ArrowLeftRight,} from "lucide-react"
import {ResponsiveContainer,AreaChart,Area,CartesianGrid,XAxis,YAxis,PieChart,Pie} from "recharts"

const summary = [
  {
    title: "Ingresos",
    icon: TrendingUp,
    color: "#6ee7b7",
  },
  {
    title: "Gastos",
    icon: TrendingDown,
    color: "#fda4af",
  },
  {
    title: "Ahorro",
    icon: PiggyBank,
    color: "#65cbe5",
  },
]

const indicators = [
  {
    title: "Tasa de ahorro",
    icon: Percent,
    value: "—",
  },
  {
    title: "Promedio de gasto",
    icon: Wallet,
    value: "—",
  },
  {
    title: "Balance mensual",
    icon: ArrowLeftRight,
    value: "—",
  },
]

const evolutionData = []
const categoryData = []

export default function Analisis() {
  return (
    <section className="finance-page">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

        <div>

          <span className="section-label">
            Inteligencia financiera
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Análisis financiero
          </h1>

          <p className="mt-3 text-sm text-[#91a8b9]">
            Comprende el comportamiento de tus finanzas.
          </p>

        </div>

        <button
          type="button"
          className="finance-secondary-button"
          disabled
        >
          <CalendarDays size={18} />
          Este mes
          <ChevronDown size={16} />
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

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
                — <span className="text-sm text-[#91a8b9]">MXN</span>
              </h2>

              <p className="mt-3 text-xs text-[#91a8b9]">
                Este mes
              </p>

            </article>
          )
        })}

      </div>

      <article className="finance-card mb-6">

        <h2 className="text-xl font-semibold">
          Evolución financiera
        </h2>

        <p className="mt-2 text-sm text-[#91a8b9]">
           Ingresos vs Gastos
        </p>

        <div className="analysis-chart mt-7">

          {evolutionData.length > 0 ? (

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={evolutionData}>

                <CartesianGrid
                  stroke="#294653"
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="periodo"
                  stroke="#91a8b9"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#91a8b9"
                  tickLine={false}
                  axisLine={false}
                  width={60}
                />

                <Area
                  type="monotone"
                  dataKey="ingresos"
                  stroke="#6ee7b7"
                  fill="#6ee7b7"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />

                <Area
                  type="monotone"
                  dataKey="gastos"
                  stroke="#fda4af"
                  fill="#fda4af"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />

              </AreaChart>

            </ResponsiveContainer>

          ) : (

            <div className="analysis-chart-empty">

              <div className="analysis-grid-lines" />

              <div className="analysis-empty-message">

                <TrendingUp
                  size={28}
                  className="text-[#65cbe5] mx-auto mb-3"
                />

                <h3 className="text-sm font-medium">
                  Datos no disponibles
                </h3>

                <p className="mt-2 text-xs text-[#91a8b9]">
                  Pendiente de integración
                </p>

              </div>

            </div>

          )}

        </div>

        <div className="flex items-center justify-center gap-6 mt-5">

          <div className="flex items-center gap-2">

            <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7]" />

            <span className="text-xs text-[#91a8b9]">
              Ingresos
            </span>

          </div>

          <div className="flex items-center gap-2">

            <span className="w-2.5 h-2.5 rounded-full bg-[#fda4af]" />

            <span className="text-xs text-[#91a8b9]">
              Gastos
            </span>

          </div>

        </div>

      </article>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <article className="finance-card">

          <h2 className="text-xl font-semibold">
            Distribución de gastos
          </h2>

          <p className="mt-2 text-sm text-[#91a8b9]">
            Gastos por categoría.
          </p>

          <div className="analysis-donut-container">

            {categoryData.length > 0 ? (

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={categoryData}
                    dataKey="importe"
                    nameKey="categoria"
                    innerRadius="65%"
                    outerRadius="90%"
                    fill="#65cbe5"
                    paddingAngle={3}
                    stroke="none"
                  />

                </PieChart>

              </ResponsiveContainer>

            ) : (

              <div className="analysis-empty-donut">

                <div className="text-center">

                  <p className="text-sm font-medium">
                    Sin datos
                  </p>

                  <p className="mt-1 text-xs text-[#91a8b9]">
                    disponibles
                  </p>

                </div>

              </div>

            )}

          </div>

        </article>

        <article className="finance-card">
          <h2 className="text-xl font-semibold">
            Indicadores financieros
          </h2>
          <p className="mt-2 text-sm text-[#91a8b9]">
            Resumen de tu actividad financiera.
          </p>
          <div className="mt-6">

            {indicators.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="analysis-indicator"
                >

                  <div className="finance-icon shrink-0">
                    <Icon size={19} />
                  </div>

                  <span className="flex-1 text-sm text-[#91a8b9]">
                    {item.title}
                  </span>

                  <span className="text-lg font-semibold">
                    {item.value}
                  </span>

                </div>
              )
            })}

          </div>

        </article>
      </div>

    </section>
  )
}