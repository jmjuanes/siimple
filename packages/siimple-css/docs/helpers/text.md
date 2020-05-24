---
title: "Text"
description: "Basic text helpers"
colors:
  - className: "siimple--text-primary"
  - className: "siimple--text-secondary"
  - className: "siimple--text-success"
  - className: "siimple--text-warning"
  - className: "siimple--text-error"
  - className: "siimple--text-dark"
  - className: "siimple--text-light"
  - className: "siimple--text-muted"
---

In this document you can find useful classes to style your text. You can combine these classes with our [typography](/css/typography/index.html) elements to easily style your content.

#### Text alignment

Use one of the following classes to realign your text:

```html preview="true"
<div class="siimple-paragraph siimple--text-justify">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
<div class="siimple-paragraph siimple--text-left">Left aligned text</div>
<div class="siimple-paragraph siimple--text-center">Centered text</div>
<div class="siimple-paragraph siimple--text-right">Right aligned text</div>
```


#### Text transform

You can use these classes to apply text transformations: 

```html preview="true"
<div class="siimple-paragraph siimple--text-uppercase">Uppercase text!</div>
<div class="siimple-paragraph siimple--text-lowercase">Lowercase text!</div>
<div class="siimple-paragraph siimple--text-capitalize">Capitalized text!</div>
```


#### Text size, weight and italic

Transform the text size and weight with the following classes:

```html preview="true"
<div class="siimple-paragraph siimple--text-bold">Bold text</div>
<div class="siimple-paragraph siimple--text-italic">Italic text</div>
<div class="siimple-paragraph siimple--text-normal">Normal text</div>
<div class="siimple-paragraph siimple--text-small">Small text</div>
<div class="siimple-paragraph siimple--text-large">Large text</div>
```


#### Text color

Add `siimple--text-[color]` to apply a different color to the text. 

```html preview="true"
{{#each page.data.colors}}
<div class="{{this.className}} siimple--mb-1">
    .{{this.className}}
</div>
{{/each}}
```


#### Text wrapping

Wrap your text using one of the following classnames:

| Classname | Description |
| `siimple--text-nowrap` | Prevent text for wrapping into multiple lines. |
| `siimple--text-truncate` | Truncate the text and display an ellipsis. |
| `siimple--text-break` | Breaks long strings if exceeds the width of the container. |


```html preview="true"
<div class="siimple--bg-light" style="width:200px;height:24px;">
    <div class="siimple--text-nowrap">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
    </div>
</div>
```


