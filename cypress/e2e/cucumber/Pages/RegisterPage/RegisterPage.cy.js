class RegisterPage {
    visit() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    }
    fillfirstName(firstname) {
        cy.get('[name="firstname"]').type(firstname)
        return this;
    }
    filllastName(lastname) {
        cy.get('[name="lastname"]').type(lastname)
        return this;
    }
}
export default RegisterPage;