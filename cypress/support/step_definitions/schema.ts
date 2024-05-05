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

When("I click the first contact name tile", () => {
  schemePage.clickFirstTile();
});

Then("display the contact detail in the right region", () => {
  schemePage.verifyContactDetail();
});

