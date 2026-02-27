/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#111111",
        secondary: "#6B7280",
        subtle: "#F9FAFB",
        border: "#E5E7EB",
        "border-dark": "#374151",
      },
      fontSize: {
        "hero": ["52px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "section": ["38px", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        "feature": ["22px", { lineHeight: "1.4" }],
        "body": ["17px", { lineHeight: "1.65" }],
        "label": ["13px", { lineHeight: "1.4" }],
      },
      maxWidth: {
        "content": "1280px",
      },
      spacing: {
        "section": "120px",
        "section-lg": "160px",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
