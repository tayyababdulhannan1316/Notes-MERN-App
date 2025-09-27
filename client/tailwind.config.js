import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
    daisyui: {
    themes: ["light", "dark", "cupcake", "forest", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula"],
  },
}