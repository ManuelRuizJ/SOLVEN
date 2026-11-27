import {Wallet,Landmark,CreditCard,Banknote,Plus,Info} from "lucide-react"

const accountTypes = [
  {
    title: "Cuentas bancarias",
    icon: Landmark,
  },
  {
    title: "Tarjetas",
    icon: CreditCard,
  },
  {
    title: "Efectivo",
    icon: Banknote,
  },
]

export default function Cuentas() {
  return (
    <section className="finance-page">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

        <div>

          <span className="section-label">
             Personal
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Mis cuentas
          </h1>

          <p className="mt-3 text-sm text-[#91a8b9]">
            Administra tu dinero desde un solo lugar.
          </p>

        </div>

        <button
          type="button"
          className="finance-primary-button"
          title="Pendiente de integración con el backend"
          disabled
        >
          <Plus size={18} />
          Nueva cuenta
        </button>

      </div>

      <div className="finance-balance-card mb-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-[#a1e7f7]">
            Balance total
          </span>

          <div className="finance-icon">
            <Wallet size={24} />
          </div>

        </div>

        <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
          — <span className="text-xl text-[#91a8b9]">MXN</span>
        </h2>

        <p className="mt-4 text-xs text-[#91a8b9]">
          Información pendiente de conexión
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

        {accountTypes.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="finance-card"
            >

              <div className="finance-icon">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm text-[#91a8b9]">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                —
              </h3>

            </article>
          )
        })}

      </div>

      <h2 className="text-xl font-semibold mb-5">
        Tus cuentas
      </h2>

      <div className="finance-empty-state">

        <div className="finance-empty-icon">
          <Wallet size={30} />
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          Tus cuentas en un solo lugar
        </h3>

        <p className="mt-3 max-w-md text-sm text-[#91a8b9] leading-relaxed">
          Próximamente podrás administrar tus cuentas
          bancarias, tarjetas y efectivo desde SOLVEN (Esto lo dejamos como extra no creen?).
        </p>

        <button
          type="button"
          className="finance-primary-button mt-6"
          disabled
        >
          <Plus size={18} />
          Agregar cuenta
        </button>

      </div>

      <div className="flex items-center justify-center gap-2 mt-6 text-xs text-[#91a8b9]">
      </div>

    </section>
  )
}