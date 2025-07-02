/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // For App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router (if any)
    "./components/**/*.{js,ts,jsx,tsx}", // If you have components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
