// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Aseguramos que busque en app/ y components/
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2. Definimos los colores del diseño
        'festa-bg': '#fdfdfd', // El blanco de la referencia
        'festa-text': '#1a1a1a',
        'festa-accent': '#d4af37', // Dorado suave por si acaso
      },
      fontFamily: {
        // 3. (Opcional) Si querés usar la Serif elegante
        serif: ['var(--font-serif)', 'serif'], 
      },
    },
  },
  plugins: [],
};
export default config;