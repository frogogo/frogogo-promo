module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    colors: {
      transparent: 'transparent',

      grey: {
        100: '#f9fafb',
        300: '#eceff4',
        500: '#c6cdd7',
        700: '#8a93a3',
        800: '#616176',
        900: '#1E1E3C'
      },

      primary: {
        100: '#dbf7f2',
        300: '#92e8d7',
        default: '#4ad9bd',
        500: '#4ad9bd',
        700: '#34cca9',
        900: '#1fbf95'
      },

      secondary: {
        100: '#cde2eb',
        300: '#69a7c4',
        default: '#046d9d',
        500: '#046d9d',
        700: '#025484',
        900: '#003b6c'
      },

      black: '#2B2B2B',
      white: '#ffffff'
    },

    fontFamily: {
      sans: [
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.15em'
    },

    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px'
    },

    borderColor: theme => ({
      default: theme('colors.grey.300', 'currentColor'),
      ...theme('colors')
    })
  }
}
