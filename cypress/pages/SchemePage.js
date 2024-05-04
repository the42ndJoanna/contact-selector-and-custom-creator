export default class SchemePage {
  path = Cypress.env("baseUrl") + "/lightning/n/Contact_Creator";
  schemeName = "c-contact-creator-with-form";

  visitScheme() {
    cy.visit(this.path, { timeout: 600000 });
  }

  verifyScheme() {
    cy.get("app_flexipage-lwc-app-flexipage")
      .find(this.schemeName, { includeShadowDom: true, timeout: 20000 })
      .then((el) => {
        return cy.wrap(el);
      })
      .should("be.visible")
      .as("scheme");

    cy.get("@scheme")
      .find("lightning-record-edit-form", { includeShadowDom: true })
      .as("editForm");
  }
}
