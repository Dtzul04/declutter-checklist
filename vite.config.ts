import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Local dev: base is '/'. For GitHub Pages project sites, CI sets VITE_DEPLOY_BASE
// to '/your-repo-name/' so assets load (must match the GitHub repo name).
const base = process.env.VITE_DEPLOY_BASE?.trim() || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
