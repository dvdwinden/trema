/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.hbs",
    "./partials/**/*.hbs",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Degular', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Blanco', 'Times New Roman', 'Times', 'Georgia', 'serif'],
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        'primary': 'blue',
        'base': '#131313',
        'border': '#ddd',
        'bg': '#fff',
        'text': '#333333',
        'text-light': '#666',
      },
      fontSize: {
        '5xl': '5rem',
        '4xl': '3.6rem',
        '3xl': '3.2rem',
        '2xl': '2.8rem',
        'xl': '2.4rem',
        'lg': '2.0rem',
        'base': '1.375rem',
        'sm': '1.2rem',
        'xs': '1.125rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        'container': '1200px',
        'inner': '1040px',
      }
    },
  },
  plugins: [],
}
