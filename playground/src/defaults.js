// Default code for playground
export const defaultHtml = `
<div class="has-d-flex has-flex-column has-items-center has-justify-center has-s-full has-minh-128">
    <div class="has-s-32 has-bg-coolgray-800 has-radius-full">
        <div class=" has-s-full has-d-flex has-items-center has-justify-center">
            <i class="icon-siimple has-text-5xl has-text-white"></i>
        </div>
    </div>
    <div class="has-mt-6 has-text-xl has-maxw-128 has-px-8 has-text-center">
        The <b>minimal</b> and <b>themeable</b> CSS toolkit.
    </div>
    <div class="has-mt-2 has-text-coolgray-600">
        www.siimple.xyz
    </div>
</div>

`.trim();

// Default configuration for playground
export const defaultConfig = `
// You can import our color palette to create your theme
// import colors from "siimple/colors";

// You can import presets to extend siimple using reusable styles and themes
// import markup from "@siimple/preset-markup";
import reboot from "@siimple/preset-reboot";
import utilities from "@siimple/preset-utilities";
import icons from "@siimple/preset-icons";

export default {
    styles: {
        ...reboot.styles,
        ...utilities.styles,
        ...icons.styles,
    },
};

`.trim();
