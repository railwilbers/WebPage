/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e6efff',
          200: '#c4dbff',
          300: '#9ec2ff',
          400: '#6a9dff',
          500: '#3b82f6',
          600: '#2f6ad6',
          700: '#2250a8',
          800: '#1c3f84',
          900: '#182f61',
        },
        accent: {
          50: '#fff7f5',
          100: '#ffeae4',
          200: '#ffcfc4',
          300: '#ffad99',
          400: '#ff7a5c',
          500: '#ff5630',
          600: '#e6491f',
          700: '#bf3a1a',
          800: '#9e3118',
          900: '#7f2a16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter var', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        display: ['Inter', 'Inter var', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}
