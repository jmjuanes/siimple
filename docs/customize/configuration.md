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
    $plugins: (
        plugins.reboot(),
        plugins.body(),
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
- **Variants**: custom variants for components styles.

```scss
@use "siimple/colors" as colors;

@use "siimple" with (
    $theme: (
        "breakpoints": (
            "mobile": (null 600px),
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
        "variants": (
            "btn": (
                "default": (
                    "border-radius": 0px,
                ),
            ),
        ),
    ),

    // ...
);
```

Visit the [theming customization guide](/customize/theme) to read more about how to define your custom theme.


### Plugins

The `$plugins` section is where you can provide the list of plugins that you want to include in your **siimple** customization. 


### Additional styles

You can define additional styles for your website in the `$styles` section. This is also the place where you can use the theme values defined in your `$theme` section.


