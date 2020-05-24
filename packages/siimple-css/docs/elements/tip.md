---
title: "Tip"
description: "A special alert to grab attention in something important"
---

<style>
.siimple-tip:last-child {
    margin-bottom: 0px !important;
}
</style>

A **siimple tip** is a special alert element designed to grab attention in something important in your website or application. To create a basic tip element, just add the `siimple-tip` class to a `<div>` element:

```html preview="true"
<div class="siimple-tip siimple-tip--primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
```


#### Colored tip

All the different colors specified in the [theming](/css/getting-started/theming.html) section can be used to customize your tip element:

```html preview="true"
<div class="siimple-tip siimple-tip--primary">
    Primary tip
</div>
<div class="siimple-tip siimple-tip--secondary">
    Secondary tip
</div>
<div class="siimple-tip siimple-tip--success">
    Success tip
</div>
<div class="siimple-tip siimple-tip--warning">
    Warning tip
</div>
<div class="siimple-tip siimple-tip--error">
    Error tip
</div>
```


#### Icons

Customize your tip element displaying an icon in the left side of the tip. Add one of the following classes to display an icon:

| Class | Description |
| `siimple-tip--heart` | Adds a **heart** icon to the tip. |
| `siimple-tip--exclamation` | Adds an **exclamation** icon to the tip. |
| `siimple-tip--question` | Adds a **question** icon to the tip. |
| `siimple-tip--info` | Adds an **info** icon to the tip. |
| `siimple-tip--check` | Adds a **check** icon to the tip. |
| `siimple-tip--cross` | Adds a **cross** icon to the tip. |

```html preview="true"
<div class="siimple-tip siimple-tip--error siimple-tip--heart">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div class="siimple-tip siimple-tip--warning siimple-tip--exclamation">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div class="siimple-tip siimple-tip--secondary siimple-tip--question">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div class="siimple-tip siimple-tip--primary siimple-tip--info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div class="siimple-tip siimple-tip--success siimple-tip--check">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div class="siimple-tip siimple-tip--error siimple-tip--cross">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
```


