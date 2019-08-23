let fs = require("fs");
let path = require("path");
let mkdirp = require("mkdirp");
let rmrf = require("rimraf");

//Import libs
let parser = require("./parser.js");
let template = require("./template.js");
let content = require("./content.js");
let util = require("./util.js");
let log = require("./logger.js");
let resolve = require("./resolve.js");
let defaults = require("./defaults.js");

//Compile layout data
let compileLayout = function (layoutContent, pageContent) {
    return layoutContent.replace(/\{\{(?:\s*)(content)(?:\s*)\}\}/g, pageContent);
};

//Press main function
module.exports = function (config, options) {
    //Initialize build context
    let context = {
        "config": parser.parseConfig(config),
        "compiler": template.compile,
        "layouts": {},
        "pages": [],
        "partials": {},
        "assets": [],
        "plugins": [],
        "head": [],
        "fragments": [],
        "sourcePath": null,
        "targetPath": null,
        "themePath": null
    };
    //Check the theme configuration
    if (typeof context.config.theme === "string" && context.config.theme.trim() !== "") {
        let themePath = resolve.resolvePackage(context.config.theme); //path.dirname(require.resolve(config.theme));
        let themeConfigPath = resolve.resolveConfig(themePath);
        //Read the theme template configuration
        if (themeConfigPath !== null) {
            //Load the theme configuration
            let themeConfig = parser.parseConfig(content.readConfig(themeConfigPath));
            //Merge with the site configuration
            context.config = Object.assign({}, themeConfig, context.config);
            //Merge site configurations
            context.config.site = Object.assign({}, themeConfig.site, context.config.site);
            //Merge site header
            context.config.head = context.config.head.concat(themeConfig.head);
            //Merge site title
            if (typeof context.config.title !== "string") {
                context.config.title = themeConfig.title;
            }
            //Merge pages parsing
            context.config.pages = Object.assign({}, themeConfig.pages, context.config.pages);
            //Update the configuration
            Object.assign(context, {
                "themePath": themePath,
                "plugins": themeConfig.plugins,
                "partials": content.readPartials(context, path.join(themePath, "partials"))
            });
        }
    }
    //Assign the default configuration
    context.config = Object.assign({}, defaults.config, context.config);
    //Parse source and target paths
    context.sourcePath = path.resolve(process.cwd(), context.config.source);
    context.targetPath = path.resolve(process.cwd(), context.config.target);
    //Concatenate plugins
    context.plugins = context.plugins.concat(context.config.plugins);
    //Display build configuration
    //log.info("-------------------------------------------------");
    log.info("Site path:      " + context.sourcePath);
    log.info("Output path:    " + context.targetPath);
    if (context.themePath !== null) {
        log.info("Theme path:     " + context.themePath);
    }
    //log.info("-------------------------------------------------");
    //console.log(context);
    //Clean the output folder if exists
    if (fs.existsSync(context.targetPath) === true) {
        rmrf.sync(context.targetPath);
    }
    //Create the output folder
    mkdirp.sync(context.targetPath);
    //Read the data folder
    context.data = content.readData(context, path.join(context.sourcePath, "data"));
    //Get layout template
    let getLayout = function (name) {
        if (name.indexOf(".html") === -1) {
            name = name + ".html";
        }
        //Check if this layout is already cached
        if (typeof context.layouts[name] !== "undefined") {
            return context.layouts[name];
        }
        //Get the layout template
        let layoutPath = path.join(context.sourcePath, "layouts", name);
        //Check if this path does not exists
        if (fs.existsSync(layoutPath) === false) {
            //Get the layout theme path
            if (config.theme !== null) {
                layoutPath = path.join(context.themePath, "layouts", name);
            }
            //Check if the theme path does not exists
            if (fs.existsSync(layoutPath) === false) {
                throw new Error(`Layout file ${name} not found`);
            }
        }
        //Read the layout page
        let currentLayout = content.readFile(layoutPath, {
            "layout": null
        });
        //Check for parent layout
        if (typeof currentLayout.data.layout === "string") {
            //Chekc for not recursive layout
            if (path.basename(currentLayout.data.layout, ".html") !== path.basename(name, ".html")) {
                let parentLayout = getLayout(currentLayout.data.layout);
                //Compile the layout
                currentLayout.content = compileLayout(parentLayout.content, currentLayout.content);
                //Update the layout data
                currentLayout.data = Object.assign({}, parentLayout.data, currentLayout.data);
            }
        }
        //Save the layout
        context.layouts[name] = currentLayout;
        return currentLayout;
    };
    //Get all pages and generate the output path
    log.info("--> Reading pages");
    context.pages = content.readPages(context, path.join(context.sourcePath, "pages")).map(function (page) {
        //Check for custom page parser
        if (typeof context.config.pages.parse === "function") {
            page = context.config.pages.parse(page);
        }
        //Build the page output path and save the page
        page.url = path.normalize(path.join(context.config.base, page.categories.join("/"), page.name + page.extension));
        page.path = path.normalize(path.join(context.targetPath, page.url));
        //Return the parsed page
        return page;
    });
    //Check for custom pages sorting
    if (typeof context.config.pages.sort === "function") {
        context.pages.sort(context.config.pages.sort);
    }
    //Save theme partials
    //if (config.theme !== null) {
    //    Object.assign(config.partials, content.readPartials(path.join(config.theme, defaults.partials)));
    //}
    //Save site partials
    Object.assign(context.partials, content.readPartials(context, path.join(context.sourcePath, "partials")));
    //Register handlebars partials
    Object.keys(context.partials).forEach(function (partial) {
        template.registerPartial(partial, context.partials[partial].content);
    });
    //Process plugins
    context.plugins.forEach(function (plugin) {
        require(plugin.plugin)(context, plugin);
    });
    //Build custom header
    //TODO KNOW BUG: paths to scripts and styles only resolves to / instead of the provided base path
    context.head = content.buildHead(context.config.head);
    //Compile all pages
    log.info("--> Saving " + context.pages.length + " pages");
    context.pages.forEach(function (item, index) {
        log.info("Saving file: " + item.path);
        //console.log(item);
        let itemLayout = getLayout(item.data.layout);
        let templateOptions = {
            "site": context.config.site,
            "data": context.data,
            "pages": context.pages,
            "env": context.config.env,
            "page": Object.assign({}, item, {
                "data": Object.assign({}, itemLayout.data, item.data),
                "next": null,
                "previous": null
            }),
            "layout": itemLayout
        };
        //console.log(templateOptions.page.data);
        //Assign next and previous page
        Object.assign(templateOptions.page, {
            "next": (index < context.pages.length - 1) ? context.pages[index + 1] : null,
            "previous": (index > 0) ? context.pages[index - 1] : null
        });
        //Compile the page
        let itemContent = template.compile(compileLayout(itemLayout.content, item.content), templateOptions);
        //Compile the title
        let itemTitle = (typeof context.config.title === "string") ? template.compile(context.config.title, templateOptions) : "";
        //Build the page
        let pageContent = template.compile(defaults.template, {
            "content": itemContent,
            "title": itemTitle,
            "head": context.head,
            "fragment": context.fragments
        });
        //Save the file
        content.writeFile(item.path, pageContent);
        //Create the folders where this page will be saved
        //mkdirp.sync(path.dirname(item.path));
        //Write the file
        //console.log("Saving file to: " + item.path);
        //fs.writeFileSync(item.path, content, "utf8"); 
    });
    //Copy assets files 
    //let outputAssetsPath = path.join(site.build.target, defaults.assetsFolder);
    log.info("--> Copying assets"); // to " + outputAssetsPath);
    //Copy theme assets
    if (config.theme !== null) {
        let themeAssetsPath = path.join(context.themePath, "assets");
        if (fs.existsSync(themeAssetsPath) === true) {
            util.copyFolder(themeAssetsPath, context.targetPath);
        }
    }
    //Copy local assets
    let inputAssetsPath = path.join(context.sourcePath, "assets");
    if (fs.existsSync(inputAssetsPath) === true) {
        util.copyFolder(inputAssetsPath, context.targetPath);
    }
    //Copy generaated assets
    context.assets.forEach(function (asset) {
        let assetTarget = path.join(context.targetPath, asset.target);
        //Check for content to copy
        if (typeof asset.content === "string") {
            content.writeFile(assetTarget, asset.content);
        }
    });
    //Build finished
    log.info("--> Build finished");
};

