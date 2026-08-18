/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#0A0F1C',       // Deep Navy
          surface: '#131B2F',    // Slate Blue
          elevated: '#1E293B',   // Lighter Slate
          accent: '#10B981',     // Emerald Green
          'accent-bright': '#34D399',
          'accent-dim': 'rgba(16, 185, 129, 0.15)',
          'grey-dim': '#64748B', // Slate-500
          'grey-muted': '#94A3B8', // Slate-400
          'grey-light': '#F1F5F9', // Slate-100
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 4px 20px rgba(16, 185, 129, 0.25)',
        'brand-glow-lg': '0 6px 24px rgba(16, 185, 129, 0.40)',
        'glass': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.10)',
      }
    },
  },
  plugins: [],
}
