#!/usr/bin/env node

import fs from "fs";
import path from "path";

import {css} from "@siimple/core";

// Get CLI arguments
const getArguments = () => {
    const args = process.argv.slice(2);
    const configIndex = args.indexOf("-c");
    const outputIndex = args.indexOf("-o");
    return {
        config: configIndex > -1 && args[configIndex + 1] ? args[configIndex + 1] : null,
        output: outputIndex > -1 && args[outputIndex + 1] ? args[outputIndex + 1] : null,
    };
};

// Resolve configuration
const resolveConfig = configPath => {
    return import(configPath).then(rawConfig => rawConfig.default);
};

// Generate siimple CSS
process.nextTick(() => {
    const args = getArguments();
    if (!args.config) {
        console.error("No input configuration provided. Use the '-c' option.");
        return process.exit(1);
    }
    const configPath = path.resolve(process.cwd(), args.config);
    if (!fs.existsSync(configPath)) {
        console.error(`Configuration file '${configPath}' does not exist.`);
        return process.exit(1);
    }
    // Import configuration
    return resolveConfig(configPath).then(config => {
        return css(config);
    }).then(result => {
        // Print file in stdout
        if (!args.output) {
            return process.stdout.write(result);
        }
        // Save to file
        const outputPath = path.resolve(process.cwd(), args.output);
        fs.writeFileSync(outputPath, result, "utf8");
    }).catch(error => {
        console.error(error);
        process.exit(1);
    });
});
