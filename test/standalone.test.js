/**
 * @jest-environment jsdom
 */

import {buildFromString, buildFromScriptTag, configure} from "@siimple/standalone/index.js";

// Disable logger
configure({
    logger: () => null,
});

const selector = `style[data-siimple="standalone:css"]`;

describe("buildFromString", () => {
    it("should append a new <style> element with the output css", () => {
        const configStr = "export default {};";

        return buildFromString(configStr).then(() => {
            expect(document.querySelector(selector)).not.toBeNull();
            expect(document.querySelector(selector).innerHTML).toEqual(expect.stringContaining(".button"));
        });
    });
});

describe("buildFromScriptTag", () => {
    it("should load the content of the script tag", () => {
        const script = document.createElement("script");
        script.setAttribute("type", "text/siimple");
        script.innerHTML = "export default {};";

        buildFromScriptTag(script).then(() => {
            expect(document.querySelector(selector)).not.toBeNull();
            expect(document.querySelector(selector).innerHTML).toEqual(expect.stringContaining(".button"));
        });
    });
});
