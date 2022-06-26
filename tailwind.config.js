const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: require("./tailwind/colors"),
      spacing: px0_200,
      fontSize: px0_200,

      fontFamily: {
        digital: ["Digital"],
      },
    },
  },
  plugins: [],
};
