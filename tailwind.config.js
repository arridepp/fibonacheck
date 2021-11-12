module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      white: "#ffffff",
      red: "#ff0000",
      'black2': '#212020',
      glass: {
        '1': 'rgba( 36, 36, 36, 0.4 )',
        '2': 'rgba( 36, 36, 36, 0.6 )',
        '3': 'rgba( 36, 36, 36, 0.7 )',
        '4': 'rgba( 36, 36, 36, 0.8 )',
        '5': 'rgba( 36, 36, 36, 0.9 )',
      }
    },
    boxShadow: {
      '1': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      '2': '1px 2px 8px #434343',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
