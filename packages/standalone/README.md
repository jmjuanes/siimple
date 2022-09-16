# @siimple/standalone (Experimental)

Standalone script for using **siimple** directly in browser.

> **Note**: this is an experimental package. API may change at any time. **Please do not use it in production**.

## When to use @siimple/standalone

You should normally not use `@siimple/standalone` and use instead the CLI or the PostCSS plugin to generate a CSS file with the **siimple** styles.

However, there are some valid use cases:

- For rapid prototyping and development purposes: you can get started with **siimple** without any additional setup, just including a simple `<script>` tag in your HTML file.
- For using in some REPL environments, like [JSFiddle](https://jsfiddle.net) or [CodePen](https://codepen.io).

## Alternatives to @siimple/standalone

You can use our [Playground App](https://www.siimple.xyz/playground) to get started with **siimple** and for rapid prototyping without any other setup.

## Installation

The easiest way for adding `@siimple/standalone` to your project is including a `<script>` tag in your HTML file importing this package from [esm.sh](https//esm.sh) CDN:

```html
<script type="module" src="https://esm.sh/@siimple/standalone"></script>
```

> **NOTE**: remember to add the `type="module"` attribute in the `<script>` tag.

You can also install this package in your project using **npm**:

```bash
 npm install --save @siimple/standalone
```

## Usage

When loaded in a browser, `@siimple/standalone` will automatically compile the configuration provided in a `<script>` tag with the `type="text/siimple"` attribute and include the output CSS in a `<style>` tag.

```html
<!-- Load @siimple/standalone -->
<script type="module" src="https://esm.sh/@siimple/standalone"></script>

<!-- Your custom configuration there -->
<script type="text/siimple">
    export default {
        // ...your theme configuration
    };
</script>
```

You can import additional packages to customize your theme. All packages will be imported automatically from the [esm.sh](https//esm.sh) CDN service:

```html
<script type="text/siimple">
    import base from "@siimple/preset-base";

    export default {
        ...base,
        // ...your configuration
    };
</script>
```

Using an external script is also supported:

```html
<script type="text/siimple" src="theme.js"></script>
```

## Prevent Flash of Unstyled Content

You can prevent the common [Flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) effect in your webpage by adding a new `<style>` tag in your HTML with a `.unstyled {display:none;}` css, and assign this `unstyled` class to the `<body>` element to make it hidden by default:

```html
<html>
    <head>
        <!-- ...your head content -->
        <style>.unstyled {display: none;}</style>
    </head>
    <body class="unstyled">
        <!-- ...your body content -->
    </body>
</html>
```

After **siimple** is compiled, it will automatically reset this class and display the content of your body styled.

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
