import React from "react";
import {ForEach} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";

import style from "./style.scss";

import {colors} from "../../../utils/options/colors.js";

//Export color option
export class ColorOption extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "selected": this.props.value
        };
        //Bind methods
        this.getValue = this.getValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    //Handle color click
    handleClick(color) {
        return this.setState({
            "selected": color
        });
    }
    //Get current value
    getValue() {
        return this.state.selected;
    }
    //Render the text element
    render() {
        let self = this;
        return (
            <div align="left">
                <ForEach items={Object.keys(colors)} render={function (key, index) {
                    return React.createElement("div", {
                        "className": classNames({
                            [style.color]: true,
                            [colors[key].className]: true,
                            [style.colorActive]: self.state.selected === key
                        }),
                        "onClick": function (event) {
                            return self.handleClick(key);
                        },
                        "key": index
                    });
                }} />
            </div>
        );
    }
}

