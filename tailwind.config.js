/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        'Sora, "Inter var", Roboto, sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        primary: "hsl(var(--color-primary))",
      },
      spacing: {
        "112": "28rem",
        "128": "32rem",
        "160": "40rem"
      }
    },
  },
  plugins: [],
};
