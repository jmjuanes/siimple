import {injectModules, createHelper} from "../packages/modules/index.js";

describe("injectModules", () => {
    it("should exclude specific modules", () => {
        const config = injectModules({
            modules: {
                markup: false,
            },
        });
        expect(config.styles[".h1"]).toBeUndefined();
    });
    
    it("should include only specific modules", () => {
        const config = injectModules({
            modules: [
                "button",
                "alert",
            ],
        });
        expect(Object.keys(config.styles)).toHaveLength(2);
    });

    it("should exclude all modules if empty array is provided", () => {
        const config = injectModules({
            modules: [],
        });
        expect(Object.keys(config.styles)).toHaveLength(0);
    });

    it("should exclude all modules if 'false' value is provided", () => {
        const config = injectModules({
            modules: false,
        });
        expect(Object.keys(config.styles)).toHaveLength(0);
    });

    it("should exclude all modules if 'null' value is provided", () => {
        const config = injectModules({
            modules: null,
        });
        expect(Object.keys(config.styles)).toHaveLength(0);
    });
});

describe("createHelper", () => {
    it("should generate helpers from values", () => {
        const styles = createHelper({
            prefix: "has",
            shortcut: "text",
            properties: ["color"],
            values: {
                blue: "blue",
                white: "white",
            },
        });
        const keys = Object.keys(styles);

        expect(keys).toHaveLength(2);
        expect(keys[0]).toEqual(".has-text-blue");
        expect(keys[1]).toEqual(".has-text-white");
    });

    it("should generate helpers from scale", () => {
        const config = {
            fontSizes: ["1", "2", "3"],
        };
        const helper = {
            prefix: "has",
            shortcut: "size",
            properties: ["fontSize"],
            scale: "fontSizes",
        };
        const styles = createHelper(helper, config);
        const keys = Object.keys(styles);

        expect(keys).toHaveLength(3);
        keys.forEach((key, index) => {
            expect(key).toEqual(`.has-size-${index}`);
            expect(styles[key].fontSize?.[0]).toEqual(config.fontSizes[index]);
        });
    });
});
