module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <- Esta línea es muy importante que diga "src"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};