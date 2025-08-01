import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        'main-color': '#6A5DC2',
        'accent-color': '#dc5dfc'
      },
      transitionProperty: {
        width: 'width',
        transform: 'transform'
      }
    }
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: []
}

export default config
