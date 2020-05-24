---
title: "Tag"
description: "Small labelling element"
---

**Tags** are useful elements for indicating status, attach metadata to another element or displaying numbers for counts. You can easily turn a `<span>` or `<div>` element to a tag adding the `siimple--tag` class.

```html preview="true"
<span class="siimple-tag siimple-tag--primary">
    default tag
</span>
```

#### Colors

You can use all the different colors specified in the [theming](/css/getting-started/theming.html) section.

```html preview="true"
<span class="siimple-tag siimple-tag--primary">Primary tag</span>
<span class="siimple-tag siimple-tag--secondary">Secondary tag</span>
<span class="siimple-tag siimple-tag--success">Success tag</span>
<span class="siimple-tag siimple-tag--warning">Warning tag</span>
<span class="siimple-tag siimple-tag--error">Error tag</span>
<span class="siimple-tag siimple-tag--dark">Dark tag</span>
<span class="siimple-tag siimple-tag--light">Light tag</span>
```

#### Rounded tag

You can add the `siimple-tag--rounded` modifier to a tag to make it rounded.

```html preview="true"
<span class="siimple-tag siimple-tag--primary siimple-tag--rounded">
    Rounded tag
</span>
```


#### Grouped tags

Attach tags together adding them in a `<div>` or `<span>` element with a `siimple-tag-group` class.

```html preview="true"
<div class="siimple-tag-group">
    <span class="siimple-tag siimple-tag--dark">version</span>
    <span class="siimple-tag siimple-tag--primary">v4.0.0</span>
</div>
```


