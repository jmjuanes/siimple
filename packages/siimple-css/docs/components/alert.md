---
title: "Alert"
description: "Display block messages"
---

<style>
.siimple-alert:last-child {
    margin-bottom: 0px !important;
}
</style>

An **alert** is a colored notification block generally used to catch the attention of your users of something important. An alert can be created adding the `siimple-alert` class to a `<div>` tag.

```html preview="true"
<div class="siimple-alert siimple-alert--primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
```


#### Colors

You can specify the alert color using one of the colors defined in the [theming page](/css/getting-started/theming.html).

```html preview="true"
<div class="siimple-alert siimple-alert--primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--secondary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--success">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--warning">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--error">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
```


#### Alert title

You can insert a titile in your alert adding a `<div>` tag with the class `siimple-alert-title`.

```html preview="true"
<div class="siimple-alert siimple-alert--error">
    <div class="siimple-alert-title">Alert title</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
```


#### Alert close icon

You can add a `<div>` with a `siimple-alert-close` class to display a close button inside the alert component.

```html preview="true"
<div class="siimple-alert siimple-alert--warning">
    <div class="siimple-alert-close"></div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
```

