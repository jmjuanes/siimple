---
title: "Migration guide"
description: "Coming from older versions? Start here!"
--- 


The first major change that we introduced in `v4.0.0` is that we changed our published package from `siimple` to `@siimple/css`. Also, we have extracted the experimental modules introduced in `v3.2.0` to a new package called `@siimple/experiments`.

#### Update the package

First you should change to this new package in your `package.json` file:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
  "dependencies": {
      . . .
<strong class="siimple--text-error">-     "siimple": "^3.3.1",</strong>
<strong class="siimple--text-success">+     "@siimple/css": "^{{ package.version }}",</strong>
      . . .
  }
</pre>

Or run the following **npm** commands:

```bash
## Remove the old siimple package
$ npm unistall --save siimple

## Install the new package
$ npm install --save @siimple/css
```


#### Update scss imports

We have switched to the new `@use` rule instead of the `@import`, to take advantage of the new sass module system. You can read more about the [new module system here](https://sass-lang.com/blog/the-module-system-is-launched).

So in `v4.x.x` versions, you should use the `@use` rule for importing the **siimple css** package in your scss files:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- @import "siimple";</strong>
<strong class="siimple--text-success">+ @use "@siimple/css";</strong>
</pre>

Also, we have removed the leading underscore character of all `.scss` files, so when importing individual modules you should also remove it:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- @import "siimple/scss/elements/_btn.scss";</strong>
<strong class="siimple--text-success">+ @use "@siimple/css/scss/elements/btn.scss";</strong>
</pre>



#### Renamed styles

##### Grid

The `siimple-grid-row` class has been renamed as `siimple-row`, and the `siimple-grid-col` has been renamed as `siimple-column`. The `siimple-grid` class is no longer needed for building a grid (because we have migrated to a flexbox implementation of the grig), so you can remove it:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- &lt;div class="siimple-grid"&gt;</strong>
<strong class="siimple--text-error">-     &lt;div class="siimple-grid-row"&gt;</strong>
<strong class="siimple--text-error">-         &lt;div class="siimple-grid-col siimple-grid-col--6"&gt;Col 1&lt;/div&gt;</strong>
<strong class="siimple--text-error">-         &lt;div class="siimple-grid-col siimple-grid-col--6"&gt;Col 2&lt;/div&gt;</strong>
<strong class="siimple--text-error">-     &lt;/div&gt;</strong>
<strong class="siimple--text-error">- &lt;/div&gt;</strong>
<strong class="siimple--text-success">+ &lt;div class="siimple-row"&gt;</strong>
<strong class="siimple--text-success">+     &lt;div class="siimple-column"&gt;Col 1&lt;/div&gt;</strong>
<strong class="siimple--text-success">+     &lt;div class="siimple-column"&gt;Col 2&lt;/div&gt;</strong>
<strong class="siimple--text-success">+ &lt;/div&gt;</strong>
</pre>

Also, you do not have to specify the size of columns if you want **an equal width**. That is, if you want a 3 columns grid, simply add three `<div>` elements only with the class `siimple-column`.

##### Text colors helpers

We have renamed all text colors helpers: now you should use `siimple--text-[color]` instead of the old `siimple--color-[color]`:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- &lt;span class="siimple--color-error"&gt;Error!&lt;/span&gt;</strong>
<strong class="siimple--text-success">+ &lt;span class="siimple--color-error"&gt;Error!&lt;/span&gt;</strong>
</pre>

##### Paragraph lead

We have switched the `siimple-paragraph--lead` modifier to a single element class `siimple-lead`:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- &lt;div class="siimple-paragraph siimple-paragraph--lead"&gt;</strong>
<strong class="siimple--text-success">+ &lt;div class="siimple-lead"&gt;</strong>
    Content of the lead paragraph.
&lt;/div&gt;
</pre>

##### Extra large content size

We have renamed the `siimple-[layout]--extra-large` class to `siimple-[layout]--xlarge`, but keeping the same content size.


##### Rounded border helper

The `siimple--rounded` helper has been renamed as `siimple--border-rounded`. You can find it now in the new [**basic helpers** section](/css/helpers/basic.html).

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- &lt;div class="siimple--rounded"&gt;Rounded border&lt;/div&gt;</strong>
<strong class="siimple--text-success">+ &lt;div class="siimple--border-rounded"&gt;Rounded border&lt;/div&gt;</strong>
</pre>


##### Display helpers

The `siimple--display-flex` and `siimple--display-inline-flex` classes have been renamed as `siimple--flex` and `siimple--flex-inline`, and have been moved to the new flexbox helpers section.

##### Big button

The old `siimple-btn--big` has been renamed as `siimple-btn--large`:

<pre class="siimple-pre siimple--bg-light siimple--text-dark">
<strong class="siimple--text-error">- &lt;div class="siimple-btn siimple-btn--big"&gt;</strong>
<strong class="siimple--text-success">+ &lt;div class="siimple-btn siimple-btn--large"&gt;</strong>
    Large button
&lt;/div&gt;
</pre>


#### Redesigned components

The following components have been redesigned, and may have big changes in comparison with the previous version.

##### Card component

The **card** component has been fully redesigned, so none of the classes of the previous version works in the new version. Please read the [new **card** documentation](/css/components/card.html) to migrate to the new version.

##### Navbar

In the new version we have implementated a fully responsive navbar **without JavaScript**. Please read how it works and the new elements organization in the [**navbar** documentation](/css/layout/navbar.html) page.



#### Deprecations

##### extra-small breakpoint

The **extra-small** (also know as **xs**) has been removed. Now you should use the **small** breakpoint instead.

##### siimple-grid

The `siimple-grid` wrapper class is no longer needed, so it has been removed.

##### siimple-box

The `siimple-box` component has been removed from **siimple css**. You can simulate the box component using helpers classes:

```html
<div class="siimple--p-3 siimple--bg-light siimple--border-rounded">
    <div class="siimple-h3">Box title</div>
    <div>Box detail text</div>
</div>
```



