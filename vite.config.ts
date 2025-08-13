import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno del directorio raíz
  const env = loadEnv(mode, '', '');

  return {
    plugins: [react()],
    // Define las variables de entorno para que estén disponibles en el código del cliente
    define: {
      // Vite reemplazará `process.env.VAR` en el código con el valor real
      // de la variable de entorno durante el proceso de compilación.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
