import {buildMixin} from "../packages/core.js";

describe("buildMixin", () => {
    const theme = {
        test: {
            "basic": {
                color: "black",
                display: "none"
            },
            "circular1": {
                display: "none",
                apply: "test.circular2",
            },
            "circular2": {
                display: "block",
                apply: "test.circular1",
            },
        },
    };
    it("should apply styles defined in the mixin", () => {
        const initialStyles = {
            color: "white",
        };
        const finalStyles = buildMixin(initialStyles, theme);
        expect(finalStyles.color).toBe("black");
        expect(finalStyles.display).toBe("none");
    });
    it("should throw an error if circular mixins are found", () => {
        expect.assertions(1);
        try {
            const styles = {
                display: "flex",
                apply: "test.circular1",
            };
            buildMixin(styles, theme);
        }
        catch (error) {
            const msg = "Circular mixins found: test.circular1->test.circular2->test.circular1"
            expect(error.message).toBe(msg);
        }
    });
});
