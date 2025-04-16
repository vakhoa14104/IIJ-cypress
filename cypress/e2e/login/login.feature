Feature: Login to Tenant

  Scenario: Login with valid credentials
    Given I open the login page
    When I enter the tenant name "IAM-IIJ-1"
    And I click on next button
    When I enter valid username "iij_khoavo4" and password "Passw0rd#123"
    Then I should be redirected to the dashboard
