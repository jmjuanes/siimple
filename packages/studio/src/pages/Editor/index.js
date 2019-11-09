import React from "react";

import {Renderer, ForEach} from "@siimple/neutrine";
import {Toolbar, ToolbarWrapper} from "@siimple/neutrine";
import {ToolbarGroup, ToolbarSeparator, ToolbarToggle, ToolbarLogo, ToolbarItem} from "@siimple/neutrine";

import {Page} from "./Page/index.js";
import {createSite} from "../../store/site.js";

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
            "toolbarCollapsed": true,
            "site": createTestSite(),
            "currentPage": 0
        };
        //Bind methods
        this.handleToggle = this.handleToggle.bind(this);
        //Bind site methods
        this.handleSiteUpdate = this.handleSiteUpdate.bind(this);
        this.handlePageUpdate = this.handlePageUpdate.bind(this);
    }
    //Handle toolbar toggle
    handleToggle() {
        return this.setState({
            "toolbarCollapsed": !this.state.toolbarCollapsed
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
    //Get pages list
    getPagesList() {
        return this.state.site.pages;
    }
    render() {
        let self = this;
        return (
            <ToolbarWrapper collapsed={this.state.toolbarCollapsed}>
                {/* Editor toolbar */}
                <Toolbar theme="light">
                    {/* App logo */}
                    <ToolbarLogo>
                        <span className="siimple-brand">siimple</span>
                        <span className="siimple--text-normal">studio</span>
                    </ToolbarLogo>
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
                            "icon": "plus"
                        });
                    }} />
                    {/* Toggle toolbar collapse */}
                    <ToolbarToggle onClick={this.handleToggle} />
                </Toolbar>
                {/* Editor content */}
                <Renderer render={function () {
                    return React.createElement(Page, {
                        "site": self.state.site,
                        "page": self.state.site.pages[self.state.currentPage],
                        "index": self.state.currentPage,
                        "onPageUpdate": self.handlePageUpdate,
                        "key": self.state.currentPage
                    });
                }} />
            </ToolbarWrapper>
        );
    }
}

//Editor default props
Editor.defaultProps = {};

