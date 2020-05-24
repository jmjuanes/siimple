---
title: "Content"
description: "A responsive component to center content horizontally"
keywords: "content,container,center,layouts,responsive"
--- 

A **content** is a layout component that divides your website in section and places the information it contains in the center of the window in every moment. Add the class `siimple-content` to your container `<div>` to use it:

```html
<div class="siimple-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
```

#### Content breakpoints

By default the container has the maximun width minus the `20px` of padding left and right. You can change the width of the content element using one of the following breakpoints class names:

| Class | Description |
| `siimple-content--small` | It will have a maximum width of `600px`. |
| `siimple-content--medium` | It will have a maximum width of `768px`. |
| `siimple-content--large` | It will have a maximum width of `960px`. |
| `siimple-content--xlarge` | It will have a maximum width of `1280px`. |

On screens with sizes lower than the specified in the breakpoint class, the container will have the maximun width.

```html
<div class="siimple-content siimple-content--medium">
    Max 768px container
</div>
```

