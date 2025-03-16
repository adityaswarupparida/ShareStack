/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#f9fbfc",
          600: "#39404d"
        },
        purple : {
          200: "#e0e6fc",
          500: "#4b44b7",
          600: "#5046e4"
        },
        primary: 'var(--primary-color)',
      },
      keyframes: {
        'float-lg': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }, 
        'float-md': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2.0px)' }
        }
      },
      animation: {
        'float-lg': 'float-lg 5s ease-in-out infinite',
        'float-md': 'float-md 5s ease-in-out infinite',
      },
      letterSpacing: {
        'tightest': '-0.075em',
      },
      fontFamily: {
        'merriweather': ["Merriweather", 'serif'],
        'cormorant': ["Cormorant", 'serif'],
        'alegreya': ["Alegreya", 'serif'],
        'cardo': ["Cardo", 'serif'],
        'neuton': ["Neuton", 'serif'],
      }
    },
  },
  plugins: [],
}

