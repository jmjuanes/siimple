import {buildStyles} from "@siimple/core";
import base from "@siimple/preset-base";

const isBrowser = typeof document === "object";

const hashCode = str => {
    return "sii-" + Math.abs(Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)).toString();
};

export const createCache = options => {
    const cache = {
        key: options?.key || "css",
        registry: new Set(),
        sheet: {
            innerHTML: "",
        },
    };
    // Initialize sheet
    if (isBrowser) {
        let target = null;
        if (!options?.root || !(target = options?.root?.querySelector(`[data-siimple="${cache.key}"`))) {
            target = document.createElement("style");
            target.dataset.siimple = `${cache.key}`;
            target.innerHTML = "";
            (options?.root || document.head).appendChild(target);
        }
        cache.sheet = target;
        // TODO: check for initial styles in sheet
    }
    return cache;
};

export const registerCss = (styles, config, cache, isGlobal, isKeyframes) => {
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
    if (cache && !cache.registry.has(hash)) {
        cache.registry.add(hash);
        if (!isGlobal) {
            compiledStyles = compiledStyles.replaceAll("__siimple", hash);
        }
        cache.sheet.innerHTML = cache.sheet.innerHTML + compiledStyles;
    }
    // Return the CSS classname reference
    return hash;
};

export const create = (config, options) => {
    const cache = createCache(options || {});
    return {
        css: s => registerCss(s, config, cache, false, false),
        globalCss: s => registerCss(s, config, cache, true, false),
        keyframes: s => registerCss(s, config, cache, false, true),
        extractCss: () => cache.sheet.innerHTML || "",
        // reset: () => cache.clear(),
    };
};

// Cached instance
let cachedInstance = null;
const getCachedInstance = () => {
    return cachedInstance || (cachedInstance = create({...base}));
};

export const css = s => getCachedInstance().css(s);
export const globalCss = s => getCachedInstance().globalCss(s);
export const keyframes = s => getCachedInstance().keyframes(s);
export const extractCss = () => getCachedInstance().extractCss();

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
