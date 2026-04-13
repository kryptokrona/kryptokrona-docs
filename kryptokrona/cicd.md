---
title: CI/CD
---

# CI/CD

This project is automatically built and tested using GitHub Actions. We have two pipelines:

- **Kryptokrona Main Pipeline** - This is the pipeline that runs the code merged into our main branch.
- **Kryptokrona Pull Request Pipeline** - This is the pipeline that runs each time a pull request come in so the reviewer has some help evaluating the code status.

The Kryptokrona Main Pipeline do everything the Kryptokrona Pull Request Pipeline does in addition to generate Doxygen and building and publishing a Docker Image to
the project tagged by the project name, owner, repository and short form of commit SHA value.

The purpose of publishing prepared Docker images is to make it faster and easier to deploy a Kryptokrona node/pool.