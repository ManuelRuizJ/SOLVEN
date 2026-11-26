import { Button, TextInput, PasswordInput, Paper } from '@mantine/core'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Paper shadow="md" radius="lg" p="xl" className="w-full max-w-sm">

        <h1 className="text-3xl font-bold text-center text-emerald-600">
          SOLVEN
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sistema de gestión financiera
        </p>

        <TextInput
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
        />

        <PasswordInput
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          mt="md"
        />

        <Button fullWidth color="teal" mt="xl">
          Iniciar sesión
        </Button>

      </Paper>
    </div>
  )
}

export default App