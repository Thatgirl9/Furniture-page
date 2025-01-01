import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          0: "#fff",
          1: "#F4F5F7",
          2: "#E97171",
          3: "#2EC1AC",
          4: "#D8D8D8",
        },
        primaryBrown: {
          0: "#B88E2F",
          1: "#FFF3E3",
          2: "#FCF8F3",
          3: "#FAF3EA",
          4: "#F9F1E7",
        },
        primaryText: {
          0: "#000",
          1: "#242424",
          2: "#333333",
          3: "#666666",
          4: "#3A3A3A",
          5: "#898989",
          6: "#B0B0B0",
          7: "#616161",
          8: "#C4C4C4",
          9: "#9F9F9F",
          10: "#D9D9D9",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
