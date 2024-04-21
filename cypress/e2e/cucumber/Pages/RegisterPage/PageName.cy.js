class PageName {
    visit() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    }
    fillfirstName(firstname) {
        cy.get('[name="firstname"]').type(firstname);
        return this;
    }
    filllastName(lastname) {
        cy.get('[name="lastname"]').type(lastname);
        return this;
    }
    visibleFirstName(firstname) {
        cy.get('[name="firstname"]').should('be.visible');
        return this;
    }
    visibleLastName(lastname) {
        cy.get('[name="lastname"]').should('be.visible');
        return this;
    }
}
export default PageName;