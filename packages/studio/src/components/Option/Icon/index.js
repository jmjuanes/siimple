import React from "react";
import {ForEach} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";

import {icons} from "../../../utils/options/icons.js";
import style from "./style.scss";

export class IconOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": this.props.value
        };
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
    //Render the icon element
    render() {
        let self = this;
        return (
            <div className={style.root}>
                <ForEach items={icons} render={function (icon) {
                    let classList = classNames({
                        [style.item]: true,
                        [style.itemActive]: self.state.value === icon
                    });
                    //Handle click
                    let handleClick = function () {
                        return self.handleChange(icon);
                    };
                    return (
                        <div className={classList} onClick={handleClick} align="center" key={icon}>
                            <Icon icon={icon} className={style.itemIcon} />
                        </div>
                    );
                }} />
            </div>
        );
    }
}

