import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary:"#1a233b",
        secondary:"#272e48",
        icon:'#475c8d',
      
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
