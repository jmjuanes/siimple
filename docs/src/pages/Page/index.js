import React from "react";
import kofi from "kofi";
import {Renderer} from "@siimple/neutrine";
import {Choose, ChooseIf} from "@siimple/neutrine";
import {Toolbar, ToolbarWrapper} from "@siimple/neutrine";
import {Heading} from "@siimple/neutrine";
import {Content} from "@siimple/neutrine";

import {Markdown} from "../../components/Markdown/index.js";
import {Menu} from "../../components/Menu/index.js";
import {Navigation} from "../../components/Navigation/index.js";
import {NotFound} from "../../components/NotFound/index.js";
import {client} from "../../client.js";
import {urlEncode} from "../../utils.js";

//Get derived state from path
let getDerivedStateFromPath = function (pathname) {
    let newState = {
        "loading": true,
        "pathname": pathname, //Store current pathname
        "notFound": false,
        "page": null
    };
    //Get section name
    let sections = pathname.split("/").filter(function (part) {
        return part !== "";
    });
    //Add the first section and return
    return Object.assign(newState, {
        "package": (sections.length > 0) ? sections[0] : ""
    });
};

//Export page component
export class Page extends React.Component {
    constructor(props) {
        super(props);
        //Initial state --> extract from new pathname
        this.state = getDerivedStateFromPath(props.request.pathname);
        this.update = this.update.bind(this);
        this.getCurrentPackage = this.getCurrentPackage.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    //Component did mount --> import page content
    componentDidMount() {
        return this.update();
    }
    //Component update
    componentDidUpdate() {
        let self = this;
        if (this.props.request.pathname !== this.state.pathname) {
            let newState = getDerivedStateFromPath(this.props.request.pathname);
            return this.setState(newState, function () {
                return self.update();
            });
        }
    }
    //Handle toggle click --> show/hide toolbar
    handleToggle() {
        return null; //TODO
    }
    //Update the page --> fetch the page content
    update() {
        //Check for not found package
        if (this.getCurrentPackage() === null) {
            return this.setState({
                "loading": false,
                "notFound": true //This package is not registered
            });
        }
        let self = this;
        let page = urlEncode(this.state.pathname).toLowerCase(); //Get encoded page name
        console.log("--> loading " + page + ".json");
        //TODO: show loading bar
        return client(`/pages/${page}.json`).then(function (response) {
            return self.setState({
                "loading": false,
                "page": response.body
            });
        }).catch(function (response) {
            return self.setState({
                "error": response.error,
                "loading": false,
                "notFound": true
            });
        });
    }
    //Get the current package name
    getCurrentPackage() {
        let packages = this.props.packages; //Get packages list
        if (this.state.package === "" || typeof packages[this.state.package] === "undefined") {
            return null; //No package to display
        }
        //Return the package info
        return packages[this.state.package];
    }
    //Render the page element
    render() {
        let self = this;
        let currentPackage = this.getCurrentPackage(); //Get current package info
        //Check for not found page
        if (this.state.notFound === true) {
            return React.createElement(NotFound, {});
        }
        //Return the page content
        return (
            <ToolbarWrapper collapsed={false}>
                <Toolbar>
                    {/* Render menu */}
                    <Renderer render={function () {
                        if (currentPackage !== null) {
                            return React.createElement(Menu, {
                                "package": currentPackage,
                                "pathname": self.state.pathname
                            });
                        }
                        return null; //No package to display
                    }} />
                </Toolbar>
                <Content size="medium">
                    <Navigation onClick={self.handleToggle} />
                    <Choose>
                        {/* Loading page */}
                        <ChooseIf condition={this.state.loading === true}>
                            Loading page...
                        </ChooseIf>
                        {/* Render notfound page */}
                        <ChooseIf condition={this.state.notFound === true}>
                            Not found...
                        </ChooseIf>
                        {/* Render page content */}
                        <ChooseIf condition={true} render={function () {
                            return (
                                <React.Fragment>
                                    <Heading type="h2">{self.state.page.title}</Heading>
                                    <Markdown content={self.state.page.content} />
                                </React.Fragment>
                            );
                        }} />
                    </Choose>
                </Content>
            </ToolbarWrapper>
        );
    }
}

