import React from "react";
import {Input} from "@siimple/neutrine";

export class TextOption extends React.Component {
    constructor(props) {
        super(props);
        //Referenced elements
        this.ref = React.createRef();
        //Bind methods
        this.getValue = this.getValue.bind(this);
    }
    //Get current value
    getValue() {
        return this.ref.current.value.trim();
    }
    //Render the text element
    render() {
        return React.createElement(Input, {
            "type": "text",
            "fluid": true,
            "ref": this.ref,
            "defaultValue": this.props.value
        });
    }
}

