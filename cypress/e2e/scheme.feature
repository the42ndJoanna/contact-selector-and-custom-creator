# cypress/e2e/scheme.feature
Feature: Contact Creator
  Scenario: Create a new contact
    Given I am on the Contact Creator Page
    When I click the first contact name tile
    Then display the contact detail in the right region

