import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/provider");
});

When("I enter valid username {string} and password {string}", () => {
  cy.origin("https://higio-sso-qc.iijvn.local", () => {
    cy.get('input[placeholder="Username"]').should('be.visible').clear().type("iij_khoavo");
    cy.get('input[placeholder="Password"]').should('be.visible').clear().type("Passw0rd@123{enter}");
  });
});


// When("I click the login button", () => {
//     cy.origin("https://higio-sso-qc.iijvn.local/auth/realms/IAM-IIJ-1/protocol/openid-connect", () => {
//         cy.get('button[class="btn uppercase btn-green btn-full-w  margin-top-3"]').click();
// });
// });

Then("I should be redirected to the profile page", () => {
  cy.visit("/provider/profile");
    cy.url().should("include", "/provider/profile");
});
