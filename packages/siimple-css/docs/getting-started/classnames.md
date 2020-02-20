---
title: "Class Names"
description: "How @siimple/css is structured"
---

**@siimple/css** is based on the [BEM](https://getbem.com/) (**B**lock **E**lement **M**odifier) methodology. 
Each class has the prefix `siimple` and is followed by one dash and the block name.

```
<div class="siimple-btn"></div>
```

A modifier of a block (colors, disabled, etc.) adds a double dash after the block name and then the modifier name:

```
<div class="siimple-btn siimple-btn--primary"></div>
```

There are also blocks that can contain elements inside. These elements adds a dash after the block name and is followed by the element name.

```
<div class="siimple-menu">
    <div class="siimple-menu-item">Menu item</div>
</div>
```

Also, any modifier bound to an element is denoted by a double dash after the element name and then the modifier name.

```
<div class="siimple-menu">
    <div class="siimple-menu-item siimple-menu-item--selected">Menu item</div>
</div>
```


