---
title: "Jumbotron"
description: "A lightweight component for showcasing content"
keywords: "jumbotron,content,title,subtitle,hero,layouts"
--- 

The **jumbotron** is full width container specially designed for calling attention in something special. You can use it for example to display a banner in your website. A jumbotron is created adding a `siimple-jumbotron` class to a `<div>` tag and usually contains the following elements:

- **Title**: is the title of the jumbotron, with the class `siimple-jumbotron-title`.
- **Subtitle**: is the subtitle of the jumbotron, with the class `siimple-jumbotron-subtitle`.

Here is a full example of a jumbotron element:

```html preview="true"
<div class="siimple-jumbotron siimple-jumbotron--primary">
    <div class="siimple-jumbotron-title">
        Jumbotron title
    </div>
    <div class="siimple-jumbotron-subtitle">
        This is the jumbotron subtitle
    </div>
</div>
```


#### Colors

Costomize the jumbotron adding one of the siimple colors described in the [theming page](/css/getting-started/theming.html).

```html
<div class="siimple-jumbotron siimple-jumbotron--dark">
    <!-- Jumbotron content -->
</div>
```

#### Breakpoints

By default the jumbotron has the maximun width minus the `20px` of padding left and right. You can change the width of the jumbotron element using one of the following breakpoints class names:

| Class | Description |
| `siimple-jumbotron--small` | It will have a maximum width of `600px`. |
| `siimple-jumbotron--medium` | It will have a maximum width of `768px`. |
| `siimple-jumbotron--large` | It will have a maximum width of `960px`. |
| `siimple-jumbotron--xlarge` | It will have a maximum width of `1280px`. |

On screens with sizes lower than the specified in the breakpoint class, the jumbotron will have the maximun width.

```html
<div class="siimple-jumbotron siimple-jumbotron--medium">
    <!-- Jumbotron content -->
</div>
```


