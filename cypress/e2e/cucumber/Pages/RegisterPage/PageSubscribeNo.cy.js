class SubscribeNo {
    SelectNo () {
        cy.get('#input-newsletter-no').click({ force: true}).should('have.focus');
        return this;
    }
}
export default SubscribeNo;