const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const package = require("./package.json");
// const applications = require("./config/applications.json");

const DEVEL_MODE = "development";
// const NODE_ENV = process.env.NODE_ENV || DEVEL_MODE;

const env = (envFiles => {
    return envFiles.reduce((currentEnv, file) => {
        const envPath = path.resolve(__dirname, file);
        if (!fs.existsSync(envPath)) {
            return currentEnv; //Fallback
        }
        // Assign to current env
        return Object.assign(currentEnv, dotenv.parse(fs.readFileSync(envPath)));
    }, {});
}) (["./.env"]);

// Default values
const REPO_URL = "https://github.com/jmjuanes/siimple";
const RAW_URL = "https://raw.githubusercontent.com/jmjuanes/siimple/main";
const TWITTER_URL = "https://twitter.com/siimplecss";
// const IS_STAGING = Boolean(JSON.parse(process.env.STAGING || "false"));
// const IS_LOCAL_SERVER = Boolean(JSON.stringify(process.env.LOCAL_SERVER));

// Get current host
const getCurrentHost = () => {
    // if (IS_LOCAL_SERVER && NODE_ENV === DEVEL_MODE) {
    //     return process.env.LOCAL_SERVER || "http://localhost:5000";
    // }
    // Default --> production env
    return "https://www.siimple.xyz";
};

// Generate env variables
module.exports = Object.assign(env, {
    // Global configuration
    // "NODE_ENV": NODE_ENV,
    "VERSION": package.version,
    // "HOST": env["HOST"] || getCurrentHost(),
    "STATIC_PATH": "/static",

    // Social configuration
    "REPO_URL": env["REPO_URL"] || REPO_URL,
    "ISSUES_URL": env["ISSUES_URL"] || `${REPO_URL}/issues`,
    "DISCUSSIONS_URL": env["DISCUSSIONS_URL"] || `${REPO_URL}/discussions`,
    "TWITTER_URL": env["TWITTER_URL"] || TWITTER_URL,
    "RAW_URL": env["RAW_URL"] || RAW_URL,
});
