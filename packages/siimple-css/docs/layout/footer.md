---
title: "Footer"
description: "A basic component for displaying content in the bottom of your page"
keywords: "foot,footer,content,bottom,layouts,links"
--- 

To create a footer, simply add the class `siimple-footer` to a `div`:

:::snippet lang="html" title="Basic footer"
<div class="siimple-footer" align="center">
    Made with love by <b>siimple<b>
</div>
:::


#### Sizing

Change the size of the footer component adding the classg `siimple-footer--[SIZE]`

```html
<div class="siimple-footer siimple-footer--medium" align="center">
    Made with love by <b>siimple<b>
</div>
```

#### Footer theme

> Added in **v4.0.0**.

Use `siimple-footer--light` or `siimple-footer--dark` to switch the footer to a light or dark theme. 

:::snippet lang="html" title="Light footer"
<div class="siimple-footer siimple-footer--light" align="center">
    Made with love by <b>siimple<b>
</div>
:::

:::snippet lang="html" title="Dark footer"
<div class="siimple-footer siimple-footer--dark" align="center">
    Made with love by <b>siimple<b>
</div>
:::

You can then use a helper background color to customize the background color of the footer. For example, you can combine a dark footer theme with a primary background color.

:::snippet lang="html" title="Dark footer with primary background"
<div class="siimple-footer siimple-footer--dark siimple--bg-primary" align="center">
    Made with love by <b>siimple<b>
</div>
:::



#### Footer title

> Added in **v3.2.0**.

You can turn an element inside your footer to a footer title adding a `siimple-footer-title` class.

:::snippet lang="html" title="Footer title example"
<div class="siimple-footer siimple-footer--light" align="center">
    <div class="siimple-footer-title">My company</div>
</div>
:::


#### Footer subtitle

> Added in **v3.2.0**.
    
Display a subtitle in your footer with `siimple-footer-subtitle` class.

:::snippet lang="html" title="Footer subtitle example"
<div class="siimple-footer siimple-footer--light" align="center">
    <div class="siimple-footer-title">My company</div>
    <div class="siimple-footer-subtitle">We make great things!</div>
</div>
:::


#### Footer links

> Added in **v3.2.0**.

You can style your footer links using the class `siimple-footer-link`. 
By default, links will be displayed as a block, but you can display inline links adding the `siimple-footer-link--inline` modifier.

:::snippet lang="html" title="Footer link example"
<div class="siimple-footer siimple-footer--light">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--8">
            <div class="siimple-footer-title">My company</div>
            <div class="siimple-footer-subtitle">We make great things!</div>
        </div>
        <div class="siimple-grid-col siimple-grid-col--4">
            <a href="#" class="siimple-footer-link">Link 1</a>
            <a href="#" class="siimple-footer-link">Link 2</a>
            <a href="#" class="siimple-footer-link">Link 3</a>
        </div>
    </div>
</div>
:::

You can also display a small link description adding a `div` element inside the link with a `siimple-footer-link-description`.

:::snippet lang="html" title="Footer links example"
<div class="siimple-footer siimple-footer--light">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--8">
            <div class="siimple-footer-title">My company</div>
            <div class="siimple-footer-subtitle">We make great things!</div>
        </div>
        <div class="siimple-grid-col siimple-grid-col--4">
            <a href="#" class="siimple-footer-link">
                Link 1
                <div class="siimple-footer-link-description">
                    Link 1 description
                </div>
            </a>
            <a href="#" class="siimple-footer-link">
                Link 2
                <div class="siimple-footer-link-description">
                    Link 2 description
                </div>
            </a>
            <a href="#" class="siimple-footer-link">
                Link 3
                <div class="siimple-footer-link-description">
                    Link 3 description
                </div>
            </a>
        </div>
    </div>
</div>
:::


#### Footer group

> Added in **v3.2.0**.

Use `siimple-footer-group` to style your links group title.

:::snippet lang="html" title="Footer group example"
<div class="siimple-footer siimple-footer--light">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--6">
            <div class="siimple-footer-title">My company</div>
            <div class="siimple-footer-subtitle">We make great things!</div>
        </div>
        <div class="siimple-grid-col siimple-grid-col--3">
            <div class="siimple-footer-group">Group 1</div>
            <a href="#" class="siimple-footer-link">
                Link 1
                <div class="siimple-footer-link-description">Link 1 description</div>
            </a>
            <a href="#" class="siimple-footer-link">
                Link 2
                <div class="siimple-footer-link-description">Link 2 description</div>
            </a>
        </div>
        <div class="siimple-grid-col siimple-grid-col--3">
            <div class="siimple-footer-group">Group 2</div>
            <a href="#" class="siimple-footer-link">
                Link 3
                <div class="siimple-footer-link-description">Link 3 description</div>
            </a>
            <a href="#" class="siimple-footer-link">
                Link 4
                <div class="siimple-footer-link-description">Link 4 description</div>
            </a>
        </div>
    </div>
</div>
:::


#### Footer rule

> Added in **v3.2.0**. 

Add `siimple-footer-rule` to an element to display an horizontal rule.


