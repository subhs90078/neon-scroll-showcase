import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        neonBlue: '#1EAEDB',
        deepBlue: '#0A192F',
        lightBlue: '#33C3F0',
        background: '#0A192F',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'blue-gradient': 'linear-gradient(90deg, #1EAEDB 0%, #33C3F0 100%)',
        'purple-gradient': 'linear-gradient(90deg, #7928CA 0%, #FF0080 100%)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          'from': {
            textShadow: '0 0 10px #fff, 0 0 20px #1EAEDB, 0 0 30px #1EAEDB, 0 0 40px #1EAEDB'
          },
          'to': {
            textShadow: '0 0 20px #fff, 0 0 30px #33C3F0, 0 0 40px #33C3F0, 0 0 50px #33C3F0'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
