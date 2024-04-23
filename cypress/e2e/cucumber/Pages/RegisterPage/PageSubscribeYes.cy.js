class SubcribeYES {
    SelectYes() {   
        cy.get('#input-newsletter-yes').click({ force: true});
        return this;
    }
}
export default SubcribeYES;