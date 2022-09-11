# @siimple/icons

Siimple icons in JSON format.

## Installation

Use **npm** or **yarn** for adding this package to your project:

```bash
$ yarn add @siimple/icons
``` 

## Usage

This package export all icons as a JavaScript object. The icon ID is the key, and as a value that is an object with the following properties:

- `path`: the icon SVG path in string format.
- `category`: the category which the icon belongs to (for example `arrows` or `interfaces`).

Example: 

```json
{
    "arrow-right": {
        "category": "arrows",
        "path": "...",
    },
    // ...
}
```

All icons have a size of 24x24 pixels and a padding of 2 pixels.

# License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
