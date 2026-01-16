import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
    plugins: [react(), viteSingleFile()],
    base: './',
    build: {
        outDir: 'dist-static',
        cssCodeSplit: false,
        assetsInlineLimit: 100000000,  // Inline all assets
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                manualChunks: undefined
            }
        }
    }
})
