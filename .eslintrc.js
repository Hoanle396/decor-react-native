module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        endOfLine: 'lf',
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'no-console': 'warn',
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
