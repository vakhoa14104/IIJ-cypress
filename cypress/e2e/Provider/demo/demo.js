import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginProvider from "../../pages/LoginProvider";
import EditProfile from "../../pages/EditProfile";

Given("I open the login page", () => {
  //cy.visit("/provider");
  LoginProvider.visit();
});

When("I enter valid username {string} and password {string}", () => {
    cy.origin("https://higio-sso-qc.iijvn.local", () => {
      cy.get('input[placeholder="Username"]').should('be.visible').clear().type("iij_khoavo");
      cy.get('input[placeholder="Password"]').should('be.visible').clear().type("Passw0rd#123{enter}");
      // LoginProvider.fillusername("iij_khoavo");
      // LoginProvider.fillpassword("Passw0rd#123{enter}");
    });
});

Then("I should be redirected to the profile page", () => {
  LoginProvider.verifyLoginSuccess();
  //cy.wait(2000);
  //cy.visit('/provider/profile');
});

Given("I open the profile page", () => {
  EditProfile.visit();
});

When("I click on the Edit Profile button", () => {  
  EditProfile.visit();
  EditProfile.clickEditProfileButton();
});

When("I enter new email {string}", (email) => {
  EditProfile.fillEmail(email);
});

When("I click on the Save button", () => {
    EditProfile.clickSaveButton();
});

Then("I see popup Confirmation", () => {
    EditProfile.verifyEditProfileSuccess();
});

When("I click on the Yes button", () => {
    EditProfile.clickYesButton();
});

When ("I see popup Success", () => {
    EditProfile.verifyEditProfileSuccessMessage();
});

When ("I click on OK button", () => {
    EditProfile.clickOKbutton();
});

Then("I see new email {string} in preview profile page", (email) => {
  EditProfile.verifyEmailfield(email);
});
