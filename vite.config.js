import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/GTA-6/", // ✅ Yeh line zarur honi chahiye
  plugins: [react()],
})
