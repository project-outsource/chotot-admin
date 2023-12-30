/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
        sm: ['14px', '20px'],
        base: ['16px', '20px'],
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      flex: {
        full: '0 0 100%',
      },
      maxWidth: {
        sidebar: 'var(--sidebar-w)',
      },
      width: {
        sidebar: 'var(--sidebar-w)',
      },

      minHeight: {
        layout: 'calc(100vh - var(--header-h) - var(--footer-h))',
      },
      height: {
        header: 'var(--header-h)',
        footer: 'var(--footer-h)',
      },
      zIndex: {
        header: 999,
      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        main: {
          DEFAULT: '#133C65',
          '0': '#ECF0F4',
          '10': '#DBE4ED',
          '20': '#DBE4ED',
          '30': '#B4D2F0',
          '40': '#6391C0',
          '50': '#133C65',
          '60': '#0B233A',
          dark: {
            gray: {
              DEFAULT: '#464646',
              hovered: '#969B95',
            },
            blue: {
              DEFAULT: '#212121',
              hovered: '#6391C0',
              nav: '#B4D2F0',
              clicked: '#0B233A',
              disable: '#DBE4ED',
            },
          },
          terq: {
            DEFAULT: '#38CDC7',
            hovered: '#A9D4D3',
            nav: '#B4D2F0',
            clicked: '#116360',
            disable: '#DBEEED',
          },
          blue: {
            background: '#DBE4ED',
          },
          green: '#54CD40',
          yellow: '#FFC11A',
          red: '#FF3434',
          button: '#14AE5C',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        surface: 'hsl(var(--surface))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          light: 'hsl(var(--info-light))',
        },
        divider: 'hsl(var(--divider))',
        neutral: {
          '0': '#FFFFFF',
          '10': '#DADADA',
          '20': '#B5B5B5',
          '30': '#909090',
          '40': '#6B6B6B',
          '50': '#464646',
          '60': '#212121',
        },
        readonly: {
          DEFAULT: '#E6E6E6',
          border: '#B6B6B6',
        },
      },
      borderRadius: {
        '3xl': '36px',
        '2xl': '24px',
        xl: '16px',
        lg: '12px',
        md: '8px',
        sm: '4px',
        haft: '50%',
      },
      boxShadow: {
        active: '0 0 80px 0 rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'text-fade-in': {
          '0%': {
            transform: 'rotateX(180deg)',
            opacity: 0,
          },
          '35%': {
            transform: 'rotateX(120deg)',
            opacity: 0,
          },
          '65%': {
            opacity: 0,
          },
          '100%': {
            transform: 'rotateX(360deg)',
            opacity: 1,
          },
        },
        'text-fade-out': {
          '0%': {
            transform: 'rotateX(0deg)',
            opacity: 1,
          },
          '35%': {
            transform: 'rotateX(-40deg)',
            opacity: 1,
          },
          '65%': {
            opacity: 0,
          },
          '100%': {
            transform: 'rotateX(180deg)',
            opacity: 0,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'text-fade-out': 'text-fade-out 1.2s',
        'text-fade-in': 'text-fade-in 1.2s',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export {};
