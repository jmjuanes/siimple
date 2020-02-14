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
let createElement = function (name, props) {
    //Initialize the new element
    let element = {
        "type": name, //Set element type
        "children": (name !== "text") ? [] : undefined
    };
    //Check for props object
    if (typeof props === "object" && props !== null) {
        Object.assign(element, props);
    }
    //Return the new element
    return element;
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
    // 
    // Code block
    // ```javascript
    // let a = 0;
    // ```
    "codeStart": /^```\s*(\w*)/,
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

//Generate a list with all block nodes
let getBlockNodes = function () {
    return parseNodes({
        "heading": {
            "test": tokens.heading,
            "parse": function (element, line, index, parser) {
                matchRegex(line, tokens.heading, function (full, level, text) {
                    element["level"] = level.length; //Save heading level
                    element["children"] = parser(text.trim());
                });
                return false; //Stop processing lines
            }
        },
        "blockquote": {
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
            }
        },
        "rule": {
            "test": tokens.rule,
            "parse": function (element) {
                delete element["children"]; //Delete element children
                return false; //Continue
            }
        },
        "table": {
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
            }
        },
        "code": {
            "test": tokens.codeStart,
            "parse": function (element, line, index) {
                if (index === 0) {
                    delete element["children"]; //Remove children field
                    element["value"] = []; //Initialize value list
                    return true; //Skip the first line
                }
                else if (tokens.codeEnd.test(line.trim()) === false) {
                    element.value.push(line); //Save code line
                    return true;
                }
                //Default --> end of block
                return false;
            }
        },
        "list": {
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
            }
        },
        "html": {
            "test": tokens.html,
            "parse": function (element, line, index) {
                if (index === 0) {
                    delete element["children"]; //Remove children field
                    element["value"] = []; //Initialize value list
                }
                if (line.trim().length !== 0) {
                    element.value.push(line); //Save html code line
                    return true;
                }
                //Empty line --> end html code block
                return false;
            }
        },
        "paragraph": {
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
            }
        }
    });
};

//Get a list with inline nodes
let getInlineNodes = function () {
    return parseNodes({
        "image": {
            "test": tokens.image,
            "parse": function (element, match) {
                delete element["children"]; //Delete element children
                element["alt"] = match[1].trim(); //Save image alt caption
                element["src"] = match[2].trim(); //Save image src
            }
        },
        "link": {
            "test": tokens.link,
            "parse": function (element, match, index, parser) {
                element["href"] = match[2].trim(); //Save link url
                element["children"] = parser(match[1]); //Parse link children
            }
        },
        "strong": {
            "test": tokens.strong,
            "parse": function (element, match, index, parser) {
                element["children"] = parser(match[1]); 
            }
        },
        "emphasis": {
            "test": tokens.emphasis,
            "parse": function (element, match, index, parser) {
                element["children"] = parser(match[1]); 
            }
        },
        "inlineCode": {
            "test": tokens.inlineCode,
            "parse": function (element, match, index, parser) {
                delete element["children"]; //Delete children field
                element["value"] = match[1]; //Save inline code
            }
        }
    });
};

//Find the node that matches the provided string
let matchNode = function (nodes, str, callback) {
    for (let i = 0; i < nodes.length; i++) {
        let match = nodes[i].test.exec(str);
        if (match !== null) {
            return callback(nodes[i], match);
        }
    }
};

//Container default options
let containerDefaultOptions = {
    "parseContent": true, //Parse content
    "allowEmptyLines": true, //Allow empty lines
    "delimiter": ":::" //Default container delimiter
};

//Create a new container node
let createContainerNode = function (name, options) {
    options = Object.assign({}, containerDefaultOptions, options); //Parse container options
    //Build container regex
    let containerStartRegex = new RegExp("^" + options.delimiter + "\\s*(" + name + ")\\s*(.*)\\s*", "");
    let containerEndRegex = new RegExp("^" + options.delimiter + "", ""); //Container end regex
    //console.log(containerStartRegex);
    return {
        "name": name,
        "test": containerStartRegex,
        "parse": function (element, line, index, parser) {
            if (index === 0) {
                //Parse the container attributes
                matchRegex(line, containerStartRegex, function (full, type, args) {
                    if (args === "") {
                        return null; //Nothing to parse
                    }
                    Object.assign(element, parseAttributes(args)); //Parse and merge attributes
                });
                element["children"] = []; //Prevent children override
                return true; //Nothing to parse
            }
            //Check for valid line --> parse line
            else if (containerEndRegex.test(line.trim()) === false) {
                if (options.allowEmptyLines === false && line.trim().length === 0) {
                    return true; //Empty line --> continue
                }
                //Check if user wants to parse the lines
                if (options.parseContent === true) {
                    parser(line).forEach(function (item) {
                        element.children.push(item); //Save parsed line
                    });
                }
                else {
                    //Save the line without parsing
                    element.children.push(line);
                }
                return true; //process next line
            }
            //Default: stop parsing lines
            return false;
        }
    };
};

//Initialize markdown class
let Markdown = function () {
    if (!(this instanceof Markdown)) {
        return new Markdown();
    }
    //Initialize the list of nodes
    this.blockNodes = getBlockNodes();
    this.inlineNodes = getInlineNodes();
};

//Register methods
Markdown.prototype = {
    //Parse a string using inline nodes
    "parseInline": function (str) {
        let self = this;
        let elements = []; //Initialize parsed elements
        //let nodes = getNodes(context.nodes, true); //Get inline nodes
        let start = 0; //Start index
        for (let i = 0; i < str.length; i++) {
            matchNode(self.inlineNodes, str.substring(i), function (node, match) {
                //Add the previous text
                if (start < i) {
                    elements.push(createElement("text", {
                        "value": str.substring(start, i)
                    }));
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
            elements.push(createElement("text", {
                "value": str.substring(start)
            }));
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
            return matchNode(self.blockNodes, line, function (node) {
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
    //Register a container node
    "registerContainer": function (name, options) {
        this.blockNodes.unshift(createContainerNode(name, options));
    }
};

//Export markdown instance
module.exports = Markdown();


