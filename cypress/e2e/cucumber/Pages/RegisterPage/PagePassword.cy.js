class PagePassword {
    FillPassword(password) {
        cy.get('[name="password"]').type(password);
        return this;
    }
}
export default PagePassword;