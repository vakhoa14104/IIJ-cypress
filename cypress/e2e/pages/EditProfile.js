class LoginPageTenant{
    visit(){
        cy.visit('/provider/profile')
    }

    clickEditProfileButton(){
        //cy.get('button').contains('Edit Profile').should('be.visible').click()
        //cy.get('button.btn-edit.btn-primary').contains('Edit Profile').click();
        //cy.xpath("//button[contains(text(), 'Edit') and contains(@class, 'btn-edit')]").click();
        //EditButton.should('be.visible').click()
        const EditProfileButton = cy.get('button[class="btn btn-edit btn-primary ng-star-inserted"]')
        EditProfileButton.should('be.visible').click()
    }

    fillEmail(email){
        const emailField = cy.get('input[class="clr-input ng-untouched ng-pristine ng-valid"]')
        emailField.should('be.visible').clear().type(email)
    }

    verifyEmailfield(email){
        const emailField = cy.get('input[class="clr-input-wrapper"]')
        emailField.should('have.value', email)
    }

    clickEditPasswordButton(){
        const EditPasswordButton = cy.get('button[viewBox="0 0 36 36"]')
        EditPasswordButton.should('be.visible').click()
    }

    fillCurrentPassword(currentPassword){
        const currentPasswordField = cy.get('input[name="current_password"]')
        currentPasswordField.should('be.visible').clear().type(currentPassword)
    }

    fillPassword(password){
        const passwordField = cy.get('input[name="password"]')
        passwordField.should('be.visible').clear().type(password)
        const confirmPasswordField = cy.get('input[name="password_confirmation"]')
        confirmPasswordField.should('be.visible').clear().type(password)
    }

    clickSaveButton(){
        const saveButton = cy.get('button[class="btn btn-primary"]')
        saveButton.should('be.visible').click()
    }

    verifyEditProfileSuccess(){
        const successMessage = cy.get('div[class="modal-content ng-tns-c1772524388-1"]')
        successMessage.should('be.visible').contains('Confirmation')
        // const YesButton = cy.contains('button.btn.btn-primary', 'Yes')
        // YesButton.should('be.visible').click()
    }

    clickYesButton(){
        const YesButton = cy.contains('button.btn.btn-primary', 'Yes')
        YesButton.should('be.visible').click()
    }

    verifyEditProfileSuccessMessage(){
        const successMessage = cy.get('div[class="modal-content ng-tns-c1772524388-2"]')
        successMessage.should('be.visible').contains('Saved successfully.')
        // const OkButton = cy.get('button[class="btn btn-primary"]')
        // OkButton.should('be.visible').click()
    }

    clickOKbutton(){
        //cy.get('button.btn.btn-primary[type="button"]').contains('OK').click();

        const OkButton = cy.contains('button.btn.btn-primary', 'OK')
        OkButton.should('be.visible').click()
    }
}

export default new LoginPageTenant();