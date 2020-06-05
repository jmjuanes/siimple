---
title: "Using CSS"
description: ""
---
<style>
    .siimple-icon {font-size: 40px;}
</style>


First you should reference the `siimple-icons.css` or the `siimple-icons.min.css` file in your HTML file using a `<link>` tag:

```html
<link rel="stylesheet" href="path/to/siimple-icons.css">
```

If you are using the hosted version, use the link provided in the installation page instead.


You can place **siimple icons** with inline tag elements, for example `<i>` or `<span>` elements. You need the following CSS classnames for referencing an icon:

- `siimple-icon` base class, that includes the basic styles for rendering the icon.
- `siimple-icon-[icon]` class, that displays the icon.

```html preview="true"
<i class="siimple-icon siimple-icon-archive"></i>
<span class="siimple-icon siimple-icon-home"></span>
```


#### Style your icons

By default, icons will inherit the styles values (color, size) from the parent container. You can customize the following styles using inline styles (with the `style` attribute) or adding a custom class with the CSS properties.


###### Color

You can change the color of the icon setting a `color` or `fill` style property to the tag (using inline styles or using another class):

```html preview="true"
<i class="siimple-icon siimple-icon-cloud" style="color:#66ccff;"></i>
<i class="siimple-icon siimple-icon-cloud" style="color:#ff6347;"></i>
```

You can also use colors classnames from **siimple css** or from **siimple colors** toolkits:

```html preview="true"
<i class="siimple-icon siimple-icon-shield siimple--text-primary"></i>
<i class="siimple-icon siimple-icon-shield-check siimple--text-success"></i>
<i class="siimple-icon siimple-icon-shield-cross siimple--text-error"></i>
```


###### Sizing

You can change the size of the icon setting a `font-size` style property to the tag (using a custom class or using inline styles).


```html preview="true"
<i class="siimple-icon siimple-icon-user" style="font-size:40px"></i>
<i class="siimple-icon siimple-icon-user" style="font-size:60px"></i>
<i class="siimple-icon siimple-icon-user" style="font-size:80px"></i>
```


###### Transforms

You can use CSS transforms to customize your icon.

```html preview="true"
<!-- Rotate the icon -->
<i class="siimple-icon siimple-icon-rocket" style="transform:rotate(90deg);"></i>
<i class="siimple-icon siimple-icon-rocket" style="transform:rotate(180deg);"></i>

<!-- Flip horizontally and vertically -->
<i class="siimple-icon siimple-icon-rocket" style="transform:scaleX(-1);"></i>
<i class="siimple-icon siimple-icon-rocket" style="transform:scaleY(-1);"></i>
```



