Feature: SCAN request workflow guardrails
  As a maintainer
  I want scan-request automation behavior tested by acceptance criteria
  So that issue-driven scans remain stable over time

  Scenario: Scan request workflow only runs for open SCAN issues and includes BDD quality gate
    Given the scan request workflow file
    Then it should require the issue title to start with "SCAN:" and the issue to be open
    And it should include a dedicated step named "Run BDD acceptance tests"
    And the BDD acceptance step should run "npm run test:bdd"
