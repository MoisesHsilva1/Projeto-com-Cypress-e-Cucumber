import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import PageName from "../../Pages/RegisterPage/PageName.cy";
import PageEmail from "../../Pages/RegisterPage/PageEmail.cy";
import PageTelephone from "../../Pages/RegisterPage/PageTelephone.cy";
import PagePassword from "../../Pages/RegisterPage/PagePassword.cy";
import SubscribeYES from "../../Pages/RegisterPage/PageSubscribeYes.cy";
import SubscribeNo from "../../Pages/RegisterPage/PageSubscribeNo.cy";
import CheckPrivacyPolicy from "../../Pages/RegisterPage/PageCheckPolicy.cy";

const pageName = new PageName();
const pageEmail = new PageEmail();
const pageTelephone = new PageTelephone();
const pagepassword = new PagePassword();
const pageSubscribeYes = new SubscribeYES();
const pageSubscribeNo = new SubscribeNo();
const checkPrivacyPolicy = new CheckPrivacyPolicy();

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

And('the user fills in their passaword as {string}', (password) => {
    pagepassword.FillPassword(password);
})

And ('the user fills in their confirm passaword as {string}', (confirm) => {
    pagepassword.ConfirmPassword(confirm);
})

And('the user select Newsletter how yes and see their displayed', () => {
    pageSubscribeYes.SelectYes();
})

And('the user select Newsletter how no and see their displayed', () => {
    pageSubscribeNo.SelectNo()
})

And('the user check in field of accept privacy policy ', () => {
    checkPrivacyPolicy.CheckYesPrivacyPolicy()
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

And('the user should see their pa   ssaword displayed', (password) => { 
    pagepassword.SeePassword(password);
})

And('the user should see their confirm passaword displayed', (confirm) => {
    pagepassword.SeeConfirmPassword(confirm);
})










