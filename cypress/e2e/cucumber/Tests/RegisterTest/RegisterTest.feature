Feature: Register names of user

Scenario: Writing in field of first name 
   Given The user this visit website in register page
   When I fill in my first name "pedro"
   And I fill in my last name "junior"
   Then I see my first name and last name filled in
   
   When The user selected field email
   And Fill your email "emailteste@gmail.com" in field
   Then See your email filled in