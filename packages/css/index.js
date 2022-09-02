import {buildStyles} from "@siimple/core";

const hashCode = str => {
    return "sii-" + Math.abs(Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)).toString();
};

const createCache = options => {
    const cache = {
        key: options?.key || "css",
        registry: new Set(),
        sheet: {
            innerHTML: "",
        },
    };
    // Initialize sheet
    if (typeof document === "object") {
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

const registerCss = (styles, config, cache, isGlobal, isKeyframes) => {
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

// Create a new custom instance
export const create = (theme, options) => {
    const ctx = {
        cache: createCache(options || {}),
        theme: theme || {},
        css: s => registerCss(s, ctx.theme, ctx.cache, false, false),
        globalCss: s => registerCss(s, ctx.theme, ctx.cache, true, false),
        keyframes: s => registerCss(s, ctx.theme, ctx.cache, false, true),
        extractCss: () => ctx.cache.sheet.innerHTML || "",
        // reset: () => cache.clear(),
    };

    return ctx;
};

// Cached instance
let cachedInstance = null;
const getCachedInstance = () => {
    return cachedInstance || (cachedInstance = create({}));
};

export const css = s => getCachedInstance().css(s);
export const globalCss = s => getCachedInstance().globalCss(s);
export const keyframes = s => getCachedInstance().keyframes(s);
export const extractCss = () => getCachedInstance().extractCss();
