//Default configuration
module.exports = {
    /* Build configuration */
    //mode (string): mode for building the site. production | development
    "mode": "development",
    //source (string): site entry folder. Default is current path
    "source": "./",
    //target (string): target folder for all compiled files. Default is "public" folder
    "target": "./public",
    //theme (string): name the of the theme package to use in the site
    "theme": null,
    //base (string): base url. Update this option if you will deploy your site under a subpath
    "base": "/",
    //Pages sorting and parsing configuration
    "pages": {
        //pages.parse (function): custom pages parsing method
        "parse": null,
        //pages.sort (function): custom pages sorting method
        "sort": null
    },
    //plugins (array) [experimental]: list of plugins to be used in the build process 
    /* Page configuration */
    //head (array): Extra tags to be injected to the head of each page HTML
    "head": [],
    //title (string): title template
    "title": "",
    /* Site configuration */
    //site (object): custom configuration for the site
    "site": {},
    //env (object): set specific environment values
    "env": {}
};

