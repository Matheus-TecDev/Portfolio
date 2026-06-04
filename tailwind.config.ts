import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        graphite: {
          950: "#05070a",
          900: "#080b10",
          850: "#0c1118",
          800: "#111823",
          700: "#1c2635",
        },
        tech: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        "blue-soft": "0 0 42px rgba(56, 189, 248, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
