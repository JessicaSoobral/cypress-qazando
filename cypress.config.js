const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vzff9o',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    baseUrl:'https://automationpratice.com.br/', 
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
});
