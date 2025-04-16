import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageTenant from "../../pages/LoginPageTenant";

Given("I open the login page", () => {
  LoginPageTenant.visit();
});

When("I enter the tenant name {string}", () =>{
    LoginPageTenant.filltenantname("IAM-IIJ-1");
});


When("I click on next button", () => {
    LoginPageTenant.clickNextButton();
});

When("I enter valid username {string} and password {string}", () => {
  cy.origin("https://higio-sso-qc.iijvn.local/auth/realms/IAM-IIJ-1/protocol/openid-connect", () => {
    cy.get('input[placeholder="Username"]').should('be.visible').clear().type("iij_khoavo4");
    cy.get('input[placeholder="Password"]').should('be.visible').clear().type("Passw0rd#123{enter}");
  });
});


// When("I click the login button", () => {
//     cy.origin("https://higio-sso-qc.iijvn.local/auth/realms/IAM-IIJ-1/protocol/openid-connect", () => {
//         cy.get('button[class="btn uppercase btn-green btn-full-w  margin-top-3"]').click();
// });
// });

Then("I should be redirected to the profile page", () => {
  LoginPageTenant.verifyLoginSuccess();
});
