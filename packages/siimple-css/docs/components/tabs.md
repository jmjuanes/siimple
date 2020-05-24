---
title: "Tabs"
description: "A horizontal navigation component"
--- 

<style>
.siimple-tabs {
    margin-bottom: 0px !important
}
</style>

**Tabs** are a responsive horizontal navigation component, great to separate the content of your page into sections. Tabs require the following structure:

- The tabs wrapper, with the class `siimple-tabs`.
- A list of **tabs**, that are elements with the class `siimple-tabs-item`, 

```html preview="true"
<div class="siimple-tabs">
    <div class="siimple-tabs-item">Tab 1</div>
    <div class="siimple-tabs-item siimple-tabs-item--active">
        Tab 2
    </div>
    <div class="siimple-tabs-item">Tab 3</div>
</div>
```

#### Active tab

Just add `siimple-tabs-item--active` to the tab you want to be active (for example, the current one that the user will be at).



