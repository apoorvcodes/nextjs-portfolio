module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora: [ "Sora", 'sans'],
        pops: ['Poppins', 'sans'],
        robo :[ 'Roboto', 'sans-serif'],
        brd: [ 'Birthstone Bounce', 'cursive']
      },
      colors: {
      "cyan": "#00f5d4",
      "space": "#001d3d",
      "lcyan": "#90e0ef"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
