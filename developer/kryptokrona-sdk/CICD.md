---
title: CI/CD
---

# CI/CD

We also have a CI/CD flow for this project that will assemble the code, run static code analysis,
run unit tests, run code coverage, generate JavaDoc, publish JavaDoc and save the artifact of the build to GitHub Packages.

This artifact can then be downloaded and imported manually if that need exists for the project. Instructions
on how to do this can be read in the installation instructions.

Whenever you submit a pull request a pipeline will run with the following steps:

- Assemble
- Static Code Analysis
- Unit Test
- Code Coverage

The only thing different here from the main pipeline that runs is that we do not publish an artifact to
GitHub Packages.