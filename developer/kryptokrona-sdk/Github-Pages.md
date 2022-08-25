---
title: GitHub Pages
---

# GitHub Pages

We use GitHub Pages for displaying the documentation of this project in addition to this README file. Go to https://kryptokrona.github.io/kryptokrona-sdk/
to view all the links to the releases and other additional information.

## Javadoc

We use Javadoc for our in depth documentation that is available on GitHub Pages. To generate javadoc and getting these into
version control so it can get deployed we need to run:

- `./gradlew copyJavaDoc`

This has a dependency to javadoc gradle task so we don't need to run two commands.

**NOTE:** The files will be located under `docs/<version>` and the version is picked up by what it says inside the file 
`gradle.properties`.