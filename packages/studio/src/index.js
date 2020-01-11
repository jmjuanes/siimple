import React from "react";
import ReactDOM from "react-dom";
import * as Router from "rouct";
import kofi from "kofi";

import {Appbar, AppbarWrapper, AppbarItem, AppbarBrand, AppbarAvatar} from "@siimple/neutrine";
import {global} from "@siimple/neutrine";
import {createToaster} from "@siimple/neutrine";

//Import global styles
//import "./style.scss";

//Import pages components
import {Editor} from "./pages/Editor/index.js";
import {Home} from "./pages/Home/index.js";

//App component
class App extends React.Component {
    constructor(props) {
        super(props);
        //Initialize the app state
        this.state = {};
        //Bind app methods
        //TODO
    }
    //Render the app component
    render() {
        return (
            <Router.HashbangRouter>
                <AppbarWrapper>
                    <Appbar>
                        <AppbarBrand />
                        <AppbarItem icon="gear" />
                        <AppbarAvatar />
                    </Appbar>
                    <Router.Switch>
                        <Router.Route exact path="/" component={Home} />
                        <Router.Route exact path="/editor/:site" component={Editor} />
                        <Router.Route exact path="/editor" component={Editor} />
                    </Router.Switch>
                </AppbarWrapper>
            </Router.HashbangRouter>
        );
    }
}

//Mount the app
kofi.ready(function () {
    //Create the global toast component
    global.toast = createToaster({
        "position": "bottom",
        "timeout": 6000
    });
    //Mount root component
    ReactDOM.render(<App />, document.getElementById("root"));
});


