import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Yeh final code hoga
export default defineConfig({
  base: "/GTA-6/", // <-- Yeh line add karo
  plugins: [react()],
})
