import React from "react";
import {ForEach} from "@siimple/neutrine";
import {Select} from "@siimple/neutrine";

export class SelectOption extends React.Component {
    constructor(props) {
        super(props);
        //Referenced elements
        this.ref = React.createRef();
        //Bind methods
        this.getValue = this.getValue.bind(this);
    }
    //Get current value
    getValue() {
        return this.ref.current.value;
    }
    //Render the text element
    render() {
        let self = this;
        return (
            <Select fluid ref={this.ref} defaultValue={this.props.value}>
                <ForEach items={Object.keys(this.props.options)} render={function (key, index) {
                    return (
                        <option value={key} key={index}>{self.props.options[key]}</option>
                    );
                }} />
            </Select>
        );
    }
}

