---
title: "Tabs"
description: "A horizontal navigation component"
--- 

Tabs are a great way to separate the info contained in your `content` section. To create them, first you have to create the `tabs` container. Just put a `div` with the class `siimple-tabs` to get started. Then, add a `tab`: they're just `divs` where you use the class `siimple-tabs-item`:

Also, remember to add `siimple-tabs-item--active` to the tab you want to be selected (for example, the current one that the user will be at).

:::snippet lang="html" title="Basic tabs example"
<div class="siimple-tabs">
    <div class="siimple-tabs-item">Tab 1</div>
    <div class="siimple-tabs-item siimple-tabs-item--active">
        Tab 2
    </div>
    <div class="siimple-tabs-item">Tab 3</div>
</div>
:::


