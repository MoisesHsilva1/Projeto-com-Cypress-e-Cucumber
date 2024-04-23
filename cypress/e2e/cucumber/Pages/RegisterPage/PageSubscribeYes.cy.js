class SubscribeYES {
    SelectYes() {   
        cy.get('#input-newsletter-yes').click({ force: true});
        return this;
    }
    VisibleSelectYes() {
        cy.get('#input-newsletter-yes').should('be.visible')
    }
}
export default SubscribeYES;