# @siimple/standalone

Standalone build of **siimple** for use directly in browser.

> **Note**: this is an experimental package. API may change at any time. **Please do not use it in production**.

## Installation

Install this package using **npm**:

```bash
 npm install --save @siimple/standalone
```

Or include it directly in your HTML file from **unpkg**:

```html
<script src="https://unpkg.com/@siimple/standalone/siimple-standalone.js"></script>
```

## Usage

When loaded in a browser, `@siimple/standalone` will automatically compile the configuration provided in a `<script>` tag with type `text/siimple` and include the output CSS in a `<style>` tag.

```html
<!-- Load @siimple/standalone -->
<script src="https://unpkg.com/@siimple/standalone/siimple-standalone.js"></script>

<!-- Your custom configuration there -->
<script type="text/siimple">
    export default {
        // ...your configuration
    };
</script>   
```

You can provide your configuration as an external script:

```html
<script type="text/siimple" src="theme.js"></script>
```

## API

### configure

> Siimple.configure(options)

Customize the behaviour of the siimple config parser and compiler. The following option are allowed:

- `cdnUrl`: URL to use for resolving modules. Default is `"https://esm.sh/`.
- `preventFlashOfUnstyledContent`: a boolean to prevetn the common [Flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). Default is `true`.

Example:

```html
<!-- Load @siimple/standalone -->
<script src="https://unpkg.com/@siimple/standalone/siimple-standalone.js"></script>

<!-- Disable automatically generate siimple -->
<script type="text/javascript">
    Siimple.configure({
        cdnUrl: "https://unpkg.com/",
        preventFlashOfUnstyledContent: true,
    });
</script>
```

### registerExternal

> Siimple.registerExternal(name, obj)

Registers a new external module to resolve in the configuration using the `import` statement. The `name` argument is the module name (for example `@siimple/preset-base`) and `obj` is the object that will be returned im the `import` statement.

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
