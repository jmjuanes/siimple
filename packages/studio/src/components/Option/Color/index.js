import React from "react";
import {ForEach} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";

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
            <div className={style.root}>
                <ForEach items={Object.keys(colors)} render={function (key, index) {
                    let itemClass = classNames({
                            [style.item]: true,
                            [colors[key].className]: true,
                            [style.itemActive]: self.state.selected === key
                        });
                    let itemClick = function (event) {
                            return self.handleClick(key);
                    };
                    //Return the color item
                    return (
                        <div className={itemClass} key={index} onClick={itemClick} align="center">
                            <Icon icon="check" className={style.itemIcon} />
                        </div>
                    );
                }} />
            </div>
        );
    }
}

