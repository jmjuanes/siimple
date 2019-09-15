import React from "react";
import {Alert, AlertClose} from "../../core/alert/index.js";

//Import toast styles
import "./style.scss";

//Delay wrapper
let delay = function (time, callback) {
    return setTimeout(callback, time);
};

//Export toas widget component
export class Toast extends React.Component {
    constructor(props) {
        super(props);
        //Ininitialize the toast state
        this.state = {
            "visible": false,
            "color": "error",
            "message": ""
        };
        this.timer = null;
        //Bind some methods
        this.close = this.close.bind(this);
        this.display = this.display.bind(this);
        this.displayError = this.displayError.bind(this);
        this.displayWarning = this.displayWarning.bind(this);
        this.displaySuccess = this.displaySuccess.bind(this);
    }
    //Hide the toast
    close() {
        clearTimeout(this.timer);
        return this.setState({"visible": false});
    }
    //Display a toast message
    display(color, message, time) {
        let self = this;
        //Check the provided time
        if (typeof time !== "number" || time <= 0) {
            time = this.props.timeout;
        }
        //Display this toast message
        return this.setState({"visible": true, "color": color, "message": message}, function () {
            //Check if there are an active timer
            if (self.timer) {
                clearTimeout(self.timer);
            }
            //Register the new timer
            self.timer = delay(time, function () {
                return self.setState({"visible": false});
            });
        });
    }
    //Display an error message
    displayError(message, time) {
        return this.display("error", message, time);
    }
    //Display a warning message
    displayWarning(message, time) {
        return this.display("warning", message, time);
    }
    //Display a success message
    displaySuccess(message, time) {
        return this.display("success", message, time);
    }
    //Build the alert element
    renderAlert() {
        let self = this;
        //Build the alert close component
        let alertClose = React.createElement(AlertClose, {
            "onClick": function () {
                return self.close();
            }
        });
        //Return the alert component
        return React.createElement(Alert, {"color": this.state.color}, alertClose, this.state.message);
    }
    render() {
        let self = this;
        let toastClass = ["neutrine-toast", "neutrine-toast--" + this.props.position];
        //Check if the toast is visible
        if (this.state.visible === true) {
            toastClass.push("neutrine-toast--visible");
        }
        //Return the toast component
        return React.createElement("div", {"className": toastClass.join(" ")}, this.renderAlert());
    }
}

//Toast default props
Toast.defaultProps = {
    "position": "bottom",
    "cancellable": false,
    "timeout": 5000
};

