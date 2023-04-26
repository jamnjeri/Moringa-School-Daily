/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#F9500D',
        'cta-blue':'#101F3C',
        'gray-text':'#757575',
        'gray-pills':'#F2F2F2',
        'paragraph-text':'#292929'
      }
    },
  },
  plugins: [],
}
