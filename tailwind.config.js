/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // make sure Tailwind scans your files
    ],
    theme: {
      extend: {
        animation: {
          float: 'float 15s ease-in-out infinite alternate',
        },
        keyframes: {
          float: {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(10%, 10%)' },
          },
        },
      },
    },
    plugins: [],
  }
  