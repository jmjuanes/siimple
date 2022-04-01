// Default code for playground
export const defaultHtml = `
<div class="has-p-12 has-h-full has-d-flex has-flex-column has-items-center has-justify-center">
    <div class="card has-bg-coolgray-100">
        <div class="has-p-8 has-mb-8 has-bg-blue-500 has-radius has-text-center">
            <i class="icon-siimple has-pr-3 has-text-5xl has-text-white"></i>
        </div>
        <div class="title is-4 has-mb-6">
            Welcome to the Siimple Playground tool
        </div>
        <div class="paragraph">
            This tiny tool allows you to try <strong>siimple</strong> in your browser,
            without installing anything in your computer. Great for learning or
            prototyping using the <strong>siimple toolkit</strong>.
        </div>
        <div class="paragraph has-mb-0">
            Feel free to edit and play with this code <i class="icon-heart"></i>
        </div>
    </div>
</div>
`.trim();

// Default configuration for playground
export const defaultConfig = `
import colors from "siimple/colors";

export default {
    prefix: "",
    scales: {},
    variants: {},
    plugins: [],
};
`.trim();
