import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("I visit website", () => {
       cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
});

When(" I click on the first name field", () => {
   cy.get('[name="firstname"]').eq(0).click
});

And('I write my first name', () => {
    cy.get('[name="firstname"]').type('usuario teste')
});

 Then("My first name will be in the field", () => {
    cy.get('input[name="firstname"]').should('have.value', 'usuario teste')
});