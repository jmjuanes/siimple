import kofi from "kofi";
//import {startsWith, endsWith} from "./utils.js";

//Tokens types
const tokenTypes = [
    "other",             // 0: other value
    "operator",          // 1: operators (. + || &&)
    "punctuation",       // 2: punctuation symbols (() [] {} /)
    "keyword",           // 3: language specific keyword
    "constant",          // 4: language specific constant (null, true, false)
    "regex",             // 5: regex expressions
    "number",            // 6: numbers
    "tag",               // 7: XML tagnames
    "attribute.name",    // 8: XML attribute names
    "attribute.value",   // 9: XML attribute values
    "selector",          // 10: CSS selectors
    "flag",              // 11: CSS flags (!improtant, !default)
    "string",            // 12: double quote string ("...")
    "string",            // 13: single quote string ('...')
    "string",            // 14: backtick quoted strings (`...`)
    "comment",           // 15: XML comment (<!-- ... -->)
    "comment",           // 16: inline comment (//....)
    "comment",           // 17: block comment (/* ... */)
    "unit",              // 18: CSS unit (px, rem, em, %)
    "color",             // 19: CSS color (#000, #0000)
];

//Available themes
const themes = {
    "light": {
        "operator": "#e57697", //red
        "punctuation": "#3a464e", //darkGray
        "keyword": "#b351d9", //purple
        "constant": "#20118a", //darkBlue
        "number": "#e57697", //red
        "tag": "#3a9ff2", //lightBlue
        "attribute.name": "#f38d00", //orange
        "attribute.value": "#00a17d", //green
        "string": "#00a17d", //green
        "comment": "#969896", //lightGray
        "unit": "#e57697", //red
        "color": "#b351d9", //purple
    },
    "dark": {
        "operator": "#56b6c2", //light blue
        "punctuation": "#abb2bf", //gray
        "keyword": "#c678dd", //purple
        "constant": "#d19a66", //orange
        "number": "#d19a66", //orange
        "tag": "#e06c75", //red
        "attribute.name": "#d19a66", //orange
        "attribute.value": "#98c379", //green
        "string": "#98c379", //green
        "comment": "#5c6370", //darkGray
        "unit": "#d19a66", //orange
        "color": "#c678dd", //purple
    },
};

//Javascript keywords
const jsKeywords = [
    "abstract","arguments","async","await","break","case","catch","class","const","continue","constructor",
    "debugger","default","delete","do","else","export","extends","finally","for","from",
    "function","if","implements","import","in","instanceof","interface","let","module","new",
    "of","return","static","super","switch","symbol","this","throw",
    "try","typeof","undefined","var","void","while","with","yield"
];
const jsConstants = ["null", "true", "false"];

// CSS/SCSS keywords
const cssKeywords = [
    "absolute", "relative", "fixed", "sticky",
    "bold", "normal",
    "auto", "none",
    "sans-serif", "sans", "serif", "monospace",
];

//Global regular expressions
const regexp = {
    "nonWhitespace": /[\S]/,
    "word": /[\w]/,
    "number": /[\d\.]/,
    "htmlPunctuation": /^[\/=<>]/,
    "htmlTag": /^[\w\d\.\-\_]/,
    "htmlAttribute": /^([\w\d\.\-\_]+)\=/,
    "jsPunctuation": /^[{}[\](\):;\\.,]/,
    "jsOperator": /^[?!&@~\/\-+*%=<>|]/,
    "jsKeyword": new RegExp(`^(${jsKeywords.join("|")})$`, ""),
    "jsConstant": new RegExp(`^(${jsConstants.join("|")})[^\w]`, ""),
    "cssKeyword": new RegExp(`^(${cssKeywords.join("|")})$`, ""),
    "cssUnit": /^[\d\.]+\s*(cm|mm|in|px|pt|pc|em|rem|vw|vh|%)/,
    "cssColor": /^#([\da-f]{3}){1,2}/,
    "doubleQuote": /[\"]/,
    "singleQuote": /[\']/,
    "backtick": /[`]/
};

//Get a theme by name
const getTheme = function (name) {
    return typeof themes[name] !== "undefined" ? themes[name] : themes["light"];
};

//Create a new context
const createContext = function (code, language, endStr) {
    return {
        "code": code, //Code to parse
        "current": null, //Current char
        "next": code[0], //Next char
        "last": null, //Previous char
        "token": createToken(0),
        "mode": null,
        "lang": language || "html",
        "end": endStr || null,
        "result": ""
    };
};

//Check if the provided value is a keyword
const isKeyword = function (value, lang) {
    if (lang === "js") {
        return regexp.jsKeyword.test(value);
    }
    if (lang === "css" || lang === "scss") {
        return regexp.cssKeyword.test(value);
    }
    // Default value --> not a keyword
    return false;
};

//Check if is comment token
const isCommentToken = function (index) {
    return 15 <= index && index <= 17;
};

//Create a token
const createToken = function (t) {
    return {"type": t, "content": ""};
};

//Render a token
const renderToken = function (ctx, theme) {
    const type = ctx.token.type;
    const content = kofi.escape(ctx.token.content); //Escaape HTML characters
    //Check for other or keyword token
    if (type === 0 || (type === 3 && !isKeyword(content, ctx.lang))) {
        return content;
    }
    //Render the token
    const name = tokenTypes[type]; //Get token name
    return `<span style="color:${theme[name] || "#000"};">${content}</span>`;
};


//End token
//TODO: use switch | if-else | lockup table ?
//https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html#if-else_versus_switch
//BUT: https://medium.com/front-end-weekly/switch-case-if-else-or-a-lookup-map-a-study-case-de1c801d944
const shouldEndToken = function (ctx) {
    const c = ctx.current; //Current char
    const {type, content} = ctx.token; //Get token type and content
    //Check for whitespace or word tokens
    if (type === 0) { 
        return regexp.nonWhitespace.test(c) || !regexp.word.test(c); //Check for no word
    }
    else if (type === 1 || type === 2) { return true; } //Always end a punctuation or operator sign
    //TODO: check for closing regex tokens
    else if (type === 3 || type === 4) { return !regexp.word.test(c); } //End of word
    else if (type === 6) { return !regexp.number.test(c); } //Check for no digit
    else if (type === 7 || type === 8) { return !regexp.htmlTag.test(c); } //End attribute name or tag
    else if (type === 9 || type === 12) {
        return content.length > 1 && regexp.doubleQuote.test(ctx.last); //End attribute value or double quote str
    }
    //TODO: end CSS tokens
    //End of strings tokes
    else if (type === 13) { return content.length > 1 && regexp.singleQuote.test(ctx.last); } //End single quotes
    else if (type === 14) { return content.length > 1 && regexp.backtick.test(ctx.last); } //End backtick quotes
    //End of comments tokens
    else if (type === 15) { return content.endsWith("-->"); } //End block comment token
    else if (type === 16) { return c === "\n"; } //End single line token
    else if (type === 17) { return content.endsWith("*/"); } //End block comment token
    else if (type === 18) { return regexp.cssUnit.test(content); } // End CSS unit token
    else if (type === 19) {
        return regexp.cssColor.test(content) && !regexp.word.test(c); // End CSS color token
    }
    //Other value???
    return false;
};

//Next token
const getNextToken = function (ctx) {
    const c = ctx.current; //Get current char
    const mode = ctx.mode; //Get current mode
    //HTML language tokens
    if (ctx.lang === "html") {
        if (ctx.code.startsWith("<!--")) { return createToken(15); } //Comment token
        else if (c === "<") { return createToken(2); } //HTML punctuation
        else if (mode === "tag" && regexp.htmlPunctuation.test(c)) { return createToken(2); } //HTML punctuation
        else if (mode === "tag" && regexp.doubleQuote.test(c)) { return createToken(9); } //Attribute value
        else if (mode === "tag" && regexp.htmlTag.test(c)) {
            //Check for tag or attribute name
            return (ctx.last === "<" || ctx.last === "/") ? createToken(7) : createToken(8);
        }
    }
    //Javascript language tokens
    else if (ctx.lang === "js") {
        if (ctx.code.startsWith("/*")) { return createToken(17); } //Block comment token
        else if (ctx.code.startsWith("//")) { return createToken(16); } //Line comment token
        else if (regexp.backtick.test(c)) { return createToken(14); } //Backtick string
        else if (regexp.singleQuote.test(c)) { return createToken(13); } //Single quote string
        else if (regexp.doubleQuote.test(c)) { return createToken(12); } //Double quote string
        else if (regexp.jsPunctuation.test(c)) { return createToken(2); } //Punctuation token
        else if (regexp.jsOperator.test(c)) { return createToken(1); } //Operator token
        else if (regexp.number.test(c)) { return createToken(6); } //Number
        else if (regexp.jsConstant.test(ctx.code)) { return createToken(4); } //Language constant
        else if (regexp.word.test(c)) { return createToken(3); } //Keyword
    }
    // CSS / SCSS language tokens
    else if (ctx.lang === "css" || ctx.lang === "scss") {
        if (ctx.code.startsWith("/*")) { return createToken(17); } //Block comment token
        else if (ctx.code.startsWith("//")) { return createToken(16); } //Line comment token
        else if (regexp.doubleQuote.test(c)) { return createToken(12); } //Double quote string
        else if (regexp.singleQuote.test(c)) { return createToken(13); } //Single quote string
        else if (regexp.cssUnit.test(ctx.code)) { return createToken(18); } // CSS Unit
        else if (regexp.cssColor.test(ctx.code)) { return createToken(19); } // CSS Color
        else if (regexp.number.test(c)) { return createToken(6); } //Number
        else if (regexp.word.test(c)) { return createToken(3); } //Keyword
    }
    //Default token
    return createToken(0);
};

//Colorize the provided context
export function colorizeCtx (ctx, theme) {
    let subLanguage = null;
    let newEnd = null;
    let shouldRunSublanguage = false;
    if (typeof ctx.end === "string" && ctx.code.startsWith(ctx.end)) {
        return ctx; //Stop processing code
    }
    //Parse all characters of the code
    while (true) {
        ctx.last = (ctx.last === "\\" && !isCommentToken(ctx.token.type)) ? 1 : ctx.current;
        ctx.current = ctx.next; //Update current char
        ctx.next = ctx.code[1]; //Get next char
        //Check for no current char or if token has been ended
        if (typeof ctx.current !== "string" || shouldEndToken(ctx)) {
            //Check for non empty token --> append to the output string
            if (typeof ctx.token.content === "string" && ctx.token.content.length > 0) {
                ctx.result = ctx.result + renderToken(ctx, theme); //Render token
            }
            //Check for HTML code --> update the context
            if (ctx.lang === "html") {
                if (ctx.last === "<") {
                    ctx.mode = "tag";  //Start of tag mode
                }
                //Check for end of tag
                else if (ctx.last === ">") {
                    //Check first if we should run a sublanguage parsing (js or css)
                    if (subLanguage === "js" || subLanguage === "css") {
                        newEnd = subLanguage === "js" ? "</script>" : "</style>";
                        shouldRunSublanguage = true;
                    }
                    ctx.mode = null; //Clear mode
                }
                //Check for next language --> process js language
                if (ctx.token.content === "<" && ctx.code.startsWith("script")) {
                    subLanguage = "js"; // JS sublanguage
                }
                else if (ctx.token.content === "<" && ctx.code.startsWith("style")) {
                    subLanguage = "css"; // CSS sublanguage
                }
            }
            //Check if we should run the code in another language
            if (shouldRunSublanguage === true && subLanguage !== null) {
                let newCtx = createContext(ctx.code, subLanguage, newEnd);
                colorizeCtx(newCtx, theme); 
                //Update the current context
                ctx.result = ctx.result + newCtx.result;
                ctx.code = newCtx.code;
                ctx.current = ctx.code[0];
                ctx.next = ctx.code[1];
                subLanguage = null; //Clear sublanguage
                shouldRunSublanguage = false;
            }
            //Check for js or stylecode and end tag provided
            if (typeof ctx.end === "string" && ctx.code.startsWith(ctx.end)) {
                break; //Stop while loop
            }
            //Check for no more chars to parse
            if (typeof ctx.current !== "string") {
                break; //Stop while loop
            }
            //Get the next token
            ctx.token = getNextToken(ctx);
        }
        //Save next character in the token
        ctx.token.content = ctx.token.content + ctx.current;
        ctx.code = ctx.code.substr(1); //Remove the first character
    }
    //Return the highlighted text
    //return {"result": result, "code": ctx.code};
    //console.log(JSON.stringify(ctx, null, "    "));
    return ctx;
}

//Colorize value
export function colorize (value, language, theme) {
    return colorizeCtx(createContext(value, language, null), getTheme(theme)).result;
}

