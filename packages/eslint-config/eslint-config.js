module.exports = {
  extends: ["prettier"],
  parser: "@babel/eslint-parser",
  plugins: ["react-native", "prettier"],
  rules: {
    "react-native/no-color-literals": 1,
    "react-native/no-unused-styles": 1,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
