/**
 * @jest-environment jsdom
 */

import {css, globalCss, extractCss} from "@siimple/styled";

const styleSelector = "style#__styled_siimple__";

describe("styled", () => {
    it("should generate the specified CSS", () => {
        const classname = css({
            backgroundColor: "white",
        });
        const generatedCss = extractCss();
        expect(classname).toEqual(expect.stringContaining("sii-"));
        expect(generatedCss).toEqual(expect.stringContaining(classname));
    });
    
    it("should generate a DOM element with the CSS", () => {
        const classname = css({
            backgroundColor: "white",
        });
        expect(document.querySelector(styleSelector)).not.toBeNull();
        expect(document.querySelector(styleSelector).innerHTML).toEqual(expect.stringContaining(classname));
    });

    it ("should return the same classname for the same styles", () => {
        const classname1 = css({
            backgroundColor: "white",
        });
        const classname2 = css({
            backgroundColor: "white",
        });
        expect(classname1).toEqual(classname2);
    });

    it("should generate global styles", () => {
        globalCss({
            body: {
                backgroundColor: "white",
            },
        });
        expect(document.querySelector(styleSelector)?.innerHTML).toEqual(expect.stringContaining("body"));
    });
});
