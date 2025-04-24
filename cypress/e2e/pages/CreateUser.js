class CreateUser{
    visit(){
        cy.visit('/tenant/IAM-IIJ-1/user')
    }

    clickCreateUserButton(){
        const createUserButton = cy.get('button[aria-label="Create User"]')
        createUserButton.should('be.visible').click()
    }

    fillForm(user){
        cy.get('input[name="firstName"]').type(user.firstName)
        cy.get('input[name="lastName"]').type(user.lastName)
        cy.get('input[name="username"]').type(user.username)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="passwordtype"]').type(user.password).check()
        cy.get('input[name="password"]').type(user.password)
        cy.get('input[name="confirmPassword"]').type(user.confirmPassword)
        cy.get('input[name="portalrole"]').select(user.address)
        cy.get('input[name="phone"]').type(user.phone)
        //cy.contains('div', 'vCD role').click()
        //cy.contains('label', role).find('input[type="radio"]').check({ force: true }).select(user.role)
    }

    expandVcdRoleRegion() {
        cy.contains('div', 'vCD role').click();
      }
      
    selectVcdRoleRadioButton(role) {
        cy.contains('label', role).find('input[type="radio"]').check({ force: true });
      }
      

    clickNextButton(){
        const nextButton = cy.get('button[type="submit"]')
        nextButton.should('be.visible').click()
    }

    clickSaveButton(){
        const saveButton = cy.get('button[type="submit"]')
        saveButton.should('be.visible').click()
    }

}