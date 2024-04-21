Feature: Register names of user

Scenario: Make register complete of user
   Given The user this visit website in register page
   When I fill in my first name "pedro"
   And I fill in my last name "junior"
   Then I see my first name and last name filled in

   When I fill in my email "emailteste@gmail.com" in field
   Then See your email filled in

   When Fill your telephone "11234567891" in field
   Then See your telephone in
