module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1440px',
      },
      height: {
        '1.05screen': '105vh',
        '1.1screen': '110vh',
        '1.2screen': '120vh',
      },
      colors: {
        'green-t': '#008c8d',
        'green-b': '#6bc2c3',
        'black-t': '#384359',
        'black-b': '#262c3a',
      },
      letterSpacing: {
        'widest': '.38em',
      },
      backgroundImage: {
        'about': "url('/images/bg-about.png')",
        'future': "url('/images/bg-future.png')",
        'skills': "url('/images/bg-skills.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
