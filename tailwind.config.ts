import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: {50:"#F8FAF7",100:"#EEF4EC",200:"#DFE9DB",300:"#C7D7BF",400:"#A8C19C",500:"#7FA071",600:"#5E7E52",700:"#4A6341",800:"#384B31",900:"#2E3B2B"},
        gold: {400:"#C5A572",500:"#B79255"}
      }
    }
  },
  plugins: []
};
export default config;
