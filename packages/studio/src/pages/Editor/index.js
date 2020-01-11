import React from "react";
import {If} from "@siimple/neutrine";
import {Renderer, ForEach} from "@siimple/neutrine";
import {Toolbar, ToolbarWrapper} from "@siimple/neutrine";
import {ToolbarGroup, ToolbarSeparator, ToolbarBrand, ToolbarItem} from "@siimple/neutrine";

import {Page} from "./Page/index.js";
import {CreatePage} from "./CreatePage/index.js";
import {Dialog} from "../../components/Dialog/index.js";
import {createSite} from "../../utils/site.js";

//Create a test site
let createTestSite = function () {
    return createSite({
        "name": "Test site",
        "source": "test",
        "author": "Test user"
    });
};

//Export editor component
export class Editor extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "menuVisible": true,
            "site": createTestSite(),
            "editable": false,
            "currentPage": 0,
            "createPageVisible": false
        };
        //Bind site methods
        this.handleSiteUpdate = this.handleSiteUpdate.bind(this);
        this.handlePageUpdate = this.handlePageUpdate.bind(this);
        this.handleEditableClick = this.handleEditableClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        //Page creation
        this.handleCreatePageToggle = this.handleCreatePageToggle.bind(this);
        this.handleCreatePageSubmit = this.handleCreatePageSubmit.bind(this);
    }
    //Handle menu click
    handleMenuClick() {
        return this.setState({
            "menuVisible": !this.state.menuVisible
        });
    }
    //Handle site update
    handleSiteUpdate(newSite) {
        return this.setState({
            "site": newSite
        });
    }
    //Handle page update
    handlePageUpdate(data) {//, callback) {
        let self = this;
        //TODO: use the callback method with site is updated in the localstorage/server
        return this.setState(function (prevState) {
            //Update the current page index values
            let pageData = Object.assign({}, data, {
                "content": data.content.map(function (block, index) {
                    return Object.assign(block, {
                        "index": index
                    });
                })
            });
            //Update the site data
            return {
                "site": Object.assign({}, prevState.site, {
                    "pages": prevState.site.pages.map(function (page, index) {
                        return (self.state.currentPage === index) ? pageData : page;
                    })
                })
            };
        });
    }
    //Handle page create component
    handleCreatePageToggle() {
        return this.setState({
            "createPageVisible": !this.state.createPageVisible
        });
    }
    //Handle save new page
    handleCreatePageSubmit(newPage) {
        //TODO
    }
    //Handle editable toggle
    handleEditableClick() {
        return this.setState({
            "editable": !this.state.editable
        });
    }
    //Get pages list
    getPagesList() {
        return this.state.site.pages;
    }
    render() {
        let self = this;
        return (
            <ToolbarWrapper collapsed={!this.state.menuVisible}>
                {/* Editor toolbar */}
                <Toolbar theme="light">
                    {/* App logo */}
                    <ToolbarBrand>
                        My site
                    </ToolbarBrand>
                    {/* Pages list */} 
                    <ToolbarGroup text="Pages" />
                    <div style={{"width":"100%"}}>
                        <ForEach items={self.getPagesList()} render={function (page, index) {
                            return React.createElement(ToolbarItem, {
                                "key": index,
                                "icon": "file",
                                "text": page.name,
                                "active": index === self.state.currentPage
                            });
                        }} />
                    </div>
                    {/* Create a new page */}
                    <Renderer render={function () {
                        return React.createElement(ToolbarItem, {
                            "className": "siimple--mt-2",
                            "text": "Create page",
                            "icon": "plus",
                            "onClick": self.handleCreatePageToggle
                        });
                    }} />
                    {/* Toggle toolbar collapse */}
                    {/*
                    <ToolbarToggle onClick={this.handleToggle} />
                    */}
                </Toolbar>
                {/* Editor content */}
                <Renderer render={function () {
                    return React.createElement(Page, {
                        "site": self.state.site,
                        "page": self.state.site.pages[self.state.currentPage],
                        "index": self.state.currentPage,
                        "editable": self.state.editable,
                        "onPageUpdate": self.handlePageUpdate,
                        "onEditableClick": self.handleEditableClick,
                        "onMenuClick": self.handleMenuClick,
                        "key": self.state.currentPage
                    });
                }} />
                {/* Create a new page */}
                <Dialog visible={this.state.createPageVisible} title="Create a new page">
                    <Renderer render={function () {
                        return React.createElement(CreatePage, {
                            "onCancel": self.handleCreatePageToggle,
                            "key": self.state.createPageVisible
                        });
                    }} />
                </Dialog>
            </ToolbarWrapper>
        );
    }
}

//Editor default props
Editor.defaultProps = {};

