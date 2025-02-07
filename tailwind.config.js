const plugin = require('tailwindcss/plugin');

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
        input: '#E9ECF3',
        inputPlaceholder: '#97A0B4',
      },
      fontFamily: {
        regular: ['PlusJakartaSans-Regular'],
        light: ['PlusJakartaSans-Light'],
        medium: ['PlusJakartaSans-Medium'],
        semibold: ['PlusJakartaSans-SemiBold'],
        bold: ['PlusJakartaSans-Bold'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.input': 'px-3 h-12 bg-input flex-row items-center justify-start rounded-xl',
        '.input-placeholder': 'text-sm tracking-normal font-regular text-inputPlaceholder',
      });
    }),
  ],
};
