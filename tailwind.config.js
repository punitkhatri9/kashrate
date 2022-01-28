module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
    },
    },
    fontSize: {
      'xvs':'.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
   colors: {
    'blue-dark': '#00143B',
    'blue': '#1A498C',
    'blue-light': '#CEDCFF',
    'gray-light': '#E9EFF6',
    'blue-100': '#F2F8FF',
    'white': '#FFFFFF',
  },
  borderRadius: {
   '4xl': '2rem',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
