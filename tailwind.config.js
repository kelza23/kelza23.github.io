/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Space Mono"', 'monospace'],
        mono:    ['"Space Mono"', 'monospace'],
        heading: ['"Space Mono"', 'monospace'],
        display: ['"Space Mono"', 'monospace'],
        data:    ['"Space Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0c0c0e',
          2: '#111114',
          3: '#161619',
        },
      },
      animation: {
        'ticker':    'ticker 40s linear infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
      maxWidth: {
        'content': '860px',
      },
    },
  },
  plugins: [],
}
