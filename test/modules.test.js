import {injectModules} from "../packages/modules/index.js";

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
