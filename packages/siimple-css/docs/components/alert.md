---
title: "Alert"
description: "Display block messages"
---

<style>
.siimple-alert:last-child {
    margin-bottom: 0px !important;
}
</style>

Add `siimple-alert` to transform a `div` into an alert. 

:::snippet lang="html" title="Basic alert example"
<div class="siimple-alert siimple-alert--primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
:::

You can specify the alert color by adding `siimple-alert--[COLOR]`.

:::snippet lang="html" title="Colored alerts example"
<div class="siimple-alert siimple-alert--primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--secondary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--success">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--warning">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
<div class="siimple-alert siimple-alert--error">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
:::


#### Alert title

> Added in **v3.1.0**.

You can insert a titile in your alert adding a `div` tag with the class `siimple-alert-title`.

:::snippet lang="html" title="Alert title example"
<div class="siimple-alert siimple-alert--error">
    <div class="siimple-alert-title">Alert title</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
:::


#### Alert close icon

> Added in **v3.2.0**.

You can add a `div` with a `siimple-alert-close` class to display a close button inside the alert component.

:::snippet lang="html" title="Alert with a close icon"
<div class="siimple-alert siimple-alert--warning">
    <div class="siimple-alert-close"></div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
:::

