import React from "react";
import {If} from "siimple-react";
//import {Btn} from "siimple-react";
//import {Icon} from "siimple-react";
//import {Row, Column} from "siimple-react";
//import {Spinner} from "siimple-react";
//import {SplitPanel, SplitPanelItem} from "common/src/components/SplitPanel.js";

import {languages} from "../global.js";
import {CodePanel} from "./CodePanel.js";
import {ResultPanel} from "./ResultPanel.js";
import {createSandbox} from "../sandbox.js";
//import style from "./style.scss";

//Build state from props
const buildStateFromProps = function (props) {
    const newState = {
        "showCodePanel": true,
        "showResultPanel": false,
        "currentKey": null,
        "currentLanguage": "html",
        "content": createSandbox({})
    };
    //Return new state
    return newState;
};

//Playground component
export class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = buildStateFromProps(props);
        this.code = React.createRef();
        //Bind handlers
        this.handleRunClick = this.handleRunClick.bind(this);
        //this.handleResetClick = this.handleResetClick.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleResizeToggle = this.handleResizeToggle.bind(this);
        this.handleResultClose = this.handleResultClose.bind(this);
        //Bind public methods
        this.getCurrentContent = this.getCurrentContent.bind(this);
        this.load = this.load.bind(this);
        this.toJSON = this.toJSON.bind(this);
        this.toHTML = this.toHTML.bind(this);
        this.update = this.update.bind(this);
        this.run = this.run.bind(this);
        //this.export = this.export.bind(this);
    }
    //Component did mount --> Set html code
    componentDidMount() {
        this.code.current.setValue(this.state.content["html"]);
    }
    //Load pad content
    load(content) {
        const self = this;
        const newState = {
            //"languages": Object.keys(newContent),
            "content": Object.assign(createSandbox(), content),
            "currentLanguage": "html",
            "showCodePanel": true,
            "showResultPanel": false
        };
        //Update the state with the new content
        return this.setState(newState, function () {
            self.code.current.setValue(newState.content["html"]);
        });
    }
    //Update pad content
    update(newContent) {
        return this.setState({
            "content": Object.assign({}, this.state.content, newContent)
        });
    }
    //Export the pad to JSON
    toJSON() {
        return Promise.resolve(this.getCurrentContent());
    }
    //Export the pad to HTML string
    toHTML() {
        return Promise.resolve(null);
    }
    //Get current content
    getCurrentContent() {
        const currentLanguage = this.state.currentLanguage;
        const content = Object.assign({}, this.state.content);
        if (this.state.showCodePanel === true) {
            content[currentLanguage] = this.code.current.getValue();
        }
        //Return the current content
        return content;
    }
    //Handle language change
    handleLanguageChange(key) {
        const self = this;
        const content = this.getCurrentContent();
        //Build the new state
        const newState = {
            "currentLanguage": key,
            "content": content
        };
        return this.setState(newState, function () {
            return self.code.current.setValue(content[key]);
        });
    }
    //Handle run click
    handleRunClick() {
        return this.run();
    }
    //Run the current code
    run() {
        return this.setState({
            "content": this.getCurrentContent(),
            "currentKey": Date.now(),
            "showResultPanel": true
        });
    }
    //Handle resize toggle --> show/hide code panel
    handleResizeToggle() {
        const self = this;
        const nowResized = this.state.showCodePanel;
        if (nowResized === true) {
            return this.setState({
                "content": this.getCurrentContent(),
                "showCodePanel": false
            });
        }
        //Show the code panel and reload the editor
        return this.setState({"showCodePanel": true}, function () {
            const currentLanguage = self.state.currentLanguage;
            const content = self.state.content;
            return self.code.current.setValue(content[currentLanguage]);
        });
    }
    //Handle result close --> hide close dialog
    handleResultClose() {
        const self = this;
        //Check if code panel is open --> only hide result panel
        if (this.state.showCodePanel === true) {
            return this.setState({"showResultPanel": false});
        }
        //Show the code panel and reload the editor
        const newState = {
            "showCodePanel": true, 
            "showResultPanel": false
        };
        return this.setState(newState, function () {
            const currentLanguage = self.state.currentLanguage;
            const content = self.state.content;
            return self.code.current.setValue(content[currentLanguage]);
        });
    }
    //Render editor component
    render() {
        const self = this;
        const {showCodePanel, showResultPanel} = this.state;
        //const layout = this.state.layout || "default";
        return (
            <div className="has-flex has-flex-row has-flex-grow has-w-full has-h-full">
                {/* Check for rendering code panel */}
                <If condition={showCodePanel} render={function () {
                    return React.createElement(CodePanel, {
                        //"key": this.state.currentKey,
                        "ref": self.code,
                        "currentLanguage": self.state.currentLanguage,
                        "languages": self.props.languages,
                        //"compact": self.props.compact,
                        "onLanguageChange": self.handleLanguageChange,
                        "onRunClick": self.handleRunClick,
                        "theme": self.props.theme
                    });
                }} />
                {/* Separator space */}
                <If condition={showCodePanel && showResultPanel} render={function () {
                    return <div className="has-h-full has-w-4" />;
                }} />
                {/* Check for rendering result panel */}
                <If condition={showResultPanel} render={function () {
                    return React.createElement(ResultPanel, {
                        "key": self.state.currentKey,
                        "onCloseClick": self.handleResultClose,
                        "onResizeClick": self.handleResizeToggle,
                        //"compact": this.props.compact,
                        "theme": self.props.theme,
                        "sandbox": self.state.content,
                        "isResized": showCodePanel === false
                    });
                }} />
            </div>
        );
    }
} 

//Playground Editor default props
Playground.defaultProps = {
    "pad": null, //Pad source data
    "languages": ["html", "css", "js"],
    //"layout": "default",
    //"compact": false,
    "theme": "dark"
};


