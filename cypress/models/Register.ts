export class Register {
    visit() {
        return cy.visit(`${Cypress.config("baseUrl")}`);
    }
    get dashboardContainer(){
        return cy.get('#content > .ast-container');
    }
    get userName() {
        return cy.get('#user_login');
    }
    get eMail() {
        return cy.get('#user_email')
    }
    get password() {
        return cy.get('#user_pass')
    }
    get confirmPassword() {
        return cy.get('#user_confirm_password');
    }
    get submitBtn() {
        return cy.get('.btn');
    }
    get messageNote(){
        return cy.get('#ur-submit-message-node');
    }

}