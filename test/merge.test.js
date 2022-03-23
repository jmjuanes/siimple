import {mergeStyles} from "../lib.js";

describe("mergeStyles", () => {
    
    it("should merge two different styles", () => {
        const style1 = {
            display: "block",
        };
        const style2 = {
            position: "relative",
        };
        mergeStyles(style1, style2);
        expect(style1["display"]).toBe("block");
        expect(style1["position"]).toBe("relative");
    });

    it("should perform a deep clone of the same class names", () => {
        const style1 = {
            display: "block",
            "&.is-active": {
                display: "block",
            },
        };
        const style2 = {
            "&.is-active": {
                position: "relative",
            },
            "&.is-disabled": {
                display: "block",
            },
        };
        mergeStyles(style1, style2);
        expect(style1["display"]).toBe("block");
        expect(style1["&.is-active"]).not.toBeUndefined();
        expect(style1["&.is-active"]["display"]).toBe("block");
        expect(style1["&.is-active"]["position"]).toBe("relative");
        expect(style1["&.is-disabled"]).not.toBeUndefined();
        expect(style1["&.is-disabled"]["display"]).toBe("block");
    });

    it("should merge two @font-face definitions", () => {
        const style1 = {
            "@font-face": {
                "font-family": "'Font 1'",
            },
        };
        const style2 = {
            "@font-face": {
                "font-family": "'Font 2'"
            }
        };
        mergeStyles(style1, style2);
        expect(style1["@font-face"]).not.toBeUndefined();
        expect(style1["@font-face"]).toHaveLength(2);
        expect(style1["@font-face"][0]["font-family"]).toBe("'Font 1'");
        expect(style1["@font-face"][1]["font-family"]).toBe("'Font 2'");
    });
});


