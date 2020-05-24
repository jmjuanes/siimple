---
title: "Class Names"
description: "How siimple css is structured"
---

**siimple css** uses a modified version of the [**BEM** syntax](https://en.bem.info/methodology/quick-start/) (**B**lock **E**lement **M**odifier): each classname has the prefix **siimple** and uses a single hyphen for the block and element names (in lowercase format) and a double hyphen for modifiers. 

In this methodology, a **block** is defined as a independent component of the page. An **element** is a part of a block. You can think in elements as child items of a block. 
Finally, a **modifier** is used to define the appearance, behaviour or state of the block or element where is applied. Modifiers are optional.

There is a schema how classnames are defined in **siimple css**:

```
{/* Global modifiers syntax */}
.siimple--text-white { . . . }
 -------  ----------
 prefix   modifier

{/* Block and block-modifier syntax */}
.siimple-navbar { . . . }
 ------- ------
 prefix  block

.siimple-navbar--primary { . . . }
 ------- ------  -------
 prefix  block   modifier

{/* Block-element and block-element-modifier syntax */}
.siimple-navbar-link { . . . }
 ------- ------ ----
 prefix  block  elem

.siimple-navbar-link--active { . . . }
 ------- ------ ----  ------
 prefix  block  elem  modifier
```


For example, for building a button you should use the `siimple-btn` classname:

```
<div class="siimple-btn">
    My button
</div>
```

If you want to modify the apperance of the button, for example using the primary color as a background, add the `siimple-btn--primary` classname:

```
<div class="siimple-btn siimple-btn--primary">
    My blue button
</div>
```


