Feature: Register user

Scenario: Writing in field of first name 
   Given I visit website
   When I fill in my first name "pedro"
   And I fill in my last name "junior"
   Then My first name "pedro" will be in the field

