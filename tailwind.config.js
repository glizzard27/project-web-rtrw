/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      backgroundImage: {
        'hero': "url('../../frontend/src/Assets/img/pic-1.png')",
        'hero2': "url('../../frontend/src/Assets/img/proker.jpg')",
        'batik': "url('../../frontend/src/Assets/img/batik-fullhd.png')",
        'batik1': "url('../../frontend/src/Assets/img/batik-fhd-motif1.jpg')",
        'batik2': "url('../../frontend/src/Assets/img/batik-fhd-motif2.jpg')",
        'batik3': "url('../../frontend/src/Assets/img/batik-fhd-motif3.jpg')",
        'geo1': "url('../../frontend/src/Assets/img/geometric-fhd-motif1.jpg')",
        'pakrw': "url('../../frontend/src/Assets/img/jokowi.jpg')",
      },
      colors: {
        'regal-blue': '#243c5a',
        'dark-chocolate': '#332421',
      },
    },
  },
  plugins: [],
}