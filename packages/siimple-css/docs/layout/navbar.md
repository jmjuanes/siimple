---
title: "Navbar"
description: "A horizontally navigation component"
keywords: "navbar,nav,navigation,top,layouts,header"
--- 

A **navbar** is a basic horizontal navigation component. It is just a `<div>` element with the class `siimple-navbar`. Generally it contains the following child elements:

- `siimple-navbar-brand`: generally contains the **logo** of the website. Is placed at the left side of the navbar and is **always visible**.
- `siimple-navbar-toggle`: a hamburger icon, only visible on mobile devices.
- `siimple-navbar-menu`: a container for the navbar links that is placed at the right side of the navbar. Is visible on desktop devices and hidden on mobile devices.

Here is a full navbar example:

```html preview="true"
<div class="siimple-navbar siimple-navbar--dark">
    <!-- Navbar brand logo -->
    <div class="siimple-navbar-brand">
        <strong>Website Brand</strong>
    </div>
    <!-- Navbar toggle -->
    <div class="siimple-navbar-toggle" tabindex="0">
        <div class="siimple-navbar-navicon"></div>
    </div>
    <!-- Navbar menu -->
    <div class="siimple-navbar-menu">
        <div class="siimple-navbar-item">
            <a href="" class="siimple-navbar-link">Products</a>
        </div>
        <div class="siimple-navbar-item">
            <a href="" class="siimple-navbar-link">About</a>
        </div>
    </div>
</div>
```


#### Color

Costomize the navbar adding one of the siimple colors described in the [theming page](/css/getting-started/theming.html).

```html
<div class="siimple-navbar siimple-navbar--primary">
    <!-- Navbar content -->
</div>
```

#### Breakpoints

By default the navbar has the maximun width minus the `20px` of padding left and right. You can change the width of the navbar element using one of the following breakpoints class names:

| Class | Description |
| `siimple-navbar--small` | It will have a maximum width of `600px`. |
| `siimple-navbar--medium` | It will have a maximum width of `768px`. |
| `siimple-navbar--large` | It will have a maximum width of `960px`. |
| `siimple-navbar--xlarge` | It will have a maximum width of `1280px`. |

On screens with sizes lower than the specified in the breakpoint class, the navbar will have the maximun width.

```html
<div class="siimple-navbar siimple-navbar--medium">
    <!-- Navbar content -->
</div>
```

#### Brand

The navbar brand is a container for your website logo. Remember that the brand is **always visible**, in both desktop (`>1024px`) and mobile devices (`<1024px`).

```html
<div class="siimple-navbar">
    <div class="siimple-navbar-brand">
        Website brand
    </div>
</div>
```


#### Toggle 

The navbar toggle is a hamburger icon, and is only visible **on mobile devices**. The toggle element must have a `tabindex="0"` attribute, in order to allow the menu toggle on mobile devices.

```html
<div class="siimple-navbar">
    <div class="siimple-navbar-toggle" tabindex="0"></div>
</div>
```


#### Menu

The navbar menu is a `<div>` with a `siimple-navbar-menu` class that works as a container for the navbar links or other elements (linke buttons or inputs). 

```html
<div class="siimple-navbar">
    <div class="siimple-navbar-menu">
        <!-- Menu content -->
    </div>
</div>
```

The menu is **always visible** on desktop devices (`>1024px`) and is always placed at the right side of the navbar. On mobile devices (`<1024px`), it is **hidden by default**, and is only visible when the user press the toggle button. 

::: info title="No JavaScript required"
You do not need JavaScript to display the menu on mobile devices. We have implemented a pure css solution, so the  menu is automatically displayed when user clicks on the toggle button.
::: 


#### Menu item

Each item of the navbar menu should be included in a `<div>` tag with the `siimple-navbar-item` class. This is a container where you can place a navigation link element, with the class `siimple-navbar-link`.

```html
<div class="siimple-navbar">
    <div class="siimple-navbar-menu">
        <div class="siimple-navbar-item">
            <a class="siimple-navbar-link">Link</a>
        </div>
    </div>
</div>
```

You can also put other elements inside an item, for example a button or an input element:

```html
<div class="siimple-navbar">
    <div class="siimple-navbar-menu">
        <div class="siimple-navbar-item">
            <a class="siimple-btn siimple-btn--primary">
                Contact us!
            </a>
        </div>
    </div>
</div>
```

#### Navbar link

A navigation link with the class `siimple-navbar-link` that should be added as a child of the `siimple-navbar-item` element.

You can also customize the navbar links status using the class `siimple-navbar-link--active` (for example to indicate the current page) and the class `siimple-navbar-link--disabled`.

```html preview="true"
<div class="siimple-navbar siimple-navbar--light">
    <div class="siimple-navbar-brand">
        <strong>Navbar</strong>
    </div>
    <div class="siimple-navbar-toggle" tabindex="0">
        <div class="siimple-navbar-navicon"></div>
    </div>
    <div class="siimple-navbar-menu">
        <div class="siimple-navbar-item">
            <a href="" class="siimple-navbar-link">Default</a>
        </div>
        <div class="siimple-navbar-item">
            <a href="" class="siimple-navbar-link siimple-navbar-link--active">
                Active
            </a>
        </div>
        <div class="siimple-navbar-item">
            <a href="" class="siimple-navbar-link siimple-navbar-link--disabled">
                Disabled
            </a>
        </div>
    </div>
</div>
```


#### Fixed navbar

You can fix the navbar to the **top of the page** adding the `siimple-navbar--fixed-top` class, or fix the navbar to the **bottom of the page** adding the `siimple-navbar--fixed-bottom` lcass to the parent navbar.

```html
<div class="siimple-navbar siimple-navbar--fixed-top">
    <!-- Navbar content -->
</div>
```


