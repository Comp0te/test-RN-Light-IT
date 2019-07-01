module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      arrowFunctions: true,
      classes: true,
      spread: true,
      blockBindings: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: false,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      superInFunctions: true,
      templateStrings: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [0],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": ["error", {
      "allowAfterThis": true,
      "allowAfterSuper": true 
    }],
    "class-methods-use-this": 0
  },
};
