@welcome @smoke @regression
Feature: Revance Welcome Page

  Scenario: User visits the welcome page and verifies UI elements
    Given I am on the Revance Welcome page
    Then the main heading should be "Love your look (and more)"
    And the Contact Us link should be visible
