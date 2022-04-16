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
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="1em" height="1em"><path fill="${fill}" d="${path}"/></svg>`;
};

export default {
    styles: {
        '[class^="icon-"],[class*=" icon-"]': {
            // backgroundColor: "currentColor",
            // display: "inline-block",
            // height: "1em",
            // verticalAlign: "text-bottom",
            // width: "1em",
            // test
            alignSelf: "center",
            display: "inline-flex",
            lineHeight: "1",
            textRendering: "auto",
            verticalAlign: "-0.125em",
        },
        '[class^="icon-"]:before,[class*=" icon-"]:before': {
            content: "''",
            display: "inline-block",
            width: "1em",
            height: "1em",
            backgroundColor: "currentColor",
        },
        ...Object.fromEntries(iconsList.map(icon => {
            const selector = `.icon-${icon.name}:before`;
            const svg = svgFromPath(icon.path, "currentColor");
            const url = `url("data:image/svg+xml;utf8,${encodeSvg(svg)}") no-repeat`;
            const styles = {
                "--siimple-icon": url,
                mask: "var(--siimple-icon) no-repeat",
                maskSize: "100% 100%",
                "-webkit-mask": "var(--siimple-icon) no-repeat",
                "-webkit-mask-size": "100% 100%",
            };
            return [selector, styles];
        })),
    },
};
