---
title: Getting Started
---

To install Kryptokrona SDK into your Maven/Gradle project we need to include the dependency:

**Maven**
```xml
<dependency>
    <groupId>org.kryptokrona.sdk</groupId>
    <artifactId>kryptokrona-core</artifactId>
    <version>0.1.0</version>
    <scope>implementation</scope>
</dependency>

<dependency>
    <groupId>org.kryptokrona.sdk</groupId>
    <artifactId>kryptokrona-http</artifactId>
    <version>0.1.0</version>
    <scope>implementation</scope>
</dependency>
```

**Gradle**
```gradle
dependencies {
    implementation 'org.kryptokrona.sdk:kryptokrona-core:0.1.0'
    implementation 'org.kryptokrona.sdk:kryptokrona-http:0.1.0'
}
```

**Gradle Kotlin DSL**
```kotlin
dependencies {
    implementation("org.kryptokrona.sdk:kryptokrona-core:0.1.0")
    implementation("org.kryptokrona.sdk:kryptokrona-http:0.1.0")
}
```
