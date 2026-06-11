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
        primary: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          dark: "#0EA5E9",
        },
        secondary: {
          DEFAULT: "#F8C35B",
        },
        background: "#05070B",
        surface: "#0E131B",
        text: {
          main: "#F8FAFC",
          muted: "#94A3B8",
        }
      },
      backgroundImage: {
        'qwevo-glow': 'linear-gradient(90deg, #38BDF8, #F8C35B)',
      }
    },
  },
  plugins: [],
};
export default config;
