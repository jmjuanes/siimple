let path = require("path");

//Export theme configuration
module.exports = {
    "base": "/",
    //Site configuration
    "site": {
        "name": "siimple",
        //Global links
        "home": "https://www.siimple.xyz",
        "privacy": "https://www.siimple.xyz/privacy.html",
        //Repository configuration
        "repository": "https://github.com/siimple/siimple",
        "issues": "https://github.com/siimple/siimple/issues",
        //Analytics tracking ID
        "analytics": null,
        //Copyright notice
        "copyright": "&copy; 2015-present <strong>siimple</strong>"
    },
    //Page head
    "head": [
        ["meta", {"name":"viewport", "content": "width=device-width,initial-scale=1"}],
        ["link", {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Montserrat:700"}],
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple.min.css"}],
        ["link", {"rel": "stylesheet", "href": "/assets/analytics.css"}],
        ["script", {"type": "text/javascript", "src": "/assets/analytics.js"}]
    ],
    //Default title template
    "title": "{{page.data.title}} | siimple",
    //Plugins
    "plugins": [
    //    {
    //        "plugin": "@siimple/press-plugin-sass",
    //        "source": path.join(__dirname, "styles", "index.scss"),
    //        "options": {
    //            "includePaths": [path.join(process.cwd(), "node_modules")]
    //        },
    //        "target": "css/siimple-press.css"
    //    },
    //    {
    //        "plugin": "@siimple/press-plugin-copyfiles",
    //        //"plugin": "@siimple/press-plugin-copyfiles",
    //        "files": path.join(path.dirname(require.resolve("@siimple/css")), "siimple.min.css"),
    //        "target": "css/"
    //    },
    //    {
    //        "plugin": "@siimple/press-plugin-copyfiles",
    //        "files": path.join(__dirname, "scripts", "siimple-press-analytics.js"),
    //        "target": "js/"
    //    }
    ],
    //Pages parsing
    "pages": {
        //Custom post file name parser
        "parse": function (page) {
            let match = page.name.match(/^(\d\d\d?)-(.+)$/);
            //Check for no math name
            if (match === null) {
                return Object.assign(page, {
                    "index": 0
                });
            }
            //Return the parsed filename values
            return Object.assign(page, {
                "index": parseInt(match[1]),
                "name": match[2]
            });
        },
        //Custom post sorting
        "sort": function (a, b) {
            return a.index - b.index;
        }
    }
};

