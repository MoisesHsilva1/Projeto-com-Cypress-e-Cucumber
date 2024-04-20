Feature: Register user

Scenario: Writing in field of first name 
   Given I visit website
   When I fill in my first name "pedro"
   And I fill in my last name "junior"
   Then I see my first name and last name filled in

