import React from "react";
import {Btn} from "../core/btn/index.js";
import {Select} from "../core/select/index.js";
import {Switch} from "../core/switch/index.js";
import {Label} from "../core/label/index.js";

//Import styles
import "./style.scss";

//Export testing component
export class Test extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        //Initial state and references objects
        this.state = {
            "key": Date.now()
        };
        this.ref = {};
        //For each property added
        Object.keys(this.props.props).forEach(function (key) {
            //Initialize the default value of the state
            self.state[key] = self.props.props[key].defaultValue;
            //Initialize the referenced element
            self.ref[key] = React.createRef();
        });
        //Referenced element
        this.reference = React.createRef();
        //Bind methods
        this.handleChange = this.handleChange.bind(this);
    }
    //Get referenced element
    getReferencedElement() {
        return this.reference.current;
    }
    //Handle change
    handleChange() {
        let self = this;
        let newState = {
            "key": Date.now()
        };
        Object.keys(this.props.props).forEach(function (key, index) {
            let element = self.props.props[key];
            if (element.type === "string") {
                newState[key] = self.ref[key].current.value;
            }
            else if (element.type === "boolean") {
                newState[key] = self.ref[key].current.checked;
            }
        });
        //Update the component state
        return this.setState(newState);
    }
    //Render the content
    renderContent() {
        let props = this.props;
        let content = (typeof props.render === "function") ? props.render.call(null, this.state, this.reference) : null;
        return React.createElement("div", {"className": "neutrine-test-content"}, content);
    }
    //Render a string option
    renderStringOption(key, element) {
        let self = this;
        let title = React.createElement(Label, {}, key);
        //Generate the select options
        let options = element.options.map(function (value, index) {
            return React.createElement("option", {"value": value, "key": index}, value);
        });
        //Generate the select props
        let selectProps = {
            "fluid": true,
            "defaultValue": element.defaultValue,
            "ref": self.ref[key]
        };
        let select = React.createElement(Select, selectProps, options);
        //Return the string control
        return React.createElement(React.Fragment, {}, title, select);
    }
    //Render a boolean option
    renderBooleanOption(key, element) {
        let self = this;
        let switchProps = {
            "defaultChecked": element.defaultValue,
            "ref": self.ref[key]
        };
        let switchElement = React.createElement(Switch, switchProps);
        let title = React.createElement(Label, {}, key);
        return React.createElement(React.Fragment, {}, switchElement, title);
    }
    //Render the update button
    renderUpdateBtn() {
        let btnProps = {
            "fluid": true,
            "color": "primary",
            "onClick": this.handleChange
        };
        //Render the button
        return React.createElement(Btn, btnProps, "Update");
    }
    //Render the options
    renderOptions() {
        let self = this;
        let content = Object.keys(this.props.props).map(function (key, index) {
            let element = self.props.props[key];
            let control = null;
            if (element.type === "string") {
                control = self.renderStringOption(key, element);
            }
            else if (element.type === "boolean") {
                control = self.renderBooleanOption(key, element);
            }
            //Return the control
            return React.createElement("div", {"className": "neutrine-test-options-control", "key": index}, control);
        });
        //Build the update button
        return React.createElement("div", {"className": "neutrine-test-options"}, content, this.renderUpdateBtn());
    }
    //Render the component
    render() {
        return React.createElement("div", {"className": "neutrine-test"}, this.renderContent(), this.renderOptions());
    }
}

//Testing component default props
Test.defaultProps = {
    "props": {},
    "render": null
};

