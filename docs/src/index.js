import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";
import {HashbangRouter as Router} from "rouct";
import {Switch, Route} from "rouct";
import {If} from "@siimple/neutrine";
import {Appbar, AppbarWrapper} from "@siimple/neutrine";

import {Home} from "./pages/Home/index.js";
import {Page} from "./pages/Page/index.js";
import {client} from "./client.js";

//App component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "loading": true,
            "config": null
        };
    }
    //Component did mount --> import site config
    componentDidMount() {
        let self = this;
        return client("/config.json").then(function (response) {
            //console.log(response.body);
            return self.setState({
                "loading": false,
                "config": response.body
            });
        });
    }
    //Render documentation app
    render() {
        let self = this;
        return (
            <Router>
                {/* Display loading */}
                <If condition={this.state.loading === true}>
                    Loading...
                </If>
                {/* Mount app routing */}
                <If condition={this.state.loading === false} render={function () {
                    let props = {
                        "packages": self.state.config.packages
                    };
                    //Return main content
                    return (
                        <AppbarWrapper>
                            {/* Documentation appbar */}
                            <Appbar className="siimple--bg-primary">
                            </Appbar>
                            {/* Documentation routes */}
                            <Switch>
                                <Route path="/" exact component={Home} props={props} />
                                <Route path="*" component={Page} props={props} />
                            </Switch>
                        </AppbarWrapper>
                    );
                }} />
            </Router>
        );
    }
}

//Mount documentation app
kofi.ready(function () {
    ReactDOM.render(<App />, document.getElementById("root"));
});

