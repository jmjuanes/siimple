---
title: "Spacing"
description: "Customize the padding and the margin of an element"
---

> Added in **v3.2.0**.

Modify the **padding** or the **margin** of an element adding the class `siimple--{attribute}-{size}`, where `attribute` is one of the following attributes:

- `mt` to change the `margin-top`.
- `pt` to change the `padding-top`.
- `mb` to change the `margin-bottom`. 
- `pb` to change the `padding-bottom`.
- `ml` to change the `margin-left`.  
- `pl` to change the `padding-left`.
- `mr` to change the `margin-right`.
- `pr` to change the `padding-top`.
- `mx` to change the `margin-left` and the `margin-right`.
- `px` to change the `padding-left` and the `padding-right`.
- `my` to change the `margin-top` and the `margin-bottom`.
- `py` to change the `padding-top` and the `padding-bottom`.

And `size` is one of the following values:

- `0`: to set the `padding` or the `margin` to `0px`.
- `1`: to set the `padding` or the `margin` to `5px`.
- `2`: to set the `padding` or the `margin` to `10px`.
- `3`: to set the `padding` or the `margin` to `15px`.
- `4`: to set the `padding` or the `margin` to `20px`.
- `5`: to set the `padding` or the `margin` to `25px`.
- `auto`: to set the `margin` to `auto`.

:::snippet
<style>
.example {
    width: 150px;
    padding: 10px;
    text-align: center;
}
</style>
<div class="example siimple--mx-auto siimple--bg-light">
    Centered element
</div>
:::

