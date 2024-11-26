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
        background: "var(--background), #fff, #F4F5F7, #E97171, #2EC1AC, #D8D8D8, ",
        foreground: "var(--foreground)",
        primaryBrown: '#B88E2F, #FFF3E3, #FCF8F3, #FAF3EA, #F9F1E7,  ',
        primaryText: '#000, #242424, #333333,  #666666, #3A3A3A, #898989, #B0B0B0, #616161, #C4C4C4, #9F9F9F, #D9D9D9 ',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
