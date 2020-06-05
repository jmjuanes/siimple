---
title: "Icons Cheatsheet"
description: "All icons available in siimple icons"
--- 

<style>
    .icon {
        padding: 5px;
        line-height: 20px !important;
        border-radius: 5px;
    }
    .icon:hover {
        background-color: var(--siimple-gray0);
    }
    .icon-preview .siimple-icon::before {
        line-height: 20px !important;
    }
    .icon-id {
        font-size: 14px;
    }
    .icon-unicode {
        color: var(--siimple-gray4);
        font-size: 12px;
    }
</style>

The complete set of **{{data.icons.length}} icons** in version **{{package.version}}**.

{{#each data.iconsCategories as |category|}}
<div class="siimple-h4 siimple--text-capitalize">{{category.id}}</div>
<div class="siimple-row">
    {{#each ../data.iconsList}}
    {{#equal category.id this.categories}}
    <div class="siimple-column siimple-column--4 siimple-column--sm-12">
        <div class="siimple-media icon">
            <div class="siimple-media-start icon-preview">
                <i class="siimple-icon siimple-icon-{{this.id}}"></i>
            </div>
            <div class="siimple-media-content icon-id">{{this.id}}</div>
            <div class="siimple-media-end icon-unicode">
                {{unicodeParser this.unicode}}
            </div>
        </div>
    </div>
    {{/equal}}
    {{/each}}
</div>
<div class="siimple--text-small siimple--text-muted siimple--pt-2">
    <strong>{{category.count}} icons</strong> on this category.
</div>
{{/each}}


