import {buildValue, buildRule, buildStyles} from "../packages/core/index.js";

describe("buildValue", () => {
    it("should return the same string value", () => {
        const value = "block";
        const cssValue = buildValue("", value, {});
        expect(cssValue).toBe(value);
    });

    it("should join an array of values", () => {
        const value = buildValue("", ["5px", "10px"], {});
        expect(value).toBe("5px 10px");
    });

    it ("should get the value from the specified scale", () => {
        const value = buildValue("color", "primary", {
            colors: {
                primary: "blue",
            },
        });
        expect(value).toBe("blue");
    });

    it("should use css variables if the useCssVariables flag is enabled", () => {
        const config = {
            useCssVariables: true,
            colors: {
                primary: "blue",
            },
            fonts: {
                body: "font1",
            },
            fontSizes: [0, 1],
        };
        expect(buildValue("color", "primary", config)).toBe("var(--siimple-colors-primary)");
        expect(buildValue("fontFamily", "body", config)).toBe("var(--siimple-fonts-body)");
        expect(buildValue("fontSize", "1", config)).toBe("1");
    });
});

describe("buildRule", () => {
    it("should convert a simple rule to css", () => {
        const styles = {
            display: "block",
        };
        const css = buildRule([".test"], styles, {});
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
        const css = buildRule([".test"], styles, {});
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
        const css = buildRule([".test"], styles, {});
        const mediaCss = css[1].split("\n");
        expect(css[0]).toBe(".test {display:flex;}");
        expect(mediaCss[0]).toBe("@media (max-width: 450px) {");
        expect(mediaCss[1]).toBe(".test {display:block;}");
        expect(mediaCss[2]).toBe(".test:hover {color:red;}");
        expect(mediaCss[3]).toBe(".test.is-active span {color:blue;}");
        expect(mediaCss[4]).toBe("}");
    });
});

describe("buildStyles", () => {
    it("should generate @keyframes blocks", () => {
        const css = buildStyles({
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
        const css = buildStyles({
            "@font-face": [
                {"font-family": "'Font 1'"},
                {"font-family": "Font 2"},
            ]
        }, {}).split("\n");
        expect(css[0]).toBe("@font-face {font-family:'Font 1';}");
        expect(css[1]).toBe("@font-face {font-family:Font 2;}");
    });

    it("should generate @media blocks", () => {
        const css = buildStyles({
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
        const css = buildStyles({
            ":root": {
                "--variable1": "#ffffff",
                "--variable2": "#000000"
            }
        }, {}).split("\n");
        expect(css[0]).toBe(":root {--variable1:#ffffff;--variable2:#000000;}");
    });

    it("should add scales as CSS variables if useCssVariables flag is enabled", () => {
        const config = {
            useCssVariables: true,
            colors: {
                primary: "blue",
                secondary: "red",
            },
            fonts: {
                body: "font1",
                code: "font2",
            },
            fontSizes: [0, 1, 2],
        };
        const css = buildStyles({}, config).split("\n");
        expect(css).toHaveLength(2);
        expect(css[0]).toBe(":root {--siimple-colors-primary:blue;--siimple-colors-secondary:red;}");
        expect(css[1]).toBe(":root {--siimple-fonts-body:font1;--siimple-fonts-code:font2;}");
    });
});

