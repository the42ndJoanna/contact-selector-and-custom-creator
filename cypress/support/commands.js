// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.exec(
    "sf org open -p /lightning -r --json | sed 's/\\n/\\s/g' | sed -r 's/[[0-9]{1,3}m//g' | sed -r 's/[\x01-\x1F\x7F]//g'"
  ).then((response) => {
    const loginUrl = JSON.parse(response.stdout).result;
    cy.request(loginUrl);
    cy.log("login done");
  });
});

Cypress.Commands.add(
  "findWithShadow",
  { prevSubject: true },
  (subject, selector) => {
    return cy.wrap(subject).find(selector, { includeShadowDom: true });
  }
);
