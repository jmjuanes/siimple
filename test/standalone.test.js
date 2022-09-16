/**
 * @jest-environment jsdom
 */

import {run, register} from "@siimple/standalone";

const styleSelector = `style[data-source="siimple/standalone"]`;
const styleCss = "/* siimple css style */"; 

// Mock console.info
jest.spyOn(console, "info").mockImplementation(() => "");

// Mock @siimple/core
register("@siimple/core", {
    css: () => styleCss,
});

// Mock @siimple/modules
register("@siimple/modules", {
    injectModules: c => c,
});

describe("run", () => {
    it("should append a new <style> element with the output css", () => {
        const script = document.createElement("script");
        script.setAttribute("type", "text/siimple");
        script.innerHTML = "export default {}";
        document.head.appendChild(script);

        return run().then(() => {
            expect(document.querySelector(styleSelector)).not.toBeNull();
            expect(document.querySelector(styleSelector).innerHTML).toEqual(styleCss);
        });
    });
});
