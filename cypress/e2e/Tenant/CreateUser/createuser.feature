Feature: Create new User in Tenant

  Scenario: Create new user succeeded
    Given I open the user list page
    When I click on create user button
    When I see form Add User displayed
    And I enter First Name "IIJ 01"
    And I enter Last Name "Tester 01"
    And I enter username "iij1_user01"
    And I enter email "khoa.vo@ap.iij.com"
    And I select raido button Password Type "Set Password now" by default
    And I enter Passw0rd "Passw0rd!123"
    And I enter Confirm Password "Passw0rd!123"
    And I select Portal Role "User"
    And I enter Phone number "0901234567"
    When I expand vCD role region
    When I select vCD role radio button
    Then I click Next button
    And I click Save button
    Then I see popup "Saved successfully"