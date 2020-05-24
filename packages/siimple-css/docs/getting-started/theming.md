---
title: "Theming"
description: "Customize siimple css"
---

#### Introduction

This guide covers all that you need to learn to customize **siimple css** and build your own version. **siimple css** has been written in [scss](https://sass-lang.com) to take advantage of variables, functions and mixins.


#### Project structure

In your project folder, download the latest version of `@siimple/css`, for example using a package manager (npm or yarn). Read the [installation guide](/css/getting-started/installation.html) for more information.

After installing **siimple css**, your project folder will look like this:

```
your-project/
+-- scss/
|   +-- styles.scss
+-- node_modules/
    +-- @siimple/
        +-- css/
            +-- index.scss
            +-- scss/
```

Ensure that you have **sass** installed in your computer. You will need version `>1.23.0`, that can be installed globally running the following command:

```bash
$ npm install -g sass
``` 

Or you can add it to your project running:

```bash
$ npm install --save-dev sass
```

When compiling your styles, ensure that the `node_modules` folder is listed in your [sass include paths](https://sass-lang.com/documentation/cli/dart-sass#load-path) for resolving the path to the **siimple css** package.

#### Include siimple css

In your file `/scss/styles.scss`, you can import **siimple css** adding the following line;

```scss
//Option 1: load the whole siimple css package
@use "@siimple/css";
```

The previous line includes the whole package, but you can include only some parts of **siimple css**:

```scss
//Option 2: include only some parts of siimple css
@use "@siimple/css/scss/elements/btn.scss";
@use "@siimple/css/scss/components/alert.scss";
```

::: warning title="Important note about imports"
In version `v4.0.0`, **siimple css** switched to the new `@use` rule instead of using the `@import` rule. You can read about the new [sass module system here](https://sass-lang.com/blog/the-module-system-is-launched).
:::


Every variable in **siimple css** includes the `!default` flag, so you can **override** the default value of the variables described in this page including the package with the `with` rule without modifying the source code:

```scss
@use "@siimple/css" with (
    $primary: #3298dc,
    $error: #f32b51
);
```

Note that this works only when you include the whole package, but does not work when you include only some parts of the package. Read more about [configuring sass modules here](https://sass-lang.com/documentation/at-rules/use#configuring-modules).

#### Compile your styles

Run sass from the root of your project folder to compile your styles and generate a single **css** file ready to be used in your website:

```bash
sass --load-path="./node_modules" scss/styles.scss dist/my-siimple.css
```


#### Customize the classnames prefix

In version `v4.0.0`, you can customize (or remove) the prefix of our classes. Simply update the `$prefix` and the `$prefix-helpers` variables with your own prefix. The default values are:

```scss
$prefix: "siimple-";
$prefix-helpers: "siimple--";
```

For example you can remove the prefix loading the **siimple css** styles with the following configuration:

```scss
@use "@siimple/css" with (
    $prefix: "",
    $prefix-helpers: ""
);
```

Now, you can use the styles without the `siimple` prefix:

```html
<div class="btn btn--primary">Hello world</div>
```


#### Typography

##### Font family variables

**siimple css** uses [Roboto](https://fonts.google.com/specimen/Roboto) as the default font family, imported automatically from **Google Fonts**. You can customize the default font using the following variables: 

```scss
$font-url: "https://fonts.googleapis.com/css?family=Roboto:400,700";
$font-default: "Roboto", sans-serif;
```

Also, you can customize the font used in `<code>` or `<pre>` elements with the following variable:

```scss
$font-monospace: monospace;
```

##### Font weight variables 

You can define the font weight for normal and bold texts with the following variables:

```scss
$weight-normal: 400;
$weight-bold: 700;
```

##### Line height variables

```scss
$line-height: 1.5;
```

##### Text variables

```scss
$text-size-small: 13px;
$text-size: 16px;
$text-color: $dark;
$text-font: $font-default;
$text-weight: $weight-normal;
```


#### Colors

The following colors are defined in **siimple css**:
 
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
    <div class="colors siimple--text-white siimple--bg-primary">
        <div class="colors-title">primary</div>
        <div class="colors-hex">#4e91e4</div>
    </div>
    <div class="colors siimple--text-white siimple--bg-secondary">
        <div class="colors-title">secondary</div>
        <div class="colors-hex">#4ccdac</div>
    </div>
    <div class="colors siimple--text-white siimple--bg-success">
        <div class="colors-title">success</div>
        <div class="colors-hex">#4acf7f</div>
    </div>
    <div class="colors siimple--text-white siimple--bg-warning">
        <div class="colors-title">warning</div>
        <div class="colors-hex">#fbc850</div>
    </div>
    <div class="colors siimple--text-white siimple--bg-error">
        <div class="colors-title">error</div>
        <div class="colors-hex">#ee675d</div>
    </div>
</div>
<div class="colors-container">
    <div class="colors siimple--text-white siimple--bg-dark">
        <div class="colors-title">dark</div>
        <div class="colors-hex">#434c56</div>
    </div>
    <div class="colors siimple--text-dark siimple--bg-light">
        <div class="colors-title">light</div>
        <div class="colors-hex">#edeff3</div>
    </div>
</div>

These colors can be overrided using the following sass variables:

```scss
//Base colors
$primary: #4e91e4;
$secondary: #4ccdac;
$success: #4acf7f;
$warning: #fbc850;
$error: #ee675d;
$dark: $gray7;
$light: $gray1;

//Additional colors
$white: #ffffff;
$black: #000000;
```


##### Gray colors

We provide a **cool gray** color schema (added in **v4.0.0**), with 10 different shades of gray:

<div class="siimple-row siimple--text-bold">
    <div class="siimple-column siimple-column--sm-12">
        <div class="siimple--p-3 siimple--bg-gray0 siimple--text-dark">gray0</div>
        <div class="siimple--p-3 siimple--bg-gray1 siimple--text-dark">gray1</div>
        <div class="siimple--p-3 siimple--bg-gray2 siimple--text-dark">gray2</div>
        <div class="siimple--p-3 siimple--bg-gray3 siimple--text-dark">gray3</div>
        <div class="siimple--p-3 siimple--bg-gray4 siimple--text-dark">gray4</div>
    </div>
    <div class="siimple-column siimple-column--sm-12">
        <div class="siimple--p-3 siimple--bg-gray5 siimple--text-white">gray5</div>
        <div class="siimple--p-3 siimple--bg-gray6 siimple--text-white">gray6</div>
        <div class="siimple--p-3 siimple--bg-gray7 siimple--text-white">gray7</div>
        <div class="siimple--p-3 siimple--bg-gray8 siimple--text-white">gray8</div>
        <div class="siimple--p-3 siimple--bg-gray9 siimple--text-white">gray9</div>
    </div>
</div>


#### Breakpoints

**Breakpoints** are useful to customize how the content is displayed depending on the screen width. In **siimple css**, breakpoints are enabled **from the breakpoint value on downwards**, using the `max-width` attribute in the media query.

```
|  <- 544px |
|        sm |
|              <- 768px |
|                    md |
|                         <- 1024px |
|                                lg |
|                                     <- 1280px |
|                                            xl |
```

Breakpoints are available for [grid columns](/css/grid/column.html).


##### Breakpoints variables

The following breakpoints variables are defined by default in **siimple css**:

```scss
$breakpoint-sm: 544px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
```


#### Content size

**Content sizes** classes set the maximum width of the component where is applied, and currently are used in **layout** components (content, footer, jumbotron and navbar). You can customize the size using the following sass variables:

```scss
$content-small: 600px;
$content-medium: 768px;
$content-large: 1024px;
$content-xlarge: 1280px;
```



