/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MD3 Primary
        'primary': '#0058be',
        'on-primary': '#ffffff',
        'primary-container': '#2170e4',
        'on-primary-container': '#fefcff',
        'inverse-primary': '#adc6ff',
        'primary-fixed': '#d8e2ff',
        'primary-fixed-dim': '#adc6ff',
        'on-primary-fixed': '#001a42',
        'on-primary-fixed-variant': '#004395',

        // MD3 Secondary
        'secondary': '#006c49',
        'on-secondary': '#ffffff',
        'secondary-container': '#6cf8bb',
        'on-secondary-container': '#00714d',
        'secondary-fixed': '#6ffbbe',
        'secondary-fixed-dim': '#4edea3',
        'on-secondary-fixed': '#002113',
        'on-secondary-fixed-variant': '#005236',

        // MD3 Tertiary
        'tertiary': '#825100',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#a36700',
        'on-tertiary-container': '#fffbff',
        'tertiary-fixed': '#ffddb8',
        'tertiary-fixed-dim': '#ffb95f',
        'on-tertiary-fixed': '#2a1700',
        'on-tertiary-fixed-variant': '#653e00',

        // MD3 Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // MD3 Surface
        'surface': '#faf8ff',
        'surface-dim': '#d2d9f4',
        'surface-bright': '#faf8ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f3ff',
        'surface-container': '#eaedff',
        'surface-container-high': '#e2e7ff',
        'surface-container-highest': '#dae2fd',
        'on-surface': '#131b2e',
        'on-surface-variant': '#424754',
        'inverse-surface': '#283044',
        'inverse-on-surface': '#eef0ff',
        'surface-tint': '#005ac2',
        'surface-variant': '#dae2fd',

        // MD3 Outline
        'outline': '#727785',
        'outline-variant': '#c2c6d6',

        // Legacy aliases
        'background': '#faf8ff',
        'foreground': '#131b2e',
        'muted': {
          DEFAULT: '#F1F5F9',
          foreground: '#424754',
        },
        'border': '#c2c6d6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'display-lg': ['Plus Jakarta Sans'],
        'headline-lg': ['Plus Jakarta Sans'],
        'headline-md': ['Plus Jakarta Sans'],
        'body-lg': ['Plus Jakarta Sans'],
        'body-md': ['Plus Jakarta Sans'],
        'label-md': ['Plus Jakarta Sans'],
        'caption': ['Plus Jakarta Sans'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'base': '8px',
        'gutter': '24px',
        'margin-desktop': '32px',
        'margin-mobile': '20px',
      },
      borderRadius: {
        'eight': '8px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
