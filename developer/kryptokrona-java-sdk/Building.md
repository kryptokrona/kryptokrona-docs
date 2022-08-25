---
title: Building
---

# Building

We are using Gradle as the build tool for this project. The easiest way to build if you are not running IntelliJ is to run
the command:

- `./gradlew build`

This command will also run all the unit tests at the same time so if you want to avoid that, just run the command:

- `./gradlew assemble`

There might be some trouble doing this multiple times, then we need to do a cleanup:

- `./gradlew clean`

If you want to visualize how the Gradle tasks are run in what order 
by their dependencies. Run the command:

- `./gradlew taskTree`

To list all the tasks provided in this project run:

- `./gradlew tasks`

**Tip:** you can also run the commands in short form e.g. `./gradlew tT` or `./gradlew jTR` that is 
for the jacocoTestReport task.