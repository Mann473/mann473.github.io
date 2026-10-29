import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Using relative base './' so the built bundle works seamlessly on:
// 1. GitHub Pages root domain (username.github.io)
// 2. GitHub Pages project subpath (username.github.io/repo-name/)
// 3. Vercel, Netlify, or custom domains
export default defineConfig({
  base: './',
  plugins: [react()],
})
