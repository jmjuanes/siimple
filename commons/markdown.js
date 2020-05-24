let util = require("./util.js");

//Match regex
let matchRegex = function (line, sourceRegex, callback) {
    let regex = new RegExp(sourceRegex.source, "g"); //Clone the regex
    let match = null;
    while ((match = regex.exec(line)) !== null) {
        callback.apply(null, match); //Call with the matched url
    }
    return null;
};

//Parse html attributes format
//https://stackoverflow.com/a/13898200 
let parseAttributes = function (str) {
    let attributes = {}; //Output attributes object
    let regex = /([^\s]*)=["'](.*?)["']|([\w\-]+)/g; //Regex for capturing attributes
    let match = null;
    while ((match = regex.exec(str)) !== null) {
        if (typeof match[0] !== "string") {
            break; //Unexpected error
        }
        //Check for boolean attributes
        if (typeof match[1] !== "string") {
            attributes[match[0]] = true; //Set as boolean
        }
        else {
            //Save the attribute value
            attributes[match[1]] = match[2];
        }
    }
    //Return parsed attributes object
    return attributes;
};

//Create a basic element
let createElement = function (name, attr) {
    //Initialize the new element
    let element = {
        "type": name, //Set element type
        "children": [], //(name !== "text") ? [] : undefined,
        "attributes": Object.assign({}, attr)
    };
    //Return the new element
    return element;
};

//Create a text element
let createTextElement = function (value) {
    return value; //Return the text content
    //return createElement("text", {
    //    "value": value
    //});
};

//Render a basic element
let renderElement = function (tagname, attr, children) {
    return util.createElement(tagname, attr, children);
};

//Markdown tokes
let tokens = {
    // Heading
    // ### This is a heading 1
    "heading": /^(#+)\s+(.*)/,
    // 
    // Blockquote: anly line starting with '> '
    // > Be or not to be
    "blockquote": /^>\s*/,
    // 
    // Rule: displays a separator ruler
    // --- || - - - || *** || * * *
    "rule": /^.*?(?:---|\*\*\*|-\s-\s-|\*\s\*\s\*)/, 
    // 
    // Table needs the following regex
    // - row: capture an entire row of the table
    // - column: capture each column of the table
    // | Column 1 | Column 2 |
    // | Body 1.1 | Body 1.2 |
    // | Body 2.1 | Body 2.2 |
    "tableRow": /^\|((?:\s*[^\n|]+\s*\|?)+)\|\s*$/,
    "tableColumn": /\|\s*([^\n|]+)\s*/g,
    // 
    // Image: capture image src and alt (optionally)
    // ![Hello](./src/hello.png)
    "image": /^!\[([^\]]*?)\]\(([^)]*?)\)/,
    // 
    // Link: capture link url and content
    // [My website](https://website.me)
    "link": /^\[(.*?)\]\(([^\t\n\s]*?)\)/,
    //
    // list
    "list": /^[\t\s]*?(?:-|\+|\*)\s+(.*)/,
    // 
    // Ordered list
    "orderedList": /^[\t\s]*?(?:\d(?:\)|\.))\s+(.*)/,
    // 
    // Inline html code block
    // <strong>Hello</strong>
    "html": /^</,
    // Container
    "containerStart": /^:::\s*(\w*)\s*(.*)\s*/,
    "containerEnd": /^:::/,
    // 
    // Code block
    // ```javascript
    // let a = 0;
    // ```
    "codeStart": /^```\s*(\w*)\s*(.*)\s*/,
    "codeEnd": /^```/,
    // 
    // Inline code block
    // `let a = 0;`
    "inlineCode": /^`([^`]*?)`/,
    // 
    // Strong text
    // **Hello world**
    "strong": /^(?:\*\*|__)(.*?)(?:\*\*|__)/,
    // 
    // Emphasis text
    // *Hello world*
    "emphasis": /^(?:\*|_)(.*?)(?:\*|_)/,
    //
    // Paragraph
    // This is a catch-all token
    "paragraph": /^(.*)/
};

//Parse nodes
let parseNodes = function (nodes) {
    return Object.keys(nodes).map(function (key) {
        return Object.assign(nodes[key], {
            "name": key
        });
    });
};

//Generate a list with all nodes
let getAllNodes = function () {
    return parseNodes({
        "heading": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.heading,
            "parse": function (element, line, index, parser) {
                matchRegex(line, tokens.heading, function (full, level, text) {
                    element.attributes["level"] = level.length; //Save heading level
                    element.children = parser(text.trim());
                });
                return false; //Stop processing lines
            },
            "render": function (attr, children) {
                let tagname = "h" + attr.level; //Build heading tag
                return renderElement("div", {"className": `siimple-${tagname}`}, children);
            }
        },
        "blockquote": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.blockquote,
            "parse": function (element, line, index, parser) {
                if (line.charAt(0) === ">") {
                    parser(line.replace(tokens.blockquote, "")).forEach(function (item) {
                        element.children.push(item);
                    });
                    return true; //process next line
                }
                //Not valid line: stop block
                return false;
            },
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-blockquote"}, children);
            }
        },
        "rule": {
            "inline": false,
            "parseChildren": false,
            "test": tokens.rule,
            "parse": function (element) {
                delete element["children"]; //Delete element children
                return false; //Continue
            },
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-rule"});
            }
        },
        "table": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.tableRow,
            "parse": function (element, line, index, parser) {
                if (index === 0) {
                    element.children.push(createElement("tableHeader"));
                    element.children.push(createElement("tableBody"));
                }
                if (index === 0 || tokens.tableRow.test(line) === true) {
                    let row = createElement("tableRow"); //Create table row
                    matchRegex(line, tokens.tableColumn, function (full, content) {
                        let column = createElement("tableCell"); //Create the table column
                        column.children = parser(content); //Save column content
                        row.children.push(column); //Save column
                    });
                    let k = (index === 0) ? 0 : 1; //Header or body
                    element.children[k].children.push(row); //Save table row
                    return true; //Continue
                }
                return false; //Not valid line
            },
            "render": function (attr, children) {
                let props = {
                    "className": "siimple-table siimple-table--divider siimple-table--small siimple-table--striped"
                };
                return renderElement("div", props, children);
            }
        },
        "tableHeader": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.tableRow,
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-table-header"}, children);
            }
        },
        "tableBody": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.tableRow,
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-table-body"}, children);
            }
        },
        "tableRow": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.tableRow,
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-table-row"}, children);
            }
        },
        "tableCell": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.tableRow,
            "render": function (attr, children) {
                return renderElement("div", {"className": "siimple-table-cell"}, children);
            }
        },
        "code": {
            "inline": false,
            "test": tokens.codeStart,
            "parseChildren": false,
            "parse": function (element, line, index) {
                if (index === 0) {
                    matchRegex(line, tokens.codeStart, function (full, lang, args) {
                        element.attributes = Object.assign({"lang": lang}, parseAttributes(args));
                    });
                    return true; //Skip the first line
                }
                else if (tokens.codeEnd.test(line.trim()) === false) {
                    element.children.push(line); //Save code line
                    return true;
                }
                //Default --> end of block
                return false;
            },
            "render": function (attr, children) {
                let content = util.escapeHtml(children.join("\n"));
                return renderElement("pre", {"className": "siimple-pre"}, content);
            }
        },
        "container": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.containerStart,
            "parse": function (element, line, index, parser) {
                if (index === 0) {
                    //Parse the container attributes
                    matchRegex(line, tokens.containerStart, function (full, type, args) {
                        element["container"] = type; //Save container type
                        if (args === "") {
                            return null; //Nothing to parse
                        }
                        element.attributes = parseAttributes(args); //Parse and merge attributes
                    });
                    //element["children"] = []; //Prevent children override
                    return true; //Nothing to parse
                }
                //Check for valid line --> parse line
                else if (tokens.containerEnd.test(line.trim()) === false) {
                    parser(line).forEach(function (item) {
                        element.children.push(item); //Save parsed line
                    });
                    return true; //process next line
                }
                //Default: stop parsing lines
                return false;
            },
            "render": function () {
                return ""; //Container can not be parsed
            }
        },  
        "list": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.list,
            "parse": function (element, line, index, parser) {
                if (index === 0 || tokens.list.test(line) === true) {
                    let item = createElement("listItem", {});
                    matchRegex(line, tokens.list, function (full, content) {
                        item["children"] = parser(content);
                    });
                    element["children"].push(item); //Save list item
                    return true; //Parse next lie
                }
                //Default --> line not valid
                return false;
            },
            "render": function (attr, children) {
                return renderElement("ul", {}, children);
            }
        },
        "listItem": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.list,
            "render": function (attr, children) {
                return renderElement("li", {}, children);
            }
        },
        "html": {
            "inline": false,
            "parseChildren": false,
            "test": tokens.html,
            "parse": function (element, line, index) {
                if (line.trim().length !== 0) {
                    element.children.push(line); //Save html code line
                    return true;
                }
                //Empty line --> end html code block
                return false;
            },
            "render": function (attr, children) {
                return children.join("\n");
            }
        },
        "paragraph": {
            "inline": false,
            "parseChildren": true,
            "test": tokens.paragraph,
            "parse": function (element, line, index, parser) {
                if (line.trim().length !== 0) {
                    parser(line).forEach(function (item) {
                        element.children.push(item);
                    });
                    return true; //Parse next paragraph line
                }
                //Default --> end paragraph block
                return false;
            },
            "render": function (attr, children) {
                return renderElement("p", {"className": "siimple-p"}, children);
            }
        },
        "image": {
            "inline": true,
            "parseChildren": false,
            "test": tokens.image,
            "parse": function (element, match) {
                delete element["children"]; //Delete element children
                element.attributes["alt"] = match[1].trim(); //Save image alt caption
                element.attributes["src"] = match[2].trim(); //Save image src
            },
            "render": function (attr, children) {
                return renderElement("img", {
                    "src": attr["src"],
                    "alt": attr["alt"]
                });
            }
        },
        "link": {
            "inline": true,
            "parseChildren": true,
            "test": tokens.link,
            "parse": function (element, match, index, parser) {
                element.attributes["href"] = match[2].trim(); //Save link url
                element["children"] = parser(match[1]); //Parse link children
            },
            "render": function (attr, children) {
                let props = {
                    "href": attr["href"],
                    "className": "siimple-link"
                };
                return renderElement("a", props, children);
            }
        },
        "strong": {
            "inline": true,
            "parseChildren": true,
            "test": tokens.strong,
            "parse": function (element, match, index, parser) {
                element["children"] = parser(match[1]); 
            },
            "render": function (attr, children) {
                return renderElement("strong", {}, children);
            }
        },
        "emphasis": {
            "inline": true,
            "parseChildren": true,
            "test": tokens.emphasis,
            "parse": function (element, match, index, parser) {
                element["children"] = parser(match[1]); 
            },
            "render": function (attr, children) {
                return renderElement("em", {}, children);
            }
        },
        "inlineCode": {
            "inline": true,
            "parseChildren": false,
            "test": tokens.inlineCode,
            "parse": function (element, match, index, parser) {
                //element.children.push(createTextElement(match[1]));
                element.children = match[1]; //Save inline code
            },
            "render": function (attr, children) {
                let content = util.escapeHtml(children);
                return renderElement("code", {"className": "siimple-code"}, content);
            }
        }
    });
};

//Find the node that matches the provided string
let matchNode = function (nodes, inline, str, callback) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].inline !== inline) {
            continue; //Next node
        }
        let match = nodes[i].test.exec(str);
        if (match !== null) {
            return callback(nodes[i], match);
        }
    }
};

//Generate nodes index
let generateNodesIndex = function (nodes) {
    let nodesIndex = {}; //Nodes index
    nodes.forEach(function (node, index) {
        nodesIndex[node.name] = index; //Save node index
    });
    //Return nodes index
    return nodesIndex;
};

//Default render options
let defaultRenderOptions = {
    "escapeCode": true
};

//Initialize markdown class
let Markdown = function () {
    if (!(this instanceof Markdown)) {
        return new Markdown();
    }
    //Initialize the list of nodes
    this.nodes = getAllNodes();
    this.index = generateNodesIndex(this.nodes);
    this.customRender = {}; //Registered custom renderers
};

//Register methods
Markdown.prototype = {
    "__getNode": function (name) {
        return this.nodes[this.index[name]];
    },
    //Parse a string using inline nodes
    "parseInline": function (str) {
        let self = this;
        let elements = []; //Initialize parsed elements
        //let nodes = getNodes(context.nodes, true); //Get inline nodes
        let start = 0; //Start index
        for (let i = 0; i < str.length; i++) {
            matchNode(self.nodes, true, str.substring(i), function (node, match) {
                //Add the previous text
                if (start < i) {
                    elements.push(createTextElement(str.substring(start, i)));
                }
                //Create the new element
                let element = createElement(node.name, {});
                node.parse(element, match, null, function (s) {
                    return self.parseInline(s);
                });
                elements.push(element); //Insert element
                i = i + match[0].length; //Update current index
                start = i; //Start is the last character
            });
        }
        //Check for text to add
        if (start < str.length) {
            elements.push(createTextElement(str.substring(start)));
        }
        //Return text elements
        return elements;
    },
    //Default block parser
    "parse": function (str) {
        let self = this;
        let elements = []; //Processed elements
        let last = null; //To store last element metadata
        //let nodes = getNodes(context.nodes, false); //Get block nodes
        str.split("\n").forEach(function (line, index) {
            if (last !== null) {
                //Parse line with the last element type
                let next = last.node.parse(last.element, line, last.index + 1, function (s) {
                    return self.parseInline(s);
                });
                if (next === true) {
                    last.index = last.index + 1; //Update last index
                    return null; //Continue with the next line
                }
                //Line is not valid --> reset last block
                last = null;
                return null; //TODO: fix for end of code or tip
            }
            //Check for empty line
            if (line.trim().length === 0) {
                return null; //TODO
            }
            //Find the block node for processing this line
            return matchNode(self.nodes, false, line, function (node) {
                let element = createElement(node.name, {});
                let nextLine = node.parse(element, line, 0, function (s) {
                    return self.parseInline(s);
                });
                //if (node.parse(element, line, 0, inlineParser) === true) {
                if (nextLine === true) {
                    //Create a snapshot of the node and the 
                    last = {
                        "element": element,
                        "node": node,
                        "index": 0
                    };
                }
                elements.push(element); //Save this element
            });
        });
        //Return parsed markdown
        return elements;
    },
    //Render a virtual markdown
    "render": function (content, options) {
        let self = this;
        options = Object.assign({}, defaultRenderOptions, options);
        //Render children recursive
        let renderChildren = function (children, sep) {
            if (typeof children === "undefined" || children === null) {
                return ""; //Nothing to render
            }
            if (typeof children === "string") {
                return children; //Return text children
            }
            //Render all child nodes
            let parsedChildren = children.map(function (child) {
                if (typeof child === "string") {
                    return child; //Return string content
                }
                //Check for text or html node
                if (child.type === "text") {
                    return child.value; //Return text content
                }
                //Get node and render the child element
                let node = self.__getNode(child.type);
                if (typeof node === "undefined") {
                    throw new Error(`Unknow node '${child.type}'`);
                }
                let children = child.children; //renderChildren(child.children, "");
                if (node.parseChildren === true) {
                    children = renderChildren(child.children, "");
                }
                //Check for container
                if (child.type === "container") {
                    let name = "container:" + child.container;
                    if (typeof self.customRender[name] === "function") {
                        return self.customRender[name](child.attributes, children, options);
                    }
                }
                //Check for custom element renderer
                else if (typeof self.customRender[child.type] === "function") {
                    return self.customRender[child.type](child.attributes, children, options);
                }
                //Default renderer
                return node.render(child.attributes, children, options);
            });
            //Return children joined
            return parsedChildren.join(sep);
        };
        //Render content
        return renderChildren(content, "\n");
    },
    //Register a new container
    "registerContainer": function (name, render) {
        this.customRender["container:" + name] = render; //Save container renderer
    },
    //Register a custom renderer
    "registerRender": function (name, render) {
        this.customRender[name] = render; //Save element renderer
    },
    //Create a markdown instance
    "create": function () {
        return new Markdown();
    }
};

//Export markdown instance
module.exports = Markdown();


