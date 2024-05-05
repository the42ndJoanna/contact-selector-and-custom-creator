export default class SchemePage {
  path = Cypress.env("baseUrl") + "/lightning/n/Contact_Selector";

  visitScheme() {
    cy.visit(this.path, { timeout: 600000 });
  }

  verifyScheme() {
    cy.get("app_flexipage-lwc-app-flexipage")
      .findWithShadow("c-selector")
      .then((el) => {
        return cy.wrap(el);
      })
      .should("be.visible")
      .as("selector");

    cy.get("@selector").findWithShadow("c-list").should("be.visible");

    cy.get("@selector")
      .findWithShadow("c-detail div")
      .should("contain.text", "Please select a contact");
  }

  clickFirstTile() {
    cy.get("@selector").findWithShadow("c-list c-tile:first-of-type a").click();
  }

  verifyContactDetail() {
    cy.get("@selector")
      .findWithShadow("c-detail div div")
      .should("contain.text", "Rose Gonzalez");

    cy.get("@selector")
      .findWithShadow("c-detail div c-custom-badge")
      .should("have.length", 3);
  }
}
