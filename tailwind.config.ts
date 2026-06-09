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
        // Palette: Vibrant Orange & Pure Black
        primary: {
          DEFAULT: "#FF4D00", // Orange dyal "Qwevo"
          light: "#FF7A00",
          dark: "#CC3D00",
        },
        secondary: {
          DEFAULT: "#FFB800", // Golden yellow bach n-zido l-vibe dyal Premium
        },
        background: "#000000", // Pure Black
        surface: "#0A0A0A",    // Card background
        text: {
          main: "#FFFFFF",
          muted: "#A1A1AA",
        }
      },
      backgroundImage: {
        'qwevo-glow': 'linear-gradient(90deg, #FF4D00, #FFB800)',
      }
    },
  },
  plugins: [],
};
export default config;
