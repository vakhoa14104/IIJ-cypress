class LoginPageTenant{
    visit(){
        cy.visit('/tenant')
    }

    filltenantname(tenantName){
        const tenantField = cy.get('input[placeholder="Use your organization name to continue"]')
        tenantField.should('be.visible').focus().clear().type(tenantName)
    }

    clickNextButton(){
        const nextButton = cy.get('button[type="submit"]')
        nextButton.should('be.visible').click()
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
        cy.visit('/tenant/IAM-IIJ-1/profile')
        cy.url().should("include", "/tenant/IAM-IIJ-1/profile");

    }
}

export default new LoginPageTenant();