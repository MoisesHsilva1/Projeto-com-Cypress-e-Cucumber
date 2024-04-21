import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegisterPageName from "../../Pages/RegisterPage/RegisterPageName.cy";
import RegisterPageEmail from "../../Pages/RegisterPage/RegisterPageEmail.cy";
import RegisterPageTelephone from "../../Pages/RegisterPage/RegisterPageNumber.cy";

const registerPageName = new RegisterPageName();
const registerPageEmail = new RegisterPageEmail();
const registerPageTelephone = new RegisterPageTelephone();

Given('The user this visit website in register page', () => {
    registerPageName.visit();
});

Then('I fill in my first name {string}', (firstname) => {   
    registerPageName.fillfirstName(firstname);
}); 

Then ('I see my first name and last name filled in', (firstname, lastname) => {
        registerPageName.visibleFirstName(firstname);
        registerPageName.visibleLastName(lastname);
})

And('I fill in my last name {string}', (lastname) => {
   registerPageName.filllastName(lastname);
})

When('I fill in my email {string} in field', (email) => {
    registerPageEmail.fillEmail(email);
})

Then('See your email filled in', (email) => {
    registerPageEmail.seeEmail(email);
})

When('Fill your telephone {string} in field', (telephone) => {
    registerPageTelephone.fillNumber(telephone);
})

Then('See your telephone in', (telephone) => {
    registerPageTelephone.seeNumber(telephone);
})







