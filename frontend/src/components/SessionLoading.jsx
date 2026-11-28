import { LoaderCircle, Wallet } from "lucide-react"

export default function SessionLoading() {
  return (
    <main
      className="solven-background min-h-screen flex items-center justify-center p-6"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">

        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-300/20">
          <Wallet size={32} className="text-[#65cbe5]" />
        </div>

        <h1 className="text-2xl font-bold tracking-[0.22em]">
          SOLVEN
        </h1>

        <LoaderCircle
          size={24}
          className="text-[#65cbe5] motion-safe:animate-spin"
        />

        <p className="text-sm text-[#91a8b9]">
          Verificando tu sesión...
        </p>

      </div>
    </main>
  )
}