/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#4A1518",
          dark: "#330F11",
          light: "#6B2124",
        },
        ink: "#1A1A1A",
        sand: "#F7F3ED",
        stone: "#8B8377",
        line: "#E4DED3",
      },
      fontFamily: {
        display: ["'Archivo Black'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        soft: "1.25rem",
        pill: "999px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-up-delay-1": "fadeUp 0.7s ease-out 0.15s both",
        "fade-up-delay-2": "fadeUp 0.7s ease-out 0.3s both",
        "fade-in": "fadeIn 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

