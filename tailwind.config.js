/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme (Original)
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5A',
          dark: '#E55527'
        },
        dark: {
          900: '#0A0E14',
          800: '#11151C',
          700: '#1A1F2A',
          600: '#252B38',
          500: '#313945'
        },
        // Light Theme (Nuevo)
        light: {
          primary: '#bde901',       // Verde lima brillante
          'primary-dark': '#a5cf01', // Verde lima oscuro
          bg: '#032D3C',            // Fondo teal oscuro
          card: '#064557',          // Tarjetas teal medio
          border: '#0a5566',        // Bordes teal
          hover: '#085168',         // Hover state
          text: '#ffffff',          // Texto principal blanco
          'text-secondary': '#a0d4e0' // Texto secundario azul claro
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

