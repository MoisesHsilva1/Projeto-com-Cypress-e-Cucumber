import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RegisterPage from "../../Pages/RegisterPage/RegisterPage.cy";

const registerPage = new RegisterPage();

Given('The user this visit website in Register page', () => {
    registerPage.visit();
});

Then('I fill in my first name {string}', (firstname) => {   
    registerPage.fillfirstName(firstname);
}); 

And('I fill in my last name {string}', (lastname) => {
   registerPage.filllastName(lastname);
})

Then ('I see my first name and last name filled in', (firstname, lastname) => {
        registerPage.visibleFirstName(firstname);
        registerPage.visibleLastName(lastname);
})