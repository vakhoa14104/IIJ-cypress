import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the user list page", () => {
    CreateUser.visit();
  });

When("I click on create user button", () => {
    CreateUser.clickCreateUserButton();
  
});

When("I see form Add User displayed", () => {
    cy.get('form[aria-label="Add User"]').should('be.visible');
    CreateUser.fillForm({
        firstName: "IIJ 01",
        lastName: "Tester 01",
        username: "iij1_user01",
        email: "khoa.vo@ap.iij.com",
        passwordtype: "Set Password now",
        password: "Passw0rd!123",
        confirmPassword: "Passw0rd!123",
        portalrole: "User",
        phone: "0901234567",
      })
});

When("I expand vCD role region", () => {
    CreateUser.expandVcdRoleRegion();
});

And ("I select vCD role {string}", (role) => {
    CreateUser.selectVcdRoleRadioButton(role);
});

    
  When("I click on next button", () => {
      CreateUser.clickNextButton();
  });
  
  When("I click on save button", () => {
      CreateUser.clickSaveButton();
  });
  
  Then("I should see the user created successfully", () => {
      cy.get('div[class="Toastify__toast-body"]').should('be.visible').contains('User created successfully')
  }); 