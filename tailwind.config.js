/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#0B4433',
          mid: '#146C4F',
          soft: '#E4EEE7',
          line: '#BFD8CC'
        },
        rust: {
          DEFAULT: '#C1521A',
          deep: '#963E12',
          soft: '#F5E2D3'
        },
        cream: {
          DEFAULT: '#F7F3E9',
          dim: '#EFE9DA',
          paper: '#FCFAF4'
        },
        charcoal: {
          DEFAULT: '#1F2420',
          soft: '#4A524B'
        },
        gold: {
          DEFAULT: '#B8902E',
          soft: '#EFE0BA'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'ledger-lines':
          'repeating-linear-gradient(to bottom, transparent 0, transparent 39px, rgba(11,68,51,0.08) 40px)'
      },
      boxShadow: {
        seal: '0 1px 0 rgba(184,144,46,0.5), 0 0 0 1px rgba(11,68,51,0.08)',
        card: '0 1px 2px rgba(31,36,32,0.04), 0 8px 24px -12px rgba(31,36,32,0.18)'
      }
    }
  },
  plugins: []
};
