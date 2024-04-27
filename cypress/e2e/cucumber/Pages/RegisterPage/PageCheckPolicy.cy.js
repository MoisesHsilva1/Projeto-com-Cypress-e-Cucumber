class CheckPrivacyPolicy {
    CheckYesPrivacyPolicy () {
        cy.get('agree').click({force: true})
        return this;
    } 
}
export default CheckPrivacyPolicy;