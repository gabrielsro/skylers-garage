import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "side-nav": "auto minmax(0,1fr)",
        "car-cards-mobile": "repeat(auto-fill,minmax(150px,175px))",
        "recent-users-model-tempate": "57vw 43vw",
        "pagination-component": "50px auto 50px",
      },
      minHeight: { half: "50vh", lg: "30vh" },
      spacing: {
        "pic-sm": "50px",
        "pic-inter": "60px",
        "pic-md": "120px",
        "pic-xs": "30px",
        "cars-container": "530px",
        "car-card": "16rem",
        "select-filter-bar": "90px",
      },
    },
  },
  plugins: [require("tailwind-nord")],
};
export default config;
