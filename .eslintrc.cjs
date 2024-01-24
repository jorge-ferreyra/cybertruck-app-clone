module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2],  // Establece el sangrado a 2 espacios
    'react/jsx-indent': ['error', 2],  // Sangrado para JSX
    'react/jsx-indent-props': ['error', 2],  // Sangrado para propiedades de JSX
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // Puedes agregar reglas específicas para archivos .js y .jsx aquí si es necesario
      },
    },
  ],
};
