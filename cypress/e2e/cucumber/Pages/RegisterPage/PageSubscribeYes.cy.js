class SubscribeYES {
    SelectYes() {   
        cy.get('#input-newsletter-yes').click({ force: true}).should('have.focus');
        return this;
    }
}
export default SubscribeYES;