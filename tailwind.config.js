/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0040DD',
          alt: '#409CFF',
          lighter: '#F1F3FD',
          darker: '#0031AA',
        },
        light: '#FDFDFD',
        bg: '#F3F5FA',
      },
      fontFamily: {
        regular: ['Montserrat_400Regular'],
        medium: ['Montserrat_500Medium'],
        semibold: ['Montserrat_600SemiBold'],
      },
    },
  },
  plugins: [],
};
