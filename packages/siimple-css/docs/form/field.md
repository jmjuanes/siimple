---
title: "Form field"
description: "A simple form container to group form sections"
keywords: "form,field,groups"
---

All the different sections of the form should be contained in `fields`. This way, every part of your form will be easily identifiable. Just create a `div` with the class `siimple-field`:

```html
<div class="siimple-field"></div>
```

Separate the different sections depending on their purpose with fields and add `labels` (using the class `siimple-field-label`) and `helpers` (using the class `siimple-field-helper`) to them. You'll end up with a clear and intuitive form that will provide a great user experience:

:::snippet lang="html" title="Basic field example"
<div class="siimple-field">
    <div class="siimple-field-label">Your email</div>
    <input type="text" class="siimple-input siimple-input--fluid" placeholder="you@company.com">
    <div class="siimple-field-helper">This field can't be empty</div>
</div>
<div class="siimple-field">
    <div class="siimple-field-label">Your comment</div>
    <textarea class="siimple-textarea siimple-textarea--fluid"></textarea>
    <div class="siimple-field-helper">This field can't be empty</div>
</div>
:::


