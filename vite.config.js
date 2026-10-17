import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes asset paths relative, so it works under github.io/<repo>/
export default defineConfig({ base: './', plugins: [react()] })
