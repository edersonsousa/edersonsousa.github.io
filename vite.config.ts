import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/edersonsousa.github.io",
  //root: './src', // Defina o diretório raiz do seu aplicativo, se estiver em um diretório diferente
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // Defina as extensões de arquivo suportadas
  },
})
