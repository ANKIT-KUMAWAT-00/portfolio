import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0806",
        surface: {
          dark: "#17100C",
          deep: "#24160F",
          card: "rgba(23, 16, 12, 0.75)",
          cardBorder: "rgba(184, 138, 86, 0.22)",
        },
        gold: {
          antique: "#B88A56",
          champagne: "#D9B783",
          light: "#F5E6CA",
          glow: "rgba(217, 183, 131, 0.4)",
        },
        warm: {
          white: "#F2E8D8",
          muted: "#B6A797",
          subtle: "#7E6E5F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F2E8D8 0%, #D9B783 50%, #B88A56 100%)",
        "gold-radial": "radial-gradient(circle at center, rgba(217, 183, 131, 0.18) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(36, 22, 15, 0.6) 0%, rgba(23, 16, 12, 0.8) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
