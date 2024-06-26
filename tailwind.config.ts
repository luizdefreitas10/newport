import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // NEXTUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1920px",
        miniMobile: "470px",
        tinyMobile: "435px",
      },
    },
    fontFamily: {
      tacOne: ["Tac One", "sans-serif"],
      greatVibes: ["Great Vibes", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
