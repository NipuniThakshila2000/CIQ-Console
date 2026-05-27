/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#111820",
        panel: "#182431",
        "panel-soft": "#203244",
        elevated: "#24384A",
        "border-soft": "#31465A",
        "border-strong": "#496274",
        "text-primary": "#E6EEF5",
        "text-secondary": "#AAB7C4",
        "text-muted": "#6F7F8F",
        ciq: {
          green: "#18A76B",
          cyan: "#36A9E1",
          blue: "#2F80ED",
          amber: "#D79B32",
          red: "#D94C4C",
          purple: "#8E6AD8"
        }
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
};
