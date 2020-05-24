---
title: "Breadcrumb"
description: "Show the current page navigation"
---

The breadcrumb is an easy-to-use element to keep track of the path the user has navigated. To use it, first create a div to contain all the different breadcrumbs. Its class has to be `siimple-breadcrumb`:

```
<div class="siimple-breadcrumb"></div>
```

Once you have the container of the breadcrumbs, just create as many as you want. A breadcrumb is just a `<div>` tag with the class `siimple-breadcrumb-item` added to it:

```html preview="true"
<div class="siimple-breadcrumb siimple--mb-0">
    <a href="#" class="siimple-breadcrumb-item">Home</a>
    <a href="#" class="siimple-breadcrumb-item">About</a>
    <a href="#" class="siimple-breadcrumb-item">Contact</a>
</div>
```


#### Active crumb

You can use the `siimple-breadcrumb-item--active` class to mark a crumb as active, for example to inform the user about the current page.

```
<div class="siimple-breadcrumb siimple--mb-0">
    <a href="#" class="siimple-breadcrumb-item">Home</a>
    <a href="#" class="siimple-breadcrumb-item">About</a>
    <a href="#" class="siimple-breadcrumb-item siimple-breadcrumb-item--active">
        Contact us
    </a>
</div>
```


