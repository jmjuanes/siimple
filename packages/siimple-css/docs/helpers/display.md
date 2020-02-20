---
title: "Display"
description: "Customize how the content is displayed in your website"
---

> Added in **v3.1.0**.

Use these classes to change the display value of an element. Available display modifiers: 

- `siimple--display-none`
- `siimple--display-block`
- `siimple--display-inline`
- `siimple--display-inline-block`
- `siimple--display-table`
- `siimple--display-table-cell`
- `siimple--display-table-row`
- `siimple--display-flex`
- `siimple--display-inline-flex`

:::snippet
<style>
.example {
    padding: 5px;
    color: #ffffff;
}
.example:last-child {
    margin-top: 5px;
}
</style>
<div class="example siimple--display-inline-block siimple--bg-primary">
    Display inline block
</div>
<div class="example siimple--display-inline-block siimple--bg-primary example">
    Display inline block
</div>
<div class="example siimple--display-block siimple--bg-error example">
    Display block
</div>
:::


