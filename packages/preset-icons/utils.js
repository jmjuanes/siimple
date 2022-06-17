const namespace = "http://www.w3.org/2000/svg";

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
export const generateSvgFromPath = (path, size, fill) => {
	const items = [
		`<svg xmlns="${namespace}" viewBox="0 0 ${size || "50"} ${size || "50"}" width="1em" height="1em">`,
		`<path fill="${fill || "currentColor"}" d="${path}"/>`,
		`</svg>`
	];
    return encodeSvg(items.join(""));
};

// Generate icon styles
export const generateIconCssFromPath = (path, size, fill) => ({
	"--sii-icon": `url("data:image/svg+xml;utf8,${generateSvgFromPath(path, size, fill)}") no-repeat`,
     mask: "var(--sii-icon) no-repeat",
     maskSize: "100% 100%",
     "-webkit-mask": "var(--sii-icon) no-repeat",
     "-webkit-mask-size": "100% 100%",
});
