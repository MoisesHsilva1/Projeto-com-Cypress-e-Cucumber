Feature: User Registration

Scenario: Completing user registration
   Given the user is on the registration page
   When the user fills in their first name as "Pedro"
   And the user fills in their last name as "Junior"
   And the user fills in their email as "emailteste@gmail.com"
   And the user fills in their telephone number as "11234567891"
   And the user fills in their passaword as "12345678"
   And the user fills in their confirm passaword as "12345678"
   Then the user should see their first name displayed
   And the user should see their last name displayed
   And the user should see their email displayed
   And the user should see their telephone number displayed
   And the user should see their passaword displayed
   And the user should see their confirm passaword displayed