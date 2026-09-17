import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7F5",
        panel: "#FFFFFF",
        "panel-2": "#FAFAF8",
        "footer-bg": "#F2F2EF",
        ink: "#16181C",
        body: "#2B3038",
        muted: "#5B6068",
        dim: "#8A9099",
        line: "#E2E2DD",
        "line-soft": "#EFEFEA",
        navy: "#0E2247",
        "navy-deep": "#0A1A38",
        "navy-line": "#24406E",
        "navy-soft": "#C3CEE4",
        "navy-accent": "#7FA0E8",
        blue: "#1B4DE4",
        "blue-soft": "#C9D4F2",
        "blue-bg": "#F4F6FD",
        amber: "#C2681C",
        "amber-bg": "#FBF6F0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
