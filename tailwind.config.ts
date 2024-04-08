import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFFFFF",
      brown: {
        10: "#FFFBEB",
        20: "#FEF3C7",
        90: "#78350F",
      },
      dark: {
        50: "#334155",
        90: "#0F172A",
      },
      yellow: {
        50: "#FDE68A",
        90: "#FBBF24",
      },
      gray: {
        30: "#E2E8F0",
        90: "#475569",
      },
      green: {
        80: "#15803D",
      },
      purple: {
        50: "#A21CAF",
        90: "#BE185D",
      },
      blue: {
        50: "#0369A1",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addComponents }) {
      addVariant("child", "&>*");
      addVariant("child-child", "&>*>*");
      addComponents({
        ".button-opacity-effect": {
          cursor: "pointer",
          "&:hover": {
            opacity: "60%",
          },
          "&:active": {
            opacity: "80%",
          },
        },
        ".product-card": {
          "box-shadow": "0px 0px 15px 0px #FFFFFF12, 0px 25px 50px -12px #FFFFFF40",
          "border-radius": "10px",
        },
        ".product-card-image": {
          "border-radius": "10px 10px 0 0",
          "object-fit": "cover",
          width: "100%",
          height: "220px",
        },
        ".py-18": {
          paddingBottom: "72px",
          paddingTop: "72px",
        },
        ".step3-container": {
          "box-shadow": " 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
          "background-color": "white",
          "border-radius": "30px",
        },
        ".comment-card-container": {
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-between",
          "box-shadow": " 0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A",
          width: "24rem",
          height: "26.875rem",
          "background-color": "white",
          "border-radius": "20px",
          padding: "32px",
        },
        ".scroll-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".section-selected": {
          "box-shadow": " 0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A",
          "border-radius": "8px"
        },
        ".w-full-p-20": {
          width: "calc(100vw - 160px)"
        }
      });
    }),
  ],
};
export default config;
