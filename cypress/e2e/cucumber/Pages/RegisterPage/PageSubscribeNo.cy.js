class SubscribeNo {
    SelectNo () {
        cy.get('#input-newsletter-no').click({ force: true});
        return this;
    }
    VisibleSelectNO() {
        cy.get('#i#input-newsletter-no').should('be.visible')        
    }
}
export default SubscribeNo;