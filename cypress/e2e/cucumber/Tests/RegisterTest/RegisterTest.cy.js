import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegisterPageName from "../../Pages/RegisterPage/RegisterPageName.cy";

const registerPageName = new RegisterPageName();

Given('The user this visit website in register page', () => {
    registerPageName.visit();
});

Then('I fill in my first name {string}', (firstname) => {   
    registerPageName.fillfirstName(firstname);
}); 

And('I fill in my last name {string}', (lastname) => {
   registerPageName.filllastName(lastname);
})

Then ('I see my first name and last name filled in', (firstname, lastname) => {
        registerPageName.visibleFirstName(firstname);
        registerPageName.visibleLastName(lastname);
})


