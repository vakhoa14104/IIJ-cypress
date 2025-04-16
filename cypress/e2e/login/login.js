import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/tenant");
});

When("I enter the tenant name {string}", () =>{
    cy.get('input[placeholder="Use your organization name to continue"]', { timeout: 10000 }).should('be.visible').focus().type('IAM-IIJ-1');
});


When("I click on next button", () => {
    cy.get('button[type="submit"]').click(), { timeout: 10000 };
});

When("I enter valid username {string} and password {string}", () => {
    cy.origin("https://higio-sso-qc.iijvn.local/auth/realms/IAM-IIJ-1/protocol/openid-connect", () => {
    cy.get('input[placeholder="Username"]', { timeout: 1000 }).should('be.visible').type("iij_khoavo4");
    cy.get('input[placeholder="Password"]', { timeout: 1000 }).should('be.visible').type("Passw0rd#123");
    cy.get('input[placeholder="Password"]').type("{enter}");
});
});

// When("I click the login button", () => {
//     cy.origin("https://higio-sso-qc.iijvn.local/auth/realms/IAM-IIJ-1/protocol/openid-connect", () => {
//         cy.get('button[class="btn uppercase btn-green btn-full-w  margin-top-3"]').click();
// });
// });

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
