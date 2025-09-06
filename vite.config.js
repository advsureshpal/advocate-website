import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;700&display=swap');
        `,
      },
    },
  },
})
