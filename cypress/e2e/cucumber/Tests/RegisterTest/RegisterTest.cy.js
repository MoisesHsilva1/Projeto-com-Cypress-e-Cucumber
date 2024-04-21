import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import PageName from "../../Pages/RegisterPage/PageName.cy";
import PageEmail from "../../Pages/RegisterPage/PageEmail.cy";
import PageTelephone from "../../Pages/RegisterPage/PageTelephone.cy";

const pageName = new PageName();
const pageEmail = new PageEmail();
const pageTelephone = new PageTelephone();

Given('the user is on the registration page', () => {
    pageName.visit();
});

When('the user fills in their first name as {string}', (firstname) => {   
    pageName.fillfirstName(firstname);
}); 

And('the user fills in their last name as {string}', (lastname) => {
   pageName.filllastName(lastname);
});

And('the user fills in their email as {string}', (email) => {
    pageEmail.fillEmail(email);
})

And('the user fills in their telephone number as {string}', (telephone) => {
    pageTelephone.fillNumber(telephone);
})

Then ('the user should see their first name displayed', (firstname) => {
    pageName.visibleFirstName(firstname);
});

And ('the user should see their last name displayed', (lastname) => {
    pageName.visibleLastName(lastname);
});

And('the user should see their email displayed', (email) => {
    pageEmail.seeEmail(email);
})

And('the user should see their telephone number displayed', (telephone) => {
    pageTelephone.seeNumber(telephone);
})








