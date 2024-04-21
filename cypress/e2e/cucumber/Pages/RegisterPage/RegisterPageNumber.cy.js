class RegisterPageTelephone {
    fillNumber(telephone) {
        cy.get('[name="telephone"]').type(telephone);
        return this;
    }
    seeNumber(telephone) {
        cy.get('[name="telephone"]').should('be.visible');
        return this;
    }
}
export default RegisterPageTelephone;