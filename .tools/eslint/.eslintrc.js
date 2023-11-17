module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['standard', '@html-eslint', 'prettier'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            rules: {
                '@html-eslint/require-title': 0,
                '@html-eslint/require-lang': 0,
                '@html-eslint/no-extra-spacing-attrs': 0,
                '@html-eslint/require-closing-tags': 0,
            },
        },
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2024,
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'consistent-return': 2,
        indent: ['error', 4], // space indentation
        'no-else-return': 1,
        'prettier/prettier': [
            'error',
            {
                'printWidth': 100,
                'singleQuote': true,
                'trailingComma': 'es5',
                'tabWidth': 4,
                'semi': true,
            }
        ],
    },
    ignorePatterns: ['dist/**/*', 'node_modules/**/*', 'public/**/*']
};