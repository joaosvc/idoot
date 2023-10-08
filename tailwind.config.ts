import type { Config } from 'tailwindcss'

const colorsConfig = {
  primaryColorHue: 252,
  darkColorLightness: 17,
  lightColorLightness: 95,
  whiteColorLightness: 100
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        gray: 'var(--color-gray)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        dark: 'var(--color-dark)',
        black: 'var(--color-black)'
      },
      textColor: {
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        gray: 'var(--color-gray)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        dark: 'var(--color-dark)',
        black: 'var(--color-black)'
      },
      backgroundColor: {
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        gray: 'var(--color-gray)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        dark: 'var(--color-dark)',
        black: 'var(--color-black)'
      },
      borderRadius: {
        btn: 'var(--border-radius)',
        card: 'var(--card-border-radius)'
      },
      padding: {
        btn: 'var(--btn-padding)',
        search: 'var(--search-padding)',
        card: 'var(--card-padding)'
      }
    }
  },
  plugins: []
}
export default config
