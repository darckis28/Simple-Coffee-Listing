/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1D1F",
        container: "#111315",
        active: "#6F757C",
        price: "#BEE3CC",
        text: "#FEF7EE",
        "text-out": "#ED735D",
        popular: "#F6C768",
      },
    },
  },
  plugins: [],
};
