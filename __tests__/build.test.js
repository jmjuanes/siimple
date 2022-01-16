const fs = require("fs");

describe("build", () => {
    let files;
    beforeAll(() => {
        files = fs.readdirSync("./dist/");
    });

    it("should write files in ./dist", () => {
        expect(files).not.toBeNull();
        expect(files).not.toHaveLength(0);
    });

    it("should generate the bundle scss file", () => {
        expect(files).toContain("index.scss");
    });

    it("should generate fonts files", () => {
        expect(files).toContain("siimple-icons.ttf");
        expect(files).toContain("siimple-icons.woff");
    });

    it("should generate output css", () => {
        epxect(files).toContain("siimple.css");
    });

    it("should generate minimized css", () => {
        expect(files).toContain("siimple.min.css");
    });
});
