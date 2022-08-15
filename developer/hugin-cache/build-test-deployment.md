---
title: Build, Test and Deployment
---

# Build, Test and Deployment

This project is automatically built, tested and deployed using GitHub Actions. We have two pipelines:

- **Main Pipeline** - This is the pipeline that runs the code merged into our main branch.
- **Pull Request Pipeline** - This is the pipeline that runs each time a pull request come in so the reviewer has some help evaluating the code health.

The Main Pipeline do everything the Pull Request Pipeline does in addition to building and publishing a Docker Image to
the project tagged by the project name, owner, repository and short form of commit SHA value. We also setup continuous deployment
so if all the steps succeed the server will update its currently running docker container with a new image.

To learn how we deploy to our VPS read the documentation here: [Ansible Documentation](../../guides/hugin-cache/deploy-your-own-hugin-cache.md)