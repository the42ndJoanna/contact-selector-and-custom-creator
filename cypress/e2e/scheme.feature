# cypress/e2e/scheme.feature
Feature: Contact Selector
  Scenario: Select a contact and display contact detail
    Given I am on the Contact Selector Page
    When I click the first contact name tile
    Then display the contact detail in the right region

