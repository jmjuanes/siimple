import * as fs from "node:fs";
import * as path from "node:path";

// tiny helper to read and write a JSON file
const readJson = file => {
    return JSON.parse(fs.readFileSync(file, "utf8"));
};
const writeJson = (file, data) => {
    return fs.writeFileSync(file, JSON.stringify(data, null, "    "), "utf8");
};

// read the package.json and get the version of the packages
const pkg = readJson(path.join(process.cwd(), "package.json"));
const mainVersion = pkg.version; // this is the main version of the siimple pkg (4.x.y)
const packagesVersion = pkg.version.replace(/^4\./, "0.");

// internal method to replace the version in the package.json
const changeVersion = (packagePath, isMainPackage = false) => {
    const packageFile = path.join(packagePath, "package.json");
    const packageContent = readJson(packageFile);
    // 1. change version in package.json
    packageContent.version = isMainPackage ? mainVersion : packagesVersion;
    // 2. change version in dependencies, devDependencies, and peerDependencies
    ["dependencies", "devDependencies", "peerDependencies"].forEach(type => {
        Object.keys(packageContent[type] || {}).forEach(dep => {
            if (dep.startsWith("@siimple")) {
                packageContent[type][dep] = "^" + packagesVersion;
            }
        });
    });
    // 3. write the new package.json
    writeJson(packageFile, packageContent);
};

// 1. fix version in main packages
["siimple", "siimple-icons"].forEach(packageName => {
    changeVersion(path.join(process.cwd(), packageName), true);
});

// 2. fix version in packages inside 'packages' folder
const packagesDir = path.join(process.cwd(), "packages");
fs.readdirSync(packagesDir).forEach(dir => {
    changeVersion(path.join(packagesDir, dir), false);
});
