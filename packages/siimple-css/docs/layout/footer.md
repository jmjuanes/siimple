---
title: "Footer"
description: "A basic component for displaying content in the bottom of your page"
keywords: "foot,footer,content,bottom,layouts,links"
--- 

A **footer** is a basic layout component usually used for displaying content in the bottom of the website. A footer can be created adding a `siimple-footer` class name to a `<div>` tag:

```html preview="true"
<div class="siimple-footer" align="center">
    Made with love by <strong>siimple</strong>
</div>
```


#### Breakpoints

By default the navbar has the maximun width minus the `20px` of padding left and right. You can change the width of the footer element using one of the following breakpoints class names:

| Class | Description |
| `siimple-footer--small` | It will have a maximum width of `600px`. |
| `siimple-footer--medium` | It will have a maximum width of `768px`. |
| `siimple-footer--large` | It will have a maximum width of `960px`. |
| `siimple-footer--xlarge` | It will have a maximum width of `1280px`. |

On screens with sizes lower than the specified in the breakpoint class, the footer will have the maximun width.

```html
<div class="siimple-footer siimple-footer--medium">
    <!-- Footer content -->
</div>
```


#### Links

You can style your footer links using the class `siimple-footer-link`. 

```html
<div class="siimple-footer">
    <a href="" class="siimple-footer-link">Link 1</a>
    <a href="" class="siimple-footer-link">Link 2</a>
    <a href="" class="siimple-footer-link">Link 3</a>
</div>
```


