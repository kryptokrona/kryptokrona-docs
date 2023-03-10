---
title: How To Use Kryptokrona SDK
---

A simple example of how to retrive blocks:

```kotlin
fun main(args: Array<String>) = runBlocking {
    val node = Node("privacymine.net", 11898, false)
    val blockClient = BlockClient(node)

    blockClient.getBlocks().let {
        println("Blocks: ${it?.blocks?.size}")
    }
}
```