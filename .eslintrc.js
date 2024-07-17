module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir : __dirname, 
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin',"unused-imports"],
    extends: [
        'plugin:@typescript-eslint/recommended',
     ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'unused-imports/no-unused-imports': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',

        // '@typescript-eslint/interface-name-prefix': 'off',
         '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
        ],



        // 'eslint no-multiple-empty-lines': 'error'
        /***New Rules Active*/
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        /***New turned off rules */
        'prefer-const': 'off',
        '@typescript-eslint/consistent-generic-constructors': 'warn', 
        '@typescript-eslint/consistent-type-definitions': 'warn',
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-confusing-void-expression': 'warn',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',

        "arrow-body-style": ["off", "always"],
        "block-scoped-var": "off",
        "default-case-last": "off",
        "default-param-last": "off",
        // "id-length": [2, { "min": 2, "max": 20, "properties": "always", "exceptions": ["i", "j", "k", "x", "y", "a", "id", "_id"] }],
        "max-classes-per-file": ["off", 1],
        // "max-lines-per-function": ["off", 10],
        "max-params": ["off", 5],
        // "max-statements": ["off", 10],
        // "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-extra-semi": "off",
        "no-floating-decimal": "off",
        "no-implied-eval": "off",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-object": "off",
        "no-param-reassign": "off",
        // "no-return-await": "off",
        "no-useless-concat": "off",
        "no-useless-return": "off",
        "prefer-const": "off",
        "prefer-template": "off",
        "yoda": "off",
    },
};