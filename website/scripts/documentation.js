let fs = require("fs");
let path = require("path");
let markdown = require("../../commons/markdown.js");
let template = require("../../commons/template.js");
let virtualFile = require("../../commons/virtual-file.js");
let util = require("../../commons/util.js");

let paths = require("./paths.js");
let tips = {
    "info": "siimple-tip--primary siimple-tip--info",
    "error": "siimple-tip--error siimple-tip--cross",
    "warning": "siimple-tip--warning siimple-tip--exclamation",
    "success": "siimple-tip--success siimple-tip--check"
};

//Classnames list
let classNames = {
    "h1": "siimple-h1",
    "h2": "siimple-h2",
    "h3": "siimple-h3",
    "h4": "siimple-h4",
    "h5": "siimple-h5",
    "h6": "siimple-h6",
    "blockquote": "siimple-blockquote",
    "rule": "siimple-rule",
    "table": "siimple-table siimple-table--small siimple-table--divider siimple-table--striped",
    "thead": "siimple-table-header",
    "tbody": "siimple-table-body",
    "tr": "siimple-table-row",
    "td": "siimple-table-cell",
    "code": "siimple-pre",
    "paragraph": "siimple-paragraph",
    "link": "siimple-link",
    "inlineCode": "siimple-code"
};

//Build package files tree
let buildPackageTree = function (pkgName, pkgPath, items) {
    let groups = []; //Initialize groups items
    let currentGroup = null; //Current group
    items.forEach(function (item) {
        if (typeof item.group === "string") {
            groups.push({
                "title": item.group,
                "link": null, //Link to the first page of this group
                "pages": []
            });
            currentGroup = groups[groups.length - 1]; //Get current group
            return; //Continue with the next item
        }
        let file = virtualFile(path.join(pkgPath, "docs", item.page)); //Create the new virtual file
        virtualFile.read(file); //Read virtual file content
        //Build the output filename
        let outputFilePath = path.normalize(path.format({
            "root": "/",
            "dir": path.join("/", "docs", pkgName, path.dirname(item.page)),
            "name": path.basename(item.page, path.extname(item.page)),
            "ext": ".html"
        }));
        let currentIndex = currentGroup.pages.length; //Get current index
        //Insert this page
        currentGroup.pages.push({
            "index": currentIndex,
            "file": file,
            "title": file.data.title,
            "link": outputFilePath
        });
    });
    //Parse groups to get the link to the first page of each group
    return groups.map(function (group, index) {
        return Object.assign(group, {
            "index": index,
            "link": group.pages[0].link
        });
    });
};

//Build page sidebar
let buildPageSidebar = function (groups, groupIndex, pageIndex, config) {
    let sidebarCollapsed = config.sidebarCollapsed;
    let sidebarItems = []; //Initialize sidebar items
    groups.forEach(function (group, i) {
        let groupActive = i === groupIndex;
        sidebarItems.push({
            "title": group.title,
            "link": group.link,
            "active": groupActive,
            "type": "group"
        });
        //Check if this group is not active
        if (groupActive === false && sidebarCollapsed === true) {
            return; //Continue with the next group
        }
        //Add pages of this group
        return group.pages.forEach(function (page, j) {
            sidebarItems.push({
                "title": page.title,
                "link": page.link,
                "active": j === pageIndex && groupActive,
                "type": "page"
            });
        });
    }); 
    //Return sidebar items
    return sidebarItems;
};

//Build documentation
module.exports = function (config, data) {
    //let config = util.readJSON(paths.config); //Import site config
    //Initialize markdown configuration
    Object.keys(tips).forEach(function (name) {
        return markdown.registerContainer(name, function (attr, children) {
            let content = [];
            content.push(`<div class="siimple-tip ${tips[name]}">`);
            if (typeof attr.title === "string") {
                content.push(`<div class="siimple-h6">${attr.title}</div>`);
            }
            content.push(children);
            content.push(`</div>`);
            return content.join("\n");
        });
    });
    //Render markdown options
    markdown.registerRender("code", function (attr, children) {
        let codeContent = util.escapeHtml(children.join("\n"));
        //Check for no code snippet
        if (typeof attr.preview === "undefined") {
            return `<pre class="siimple-pre">${codeContent}</pre>`;
        }
        //Generate a preview wrapper
        let content = [];
        content.push("<div class=\"website-snippet\">");
        content.push("<div class=\"website-snippet-demo\">");
        content.push(children.join("\n"));
        content.push("</div>");
        content.push("<pre class=\"siimple-pre website-snippet-code\">");
        content.push(codeContent);
        content.push("</pre>");
        content.push("</div>");
        return content.join("\n");
    });
    //registerPartials(); //Register handlebars partials
    let pageTemplate = template.page({
        "header": config.header,
        "body": fs.readFileSync(path.join(paths.layouts, "documentation.html"), "utf8")
    });
    let compilePageTemplate = function (content) {
        return pageTemplate.replace(/\{\{(?:\s*)(content)(?:\s*)\}\}/g, content);
    };
    //Add data content
    data["packages"] = {};
    data["iconsList"] = util.readJSON(path.join(paths.packages, "siimple-icons", "icons.json"));
    data["iconsCategories"] = util.readJSON(path.join(paths.packages, "siimple-icons", "categories.json"));
    //Sort icons by name
    data["iconsList"] = data["iconsList"].sort(function (a, b) {
        return (a.id < b.id) ? -1 : +1;
    });
    data["iconsList"].forEach(function (icon) {
        let category = data["iconsCategories"][icon.categories];
        category.count = category.count + 1;
    });
    //Build packages
    Object.keys(config.packages).forEach(function (name) {
        //Import package info
        let pkgPath = path.join(paths.packages, config.packages[name]);
        let package = util.readJSON(path.join(pkgPath, "package.json"));
        let docsConfig = util.readJSON(path.join(pkgPath, "docs", "config.json")); //Import docs config
        //delete config.packages[name].folder; //Delete folder key
        let packageTree = buildPackageTree(name, pkgPath, docsConfig.content); //Build package tree
        let firstPage = packageTree[0].pages[0]; //Get first page
        //Add package metadata
        data.packages[name] = Object.assign({}, {
            "name": package.name,
            "version": package.version,
            "description": package.description,
            "link": firstPage.link
        });
        //Build pages
        packageTree.forEach(function (group, groupIndex) {
            //Build each page of the group
            return group.pages.forEach(function (page, pageIndex) {
                //Compile page content
                let pageContentTree = markdown.render(markdown.parse(page.file.content));
                let pageSidebar = buildPageSidebar(packageTree, groupIndex, pageIndex, docsConfig);
                let pageBreadcrumb = [
                    {"title": package.name, "link": firstPage.link},
                    {"title": group.title, "link": group.link},
                    {"title": page.title, "link": "#", "active": true}
                ];
                //Generate page content
                let pageContent = template.compile(compilePageTemplate(pageContentTree), {
                    "package": data.packages[name],
                    "site": config,
                    "page": {
                        "url": page.link,
                        "title": page.title,
                        "sidebar": pageSidebar,
                        "breadcrumb": pageBreadcrumb,
                        "data": page.file.data
                    },
                    "data": data,
                    "title": "Hello world"
                });
                //Update the virtualfile with the new folder and paths
                let file = Object.assign({}, page.file, {
                    "dirname": path.join(paths.build, path.dirname(page.link)),
                    "content": pageContent,
                    "extname": ".html"
                });
                //Write the virtual file
                virtualFile.write(file);
            });
        });
    });
    //Write configuration file
    //json.write(paths.buildConfig, config);
    //fs.writeFileSync(paths.buildConfig, jsonToString(config), "utf8");
};

