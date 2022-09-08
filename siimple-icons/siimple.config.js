import icons from "@siimple/icons";

// Encode SVG for using in CSS
// Based on https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
const encodeSvg = str => {
	return str
		.replace(/"/g, "'")
		.replace(/%/g, "%25")
		.replace(/#/g, "%23")
		.replace(/{/g, "%7B")
		.replace(/}/g, "%7D")
		.replace(/</g, "%3C")
		.replace(/>/g, "%3E");
};

// Generate SVG from path
const generateSvgFromPath = path => {
	const items = [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">`,
		`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}"/>`,
		`</svg>`
	];
    return encodeSvg(items.join(""));
};

export default {
    useRootStyles: false,
    useBorderBox: false,
    prefix: "si-",
    modules: [],
    styles: {
        '[class^="{{prefix}}"],[class*=" {{prefix}}"]': {
            alignSelf: "center",
            display: "inline-flex",
            lineHeight: "1",
            textRendering: "auto",
            verticalAlign: "-0.125em",
        },
        '[class^="{{prefix}}"]:before,[class*=" {{prefix}}"]:before': {
            content: "''",
            display: "inline-block",
            width: "1em",
            height: "1em",
            backgroundColor: "currentColor",
        },
        ...Object.fromEntries(Object.keys(icons).map(name => {
            const path = icons[name].path;
            const styles = {
                "--si-icon-path": `url("data:image/svg+xml;utf8,${generateSvgFromPath(path)}") no-repeat`,
                "mask": "var(--si-icon-path) no-repeat",
                "maskSize": "100% 100%",
                "-webkit-mask": "var(--si-icon-path) no-repeat",
                "-webkit-mask-size": "100% 100%",
            };
            return [`.{{prefix}}${name}:before`, styles];
        })),
    },
};
