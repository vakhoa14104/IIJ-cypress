import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginProvider from "../../pages/LoginProvider";

Given("I open the login page", () => {
  //cy.visit("/provider");
  LoginProvider.visit();
});

When("I enter valid username {string} and password {string}", () => {
  cy.origin("https://higio-sso-qc.iijvn.local", () => {
    cy.get('input[placeholder="Username"]').should('be.visible').clear().type("iij_khoavo");
    cy.get('input[placeholder="Password"]').should('be.visible').clear().type("Passw0rd#123{enter}");
    //LoginProvider.fillusername("iij_khoavo");
    //LoginProvider.fillpassword("Passw0rd#123{enter}");
  });
});

Then("I should be redirected to the profile page", () => {
  LoginProvider.verifyLoginSuccess();
});
