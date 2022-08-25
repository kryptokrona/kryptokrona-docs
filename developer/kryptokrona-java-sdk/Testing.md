---
title: Testing
---

# Testing

We use unit tests, static code analysis and code coverage to ensure that we always write
quality code. We can either run them seperatly to view the status or run everything with
one command:

- `./gradlew test`

## Unit Testing

We are using JUnit 5 to conduct our unit tests. All tests are located under `src/test`.

To run unit tests run:

- `./gradlew test`

An HTML file will be generated so that we can open up in our browser to
view in more detail the test results. The file is located in `build/reports/tests/test/index.html`

## Static Code Analysis

The static code analysis tool used in this project is cpd. All configuration for the static code analysis can be found 
in `gradle/static-code-analysis`. To run the static code analysis:

- `./gradlew checkStyleMain`
- `./gradlew cpdCheck`
- `./gradlew pmdMain`
- `./gradlew spotbugsMain`

HTML files will be generated so that we can open up in our browser. The files 
are located in:

- `build/reports/checkstyle/main.html`
- `build/reports/spotbugs/main/spotbugs.html`
- `build/reports/pmd/main.html`

## Code Coverage

The code coverage tool of this project is JaCoCo. To run:

- `./gradlew jacacoTestReport`

An HTML file will be generated so that we can open up in our browser. The file
is located in `build/kryptokrona-sdk-report/index.html`