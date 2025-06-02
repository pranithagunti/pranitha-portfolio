import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to /mywebsite/ (your repo name)
export default defineConfig({
  base: '/mywebsite/',
  plugins: [react()],
})
