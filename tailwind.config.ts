import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#100F0E",
        "dark-2": "#29221F",
        "light-1": "#E4E4E4",
        "light-2": "#A9A9A8",
        "yellow-1": "#F1DD87",
        "yellow-2": "#7E734A"
      },
      screens: {
        xs: "480px",
        sm: "580px",
        md: "768px",
        lg: "1024px"
      }
    }
  },
  plugins: []
};
export default config;
