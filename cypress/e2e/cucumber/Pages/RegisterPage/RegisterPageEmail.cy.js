class RegisterPageEmail {
    fillEmail(email) {
        cy.get('[name="email"]').type(email);
        return this;
    }
    seeEmail(email) {
        cy.get('[name="email"]').should('be.visible');
        return this;
    }
}
export default RegisterPageEmail;