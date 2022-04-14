import iconsList from "./icons.js";

// Encode SVG Image
// Based on https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
const encodeSvg = svg => {
	return svg
		.replace(/"/g, "'")
		.replace(/%/g, "%25")
		.replace(/#/g, "%23")
		.replace(/{/g, "%7B")
		.replace(/}/g, "%7D")
		.replace(/</g, "%3C")
		.replace(/>/g, "%3E");
};

// Generate SVG from path
const svgFromPath = (path, fill) => {
    return `<svg xmlns="http://www.w3.org/2000/svg"><path fill="${fill}" d="${path}"/></svg>`;
};

export default {
    styles: {
        '[class^="icon-"],[class*=" icon-"]': {
            backgroundColor: "currentColor",
            // boxSizing: "border-box",
            height: "1em",
            maskSize: "100% 100%",
            width: "1em",
        },
        ...Object.fromEntries(iconsList.map(icon => {
            const selector = `.icon-${icon.name}`;
            const svg = svgFromPath(icon.path, "currentColor");
            const styles = {
                mask: `url("data:image/svg+xml;utf8,${encodeSvg(svg)}") no-repeat`,
            };
            return [selector, styles];
        })),
    },
};
