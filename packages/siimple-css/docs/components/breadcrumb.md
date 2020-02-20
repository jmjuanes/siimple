---
title: "Breadcrumb"
description: "Show the current page navigation"
---

The breadcrumb is an easy-to-use element to keep track of the path the user has navigated. To use it, first create a div to contain all the different breadcrumbs. Its class has to be `siimple-breadcrumb`:

```
<div class="siimple-breadcrumb"></div>
```

Once you have the container of the breadcrumbs, just create as many as you want. A breadcrumb is just a `div` with the class `siimple-breadcrumb-item` added to it:

:::snippet lang="html" title="Breadcrumb"
<div class="siimple-breadcrumb siimple--mb-0">
    <div class="siimple-breadcrumb-item">Home</div>
    <div class="siimple-breadcrumb-item">About</div>
    <div class="siimple-breadcrumb-item">Contact</div>
</div>
:::


