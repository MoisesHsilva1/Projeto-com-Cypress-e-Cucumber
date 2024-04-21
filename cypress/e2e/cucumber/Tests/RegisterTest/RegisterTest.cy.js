import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import PageName from "../../Pages/RegisterPage/PageName.cy";
import PageEmail from "../../Pages/RegisterPage/PageEmail.cy";
import PageTelephone from "../../Pages/RegisterPage/PageTelephone.cy";

const pageName = new PageName();
const pageEmail = new PageEmail();
const pageTelephone = new PageTelephone();

Given('The user this visit website in register page', () => {
    pageName.visit();
});

Then('I fill in my first name {string}', (firstname) => {   
    pageName.fillfirstName(firstname);
}); 

Then ('I see my first name and last name filled in', (firstname, lastname) => {
    pageName.visibleFirstName(firstname);
    pageName.visibleLastName(lastname);
})

And('I fill in my last name {string}', (lastname) => {
   pageName.filllastName(lastname);
})

When('I fill in my email {string} in field', (email) => {
    pageEmail.fillEmail(email);
})

Then('I See my email filled in', (email) => {
    pageEmail.seeEmail(email);
})

When('Fill your telephone {string} in field', (telephone) => {
    pageTelephone.fillNumber(telephone);
})

Then('See your telephone in', (telephone) => {
    pageTelephone.seeNumber(telephone);
})







