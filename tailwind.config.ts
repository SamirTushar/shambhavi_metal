import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f0f',
        card: '#1a1a1a',
        section: '#141414',
        accent: '#c9a84c',
        accentLight: '#d4b96a',
        text: '#e8e8e8',
        muted: '#888888',
        border: '#2a2a2a'
      }
    }
  },
  plugins: []
}

export default config
