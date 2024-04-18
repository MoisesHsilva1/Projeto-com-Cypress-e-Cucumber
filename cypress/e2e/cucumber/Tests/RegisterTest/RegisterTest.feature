Feature: Register how new user in 
Scenario: Fill in the fields on the registration form and log in as a new user of the website
   Given I visit website
   When I click on the first name field
   And I write my first name
   Then My first name will be in the field