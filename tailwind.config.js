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
          navy: '#071B36',
          darkNavy: '#06152B',
          primary: '#0878E8',
          primaryHover: '#0663c4',
          orange: '#FF7900',
          orangeHover: '#e06a00',
          lightBg: '#F4F7FB',
          body: '#26364A',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
