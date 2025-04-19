
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
        background: '#080B14',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1EAEDB, 0 0 40px #1EAEDB'
          },
          'to': {
            textShadow: '0 0 20px #fff, 0 0 30px #33C3F0, 0 0 40px #33C3F0, 0 0 50px #33C3F0'
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
