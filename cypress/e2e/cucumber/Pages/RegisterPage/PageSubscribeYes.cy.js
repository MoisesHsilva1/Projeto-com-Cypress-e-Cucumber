class SubscribeYES {
    SelectYes() {   
        cy.get('#input-newsletter-yes').click({ force: true});
        return this;
    }
}
export default SubscribeYES;