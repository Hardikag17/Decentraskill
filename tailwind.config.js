module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Open: ['Open Sans', 'sans-serif'],
    },
    backgroundImage: {
      design: 'url(../assets/design.png)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
