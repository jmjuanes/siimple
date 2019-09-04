let path = require("path");
let pkg = require("./package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "public"),
    "base": "/",
    "site": {
    },
    //Custom head tags
    "head": [
        ["meta", {"name":"viewport", "content": "width=device-width,initial-scale=1"}],
        ["link", {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Montserrat:700"}],
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple.min.css"}],
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple-website.css"}]
    ],
    //Plugins
    "plugins": []
};

