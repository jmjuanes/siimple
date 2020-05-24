---
title: "Flexbox"
description: "Flexbox helpers"
---

The flexobx helpers described in this page helps you to design flexbox responsive layouts in a more efficient way. 
If you are new with flexbox, you can start reading this [**introduction to flexbox**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) from the **MDN Docs**.

#### Flexbox container

To create a flexbox container simply add one of the following classes:

| Class | Description |
| `siimple--flex` | The element behaves like a block-level flex container. |
| `siimple--flex-inline` | The element behaves like an inline-level flex container. |


#### Flex direction

Use the following classes to define the direction of the flex items in the main axis: 

| Class | Description |
| `siimple--flex-row` | Set a horizontal direction, left to right (**default**). |
| `siimple--flex-row-rev` | Set a horizontal direction, but right to left. |
| `siimple--flex-column` | Set a vertical direction, top to bottom. |
| `siimple--flex-column-rev` | Set a vertical direction, but bottom to top. |


#### Horizontal alignment

Use these classes to define alignment of the flex items in the **main axis** and distribute the space between them. By default, the items are aligned to the **left**.

| Class | Description |
| `siimple--flex-left` | Align items to the left (start of the flex direction) (**default**). |
| `siimple--flex-right` | Align items to the right (end of the flex direction). |
| `siimple--flex-center` | Align items to the center. |
| `siimple--flex-between` | Distribute items evenly: the first item on the start line, last item on the end line. |
| `siimple--flex-around` | Distribute items evenly in the line with equal space around them. |


#### Vertical alignment

Use the following classes to define the alignment of the flex items in the **cross axis** (perpendicular to the main axis). By default, items will fit the height of their container.

| Class | Description |
| `siimple--flex-strech` | Items will expand to fit the full height of the container (**default**). |
| `siimple--flex-top` | Align items to the top (start of the cross axis). |
| `siimple--flex-middle` | Align items to the middle (center of the cross axis). |
| `siimple--flex-bottom` | Align items to the bottom (end of the cross axis). |


#### Wrap items

By default, items will try to fit in only one line. Use the following classes to change that and allow items to wrap as needed:

| Class | Description |
| `siimple--flex-nowrap` | Force the items to fit in only one line. (**default**). |
| `siimple--flex-wrap` | Allow items to wrap onto multiple lines if needed. |


#### Order

Use the following classes to change the order of the flex item:

| Class | Description |
| `siimple--flex-first` | Item will be forced to display as the first one. |
| `siimple--flex-last` | Item will be forced to display as the last one. |



