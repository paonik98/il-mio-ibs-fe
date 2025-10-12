/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 👈 controllata da una classe (es. <html class="dark">)
  theme: {
    extend: {
      colors: {
        // Definisci colori tramite variabili CSS
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
