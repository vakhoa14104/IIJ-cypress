class LoginPageTenant{
    visit(){
        cy.visit('/provider')
    }

    fillusername(username){
        const usernameField = cy.get('input[placeholder="Username"]')
        usernameField.should('be.visible').clear().type(username)
    }
    
    fillpassword(password){
        const passwordField = cy.get('input[placeholder="Password"]')
        passwordField.should('be.visible').clear().type(password)
    }

    verifyLoginSuccess(){
        cy.visit('/provider/profile')
        cy.url().should("include", "/provider/profile");

    }
}

export default new LoginPageTenant();