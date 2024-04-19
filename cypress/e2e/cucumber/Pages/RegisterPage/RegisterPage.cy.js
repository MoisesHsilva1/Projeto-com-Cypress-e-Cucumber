class RegisterPage {
    enterURL() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    }

    enterNameUser(FirstName, LastName) {
        
        cy.get('[name="firstname"]').type('Usuario teste');
        
        
        return this;
   }
   ClickField() {
     cy.get('[name="firstname"]').eq(0).click();
     
    return this;
   }
}
const register = new RegisterPage();
export default register