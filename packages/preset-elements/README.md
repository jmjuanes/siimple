# @siimple/preset-elements

A preset for the **siimple CSS toolkit** that includes a collection of basic UI elements like buttons, alerts, and more!

## Install

```bash
$ npm install --save @siimple/preset-elements
```

Include the elements styles in your `siimple.config.js` file:

```js
import elements from "@siimple/preset-elements";

export default {
    // ...other configuration
    styles: {
        ...elements.styles,
        // ...other custom styles
    },
};
```

### Usage

Just apply the element classname to the HTML tag that you want to style:

```html
<button class="button">Submit</button>
```

Some elements will provide additional modifiers that you can use to change the default style of the element:

```html
<button class="button is-secondary is-full">
    Full width button
</button>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
