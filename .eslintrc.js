const path = require('path');

module.exports = {
  root: true, // So parent files don't get applied
  globals: {
    preval: false, // Used in the documentation
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
<<<<<<< HEAD
  plugins: [
    'babel',
    'react',
    'mocha',
    "import",
    "flowtype"
  ],
||||||| merged common ancestors
  plugins: [
    'babel',
    'react',
    'mocha',
    'material-ui',
  ],
=======
  plugins: ['babel', 'mocha', 'material-ui'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './docs/webpackBaseConfig.js'),
      },
    },
  },
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
  rules: {
<<<<<<< HEAD
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': 'error',
    'indent': ['error', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'max-len': ['error', 120, 4],
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-spaced-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-semi': 'error',
    'no-extra-boolean-cast': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'yoda': 'error',
    'babel/object-curly-spacing': ['error', 'never'],
    'generator-star-spacing': 'error',
    'babel/no-await-in-loop': 'error',
    'flowtype/object-type-delimiter': 'error',
    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {maximum: 3}],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
||||||| merged common ancestors
    // Errors
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': 'error',
    'indent': ['error', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'max-len': ['error', 120, 4],
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-spaced-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-semi': 'error',
    'no-extra-boolean-cast': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'yoda': 'error',

    // Disabled
    'strict': 'off',
    'no-case-declarations': 'off',

    // Babel
    'babel/object-curly-spacing': ['error', 'never'],

    // React
    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {maximum: 3}],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
=======
    // It's buggy
    'react/jsx-curly-brace-presence': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off', // deprecated
    'linebreak-style': 'off', // Doesn't play nicely with Windows

    // Strict, airbnb is using warn
    'no-console': 'error',
    'no-alert': 'error',
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
    'react/no-danger': 'error',
<<<<<<< HEAD
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
||||||| merged common ancestors
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
=======
    'no-constant-condition': 'error',

    // Strict, airbnb is using off
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
    'react/no-direct-mutation-state': 'error',
<<<<<<< HEAD
    'react/no-multi-comp': 'off', // Wishlist, one day
    'react/no-render-return-value': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-arrow-callback': 'off', // Wishlist, one day
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'import/extensions': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
||||||| merged common ancestors
    'react/no-multi-comp': 'off', // Wishlist, one day
    'react/no-unknown-property': 'error',
    'react/no-is-mounted': 'error',
    'react/prefer-arrow-callback': 'off', // Wishlist, one day
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
=======
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
    'react/sort-prop-types': 'error',
<<<<<<< HEAD
||||||| merged common ancestors
    'react/wrap-multilines': 'error',
    'react/jsx-indent': ['error', 2],

    // React Disabled
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-set-state': 'off',

    // Material-UI
    'material-ui/docgen-ignore-before-comment': 'error',

=======

    // Airbnb use error
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-find-dom-node': 'off',

    'jsx-a11y/no-autofocus': 'off', // We are a library, people do what they want.
    'prefer-destructuring': 'off', // Destructuring harm grep potential.
    'consistent-this': ['error', 'self'],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ], // airbnb is allowing some edge cases
    'import/no-extraneous-dependencies': 'off', // It would be better to enable this rule.
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'material-ui/docgen-ignore-before-comment': 'error',
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-skipped-tests': 'error',
<<<<<<< HEAD

    'react/no-string-refs': 'warn', // Wishlist, one day.

    'strict': 'off',
    'no-case-declarations': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-set-state': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-optimization': 'off',
    'mocha/no-synchronous-tests': 'off',
    'mocha/valid-suite-description': 'off',
    'mocha/valid-test-description': 'off',
    'babel/object-shorthand': 'off',
    'babel/new-cap': 'off',
||||||| merged common ancestors
=======
    'mocha/no-top-level-hooks': 'error',
    'mocha/prefer-arrow-callback': 'error',
    'mocha/valid-suite-description': 'error',
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
  },
};
