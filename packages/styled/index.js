import {buildStyles} from "@siimple/core";
import base from "@siimple/preset-base";

const globalID = "__styled_siimple__";
let cachedConfig = null;

const hashCode = str => {
    return "sii-" + Math.abs(Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)).toString();
};

const getSheet = root => {
    let target = null;
    if (typeof window === "object") {
        if (root && (target = root.querySelector(`#${globalID}`))) {
            return target;
        }
        target = Object.assign(document.createElement("style"), {
            id: globalID,
            innerHTML: "",
        });
        (root || document.head).appendChild(target);
        return target;
    }
    return {innerHTML: ""};
};

const compile = (styles, sheet, config, cache, isGlobal, isKeyframes) => {
    let compiledStyles = null;
    if (isGlobal) {
        compiledStyles = buildStyles(styles, config);
    }
    else if (isKeyframes) {
        compiledStyles = buildStyles({"@keyframes __siimple": styles}, config);
    }
    else {
        compiledStyles = buildStyles({".__siimple": styles}, config);
    }
    const hash = hashCode(compiledStyles);
    if (!cache.has(hash)) {
        cache.add(hash);
        compiledStyles = compiledStyles.replaceAll("__siimple", hash);
        sheet.innerHTML = sheet.innerHTML + compiledStyles;
    }
    // Return the CSS classname reference
    return hash;
};

export const create = (config, root = null) => {
    const sheet = getSheet(root);
    const cache = new Set();
    return {
        css: s => compile(s, sheet, config, cache, false, false),
        globalCss: s => compile(s, sheet, config, cache, true, false),
        keyframes: s => compile(s, sheet, config, cache, false, true),
        extractCss: () => sheet.innerHTML || "",
        reset: () => {
            sheet.innerHTML = "";
            cache.clear();
        },
    };
};

const getCachedConfig = () => {
    return cachedConfig || (cachedConfig = create({...base}));
};

export const css = s => getCachedConfig().css(s);
export const globalCss = s => getCachedConfig().globalCss(s);
export const keyframes = s => getCachedConfig().keyframes(s);
export const extractCss = () => getCachedConfig().extractCss();

// Tiny utility for conditionally joining classNames
const parseClassNames = items => {
    if (typeof items === "string") {
        return items.split(" ").filter(item => item.length);
    }
    else if (Array.isArray(items)) {
        return items.filter(item => typeof item === "string" && item.length); 
    }
    else if (typeof items === "object") {
        return Object.keys(items || {}).filter(key => !!items[key]);
    }
    //Over value --> return an empty array
    return [];
};
export const classNames = (...args) => {
    return (args || []).map(arg => parseClassNames(arg)).flat().join(" ");
};
