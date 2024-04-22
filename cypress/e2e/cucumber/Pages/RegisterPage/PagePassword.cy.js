class PagePassword {
    FillPassword(password) {
        cy.get('[name="password"]').type(password);
        return this;
    } 
    SeePassword(passaword) {
        cy.get('[name="password"]').should('be.visible');
        return this;
    }
    ConfirmPassword(confirm) {
        cy.get('[name="confirm"]').type(confirm);
        return this; 
    }
    SeeConfirmPassword(confirm) {
        cy.get('[name="confirm"]').should('be.visible');
        return this;
    }
}
export default PagePassword;