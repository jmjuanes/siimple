---
title: "Theming"
description: "Font and colors that @siimple/css uses"
---

#### Font

**@siimple/css** uses [Roboto](https://fonts.google.com/specimen/Roboto) as the default font family, imported automatically from **Google Fonts**. 
If you want to use your own font, you can set that in your `body` tag. Here is an example:

```
body {
    font-family: Verdana, Arial, 'sans-serif';
}
```

All the elements on your page will inherit this `font-family` and will overwrite the Roboto font set by default by **@siimple/css**.

#### Colors

All colors in **@siimple/css** are available as a SASS variables and a SASS map in `scss/_variables.scss`.
 
<style>
.colors {
    display: inline-block;
    width: 80px;
    border-radius: 5px;
    padding: 15px;
    margin: 5px;
}
.colors-title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2px;
}
.colors-hex {
    font-size: 12px;
    text-align: center;
}
.colors-container {
    margin-bottom: 15px;
    margin-left: -5px;
    margin-right: -5px;
}
</style>
<div class="colors-container">
    <div class="colors siimple--color-white siimple--bg-primary">
        <div class="colors-title">primary</div>
        <div class="colors-hex">#4e91e4</div>
    </div>
    <div class="colors siimple--color-white siimple--bg-secondary">
        <div class="colors-title">secondary</div>
        <div class="colors-hex">#4ccdac</div>
    </div>
    <div class="colors siimple--color-white siimple--bg-success">
        <div class="colors-title">success</div>
        <div class="colors-hex">#4acf7f</div>
    </div>
    <div class="colors siimple--color-white siimple--bg-warning">
        <div class="colors-title">warning</div>
        <div class="colors-hex">#fbc850</div>
    </div>
    <div class="colors siimple--color-white siimple--bg-error">
        <div class="colors-title">error</div>
        <div class="colors-hex">#ee675d</div>
    </div>
</div>
<div class="colors-container">
    <div class="colors siimple--color-white siimple--bg-dark">
        <div class="colors-title">dark</div>
        <div class="colors-hex">#34495e</div>
    </div>
    <div class="colors siimple--color-dark siimple--bg-light">
        <div class="colors-title">light</div>
        <div class="colors-hex">#dde5ee</div>
    </div>
</div>

You can these colors in your SASS styles using directly the SASS variable. You can also use our function `siimple-default-color` defined in `scss/_functions.scss` to import the color from the SASS map:

```
//Import colors
@import "siimple/scss/_variables.scss";
@import "siimple/scss/_functions.scss";

//Using the color variable
.button {
    background-color: $siimple-default-primary;
}

//Using the function
.button {
    background-color: siimple-default-color("success");
}
```

