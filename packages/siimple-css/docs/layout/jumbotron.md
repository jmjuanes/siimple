---
title: "Jumbotron"
description: "A lightweight component for showcasing content"
keywords: "jumbotron,content,title,subtitle,hero,layouts"
--- 

The **jumbotron** is full width container. You can use it for example to display a banner in your website. A jumbotron usually contains up to three elements:

- **Title**: is the title of the jumbotron, with the class `siimple-jumbotron-title`.
- **Subtitle**: is the subtitle of the jumbotron, with the class `siimple-jumbotron-subtitle`.
- **Detail text**: is a container for additional text of the jumbotron, with the class `siimple-jumbotron-detail`.

Here is a full example of a jumbotron element:

:::snippet lang="html" title="Basic jumbotron"
<div class="siimple-jumbotron siimple-jumbotron--dark">
    <div class="siimple-jumbotron-title">Welcome page</div>
    <div class="siimple-jumbotron-subtitle">This is the subtitle</div>
    <div class="siimple-jumbotron-detail">And this is the detail of the jumbotron element</div>
</div>
:::


#### Jumbotron theme

> Added in **v4.0.0**.

Use `siimple-jumbotron--light` or `siimple-jumbotron--dark` to switch the jumbotron to a light or dark theme. 

```html
<div class="siimple-jumbotron siimple-jumbotron--dark">
    <!-- Jumbotron content -->
</div>
```

You can then use a helper background color to customize the background color of the jumbotron. For example, you can combine a dark footer theme with a secondary background color.

```html
<div class="siimple-jumbotron siimple-jumbotron--dark siimple--bg-secondary">
    <!-- Jumbotron content -->
</div>
```




