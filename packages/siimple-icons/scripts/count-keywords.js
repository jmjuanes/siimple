let icons = require("../icons.json");
process.nextTick(function () {
    let keywords = {};
    icons.forEach(function (icon, index) {
        icon.keywords.forEach(function (name) {
            if (typeof keywords[key] === "undefined") {
                keywords[key] = 0;
            }
            keywords[key] = keywords[key] + 1;
        });
    });
    console.log(keywords);
});

