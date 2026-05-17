Feature: URL validation preview
  As a user entering URLs
  I want immediate accepted/rejected feedback
  So that invalid targets are obvious before I submit

  @browser
  Scenario: Preview separates accepted and rejected URLs with reasons
    Given the open-scans submission form is loaded
    When I enter these URLs into the URL field:
      """
      https://example.com
      http://localhost:3000
      """
    Then the URL preview count should mention "1 accepted"
    And the URL preview count should mention "1 rejected"
    And the preview should list accepted URL "https://example.com"
    And the preview should list rejected URL "http://localhost:3000"
    And the preview should show rejection reason containing "Localhost URLs are not allowed"
