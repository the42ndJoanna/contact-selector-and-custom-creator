import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({ // set up Node.js events for Cypress, here we add preprocessor plugins to Cypress and then return the configuration object
  e2e: {
    specPattern: "**/*.feature", // specify the pattern of test files to execute
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config); // preprocess Cucumber test files

      on("file:preprocessor", createBundler({ // preprocess JavaScript files
        plugins: [createEsbuildPlugin(config)] 
      }));

      return config;
    },
  },
});
