module.exports = {
  "extends": [
    "airbnb",
    "xo",
    "prettier"
  ],

  "plugins": ["prettier", "jest", "import", "eslint-plugin-jsdoc"],

  "env": {
    "mocha": true
  },

  "rules": {
    /* airbnb */

    // Need to name function for some stringification
    "func-names": 0,
    "capitalized-comments": 0,
    "import/no-unresolved": [2, { "ignore": [".css$"] }],
    "import/no-duplicates": 0,
    "consistent-return": 0,
    // We have some complicated functions
    "complexity": ["error", { "max": 30 }],
    // JSDoc comments are used for react docgen so they don"t have to be valid
    "valid-jsdoc": 0,
    // DEPRECATED
    "jsx-a11y/label-has-for": 0,
    // use this instead
    "jsx-a11y/label-has-associated-control": 2,
    // Some of our components have a role prop
    "jsx-a11y/aria-role": [
      2,
      {
        "ignoreNonDOM": true
      }
    ],
    // Sometimes it makes sense not to
    "import/prefer-default-export": 0,
    // plugins generally do not use this
    "class-methods-use-this": 0,
    // Very common and we like to use it
    "no-plusplus": 0,

    "jsdoc/check-alignment": 1,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/implements-on-classes": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-types": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-returns-check": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-hyphen-before-param-description": [1, "always"],
    "jsdoc/require-jsdoc": [
      2,
      {
        "require": {
          "ArrowFunctionExpression": true,
          "FunctionDeclaration": true,
          "ClassDeclaration": true
        }
      }
    ]
  },

  "overrides": [
    {
      "files": [
        "*.proof.*",
        "*.test.*",
        "*.stories.*",
        "theme.*",
        "*.config.*",
        "*.d.ts",
        "*.snippet.*"
      ],
      "rules": {
        "jsdoc/require-jsdoc": 0,
        // devDependencies are all in the root
        "import/no-extraneous-dependencies": 0
      }
    }
  ]
}