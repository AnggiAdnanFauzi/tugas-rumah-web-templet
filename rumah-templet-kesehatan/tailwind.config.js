/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors (Existing)
        'ocean-blue': '#0284C7',
        'electric-teal': '#0D9488',
        'neon-cyan': '#06B6D4',
        'slate-dark': '#0F172A',
        'clean-light': '#F8FAFC',
        
        // Semantic colors (Phase 2 Design System)
        primary: {
          DEFAULT: '#0284C7', // ocean-blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0D9488', // electric-teal
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#06B6D4', // neon-cyan
          foreground: '#FFFFFF',
        },
        background: '#F8FAFC', // clean-light
        foreground: '#0F172A', // slate-dark
        muted: {
          DEFAULT: '#F1F5F9', // slate-100
          foreground: '#64748B', // slate-500
        },
        border: '#E2E8F0', // slate-200
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'accordion-down': 'accordionDown 0.3s ease-out',
        'accordion-up': 'accordionUp 0.3s ease-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        accordionDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
}
