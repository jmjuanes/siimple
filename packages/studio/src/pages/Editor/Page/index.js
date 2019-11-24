import React from "react";
import {classNames} from "@siimple/neutrine";
import {If, Renderer, ForEach} from "@siimple/neutrine";

import {PageHeader} from "./Header/index.js";
import {PageContent} from "./Content/index.js";
import {DeleteBlockModal} from "./DeleteBlock/index.js";
import {Dialog} from "../../../components/Dialog/index.js";
import {Preferences} from "../../../components/Preferences/index.js";
import {getElementProps} from "../../../elements/index.js";

import style from "./style.scss";

//Page component
export class Page extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "editBlock": false,
            "deleteBlock": false,
            "currentBlock": null
        };
        //Bind block methods
        this.handleBlockAdd = this.handleBlockAdd.bind(this);
        this.handleBlockDelete = this.handleBlockDelete.bind(this);
        this.handleBlockEdit = this.handleBlockEdit.bind(this);
        this.handleBlockCancel = this.handleBlockCancel.bind(this);
        //Bind edit methods
        this.handleBlockEditSubmit = this.handleBlockEditSubmit.bind(this);
        this.handleBlockDeleteSubmit = this.handleBlockDeleteSubmit.bind(this);
    }
    //Handle block add
    handleBlockAdd(type) {
        let self = this;
        let newBlock = {
            "type": type,
            "attributes": {},
            "index": null //this.props.page.content.length
        };
        let element = getElementProps(type);
        //Add the default block attributes
        Object.keys(element.attributes).forEach(function (key, index) {
            newBlock.attributes[key] = element.attributes[key].defaultValue;
        });
        //Update the current page
        let newPageData = Object.assign({}, this.props.page, {
            "content": self.props.page.content.concat([newBlock])
        });
        //Call the page update method
        return this.props.onPageUpdate(newPageData);
    }
    //Cancel block edit
    handleBlockCancel() {
        return this.setState({
            "editBlock": false,
            "deleteBlock": false
        });
    }
    //Handle block edit
    handleBlockEdit(index) {
        return this.setState({
            "editBlock": true,
            "currentBlock": index
        });
    }
    //Edit submit
    handleBlockEditSubmit(newAttributes) {
        let self = this;
        //let block = this.props.page.content[this.state.current];
        return this.setState({"editBlock": false}, function () {
            //Update the page data
            let newPageData = Object.assign({}, self.props.page, {
                "content": self.props.page.content.map(function (block, index) {
                    //Check if this block is the edited block
                    if (self.state.currentBlock === index) {
                        return Object.assign({}, block, {
                            "attributes": newAttributes
                        });
                    }
                    //Default: return the block
                    return block;
                })
            });
            //Call the update method
            return self.props.onPageUpdate(newPageData);
        });
    }
    //Handle block delete open
    handleBlockDelete(index) {
        return this.setState({
            "deleteBlock": true,
            "currentBlock": index
        });
    }
    //Delete the current block
    handleBlockDeleteSubmit() {
        let self = this;
        return this.setState({"deleteBlock": false}, function () {
            //Update the page content blocks
            let newPageData = Object.assign({}, self.props.page, {
                "content": self.props.page.content.filter(function (block, index) {
                    return self.state.currentBlock !== index;
                })
            });
            //Call the page update method
            return self.props.onPageUpdate(newPageData);
        });
    }
    //Render the page
    render() {
        let self = this;
        //Render the page content
        return (
            <div className={style.root}>
                {/* Editing view */}
                <Dialog visible={this.state.editBlock} title="Edit block" size="60%">
                    <If condition={this.state.editBlock} render={function () {
                        //Return the editing action
                        let block = self.props.page.content[self.state.currentBlock];
                        let element = getElementProps(block.type);
                        return React.createElement(Preferences, {
                            "title": `Edit ${element.title.toLowerCase()}`,
                            "visible": self.state.edit,
                            "groups": element.groups,
                            "attributes": element.attributes,
                            "values": block.attributes,
                            "onSubmit": self.handleBlockEditSubmit,
                            "onCancel": self.handleBlockCancel
                        });
                    }} />
                </Dialog>
                {/* Block delete view */}
                <If condition={this.state.deleteBlock} render={function () {
                    let block = self.props.page.content[self.state.currentBlock];
                    let element = getElementProps(block.type);
                    return React.createElement(DeleteBlockModal, {
                        "title": `Delete ${element.title.toLowerCase()}`,
                        "item": "this block",
                        "onSubmit": self.handleBlockDeleteSubmit,
                        "onCancel": self.handleBlockCancel
                    });
                }} />
                {/* Page header */}
                <Renderer render={function () {
                    return React.createElement(PageHeader, {
                        "page": self.props.page,
                        "editable": self.props.editable,
                        "onEditableClick": self.props.onEditableToggle
                    });
                }} />
                {/* Render the page blocks */}
                <Renderer render={function () {
                    return React.createElement(PageContent, {
                        "editable": self.props.editable,
                        "page": self.props.page,
                        "onEdit": self.handleBlockEdit,
                        "onDelete": self.handleBlockDelete,
                        "onAdd": self.handleBlockAdd
                    });
                }} />
            </div>
        );
    }
}

//Page default props
Page.defaultProps = {
    "site": null,
    "page": null,
    "editable": false,
    "onPageUpdate": null,
    "onEditableToggle": null
};

