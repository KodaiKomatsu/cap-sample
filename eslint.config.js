const cds = require('@sap/eslint-plugin-cds')

module.exports = [
  cds.configs.recommended,
  {
    plugins: {
      '@sap/cds': cds
    },
    rules: {
      // ...cds.configs.recommended.rules,
      "@sap/cds/auth-restrict-grant-service": ["error","show"],
      "@sap/cds/start-entities-uppercase": "warn",
      "@sap/cds/valid-csv-header": ["warn", "show"]
    }
  }
]
