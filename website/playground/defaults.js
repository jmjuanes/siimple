// Default code for playground
export const defaultHtml = `
<div class="is-flex has-direction-column has-items-center has-justify-center has-w-full has-h-96">
    <div class="has-w-32 has-h-32 has-bg-dark is-pill">
        <div class=" has-w-full has-h-full is-flex has-items-center has-justify-center">
            <i class="si-siimple has-size-8 has-text-white"></i>
        </div>
    </div>
    <div class="has-mt-6 has-size-3 has-w-96 has-pl-8 has-pr-8 has-text-center">
        The <b>minimal</b> and <b>themeable</b> CSS toolkit.
    </div>
    <div class="has-mt-2 is-semitransparent">
        www.siimple.xyz
    </div>
</div>

`.trim();

// Default configuration for playground
export const defaultConfig = `
// You can import our color palette to create your theme
// import colors from "@siimple/colors";

// You can import presets to extend siimple using reusable styles and themes
import base from "@siimple/preset-base";

export default {
    modules: {},
    useBorderBox: true,
    useRootStyles: true,
    ...base,
    styles: {
        // Include your custom styles
    },
};

`.trim();
