import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#451a03",
        secondary: "#b45309",
        accent: "#ffedd5",
        background: "#fdf8f6",
        foreground: "#292524",
      },
    },
  },
  plugins: [],
};

export default config;
