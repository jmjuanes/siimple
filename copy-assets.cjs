const fs = require("fs");
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
const assets = [
    {
        from: "./website/public/",
        to: "./",
    },
    {
        from: "./playground/public/",
        to: "./playground/",
    },
];

// Clean prev public folder
console.log(`Clean public folder '${publicPath}'`);
if (fs.existsSync(publicPath)) {
    fs.rmSync(publicPath, {recursive: true});
}
fs.mkdirSync(publicPath);

// Copy assets
console.log("Copying assets...");
assets.forEach(item => {
    const sourcePath = path.resolve(__dirname, item.from);
    const destPath = path.resolve(publicPath, item.to);

    console.log(`Copying '${sourcePath}' => '${destPath}'`);
    fs.cpSync(sourcePath, destPath, {recursive: true});
});
