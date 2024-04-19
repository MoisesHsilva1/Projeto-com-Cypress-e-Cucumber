/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import register from "../../Pages/RegisterPage/RegisterPage.cy";
Given('I visit website', () => {
    register.enterURL()
});

When(' I click on the first name field', () => {

        register.ClickField()
    });


And('I write my first name', () => {
   
    
});

And('I click on the last name field', () => {
    
});

And('I write my last name', () => {
    
});

 Then('My first name and last name will be in the field', () => {
    
});



