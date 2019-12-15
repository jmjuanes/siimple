import React from "react";
import {ForEach} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";

import {themes} from "../../../utils/options/themes.js";
import style from "./style.scss";

export class ThemeOption extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "value": this.props.value
        };
        //Bind methods
        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //Get current value
    getValue() {
        return this.state.value;
    }
    //Change the theme option
    handleChange(newValue) {
        return this.setState({
            "value": newValue
        });
    }
    //Render the theme element
    render() {
        let self = this;
        return (
            <div className={style.root}>
                <ForEach items={Object.keys(themes)} render={function (key) {
                    let theme = themes[key];
                    let classList = classNames({
                        [style.item]: true,
                        [style.itemActive]: self.state.value === key
                    });
                    //Handle click
                    let handleClick = function () {
                        return self.handleChange(key);
                    };
                    //Return the theme item
                    return (
                        <div className={classList} onClick={handleClick} align="center" key={key}>
                            <div align="center">
                                <Icon icon={themes[key].icon} className={style.itemIcon} />
                            </div>
                            <div className={style.itemLabel}>
                                {themes[key].label}
                            </div>
                        </div>
                    );
                }} />
            </div>
        );
    }
}

