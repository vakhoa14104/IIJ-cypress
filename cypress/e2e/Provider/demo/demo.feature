Feature: Demo IAM Provider page with Tenant and Billing history function

# Scenario: Login to IAM with invalid account
#     Given I open the Login page
#     When I enter invalid username "iij_khoatest" and password "Passw0rd@123"
#     Then I should see error message "Invalid username or password"

Scenario: Login to IAM with valid account
    Given I open the login page
    When I enter valid username "iij_khoavo" and password "Passw0rd#123"
    Then I should be redirected to the profile page

Scenario: Change Email profile page
    Given I open the profile page
    When I click on the Edit Profile button
    When I enter new email "khoa.vo@ap.iij.com"
    When I click on the Save button
    Then I see popup Confirmation
    When I click on the Yes button
    When I see popup Success
    When I click on OK button
    Then I see new email "khoa.vo@ap.iij.com" in preview profile page

# Scenario: Change Password with invalid password profile page
#     Given I open the profile page
#     When I click on the "Edit" button
#     When I enter current password "Passw0rd@123"
#     When I enter new password "abc123"
#     When I enter confirm password "abc123"
#     When I see error message "・Password must be between 12 and 64 characters long, must contain at least 1 special character, 1 numerical digits, 1 upper case character and 2 lower case characters.
# ・The new password must be different from the previous 4 passwords."
#     Then I should see "Save" button is disabled

# Scenario: Change Password with old confirm password profile page
#     Given I open the profile page
#     When I click on the "Edit" button
#     When I enter current password "Passw0rd@123"
#     When I enter new password "Passw0rd!123"
#     When I enter confirm password "Passw0rd!123"
#     Then I should see "Save" button is disabled
#     And I see error message "The new password must be different from the previous 4 passwords."

# Scenario: Change Password with valid password profile page
#     Given I open the profile page
#     When I click on the "Edit" button
#     When I enter current password "Passw0rd@123"
#     When I enter new password "Passw0rd!123"
#     When I enter confirm password "Passw0rd!123"
#     When I click on the "Save" button
#     Then I should see success message "Saved successfully"

# Scenario: Create new Tenant
#     Given I click on "Tenant" tab
#     And I open the Tenant page
#     When I click on the "New" button
#     When I enter GcasID "CDM000001"
#     When I enter organization name "Demo-IIJ-1"
#     When I expand "Payment Type" dropdown
#     And I select "Payg Charge" in the "Payment Type" dropdown
#     When I enter First Name "IIJ 01"
#     And I enter Last Name "Demo"
#     When I enter email "khoa.vo@ap.iij.com"
#     When I turn off toggle "Enforce MFA"
#     When I set Password Lifetime "Unlimited" radio button
#     When I check Iaas Region "iijvnqcvcd01" checkbox
#     When I check S3 Region "HCM" checkbox
#     When I click on the "Save" button
#     Then I should see success message "New tenant created successfully"

# Scenario: Change status Restricted for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "Edit" button
#     When I select "Restrict" in the "Status" dropdown
#     When I click on the "Save" button
#     Then I should see success message "Tenant updated successfully"

# Scenario: Change status Suspended for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "Edit" button
#     When I select "Suspend" in the "Status" dropdown
#     When I click on the "Save" button
#     Then I should see success message "Tenant updated successfully"
    
# Scenario: Terminate Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click "Terminate" button
#     When I see validate popup "Are you sure you want to terminate this tenant?"
#     When I click on the "Terminate" button
#     Then I should see success message "Tenant terminated successfully"

# Scenario: Create User for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I click on the "New" button
#     When I enter First Name "IIJ 01"
#     And I enter Last Name "Tester 01"
#     And I enter username "iij1_user01"
#     And I enter email "khoa.vo@ap.iij.com"
#     And I select raido button Password Type "Set Password now" by default
#     And I enter Passw0rd "Passw0rd!123"
#     And I enter Confirm Password "Passw0rd!123"
#     And I select Portal Role "User"
#     And I enter Phone number "0901234567"
#     When I expand vCD role region
#     When I select vCD role radio button
#     Then I click Next button
#     And I click Save button
#     Then I see popup "Saved successfully"

# Scenario: Change state Deactivate for User of Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I click on toggle "Deactive" button
#     Then I should see success message "User updated successfully"

# Scenario: Change state Activate for User of Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I click on toggle "Active" button
#     Then I should see success message "User updated successfully"

# Scenario: Search user by username
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I enter "demo" in search box
#     Then I should see user list returned result list included "demo" in username or email or full name

# Scenario: Update User for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I click on radio button select user "demo_iij01"
#     When I click on the "Edit" button
#     When I enter First Name "Demo IIJ 01"
#     And I enter Last Name "Tester 01"
#     And I enter email "khoa.va@ap.iij.com"
#     And I enter password "Passw0rd@123"
#     And I enter confirm password "Passw0rd@123"
#     And I click to expand portal role
#     And I select "Admin" in the "Portal Role" dropdown
#     And I enter Phone number "0901234567"
#     When I expand vCD role region
#     When I select vCD role radio button
#     When I click "Next" button
#     When I click on "Next" button at next section
#     When I click on the "Save" button
#     Then I should see success message "Saved successfully"

# Scenario: Delete User for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "User" tab
#     When I click on toggle "Deactive" button
#     When I click on radio button select user "demo_iij01"
#     When I click on the "Delete" button
#     When I see validate popup "Are you sure you want to delete this user?"
#     When I click on the "Delete" button
#     Then I should see success message "User deleted successfully"

# Scenario: Regenerate vCD certificate for Tenant
#     Given I click on "Tenant" tab to open the Tenant page
#     When I click on Active Tenant "Demo-IIJ-1"
#     When I click on the "vCD Certificate" tab
#     When I click on the "Regenerate vCD certificate" button
#     When I see validate popup "Are you sure you want to regenerate vcd certificate for region: iijvnqcvcd01?"
#     When I click on the "Yes" button
#     Then I should see success message "vCD certificate regenerated successfully"

