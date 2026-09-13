/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Single source of truth for the brand gradient.
      // Reused for the brand name, hero highlight, and primary buttons —
      // change these three stops here and the whole UI re-themes.
      backgroundImage: {
        brand: 'linear-gradient(90deg, #FF7A32 0%, #FF2D9C 55%, #8B3DFF 100%)',
      },
      colors: {
        ink: '#0F1222',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}
