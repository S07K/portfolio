import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:    'rgb(var(--canvas) / <alpha-value>)',
        surface:   'rgb(var(--surface) / <alpha-value>)',
        card:      'rgb(var(--card) / <alpha-value>)',
        line:      'rgb(var(--line) / <alpha-value>)',
        'text-hi': 'rgb(var(--text-hi) / <alpha-value>)',
        'text-md': 'rgb(var(--text-md) / <alpha-value>)',
        'text-lo': 'rgb(var(--text-lo) / <alpha-value>)',
        accent:    'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulseDot 2.5s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
