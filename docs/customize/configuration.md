---
title: "Configuration"
---

# Configuration


**Siimple** is based in a set of configuration rules written in SCSS, where you can define your theme, the components that you need to include and additional plugins and styles.

This is an example of a configuration file for **siimple**: 

```scss
// index.scss 

@use "siimple/colors" as colors;
@use "siimple/plugins" as plugins;

@use "siimple" with (
    $prefix: "siimple-",
    $theme: (
        "backgrounds": (
            "body": #ffffff,
        ),
        "colors": (
            "primary": colors.get-color("blue", 500),
            "secondary": colors.get-color("mint", 600),
            "body": colors.get-color("gray", 800),
        ),
        "fonts": (
            "body": (Roboto, sans-serif),
            "heading": (Montserrat, sans-serif),
            "monospace": monospace,
        ),
    ),
    $flags: (
        "add-body-styles": true,
        "add-core-components": true,
        "add-experimental-components": true,
    ),
    $plugins: (
        plugins.reboot(),
    ),
);
```

### Prefix

The `$prefix` section allows you to customize the prefix that will be used for naming the components of **siimple**. Using a prefix is really useful to prevent naming collision with your custom classes or with other CSS libraries.

For example, you can use `si-` as prefix by setting the `$prefix` section:

```scss
@use "siimple" with (
    $prefix: "si-",

    // ...
);
```

Now every component class will have the configured prefix:

```css
.si-btn {
    /* ... */
}
.si-btn.is-primary {
    /* ... */
}
.si-btn.is-secondary {
    /* ... */
}
```

You can disable the prefix passing an empty string to the `$prefix` section:

```scss
@use "siimple" with (
    $prefix: "",

    // ...
);
```


### Theme

The `$theme` section allows you to specify your custom theme configuration. A theme should contain the following data objects: 

- **Breakpoints**: for adding or customizing the breakpoints used in your project to define responsive styles.
- **Scales**: list of CSS properties specific for your project.

```scss
@use "siimple/colors" as colors;

@use "siimple" with (
    $theme: (
        "breakpoints": (
            "mobile": ("max": 600px),
        ),
        "backgrounds": (
            "body": #ffffff,
        ),
        "colors": (
            "primary": colors.get-color("blue", 500),
            "secondary": colors.get-color("mint", 600),
            "body": colors.get-color("gray", 800),
        ),
        "fonts": (
            "body": (Roboto, sans-serif),
            "heading": (Montserrat, sans-serif),
            "monospace": monospace,
        ),
    ),
    // ...
);
```

Visit the [theming customization guide](/customize/theme) to read more about how to define your custom theme.


### Variants

You can use the `$variants` section to customize the style of the components provided by **siimple** or included using plugins. 

```scss
@use "siimple" with (
    $variants: (
        "button": (
            "default": (
                "border-radius": 0px,
            ),
        ),
    ),
    // ...
);
```

Visit the [variants customization guide](/customize/variants) to read more about using variants.


### Plugins

The `$plugins` section is where you can provide the list of plugins that you want to include. Plugins allow you to add extra components, helpers and styles for **siimple** that will use your custom theme configuration. 

```scss
@use "siimple/plugins" as plugins;

@use "siimple" with (
    $plugins: (
        plugins.reboot(),
        plugins.icons(),
    ),
);
```

You can read more about built-in plugins in the **Plugins** section.


### Body styles

In the `$body` section you can customize the `<body>` element styles. By default **siimple** will apply the following styles to the `<body>` element:

```scss
@use "siimple" with (
    $body: (
        "background-color": "body",
        "color": "body",
        "font-family": "body",
        "font-size": "body",
        "font-weight": 400,
        "line-height": "body",
    ),
);
```

You can prevent adding styles to the `<body>` element adding the `"add-body-styles": false` flag in the `$flags` section.


### Configuration flags

Use the `$flags` to enable or disable some features of **siimple**. 

| Flag | Description |
|------|-------------|
| `"add-body-styles"` | Enable or disable applying styles to the `<body>` element. Default is `true`. |
| `"add-core-components"` | Enable or disable core components. Default is `true`. |
| `"add-experimental-components"` | Enable or disable experimental components. Default is `true`. |

This is the default flags configuration:

```scss
@use "siimple" with (
    $flags: (
        "add-body-styles": true,
        "add-core-components": true,
        "add-experimental-components": true,
    ),
);
```


### Additional styles

You can define additional styles in the `$styles` section. This is also the place where you can use the theme values defined in your `$theme` section.

```scss
@use "siimple" with (
    $styles: (
        ".heading": (
            "color": "body",
            "font-size": 2rem,
            "font-weight": 700,
            "mt": 0.5rem,
            "mb": 1rem,
        ),
    ),
);
```

All styles declared in this section should follow the [styles syntax](/guides/styles).
