import React from "react";
import ReactDOM from "react-dom";
import * as helpers from "../../helpers.js";
import style from "./style.scss";

//Parse progress value
let parseProgressValue = function (value) {
    return Math.abs(parseInt(value));
};

//Generate a random int
let randomInt = function (start, end) {
    return Math.floor(Math.random() * (end - start) + start);
};

//Export loading component
export function Loading (props) {
    return React.createElement("div", {
        "className": helpers.classNames(props.className, {
            "neutrine__loading": true,
            "neutrine__loading--completed": props.progress === 100
        }),
        //TODO: implement helpers.styles to merge styles props
        "style": Object.assign({}, props.style, {
            "width": (props.progress < 100) ? props.progress + "%" : null
        })
    });
}

//Loading component default props
Loading.defaultProps = {
    "progress": 0,
    "style": {}
};

//Export loader component
export class Loader extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "progress": 0
        };
        this.interval = null;
        //Bind methods
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.reset = this.reset.bind(this);
        this.complete = this.complete.bind(this);
        this.continuous = this.continuous.bind(this);
        this.tick = this.tick.bind(this);
    }
    //Add progress
    add(value) {
        return this.setState({
            "progress": Math.min(100, this.state.progress + parseProgressValue(value))
        });
    }
    //Remove progress
    remove(value) {
        return this.setState({
            "progress": Math.max(0, this.state.progress - parseProgressValue(value))
        });
    }
    //Reset the progress bar
    reset() {
        let self = this;
        if (this.interval) {
            clearInterval(this.interval);
        }
        return this.setState({
            "progress": 0
        });
    }
    //Automatically complete the progress
    complete() {
        let self = this;
        if (this.interval) {
            clearInterval(this.interval);
        }
        return this.setState({
            "progress": 100
        });
    }
    //Continuous loading animation
    continuous() {
        let self = this;
        if (this.interval) {
            clearInterval(this.interval);
        }
        //Reset the progress
        return this.setState({"progress": 0}, function () {
            this.interval = setInterval(function () {
                return self.tick();
            }, 800);
            //First interval
            return self.tick();
        });
    }
    //Tick
    tick() {
        if (this.state.progress > 90) {
            //Clear the interval
            clearInterval(this.interval);
        }
        //Increment the progress 
        return this.setState({
            "progress": Math.min(92, this.state.progress + randomInt(5, 15))
        });
    }
    //Render the loading bar
    render() {
        return React.createElement(Loading, {
            "progress": this.state.progress,
            "className": this.props.className,
            "style": this.props.style
        });
    }
}

//Create a new loader component
export function createLoader (props, parent) {
    //Check for no parent element provided
    if (typeof parent !== "object" || parent === null) {
        parent = document.createElement("div");
        document.body.appendChild(parent);
    }
    //Render the toast and return the instance to the toast
    return ReactDOM.render(React.createElement(Loader, props), parent);
}

