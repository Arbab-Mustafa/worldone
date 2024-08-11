
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-default': 'var(--bg-default)',
        'bg-base': 'var(--bg-base)',
        'bg-bg-subtle': 'var(--bg-bg-subtle)',
        'bg-bg': 'var(--bg-bg)',
        'bg-bg-hover': 'var(--bg-bg-hover)',
        'bg-bg-active': 'var(--bg-bg-active)',
        'fg-line': 'var(--fg-line)',
        'fg-border': 'var(--fg-border)',
        'fg-border-hover': 'var(--fg-border-hover)',
        'fg-solid': 'var(--fg-solid)',
        'fg-solid-hover': 'var(--fg-solid-hover)',
        'fg-text': 'var(--fg-text)',
        'fg-text-contrast': 'var(--fg-text-contrast)',
        'fg-default': 'var(--fg-default)',

        'primary-base': 'var(--primary-base)',
        'primary-bg-subtle': 'var(--primary-bg-subtle)',
        'primary-bg': 'var(--primary-bg)',
        'primary-bg-hover': 'var(--primary-bg-hover)',
        'primary-bg-active': 'var(--primary-bg-active)',
        'primary-line': 'var(--primary-line)',
        'primary-border': 'var(--primary-border)',
        'primary-border-hover': 'var(--primary-border-hover)',
        'primary-solid': 'var(--primary-solid)',
        'primary-solid-hover': 'var(--primary-solid-hover)',
        'primary-text': 'var(--primary-text)',
        'primary-text-contrast': 'var(--primary-text-contrast)',
        'primary-on-primary': 'var(--primary-on-primary)',

        'secondary-base': 'var(--secondary-base)',
        'secondary-bg-subtle': 'var(--secondary-bg-subtle)',
        'secondary-bg': 'var(--secondary-bg)',
        'secondary-bg-hover': 'var(--secondary-bg-hover)',
        'secondary-bg-active': 'var(--secondary-bg-active)',
        'secondary-line': 'var(--secondary-line)',
        'secondary-border': 'var(--secondary-border)',
        'secondary-border-hover': 'var(--secondary-border-hover)',
        'secondary-solid': 'var(--secondary-solid)',
        'secondary-solid-hover': 'var(--secondary-solid-hover)',
        'secondary-text': 'var(--secondary-text)',
        'secondary-text-contrast': 'var(--secondary-text-contrast)',
        'secondary-on-secondary': 'var(--secondary-on-secondary)',

        'success-base': 'var(--success-base)',
        'success-bg-subtle': 'var(--success-bg-subtle)',
        'success-bg': 'var(--success-bg)',
        'success-bg-hover': 'var(--success-bg-hover)',
        'success-bg-active': 'var(--success-bg-active)',
        'success-line': 'var(--success-line)',
        'success-border': 'var(--success-border)',
        'success-border-hover': 'var(--success-border-hover)',
        'success-solid': 'var(--success-solid)',
        'success-solid-hover': 'var(--success-solid-hover)',
        'success-text': 'var(--success-text)',
        'success-text-contrast': 'var(--success-text-contrast)',
        'success-on-success': 'var(--success-on-success)',

        'warning-base': 'var(--warning-base)',
        'warning-bg-subtle': 'var(--warning-bg-subtle)',
        'warning-bg': 'var(--warning-bg)',
        'warning-bg-hover': 'var(--warning-bg-hover)',
        'warning-bg-active': 'var(--warning-bg-active)',
        'warning-line': 'var(--warning-line)',
        'warning-border': 'var(--warning-border)',
        'warning-border-hover': 'var(--warning-border-hover)',
        'warning-solid': 'var(--warning-solid)',
        'warning-solid-hover': 'var(--warning-solid-hover)',
        'warning-text': 'var(--warning-text)',
        'warning-text-contrast': 'var(--warning-text-contrast)',
        'warning-on-warning': 'Var(--warning-on-warning)',

        'alert-base': 'var(--alert-base)',
        'alert-bg-subtle': 'var(--alert-bg-subtle)',
        'alert-bg': 'var(--alert-bg)',
        'alert-bg-hover': 'var(--alert-bg-hover)',
        'alert-bg-active': 'var(--alert-bg-active)',
        'alert-line': 'var(--alert-line)',
        'alert-border': 'var(--alert-border)',
        'alert-border-hover': 'var(--alert-border-hover)',
        'alert-solid': 'var(--alert-solid)',
        'alert-solid-hover': 'var(--alert-solid-hover)',
        'alert-text': 'var(--alert-text)',
        'alert-text-contrast': 'var(--alert-text-contrast)',
        'alert-on-alert': 'var(--alert-on-alert)',

        'info-base': 'var(--info-base)',
        'info-bg-subtle': 'var(--info-bg-subtle)',
        'info-bg': 'var(--info-bg)',
        'info-bg-hover': 'var(--info-bg-hover)',
        'info-bg-active': 'var(--info-bg-active)',
        'info-line': 'var(--info-line)',
        'info-border': 'var(--info-border)',
        'info-border-hover': 'var(--info-border-hover)',
        'info-solid': 'var(--info-solid)',
        'info-solid-hover': 'var(--info-solid-hover)',
        'info-text': 'var(--info-text)',
        'info-text-contrast': 'var(--info-text-contrast)',
        'info-on-info:': 'var(--info-on-info:)',

        'overlay-100': 'var(--overlay-100)',
        'overlay-200': 'var(--overlay-200)',
        'overlay-300': 'var(--overlay-300)',
        'overlay-400': 'var(--overlay-400)',
        'overlay-500': 'var(--overlay-500)',
        'overlay-600': 'var(--overlay-600)',
        'overlay-700': 'var(--overlay-700)',
        'overlay-800': 'var(--overlay-800)',
        'overlay-900': 'var(--overlay-900)',
        'overlay-1000': 'var(--overlay-1000)',
        'overlay-1100': 'var(--overlay-1100)',
        'overlay-1200': 'var(--overlay-1200)',

        'overlay-modal': 'var(--overlay-modal)'
      },
      backgroundImage: {

        'hero-image': "url('/images/hero-image.jpg')",
        'links-image': "url('/images/links-image.jpg')",
        'notes-image': "url('/images/notes-image.jpg')",
        'notes-image-alt': "url('/images/notes-image-alt.jpg')",
        'info-image': "url('/images/info-image.jpg')",
     
      },
      fontFamily: {
        sans: ['var(--font-archivo)']
      },
      fontSize: {
        xxs: [
          '0.5625rem',
          {
            lineHeight: '0.75rem',
            letterSpacing: '-0.00563rem'
          }
        ],
        input: ['0.9375rem', { lineHeight: '1.5rem' }],
        badge: ['0.625rem', { lineHeight: '1rem' }]
      },
      width: {
        'screen-xs': '32rem',
        'screen-sm': '40rem',
        'screen-md': '48rem'
      },
      height: {
        'screen-xs': '32rem',
        'screen-sm': '40rem',
        'screen-md': '48rem'
      }
    }
  },
  plugins: []
};
