import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import SchemePage from '../../pages/SchemePage';

const schemePage = new SchemePage();

Before(() => {
  cy.login();
});

Given('I am on the Contact Creator Page', () => {
  schemePage.visitScheme();
  schemePage.verifyScheme();
});

