import React from "react";
import {ForEach, If, Renderer} from "@siimple/neutrine";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "@siimple/neutrine";
import {Menu, MenuItem} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {Btn} from "@siimple/neutrine";

import {Option} from "../option/index.js";

import style from "./style.scss";

//Export preferences component
export class Preferences extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        //Initial state
        this.state = {
            "values": Object.assign({}, this.props.values),
            "current": Object.keys(this.props.groups)[0]
        };
        //Referenced elements
        this.ref = {};
        Object.keys(this.props.attributes).forEach(function (key) {
            self.ref[key] = React.createRef();
        });
        //Bind methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getValues = this.getValues.bind(this);
    }
    //Get values
    getValues() {
        let self = this;
        let values = Object.assign({}, this.state.values);
        //Update the current values
        Object.keys(this.props.attributes).forEach(function (key) {
            let config = self.props.attributes[key];
            //Check if this group is the current group
            if (self.state.current === config.group) {
                values[key] = self.ref[key].current.getValue();
            }
        });
        console.log(values);
        //Return the parsed values
        return values;
    }
    //Hande edit submit
    handleSubmit() {
        return this.props.onSubmit(this.getValues());
    }
    //Handle cancel
    handleCancel() {
        return this.props.onCancel();
    }
    //Handle group change
    handleChange(group) {
        return this.setState({
            "values": this.getValues(),
            "current": group
        });
    }
    //Render the editing tool
    render() {
        let self = this;
        //Icon default style
        let iconStyle = {
            "fontSize": "16px",
            "lineHeight": "34px",
            "verticalAlign": "top",
            "marginRight": "5px"
        };
        //Return the preferences element
        return (
            <Modal size="medium">
                <ModalHeader title={this.props.title} onClose={this.handleCancel} />
                <ModalBody className={style.preferences}>
                    <div className={style.preferencesMenu}>
                        <Menu>
                            <ForEach items={Object.keys(this.props.groups)} render={function (key) {
                                let group = self.props.groups[key];
                                //Handle group change
                                let onChange = function () {
                                    return self.handleChange(key);
                                };
                                //Return the group
                                return (
                                    <MenuItem key={key} selected={self.state.current === key} onClick={onChange}>
                                        <Icon icon={group.icon} style={iconStyle} />
                                        {group.title}
                                    </MenuItem>
                                );
                            }} />
                        </Menu>
                    </div>
                    <div className={style.preferencesBody}>
                        {/* Editing content */}
                        <ForEach items={Object.keys(this.props.attributes)} render={function (key, index) {
                            let config = self.props.attributes[key];
                            //Check if this option is not on this group
                            if (config.group !== self.state.current) {
                                return null;
                            }
                            //Return the option
                            return React.createElement(Option, Object.assign({}, config, {
                                "key": index,
                                "value": self.state.values[key],
                                "ref": self.ref[key]
                            }));
                        }} />
                    </div>
                </ModalBody>
                <ModalFooter className="siimple--bg-white">
                    <div align="right">
                        <Btn color="success" onClick={this.handleSubmit}>
                            Save <strong>preferences</strong>
                        </Btn>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}

Preferences.defaultProps = {
    "title": "Preferences",
    "groups": {},
    "attributes": {},
    "values": {},
    "onSubmit": null,
    "onCancel": null
};

