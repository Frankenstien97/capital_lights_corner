import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',  // Use absolute paths for Netlify
    server: {
        port: 5173,
        open: true
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
})
