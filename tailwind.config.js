/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      fontSize: {
        // Display
        'display-3xl': [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-2%',
          },
        ],

        'display-2xl': [
          '48px',
          {
            lineHeight: '60px',
            letterSpacing: '-2%',
          },
        ],

        'display-xl': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-2%',
          },
        ],

        'display-lg': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '-2%',
          },
        ],

        'display-md': [
          '32px',
          {
            lineHeight: '40px',
          },
        ],

        'display-sm': [
          '28px',
          {
            lineHeight: '38px',
          },
        ],

        'display-xs': [
          '24px',
          {
            lineHeight: '36px',
          },
        ],

        // Text
        'text-xl': [
          '20px',
          {
            lineHeight: '34px',
          },
        ],

        'text-lg': [
          '18px',
          {
            lineHeight: '32px',
          },
        ],

        'text-md': [
          '16px',
          {
            lineHeight: '30px',
          },
        ],

        'text-sm': [
          '14px',
          {
            lineHeight: '28px',
          },
        ],

        'text-xs': [
          '12px',
          {
            lineHeight: '24px',
          },
        ],
      },
    },
  },

  plugins: [],
};
