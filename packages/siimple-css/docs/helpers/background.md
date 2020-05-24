---
title: "Background"
description: "Change the background color of any element"
background: 
  - className: "siimple--bg-primary siimple--text-white"
    name: "siimple--bg-primary"
  - className: "siimple--bg-secondary siimple--text-white"
    name: "siimple--bg-secondary"
  - className: "siimple--bg-success siimple--text-white"
    name: "siimple--bg-success"
  - className: "siimple--bg-warning siimple--text-white"
    name: "siimple--bg-warning"
  - className: "siimple--bg-error siimple--text-white"
    name: "siimple--bg-error"
  - className: "siimple--bg-dark siimple--text-white"
    name: "siimple--bg-dark"
  - className: "siimple--bg-light"
    name: "siimple--bg-light"
grayBackground:
  - className: "siimple--bg-gray0"
    name: "siimple--bg-gray0"
  - className: "siimple--bg-gray1"
    name: "siimple--bg-gray1"
  - className: "siimple--bg-gray2"
    name: "siimple--bg-gray2"
  - className: "siimple--bg-gray3"
    name: "siimple--bg-gray3"
  - className: "siimple--bg-gray4"
    name: "siimple--bg-gray4"
  - className: "siimple--bg-gray5 siimple--text-white"
    name: "siimple--bg-gray5"
  - className: "siimple--bg-gray6 siimple--text-white"
    name: "siimple--bg-gray6"
  - className: "siimple--bg-gray7 siimple--text-white"
    name: "siimple--bg-gray7"
  - className: "siimple--bg-gray8 siimple--text-white"
    name: "siimple--bg-gray8"
  - className: "siimple--bg-gray9 siimple--text-white"
    name: "siimple--bg-gray9"
---

Use the following classes to set the background color of any element.  

:::warning 
Background color helpers **do not set the text color attribute**. Instead, you should use one of the `siimple--text-*` color helpers.
:::

```html preview="true"
{{#each page.data.background}}
<div class="siimple--p-3 siimple--mb-1 {{this.className}}">
    .{{this.name}}
</div>
{{/each}}
```


#### White background

Use the `siimple--bg-white` class to set the background color of the element to white.

```html
<div class="siimple--bg-white siimple--p-3">
    White background
</div>
```


#### Gray backgrounds

Gray colors are also available to be added as a background color of any elements. Just add the following classes:

```html preview="true"
{{#each page.data.grayBackground}}
<div class="siimple--p-3 siimple--mb-1 {{this.className}}">
    .{{this.name}}
</div>
{{/each}}
```

