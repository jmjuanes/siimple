---
title: "Media Object"
description: "Design repetitive components"
--- 

The **media object** is an ui component usually used for repeatable content. Children of the media component are positioned without wrapping, in only one line.

For creating a media object component, add a wrapper element (for example a `<div>` element) with the `siimple-media` class, and distribute the content using the following classes:

- The left side of the media, with the class `siimple-media-start`. 
- The main content of the media, with the class `siimple-media-content`.
- The right side of the media, with the class `siimple-media-end`.

```html preview="true"
<div class="siimple-media">
    <div class="siimple-media-start siimple--bg-light siimple--p-3">
        Left
    </div>
    <div class="siimple-media-content siimple--bg-light siimple--p-3">
        Main content
    </div>
    <div class="siimple-media-end siimple--bg-light siimple--p-3">
        Right
    </div>
</div>
```

The media object is useful for example for displaying comments in a blog site. Below is a example of a blog comment using the media component.

```html preview="true"
<div class="siimple-media">
    <div class="siimple-media-start">
        <div class="siimple--bg-dark siimple--border-rounded siimple--p-4"></div>
    </div>
    <div class="siimple-media-content">
        <div class="siimple-h6 siimple--mb-0">User 1234</div>
        <div class="siimple-paragraph siimple--mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum.
        </div>
    </div>
</div>
```


