---
title: "Btn"
description: "The essential and classic button element"
---

Add `siimple-btn` to a `button`, `input[type="submit"]` or `div` tag for creating a basic button.

:::snippet title="Basic button" lang="html"
<button class="siimple-btn">My button</button>
:::


#### Colored buttons

You can set the button color by adding a `siimple-btn--[COLOR]` class to the button. Check the list of the available colors in the [theming section](/css/getting-started/theming.html).

:::snippet title="Colored buttons" lang="html"
<button class="siimple-btn siimple-btn--primary siimple--mb-1">
    Primary button
</button>
<button class="siimple-btn siimple-btn--secondary siimple--mb-1">
    Secondary button
</button>
<button class="siimple-btn siimple-btn--success siimple--mb-1">
    Success button
</button>
<button class="siimple-btn siimple-btn--warning siimple--mb-1">
    Warning button
</button>
<button class="siimple-btn siimple-btn--error siimple--mb-1">
    Error button
</button>
:::


#### Disabled button

Add `siimple-btn--disabled` to change the button style to disabled.

:::snippet title="Disabled button" lang="html"
<button class="siimple-btn siimple-btn--primary siimple-btn--disabled">
    Disabled button
</button>
:::


#### Fluid button

> Added in **v3.1.0**.

Add `siimple-btn--fluid` class to change the button width to the full parent width.

:::snippet title="Fluid button" lang="html"
<button class="siimple-btn siimple-btn--primary siimple-btn--fluid">
    Fluid button
</button>
:::


#### Small button

> Added in **v3.2.0**

Add `siimple-btn--small` class for a smaller button.

:::snippet title="Small button" lang="html"
<button class="siimple-btn siimple-btn--primary siimple-btn--small">
    Small button
</button>
:::


#### Big button

> Added in **v3.3.0**.

Add `siimple-btn--big` class to create a bigger button.

:::snippet title="Big button" lang="html"
<button class="siimple-btn siimple-btn--primary siimple-btn--big">
    Big button
</button>
:::


#### Group buttons

> Added in **v3.3.0**

Add `siimple-btn-group` class to wrap a collection of `siimple-btn` elements.

:::snippet title="Group buttons" lang="html"
<div class="siimple-btn-group">
    <button class="siimple-btn siimple-btn--primary">Btn 1</button>
    <button class="siimple-btn siimple-btn--primary">Btn 2</button>
    <button class="siimple-btn siimple-btn--primary">Btn 3</button>
</div>
:::


