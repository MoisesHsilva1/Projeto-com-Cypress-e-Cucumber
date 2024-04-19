class RegisterPage {
    enterURL() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    }
 elements = {
    firstnameInput : () => cy.get('[name="firstname"]'),
    lastnameInput : () => cy.get('[name="lastname"]')
 }   
   enterfirstname(firstnameInput) {
    this.elements.lastnameInput().click();
    
   } 
}
const register = new RegisterPage();
export default register