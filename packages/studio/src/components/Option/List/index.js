import React from "react";
import {For, ForEach} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";

import {Option} from "../index.js";
import style from "./style.scss";

//Build items
let buildItems = function (items, callback) {
    let refs = {};
    //Build a new reference to this field
    Object.keys(items).forEach(function (key, index) {
        refs[key] = callback(items[key], index);
    });
    //Return the references
    return refs;
};

//List option
export class ListOption extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "value": this.props.value,
            "length": this.props.value.length,
            "time": Date.now()
        };
        //Referenced elements
        this.ref = [];
        for (let i = 0; i < this.props.value.length; i++) {
            this.ref.push(buildItems(this.props.items, function () {
                return React.createRef();
            }));
        }
        //Bind methods
        this.getValue = this.getValue.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    //Get current value
    getValue() {
        return this.ref.map(function (ref, index) {
            let values = {};
            //Get the value of the referenced items
            Object.keys(ref).forEach(function (key) {
                values[key] = ref[key].current.getValue();
            });
            //Return the values list
            return values;
        });
    }
    //Add a new item to the list
    handleAdd() {
        let newLength = this.state.length + 1;
        let newValues = this.getValue();
        //Add a new reference
        this.ref.push(buildItems(this.props.items, function () {
            return React.createRef();
        }));
        //Add a new value object
        newValues.push(buildItems(this.props.items, function (conf) {
            return conf.defaultValue;
        }));
        //Update the length
        return this.setState({
            "length": newLength,
            "value": newValues,
            "time": Date.now()
        });
    }
    //Handle item remove
    handleRemove(index) {
        let newLength = this.state.length - 1;
        let newValues = this.getValue();
        //Remove this index from the references
        this.ref.splice(index, 1);
        //Remove this index from the values list
        newValues.splice(index, 1);
        //Update the state
        return this.setState({
            "length": newLength,
            "value": newValues
        });
    }
    //Render the text element
    render() {
        let self = this;
        return (
            <div className={style.root}>
                {/* Render items */}
                <For from={0} to={this.state.length} render={function (index) {
                    let onRemove = function () {
                        return self.handleRemove(index);
                    };
                    return (
                        <div className={style.item} key={index}>
                            {/* Item title */}
                            <div className={style.itemTitle}>
                                Item {index + 1}
                            </div>
                            {/* Item remove */}
                            <Icon className={style.itemRemove} icon="cross" onClick={onRemove} />
                            {/* Item content */}
                            <ForEach items={Object.keys(self.props.items)} render={function (key) {
                                let itemProps = Object.assign({}, self.props.items[key], {
                                    "ref": self.ref[index][key],
                                    "value": self.state.value[index][key],
                                    "key": key + self.state.time
                                });
                                return React.createElement(Option, itemProps);
                            }} />
                        </div>
                    );
                }} />
                {/* Add a new item to the list */}
                <div className={style.add} onClick={this.handleAdd}>
                    <Icon icon="plus" className={style.addIcon} />
                    <span className={style.addText}>{this.props.addText}</span>
                </div>
            </div>
        );
    }
}

//List default props
ListOption.defaultProps = {
    "addText": "Add a new item"
};

