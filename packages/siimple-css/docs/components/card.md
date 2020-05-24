---
title: "Card"
description: "A minimal and flexible container component"
--- 

<style>
.siimple-card {
    margin-bottom: 0px!important;
}
</style>

A **card** is a flexible container component that holds content and actions about a single subject or topic. By default, cards have no fixed width. A card can be created adding a `siimple-card` class to a `<div>` tag.

The information that a card may display should be divided using the following containers:

- The image of the card, with the `siimple-card-iamge` class.
- The content of the card, with the class `siimple-card-content`.
- A link bound to the card, with the class `siimple-card-link`.

```html preview="true"
<div class="siimple-card siimple-card--light" style="max-width:300px">
    <div class="siimple-card-image">
        <div class="siimple--py-5 siimple--color-white" align="center">
            <strong>Card image</strong>
        </div>
    </div>
    <div class="siimple-card-content">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div>
    <a href="#" class="siimple-card-link">
        <strong>Card link</strong>
    </a>
</div>
```


#### Card theme

By defaunt, card background will be **white**, but you can switch to a **light** version of the card adding a `siimple-card--light` class to the card container, or to a **dark** version adding a `siimple-card--dark` class to the card container.

```html preview="true"
<div class="siimple-row">
    <div class="siimple-column siimple-column--sm-12">
        <div class="siimple-card siimple-card--light">
            <div class="siimple-card-content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
            <a href="#" class="siimple-card-link">
                <strong>Card link</strong>
            </a>
        </div>
    </div>
    <div class="siimple-column siimple-column--sm-12">
        <div class="siimple-card siimple-card--dark">
            <div class="siimple-card-content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
            <a href="#" class="siimple-card-link">
                <strong>Card link</strong>
            </a>
        </div>
    </div>
</div>
```




