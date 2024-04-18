Feature: Register how new user in website of E-commerce

Scenario: Writing in field of first name and last name
   Given I visit website
   When I click on the first name field
   And I write my first name
   And I click on the last name field
   And I write my last name
   Then My first name and last name will be in the field

