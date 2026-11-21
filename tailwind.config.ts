import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:    'rgb(var(--canvas) / <alpha-value>)',
        raised:    'rgb(var(--raised) / <alpha-value>)',
        line:      'rgb(var(--line) / <alpha-value>)',
        'text-hi': 'rgb(var(--text-hi) / <alpha-value>)',
        'text-md': 'rgb(var(--text-md) / <alpha-value>)',
        'text-lo': 'rgb(var(--text-lo) / <alpha-value>)',
        ok:        'rgb(var(--ok) / <alpha-value>)',
        rec:       'rgb(var(--rec) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
