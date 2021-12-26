import React from "react";
import {ForEach} from "siimple-react";
import {Icon} from "siimple-react";
import {Input} from "siimple-react";
import {Media, MediaContent, MediaEnd} from "siimple-react";
import {Placeholder} from "siimple-react";

//Export url list component
export class UrlList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": this.props.defaultValue.slice(0)
        };
        //Bind methods
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleItemRemove = this.handleItemRemove.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
    }
    //Get list of items
    value() {
        return this.state.items.filter(function (item) {
            return typeof item === "string" && item.trim().length > 0;
        });
    }
    //Handle add click
    handleAddClick() {
        //let newItems = this.state.items.slice(0); //Clone items
        this.state.items.push(""); //Insert new item
        return this.setState({"items": this.state.items});
    }
    //Handle item remove
    handleItemRemove(event, index) {
        this.state.items.splice(index, 1); //Remove this item from the array
        return this.setState({"items": this.state.items});
    }
    //Handle item change
    handleItemChange(event, index) {
        this.state.items[index] = event.target.value; //Update item value
        //return this.setState({"items": this.state.items});
    }
    //Render the url list
    render() {
        let self = this;
        return (
            <React.Fragment>
                {/* Render current list of items */}
                <ForEach items={this.state.items} render={function (item, index) {
                    //Handle item change
                    let onChange = function (event) {
                        return self.handleItemChange(event, index);
                    };
                    //Handle item remove
                    let onRemove = function (event) {
                        return self.handleItemRemove(event, index);
                    };
                    return (
                        <Media key={index} className="has-mb-2">
                            <MediaContent>
                                <Input type="text" defaultValue={item} full onChange={onChange} placeholder="https://...." />
                            </MediaContent>
                            <MediaEnd className="has-ml-2 has-py-2" onClick={onRemove}>
                                <Icon icon="trash" style={{"fontSize":"24px"}} className="has-text-light hover:has-text-error has-cursor-hand" />
                            </MediaEnd>
                        </Media>
                    );
                }} />
                {/* Render add new item */}
                <Placeholder className="has-mb-2" hoverable border="dashed" onClick={this.handleAddClick}>
                    <Icon icon="plus" style={{"fontSize":"20px"}} />
                </Placeholder>
            </React.Fragment>
        );
    }
}

