const ISSUES_URL = "https://github.com/jmjuanes/siimple/issues";
const DOCS_URL = "https://siimple.xyz/packages/standalone";

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
const log = msg => console.info(`[siimple:standalone] ${msg}`);

// Internal global variables
const __target = {};
const __cdn = "https://esm.sh/";

// Internal modules import cache
const __importCache = new Map();
const __importFn = new Function("a", "return import(a);");

// Custom import
const __import = name => {
    // Check if this module is cached
    if (__importCache.has(name)) {
        return Promise.resolve(__importCache.get(name));
    }
    // Import this module
    const importPath = __cdn + name;
    log(`Importing module '${importPath}'...`);
    return __importFn(importPath).then(response => {
        __importCache.set(name, response);
        return response;
    });
};

// Register a new external module
export const register = (name, obj) => __importCache.set(name, obj);

// Inject unstyled class
// See https://en.wikipedia.org/wiki/Flash_of_unstyled_content 
const injectUnstyled = config => ({
    ...config,
    styles: {
        ...(config?.styles || {}),
        // If enabled, the <body> tag will have by default a display:none css applied
        ".unstyled": {
            display: ["block", "!important"],
        },
    },
});

// Load the script file specified in the 'src' attribute
const loadScript = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("load", () => {
            if (request.status > 299) {
                return reject(new Error(`Unable to load '${url}'`));
            }
            return resolve(request.responseText);
        });
        request.addEventListener("error", reject);
        request.overrideMimeType("text/plain");
        request.open("get", url, true);
        request.send(null);
    });
};

// Evaluate configuration from string
const evaluateConfig = configStr => {
    return Promise.resolve().then(() => {
        const configCode = configStr
            .replace(/import\s*(\{[\s\S]*?\})\s*from\s*(['"])([\w-@/]+)\2/g, `const $1 = await _import("$3");`)
            .replace(/import\s*(.*?)\s*from\s*(['"])([\w-@/]+)\2/g, `const $1 = (await _import("$3")).default;`)
            .replace(/export default /, "return ");
        
        const fn = new AsyncFunction("_import", configCode);
        return fn(__import);
    });
};

// Use the specified text as the configuration for siimple
const generateCss = async config => {
    const {css} = await __import("@siimple/core");
    const {injectModules} = await __import("@siimple/modules");

    // Inject modules and unstyled class before generating css
    return css(injectUnstyled(injectModules(config)));
};

// Append the specified css string to a <style> tag
const appendCss = cssString => {
    if (!__target?.current) {
        __target.current = document.createElement("style");
        __target.current.dataset.source = "siimple/standalone";
        document.head.appendChild(__target.current);
    }
    __target.current.innerHTML = cssString;
};

// Use the first <script> tag found in the document with the attribute type="text/siimple".
// to extract the siimple configuration and compile it.
export const run = () => {
    const items = document.querySelectorAll(`script[type="text/siimple"]`);
    // No tags found --> nothing to do
    if (items.length === 0) {
        return;
    }
    log("Build started");
    const start = Date.now();
    // TODO: display a warning message when multiple <script type="text/siimple"> tags found
    // Only use the first <script> tag found
    const script = items[0];
    return (script.src ? loadScript(script.src) : Promise.resolve(script.innerHTML))
        .then(configStr => evaluateConfig(configStr))
        .then(config => generateCss(config))
        .then(css => appendCss(css))
        .then(() => {
            const end = Date.now();
            log(`Build finished after ${(end - start)}ms.`);
        })
        .catch(error => {
            log("Something went wrong building siimple CSS");
            log("You can find the error below. Please check first that your configuration code is correct.");
            log(`If the problem persists, please open a new issue at ${ISSUES_URL}.`);
            console.error(error);
        });
};

// Automatically process the first <script> tag with the type="text/siimple" attribute
if (typeof window !== "undefined" && window?.addEventListener) {
    window.addEventListener("DOMContentLoaded", () => {
        log("Welcome to @siimple/standalone");
        log(` --> Documentation for @siimple/standalone is available at ${DOCS_URL}.`);
        log(" --> Please do not use it in production environments!!");
        run();
    });
}
