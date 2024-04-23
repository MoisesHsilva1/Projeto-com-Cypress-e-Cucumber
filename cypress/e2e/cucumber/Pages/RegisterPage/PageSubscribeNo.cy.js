class SubscribeNo {
    SelectNo () {
        cy.get('#input-newsletter-no').click({ force: true});
        return this;
    }
}
export default SubscribeNo;