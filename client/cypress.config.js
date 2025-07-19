const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: {
        devServer: {
          headers: {
            'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' ws: wss:;"
          }
        }
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
