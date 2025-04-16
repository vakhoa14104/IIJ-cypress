Feature: Login to Tenant

  Scenario: Login with valid credentials
    Given I open the login page
    When I enter valid username "iij_khoavo" and password "Passw0rd@123"
    Then I should be redirected to the profile page