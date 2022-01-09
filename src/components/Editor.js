import React from "react";
import kofi from "kofi";
import {classNames} from "siimple-react";

import {colorize} from "../colorize.js";
import {isSafariBrowser} from "../browser.js";

//Check if the provided char is a quote char
const isQuoteChar = char => {
    return char === "'" || char === "\"" || char === "`";
};

//Check if a string only contains whitespaces
const hasOnlyWhitespaces = str => {
    return str.replace(/\s/g, "").length === 0;
};

//Styles
const editorFontFamily = "'Consolas', monospace";
const style = {
    "preview": {
        "pointerEvents": "none",
        "zIndex": "2",
        "fontFamily": editorFontFamily,
        "fontSize": "14px",
        "fontWeight": "normal",
        "lineHeight": "20px",
        "position": "absolute",
        "top": "0px",
        "left": "40px",
        "width": "calc(100% - 45px)",
        "height": "100px",
        "margin": "0px",
        "paddingLeft": "5px",
    },
    //Editor code style
    "code": {
        //"backgroundColor": "#ffffff",
        "padding": "0px",
        "paddingLeft": "5px",
        "border": "none",
        "zIndex": "1",
        "resize": "none",
        "fontFamily": editorFontFamily,
        "fontSize": "14px",
        "lineHeight": "20px",
        //"caretColor": "#111",
        "color": "transparent",
        "width": "calc(100% - 45px)",
        "height": "100%",
        "top": "0px",
        "left": "40px",
        "position": "absolute",
        //"whiteSpace": "nowrap"
        "whiteSpace": "pre",
        "outline": "0px",
    },
    //Editor lines wrapper
    "lines": {
        "width": "30px",
        "fontSize": "12px",
        "fontFamily": editorFontFamily,
        "position": "absolute",
        "left": "0",
        "top": "0",
        "textAlign": "right",
        //"color": "#3595b2",
        "zIndex": "3",
        "paddingLeft": "5px",
        "paddingRight": "5px",
        //"backgroundColor": "#ffffff"
    },
    //Lines item
    "linesItem": {
        "display": "block",
        "height": "20px",
        "lineHeight": "20px",
    },
};

//Code editor component
export class Editor extends React.Component {
    constructor(props) {
        super(props);
        //Initialize editor state
        this.state = {
            "lines": 0,
        };
        //Referenced elements
        this.ref = {
            "code": React.createRef(),
            "lines": React.createRef(),
            "preview": React.createRef(),
        };
    }
    //Component did mount --> mount code editor
    componentDidMount() {
        const {preview, lines, code} = this.ref;
        //Register new content in code element
        code.current.addEventListener("input", event => {
            return this.update(event.target.value);
        });
        //Register key down --> parse inserted key
        code.current.addEventListener("keydown", event => {
            this.handleTab(event);
            //this.handleClosingChar(event);
            this.handleNewLine(event);
            this.handleBackspace(event);
        });
        //Register scroll --> move preview and lines
        code.current.addEventListener("scroll", event => {
            const target = event.target; //Get target element
            preview.current.style.transform = `translate3d(-${target.scrollLeft}px, -${target.scrollTop}px, 0)`;
            lines.current.style.transform = `translate3d(0, -${target.scrollTop}px, 0)`;
        });
        //Set initial value
        return this.update(this.props.defaultValue);
    }
    //Component will unmount --> destroy editor
    componentWillUnmount() {
        return null;
    }
    //Update editor value
    update = (value) => {
        const {language, theme} = this.props;
        this.ref.code.current.value = value; //Update current code value
        //Update lines (only if new lines are different from current lines)
        const newLines = value.split("\n").length;
        if (newLines !== this.state.lines) {
            kofi.dom.clear(this.ref.lines.current); //Remove current lines
            for (let i = 1; i <= newLines; i++) {
                let line = kofi.dom.create("span", {"style": style.linesItem}, i.toString());
                //let lineElement = createElement("span", this.ref.lines.current);
                //lineElement.classList.add(style.linesItem);
                //lineElement.textContent = i; //Add line number
                kofi.dom.append(line, this.ref.lines.current); //Append to lines
            }
            //Update lines count
            this.state.lines = newLines;
        }
        //Update preview element
        this.ref.preview.current.innerHTML = colorize(value, language, theme);
    }
    //Handle tab
    handleTab = (event) => {
        //Check for handling tabs: TODO
        if (event.keyCode !== 9) {
            return; //No tab character pressed
        }
        event.preventDefault(); //Disable tab character
        let el = this.ref.code.current;
        let selStart = el.selectionStart;
        let selEnd = el.selectionEnd;
        //let value = el.value;
        //Get selection value
        let beforeSelection = el.value.substr(0, selStart); //Get before selection
        let currentSelection = el.value.substring(selStart, selEnd); //Get current selection
        let afterSelection = el.value.substring(selEnd); //Get after selection
        let indent = " ".repeat(this.props.tabSize); //Array(this.options.tabSize + 1).join(" "); //Indentation 
        //Check for indenting a block
        if (selStart !== selEnd) {
            let newSelectionStart = selStart;
            let newSelectionEnd = selEnd;
            let lineStart = selStart - beforeSelection.split("\n").pop().length;
            //console.log("line start: " + lineStart);
            //Check for no shift key pressed --> apply indent
            if (event.shiftKey === false) {
                beforeSelection = beforeSelection.substr(0, lineStart) + indent + beforeSelection.substring(lineStart, selStart)
                currentSelection = currentSelection.replace(/\n/g, "\n" + indent); //Add a tab to all lines on this selection
                newSelectionStart = selStart + indent.length;
                newSelectionEnd = selStart + currentSelection.length + indent.length;
            }
            //Shift key pressed
            else {
                //Remove indentation of the first line
                let lineStartIndent = 0; //indent.length; //To store the indentation removed
                let lineStartValue = el.value.substr(lineStart, indent.length);
                //console.log("line start value: '" + lineStartValue + "'");
                //Check if the line starts with an indent
                if (lineStartValue === indent) {
                    let removeIndentStart = lineStart;
                    let removeIndentEnd = lineStart + indent.length;
                    //console.log("remove start: " + removeIndentStart);
                    //console.log("remove end: " + removeIndentEnd);
                    //Check if the line start is in the selection start
                    if (removeIndentStart === selStart) {
                        currentSelection = el.value.substring(removeIndentEnd, selEnd);
                        lineStartIndent = indent.length;
                    }
                    //Check if the remove end is not in the selection start
                    else if (removeIndentEnd <= selStart) {
                        beforeSelection = el.value.substr(0, lineStart) + el.value.substring(removeIndentEnd, selStart);
                        lineStartIndent = indent.length;
                    }
                    //Other --> mixed
                    else {
                        beforeSelection = el.value.substr(0, removeIndentStart);
                        currentSelection = el.value.substring(removeIndentEnd, selEnd);
                        lineStartIndent = Math.abs(selStart - removeIndentEnd);
                    }
                }
                //Remove indentation from current selection
                let indentRegex = "\n" + "\\ ".repeat(this.props.tabSize); 
                currentSelection = currentSelection.replace(new RegExp(indentRegex, "g"), "\n"); //Remove one indentation
                newSelectionStart = Math.max(0, selStart - lineStartIndent);
                newSelectionEnd = newSelectionStart + currentSelection.length;
            }
            //Update the code
            el.value = beforeSelection + currentSelection + afterSelection;
            el.selectionStart = newSelectionStart; 
            el.selectionEnd = newSelectionEnd;
            //console.log("new selection start: " + el.selectionStart);
            //console.log("new selection end: " + el.selectionEnd);
        }
        //Apply the default indentation at the current point
        else {
            el.value = beforeSelection + indent + afterSelection; //Add indent
            el.selectionStart = selStart + indent.length; //Update selection start
            el.selectionEnd = selStart + indent.length; //Update selection end
        }
        //Update the editor
        this.update(el.value);
    }
    //Handle closing char
    //handleClosingChar(event) {
    //    //TODO: check if closing chars is enabled
    //    let self = this;
    //    let key = event.key; //Get current key
    //    let openChars = self.state.autoClosingPairs.open;
    //    let closeChars = self.state.autoClosingPairs.close;
    //    //Check for no opening or closing chars
    //    if (openChars.includes(key) === false && closeChars.includes(key) === false) {
    //        return; //Not a closable char
    //    }
    //    let el = this.ref.code.current;
    //    let selStart = el.selectionStart;
    //    let selEnd = el.selectionEnd;
    //    let beforeSelection = el.value.substring(0, selStart); //Get before selection
    //    let currentSelection = el.value.substring(selStart, selEnd); //Get current selection
    //    let afterSelection = el.value.substring(selEnd); //Get after selection
    //    let hasSelection = Math.abs(selEnd - selStart) > 0; //Save if has selection
    //    let newCode = null;
    //    //Check to skip this char
    //    //if (hasSelection === false && closeChars.includes(key) === true) {
    //    let isQuoteKey = isQuoteChar(key);
    //    if ((closeChars.includes(key) && !isQuoteKey) || (isQuoteKey && hasSelection === false)) {
    //        let nextChar = el.value.substr(selEnd, 1); //Get next character
    //        let newSelEnd = (nextChar === key) ? selEnd + 1 : selEnd; //Get new selection end
    //        let newChar = (nextChar !== key && isQuoteKey) ? key : ""; //Get new character
    //        //Generate the new code string
    //        newCode = beforeSelection + newChar + el.value.substring(newSelEnd);
    //    }
    //    //Add start and end chars
    //    else {
    //        //Add the closing character after the current selection
    //        let index = openChars.indexOf(key);
    //        newCode = beforeSelection + currentSelection + closeChars[index] + afterSelection;
    //    }
    //    this.update(newCode);
    //    //Update the selection end
    //    el.selectionEnd = selStart;
    //}
    //Handle new line
    handleNewLine = (event) => {
        if (event.keyCode !== 13) {
            return; //No new line entered
        }
        event.preventDefault();
        let el = this.ref.code.current;
        let selStart = el.selectionStart;
        let selEnd = el.selectionEnd;
        let beforeSelection = el.value.substring(0, selStart); //Get before selection
        let afterSelection = el.value.substring(selEnd); //Get after selection
        //Get last line
        let lineStart = el.value.lastIndexOf("\n", selStart - 1);
        let lastSpace = lineStart + el.value.slice(lineStart + 1).search(/[^ ]|$/);
        let indentLength = (lastSpace > lineStart) ? (lastSpace - lineStart) : 0;
        //Build the new code adding the indentation
        let newCode = beforeSelection + "\n" + " ".repeat(indentLength) + afterSelection;
        el.value = newCode;
        el.selectionStart = selStart + indentLength + 1;
        el.selectionEnd = selStart + indentLength + 1;
        //Update the code
        return this.update(el.value);
    }
    //Handle backspace ---> remove indentation
    handleBackspace = (event) => {
        if (event.keyCode !== 8) {
            return; //No backspace
        }
        let tabSize = this.props.tabSize;
        let el = this.ref.code.current;
        let selStart = el.selectionStart;
        let selEnd = el.selectionEnd;
        //Check for no selection or start of text
        if (Math.abs(selEnd - selStart) > 0 || selStart === 0) {
            return; //Nothing to do --> continue
        }
        let lineStart = el.value.lastIndexOf("\n", selStart - 1);
        let prevIndent = el.value.substring(lineStart + 1, selStart);
        if (prevIndent.length === 0 || hasOnlyWhitespaces(prevIndent) === false) {
            return; //Nothing to do ---> continue
        }
        //console.log("prev indentation = " + prevIndent.length);
        event.preventDefault(); //Prevent backspace
        let indentLength = 0; //New indentation size
        if (prevIndent.length > tabSize) {
            let res = prevIndent.length % tabSize;
            indentLength = prevIndent.length - ((res === 0) ? tabSize : res);
        }
        //console.log("new indentation = " + indentLength);
        let newCode = el.value.substring(0, lineStart + 1) + " ".repeat(indentLength) + el.value.substring(selStart);
        el.value = newCode;
        el.selectionStart = selStart - (prevIndent.length - indentLength);
        el.selectionEnd = selStart - (prevIndent.length - indentLength);
        //Update the code
        return this.update(el.value);
    }
    //Get current editor value
    getValue = () => {
        return this.ref.code.current.value;
    }
    //Change current editor value
    setValue = (value) => {
        return this.update(value);
    }
    //Render editor component
    render() {
        //const props = this.props;
        const {spellCheck} = this.props; //Get theme value
        const isDarkTheme = this.props.theme === "dark";
        const rootClass = classNames("has-position-relative has-overflow-hidden", {
            //"has-w-full has-h-full": true,
            "has-bg-dark has-text-white": isDarkTheme,
            "has-bg-white has-text-dark": !isDarkTheme
        }, this.props.className);
        const codeClass = classNames({
            "has-bg-dark": isDarkTheme,
            "has-bg-white": !isDarkTheme
        });
        const codeStyle = Object.assign({}, style.code, {
            "caretColor": isDarkTheme === "dark" ? "white" : "#111",
            "whiteSpace": isSafariBrowser() ? null : "pre"
        });
        const linesClass = classNames({
            "has-bg-dark has-text-coolgray-600": isDarkTheme,
            "has-bg-white has-text-coolgray-500": !isDarkTheme
        });
        return (
            <div className={rootClass}>
                <textarea 
                    className={codeClass} 
                    style={codeStyle} 
                    ref={this.ref.code} 
                    spellCheck={spellCheck} 
                    wrap="off"
                />
                <pre style={style.preview} ref={this.ref.preview} />
                <div className={linesClass} style={style.lines} ref={this.ref.lines} />
            </div>
        );
    }
}

//Editor class default props
Editor.defaultProps = {
    "className": "has-w-full has-h-full",
    "defaultValue": "",
    "language": null,
    "theme": "dark",
    "tabSize": 4,
    "indentWithTabs": false,
    "lineNumbers": true,
    "readonly": false,
    "spellCheck": false,
};
