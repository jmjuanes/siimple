import React from "react";

//Import core components
import {Btn} from "../../core/elements/btn.js";
import {Switch} from "../../core/form/switch.js";

//Import utils
import * as cookies from "../../utils/cookies.js";

//Import styles
import "./style.scss";

//Cookies Consent component
export default class CookiesConsent extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        //Initial state
        this.state = {
            "consent": null,
            "dialogVisible": false,
            "settingsVisible": false
        };
        //Referenced elements
        this.ref = {};
        Object.keys(this.props.cookies).forEach(function (key) {
            self.ref[key] = React.createRef();
        });
        //Bind listeners
        this.handleDialogAcceptClick = this.handleDialogAcceptClick.bind(this);
        this.handleDialogManageClick = this.handleDialogManageClick.bind(this);
        this.handleSettingsSaveClick = this.handleSettingsSaveClick.bind(this);
        this.displaySettings = this.displaySettings.bind(this);
    }
    componentDidMount() {
        //Get the consent stored data
        let consent = this.getCurrentConsent();
        if (consent !== null) {
            let self = this;
            return this.setState({"consent": consent}, function () {
                return self.callCookiesListeners(); 
            });
        }
        //Update the state
        return this.setState({"dialogVisible": true});
    }
    componentDidUpdate(prevProps, prevState) {
        let props = this.props;
        if (this.state.consent !== null) {
            let cookieValue = JSON.stringify(this.state.consent);
            return cookies.setCookie(props.cookieName, cookieValue, props.cookieExpiry, props.cookieDomain, props.cookiePath);
        }
    }
    //Call event listeners
    callCookiesListeners() {
        if (this.state.consent !== null) {
            let self = this;
            //Call accepted cookies listener
            if (typeof this.props.onCookiesAccept === "function") {
                this.props.onCookiesAccept.call(null, Object.keys(this.state.consent.cookies).filter(function (key) {
                    return self.state.consent.cookies[key] === true;
                }));
            }
            //Call rejected cookies listener
            if (typeof this.props.onCookiesReject === "function") {
                this.props.onCookiesReject.call(null, Object.keys(this.state.consent.cookies).filter(function (key) {
                    return self.state.consent.cookies[key] === false;
                }));
            }
        }
    }
    //Get the current consent
    getCurrentConsent() {
        return JSON.parse(cookies.getCookie(this.props.cookieName));
    }
    //Display settings window
    displaySettings() {
        return this.setState({"settingsVisible": true});
    }
    //Accept all cookies
    handleDialogAcceptClick() {
        let self = this;
        //Initialize the new consent object and add all the cookies
        let newConsent = {
            "accepted": true,
            "accepted_at": Date.now(),
            "updated_at": Date.now(),
            "cookies": {}
        };
        Object.keys(this.props.cookies).forEach(function (key) {
            newConsent.cookies[key] = true;
        });
        return this.setState({"consent": newConsent, "dialogVisible": false}, function () {
            return self.callCookiesListeners();
        });
    }
    //Open the settings dialog
    handleDialogManageClick() {
        return this.setState({"dialogVisible": false, "settingsVisible": true});
    }
    //Handle save
    handleSettingsSaveClick() {
        let self = this;
        let currentConsent = this.state.consent;
        //Initialize the new consent object
        let newConsent = {
            "accepted": true,
            "accepted_at": Date.now(),
            "updated_at": Date.now(),
            "cookies": {}
        };
        if (this.state.consent !== null) {
            newConsent.accepted_at = this.state.consent.accepted_at;
        }
        //Add all the available cookies
        Object.keys(this.props.cookies).forEach(function (key) {
            let cookie = self.props.cookies[key];
            newConsent.cookies[key] = (cookie.defaultEnabled === true) ? true : self.ref[key].current.checked;
        });
        //Update the state
        return this.setState({"consent": newConsent, "settingsVisible": false}, function () {
            return self.callCookiesListeners();
        });
    }
    //Render the dialog message
    renderDialogMessage() {
        //Generate the link to get more information about cookies
        let link = React.createElement("a", {"href": this.props.url, "target": "_blank", "className": "neutrine-cc-link"}, "Learn more");
        //Return the message wrapper
        return React.createElement("div", {"className": "neutrine-cc-dialog-message"}, this.props.dialogDescription.trim() + " ", link);
    }
    //Render the dialog buttons
    renderDialogButtons() {
        let self = this;
        let acceptBtn = React.createElement(Btn, {"color": "success", onClick: self.handleDialogAcceptClick}, this.props.dialogAcceptButton);
        let manageBtn = React.createElement(Btn, {"color": "primary", onClick: self.handleDialogManageClick}, this.props.dialogManageButton);
        //Return the buttons wrapper
        return React.createElement("div", {"className": "neutrine-cc-dialog-buttons", "align": "right"}, acceptBtn, manageBtn);
    }
    //Render the dialog element
    renderDialog() {
        if (this.state.dialogVisible === true) {
            //Render the dialog elements
            let dialogMessage = this.renderDialogMessage();
            let dialogButtons = this.renderDialogButtons();
            let dialog = React.createElement("div", {"className": "neutrine-cc-dialog"}, dialogMessage, dialogButtons);
            //Return the dialog container
            return React.createElement("div", {"className": "neutrine-cc-dialog-container"}, dialog);
        }
    }
    //Render settings header
    renderSettingsHeader() {
        let title = React.createElement("div", {"className": "neutrine-cc-settings-title"}, this.props.settingsTitle);
        let description = React.createElement("div", {"className": "neutrine-cc-settings-description"}, this.props.settingsDescription);
        return React.createElement(React.Fragment, {}, title, description); 
    }
    //Render settings content
    renderSettingsContent() {
        let self = this;
        let consent = this.state.consent;
        let children = [];
        //Generate a switch element
        let generateSwitch = function (key) {
            let isChecked = (consent !== null && typeof consent[key] === "boolean") ? consent[key] : false;
            return React.createElement(Switch, {"ref": self.ref[key], "defaultChecked": isChecked}); 
        };
        //For each type of cookies
        Object.keys(this.props.cookies).forEach(function (key, index) {
            let cookie = self.props.cookies[key];
            let title = React.createElement("div", {"className": "neutrine-cc-settings-section-title"}, cookie.title);
            let description = React.createElement("div", {"className": "neutrine-cc-settings-section-description"}, cookie.description);
            let switchContainer = null;
            if (cookie.defaultEnabled !== true) {
                //Generate the switch labels
                let denyLabel = React.createElement("label", {"className": "neutrine-cc-settings-section-label"}, "Deny");
                let allowLabel = React.createElement("label", {"className": "neutrine-cc-settings-section-label"}, "Allow");
                //Build the switch container
                switchContainer = React.createElement("div", {"align": "center"}, denyLabel, generateSwitch(key), allowLabel);
            }
            children.push(React.createElement("div", {"className": "neutrine-cc-settings-section", "key": index}, title, description, switchContainer));
        });
        return React.createElement("div", {}, children);
    }
    //Render the settings element
    renderSettings() {
        let self = this;
        if (this.state.settingsVisible === true) {
            //Generate the settings senctions
            let settingsHeader = this.renderSettingsHeader();
            let settingsContent = this.renderSettingsContent();
            let settingsBtn = React.createElement(Btn, {"color": "success", "fluid": true, "onClick": self.handleSettingsSaveClick}, this.props.settingsSaveButton);
            let settings = React.createElement("div", {"className": "neutrine-cc-settings"}, settingsHeader, settingsContent, settingsBtn);
            //Return the settings container
            return React.createElement("div", {"className": "neutrine-cc-settings-container"}, settings);
        }
    }
    //Render cookies icon
    renderIcon() {
        if (this.state.dialogVisible === false && this.state.settingsVisible === false) {
            let self = this;
            return React.createElement("div", {"className": "neutrine-cc-icon", "onClick": self.displaySettings}, null);
        }
        return null;
    }
    render() {
        return React.createElement("div", {"className": "neutrine-cc"}, this.renderDialog(), this.renderSettings(), this.renderIcon());
    }
}

//Default props
CookiesConsent.defaultProps = {
    //General information
    "url": "",
    "cookies": {
        "essential": {
            "title": "Essential cookies",
            "description": "These cookies are required for the website to function properly and they are enabled by default.",
            "defaultEnabled": true
        }
    },
    //Consent properties
    "cookieName": "cookies_consent",
    "cookiePath": "/",
    "cookieDomain": "",
    "cookieExpiry": 365,
    //Dialog configuration
    "dialogDescription": "We use cookies to ensure you get the best experience on our website.",
    "dialogAcceptButton": "Accept cookies",
    "dialogManageButton": "Manage",
    //Settings configuration
    "settingsTitle": "Manage cookies",
    "settingsDescription": "We use cookies to ensure you get the best experience on our website.",
    "settingsSaveButton": "Save settings",
    //Listeners
    "onCookiesAccept": null,
    "onCookiesReject": null
};

