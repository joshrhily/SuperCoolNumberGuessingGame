/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg) scale(1.25)' },
          '50%': { transform: 'rotate(1deg) scale(1.25)' },
        },
        shake: {
          '0%': { transform: 'translateX(-9px)' },
          '16%': { transform: 'translateX(9px)' },
          '32%': { transform: 'translateX(-6px)' },
          '48%': { transform: 'translateX(6px)' },
          '64%': { transform: 'translateX(-3px)' },
          '80%': { transform: 'translateX(3px)' },
        },
      },
      animation: {
        wiggle: 'wiggle .1s infinite',
        shake: 'shake .5s',
      },
    },
  },
  plugins: [],
};
