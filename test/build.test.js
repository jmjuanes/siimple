import {buildCssValue, buildCssRule, buildCss} from "../siimple/lib.js";

describe("buildCssValue", () => {
    it("should return the same string value", () => {
        const value = "block";
        const cssValue = buildCssValue("", value, {});
        expect(cssValue).toBe(value);
    });

    it("should join an array of values", () => {
        const value = buildCssValue("", ["5px", "10px"], {});
        expect(value).toBe("5px 10px");
    });
});

describe("buildCssRule", () => {
    it("should convert a simple rule to css", () => {
        const styles = {
            display: "block",
        };
        const css = buildCssRule([".test"], styles, {});
        expect(css[0]).toBe(".test {display:block;}");
    });

    it("should convert a complex rule to css", () => {
        const styles = {
            display: "block",
            color: "red",
            "&:hover": {
                "color": "blue",
            },
        };
        const css = buildCssRule([".test"], styles, {});
        expect(css[0]).toBe(".test {display:block;color:red;}");
        expect(css[1]).toBe(".test:hover {color:blue;}");
    });

    it("should convert a more complex rule to css", () => {
        const styles = {
            "display": "flex",
            "@media (max-width: 450px)": {
                "display": "block",
                "&:hover": {
                    "color": "red",
                },
                "&.is-active span": {
                    "color": "blue",
                },
            },
        };
        const css = buildCssRule([".test"], styles, {});
        const mediaCss = css[1].split("\n");
        expect(css[0]).toBe(".test {display:flex;}");
        expect(mediaCss[0]).toBe("@media (max-width: 450px) {");
        expect(mediaCss[1]).toBe(".test {display:block;}");
        expect(mediaCss[2]).toBe(".test:hover {color:red;}");
        expect(mediaCss[3]).toBe(".test.is-active span {color:blue;}");
        expect(mediaCss[4]).toBe("}");
    });
});

describe("buildCss", () => {
    it("should generate @keyframes blocks", () => {
        const css = buildCss({
            "@keyframes animation1": {
                "from": {"top": "0"},
                "to": {"top": "100"},
            },
        }, {}).split("\n");
        expect(css[0]).toBe("@keyframes animation1 {");
        expect(css[1]).toBe("from {top:0;}");
        expect(css[2]).toBe("to {top:100;}");
        expect(css[3]).toBe("}");
    });

    it("should generate @font-faces blocks", () => {
        const css = buildCss({
            "@font-face": [
                {"font-family": "'Font 1'"},
                {"font-family": "Font 2"},
            ]
        }, {}).split("\n");
        expect(css[0]).toBe("@font-face {font-family:'Font 1';}");
        expect(css[1]).toBe("@font-face {font-family:Font 2;}");
    });

    it("should generate @media blocks", () => {
        const css = buildCss({
            "@media (max-width: 450px)": {
                ".test": {
                    "color": "red",
                },
                "a": {
                    "color": "blue",
                },
            },
        }, {}).split("\n");
        expect(css[0]).toBe("@media (max-width: 450px) {");
        expect(css[1]).toBe(".test {color:red;}");
        expect(css[2]).toBe("a {color:blue;}");
        expect(css[3]).toBe("}");
    });

    it("should process :root blocks", () => {
        const css = buildCss({
            ":root": {
                "--variable1": "#ffffff",
                "--variable2": "#000000"
            }
        }, {}).split("\n");
        expect(css[0]).toBe(":root {--variable1:#ffffff;--variable2:#000000;}");
    })
});

