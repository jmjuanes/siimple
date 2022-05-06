# @siimple/preset-helpers

A preset for the **siimple CSS toolkit** for adding helpers for your project.

## Install

```bash
$ npm install --save @siimple/preset-helpers
```

Include the preset styles in your `siimple.config.js` file:

```js
import helpers from "@siimple/preset-helpers";

export default {
    // ...other configuration
    styles: {
        ...helpers.styles,
        // ...other custom styles
    },
};
```

## Usage

Helpers modifiers have the following class pattern:

```
.has-<shortcut>-<name>
.is-<name>
```

Some helpers modifiers, like colors and sizes, always use the `.has-<shortcut>-<name>` pattern. In this case,

- `shortcut` is the CSS attribute. For example we will use `bg` for the `background-color` and `w` for the `width`.
- `name` is the CSS value to apply. For example `full` usually will apply a `100%` value.

Example:

```html
<button class="button has-w-full has-bg-primary has-text-center">
    Example button
</button>
```

Other simple helpers modifiers will use the `.is-<name>` pattern. Example:

```html
<span class="is-capitalized">Hello world!</span>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
