Feature: Create scan requests from the web form
  As a user submitting URLs for accessibility scanning
  I want the form behavior to stay predictable
  So that I can create valid SCAN issues with reproducible context

  @browser
  Scenario: Generated issue link includes SCAN title and selected scan context
    Given the open-scans submission form is loaded
    When I enter "My BDD Scan" into the scan title field
    And I enter these URLs into the URL field:
      """
      https://example.com
      """
    And I choose "Mobile portrait (390×844)" for viewport
    And I choose "Dark only" for color scheme
    And I choose "Firefox" for browser
    And I submit the scan form
    Then I should see a redirect message for creating a GitHub scan request
    And the GitHub issue link should include a SCAN-prefixed title "My BDD Scan"
    And the GitHub issue link body should include scan context values:
      | key         | value            |
      | Viewport    | mobile-portrait  |
      | ColorScheme | dark             |
      | Browser     | firefox          |

  @browser
  Scenario: Submission page keeps key accessibility structure
    Given the open-scans submission form is loaded
    Then the page should expose key accessible form structure
