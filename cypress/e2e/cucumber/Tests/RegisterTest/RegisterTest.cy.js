import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('I visit website', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
});

When(' I click on the first name field', () => {
   cy.get('[name="firstname"]').eq(0).click
});

And('I write my first name', () => {
    cy.get('[name="firstname"]').type('usuario teste')
    
});

And('I click on the last name field', () => {
    cy.get('#input-lastname').eq(0).click()
});

And('I write my last name', () => {
    cy.get('#input-lastname').type('sobrenome teste')
});

 Then('My first name and last name will be in the field', () => {
    cy.get('input[name="firstname"]').should('to.have.length', 1)
    cy.get('input[name="lastname"]').should('to.have.length', 1)
});



