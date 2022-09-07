import {css as buildCss} from "@siimple/core";
import {injectModules} from "@siimple/modules";

const ISSUES_URL = "https://github.com/jmjuanes/siimple/issues";
const DOCS_URL = "https://siimple.xyz/packages/standalone";

const STYLES_INTERNAL = "standalone:internal";
const STYLES_CSS = "standalone:css";

// Global configuration
const globalOptions = {
    logger: console.warn,
    cdnUrl: "https://esm.sh/",
    preventFlashOfUnstyledContent: true,
};

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
const log = msg => typeof globalOptions.logger === "function" && globalOptions.logger(`[siimple:standalone] ${msg}`);

// Internal modules cache
const modulesCache = new Map();

// Configure
export const configure = newOptions => {
    Object.assign(globalOptions, newOptions || {});
};

// Register a new module
export const registerModule = (moduleName, moduleObj) => {
    modulesCache.set(moduleName, moduleObj);
};

// Inject unstyled class
// See https://en.wikipedia.org/wiki/Flash_of_unstyled_content 
const injectUnstyled = config => ({
    ...config,
    styles: {
        ...(config?.styles || {}),
        // If enabled, the <body> tag will have by default a display:none css applied
        ".__unstyled": {
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

const getStyleTag = id => {
    let target = document.querySelector(`style[data-siimple="${id}"]`);
    if (!target) {
        target = document.createElement("style");
        target.dataset.siimple = id;
        document.head.appendChild(target);
    }
    return target;
};

// Evaluate configuration from string
const evaluateConfig = configStr => {
    return Promise.resolve().then(() => {
        const configCode = configStr
            // .replace(/import\s*(.*?)\s*from\s*(['"])@siimple\/(.*?)(\.js)?\2(;)?/g, `const $1 = _import("$3");`)
            .replace(/import\s*(\{[\s\S]*?\})\s*from\s*(['"])([\w-@/]+)\2/g, `const $1 = await _import("$3");`)
            .replace(/import\s*(.*?)\s*from\s*(['"])([\w-@/]+)\2/g, `const $1 = (await _import("$3")).default;`)
            .replace(/export default /, "return ");
        
        // Custom import function
        const _importFn = new Function("a", "return import(a);");
        const _import = name => {
            // Check if this module is cached
            if (modulesCache.has(name)) {
                return Promise.resolve(modulesCache.get(name));
            }
            // Import this module
            const modulePath = globalOptions.cdnUrl + name;
            return _importFn(modulePath).then(response => {
                modulesCache.set(name, response);
                return response;
            });
        };
        const fn = new AsyncFunction("_import", configCode);
        return fn(_import);
    });
};

// Use the specified text as the configuration for siimple
export const buildFromString = configString => {
    return evaluateConfig(configString)
        .then(config => injectModules(config))
        .then(config => injectUnstyled(config))
        .then(config => buildCss(config))
        .then(cssString => {
            getStyleTag(STYLES_CSS).innerHTML = cssString;
            return true;
        })
};

// Use the provided <script> tag to extract the siimple configuration and compile it.
// If not provided, it will use the first <script> tag found in the document with the attribute type="text/siimple".
export const buildFromScriptTag = selector => {
    log("Starting siimple/standalone...");
    const start = Date.now();
    if (!selector) {
        const items = document.querySelectorAll(`script[type="text/siimple"]`);
        if (items.length === 0) {
            log("No <script> tags found with the type='text/siimple' attribute found.");
            return;
        }
        if (items.length > 1) {
            log("Found multiple <script> tags with the type='text/siimple' attribute, but only the first will be processed.");
        }
        // Only use the first <script> tag found
        selector = items[0];
    }
    // Load script content
    return (selector.src ? loadScript(selector.src) : Promise.resolve(selector.innerHTML))
        .then(str => buildFromString(str))
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

const onDOMContentLoaded = () => {
    log("Welcome to siimple/standalone");
    log(` --> Documentation for siimple/standalone is available at ${DOCS_URL}.`);
    log(" --> Please do not use it in production environments.");
    if (globalOptions.preventFlashOfUnstyledContent) {
        // document.body.style.display = "none";
        getStyleTag(STYLES_INTERNAL).innerHTML = ".__unstyled { display: none; }";
    }
    buildFromScriptTag();
};

// Automatically process the first <script> tag with the type="text/siimple" attribute
if (typeof window !== "undefined" && window?.addEventListener) {
    window.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);
}

// Disable the automatic transform of <script> tags with the type="text/siimple" attribute
export const disableScriptTag = () => {
    window.removeEventListener("DOMContentLoaded", onDOMContentLoaded);
};

// Reload siimple (just call again the buildFromScriptTag)
export const reload = () => buildFromScriptTag();
