module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    extend: {
      margin: {
        7: "1.75rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    extend: {},
  },
  plugins: [],
};
