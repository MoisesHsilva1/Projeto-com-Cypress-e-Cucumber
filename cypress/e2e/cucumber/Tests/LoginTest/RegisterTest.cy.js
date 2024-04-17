/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("I am in page resgister ", () => {
    cy.visit('https://phptravels.org/register.php')
});

When(" I click on the first name field", () => {
    cy.get('[name="firstname"]').click()
});


Then(" I write my first name", () => {
    cy.get('[name="firstname"]').type('usuario teste')
});