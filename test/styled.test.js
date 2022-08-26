/**
 * @jest-environment jsdom
 */

import {
    css,
    globalCss,
    extractCss,
    classNames,
} from "@siimple/styled";

const styleSelector = `style[data-siimple="css"]`;

describe("[styled] css", () => {
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

describe("[styled] classNames", () => {
    it("should join arguments into a single string", () => {
        const className = classNames("foo", "bar", "baz");
        expect(className).toBe("foo bar baz");
    });

    it("should add only classes with a truthly value in an object", () => {
        const className = classNames({
            foo: true,
            bar: false,
            baz: true,
        });
        expect(className).toBe("foo baz");
    });

    it("should join all elements in an array", () => {
        const className = classNames(["foo", "bar"], "baz");
        expect(className).toBe("foo bar baz");
    });
});
