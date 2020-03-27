let path = require("path");
let pkg = require("./package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "www"),
    "base": "/",
    "site": {
        "analytics": null
    },
    //Custom head tags
    "head": [
        ["meta", {"name":"viewport", "content": "width=device-width,initial-scale=1"}],
        ["link", {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Montserrat:700"}],
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple.min.css"}],
        //["link", {"rel": "stylesheet", "href": "/assets/analytics.css"}],
        ["link", {"rel": "stylesheet", "href": "/assets/css/style.css"}]
        //["script", {"type": "text/javascript", "src": "/assets/analytics.js"}]
    ],
    //Plugins
    "plugins": []
};

