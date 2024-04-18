Feature: Register how new user in website of E-commerce

Scenario: Writing in the name field
   Given I visit website
   When I click on the first name field
   And I write my first name
   Then My first name will be in the field

Scenario: Writing in the last name in field
   Given I visit web site and already write my first name now, I will type my last name
   When I click on the last name field
   And I write my last name
   Then My last name will be in the field