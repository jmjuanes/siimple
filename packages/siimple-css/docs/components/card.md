---
title: "Card"
description: "A minimal and flexible container component"
--- 

> Added in **v3.1.0**. Redesigned in **v4.0.0**.

<style>
.siimple-card {
    margin-bottom: 0px!important;
}
</style>

A **card** is a flexible container component. 

<ul>
    <li style="line-height:22px;margin-bottom:5px;">`siimple-card-header`: the card header.</li>
    <li style="line-height:22px;margin-bottom:5px;">`siimple-card-body`: the card body, generally where you can place your content.</li>
    <li style="line-height:22px;margin-bottom:5px;">`siimple-card-footer`: the card footer.</li>
</ul>

:::snippet lang="html" title="Basic card example"
<div class="siimple-card" style="max-width:300px">
    <div class="siimple-card-header">Card header</div>
    <div class="siimple-card-body">Card content</div>
    <div class="siimple-card-footer">Card footer</div>
</div>
:::

You can place more than one card content element:

:::snippet lang="html" title="Card with more containers"
<div class="siimple-card" style="max-width:300px">
    <div class="siimple-card-content">Card content 1</div>
    <div class="siimple-card-content">Card content 2</div>
    <div class="siimple-card-content">Card content 3</div>
</div>
:::


#### Card link

> Added in **v4.0.0**.


#### Card image

> Added in **v4.0.0**.


Card body can contain a **title** with the class `siimple-card-title` and a **subtitle** with the class `siimple-card-subtitle`. 

:::snippet lang="html" title=""
<div class="siimple-card" style="max-width:300px;margin-bottom:0px;">
    <div class="siimple-card-body">
        <div class="siimple-card-title">Special card title</div>
        <div class="siimple-card-subtitle">Special card subtitle</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
    </div>
</div>
:::

