import React from "react";

//Import icons
import {Icon} from "../../icon/index.js";

//Import styles
import "./style.scss";

//Get the default buttons list
let defaultButtons = {
    "bold": {
        "command": "bold",
        "title": "Bold"
    },
    "italic": {
        "command": "italic",
        "title": "Italic"
    },
    "underline": {
        "command": "underline",
        "title": "Underline"
    },
    "align-left": {
        "command": "justifyLeft",
        "title": "Align left"
    },
    "align-center": {
        "command": "justifyCenter",
        "title": "Align center"
    },
    "align-right": {
        "command": "justifyRight",
        "title": "Align right"
    },
    "align-justify": {
        "command": "justifyFull",
        "title": "Justify"
    },
    "clear-format": {
        "command": "removeFormat",
        "title": "Clear format"
    }
};

//Export text editor widget
export class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.ref = {
            "editor": React.createRef()
        };
        //Bind methods
        this.applyFormat = this.applyFormat.bind(this);
    }
    componentDidMount() {
        this.ref.editor.current.innerHTML = this.props.innitialContent;
    }
    applyFormat(key) {
        //console.log("Apply command for button " + key);
        return document.execCommand(defaultButtons[key].command, false, null);
    }
    getContent() {
        return this.ref.editor.current.innerHTML;
    }
    setContent(content) {
        this.ref.editor.current.innerHTML = content;
    } 
    renderButtons() {
        let self = this;
        let buttons = this.props.buttons.map(function (key, index) {
            return React.createElement(Icon, {
                "icon": key,
                "className": "neutrine-te-btn",
                "title": defaultButtons[key].title,
                "key": index,
                "onMouseDown": function (event) {
                    return self.applyFormat(key);
                }
            });
        });
        return React.createElement("div", {"className": "neutrine-te-buttons"}, buttons);
    }
    renderEditor() {
        let editorClass = ["neutrine-te-editor"];
        if (this.props.paper === true) {
            editorClass.push("neutrine-te-editor--paper");
        }
        if (this.props.resize === true) {
            editorClass.push("neutrine-te-editor--resize");
        }
        let editorContent = React.createElement("div", {
            "className": "neutrine-te-editor-content",
            "ref": this.ref.editor,
            "contentEditable": true,
            "spellCheck": this.props.spellCheck
        });
        return React.createElement("div", {"className": editorClass.join(" ")}, editorContent);
    }
    render() {
        return React.createElement("div", {"className": "neutrine-te"}, this.renderButtons(), this.renderEditor());
    }
}

//Text editor default props
TextEditor.defaultProps = {
    "buttons": Object.keys(defaultButtons),
    "spellCheck": false,
    "paper": false,
    "resize": false,
    "innitialContent": "<i><u>Hello</u></i> <b>world!</b>"
};

