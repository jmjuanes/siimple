import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";
import {Renderer} from "siimple-react";
import {If} from "siimple-react";

import {Layout} from "common/src/components/Layout.js";

//import {Playground} from "./components/Playground.js";
import {CodePanel} from "./components/CodePanel.js";
import {ResultPanel} from "./components/ResultPanel.js";
//import {PreferencesDialog} from "./components/PreferencesDialog.js";
//import {ShareDialog} from "./components/ShareDialog.js";
//import {WelcomeDialog} from "./components/WelcomeDialog.js";
import {fetchSandbox, exportSandbox, createSandbox} from "./sandbox.js";

//Application component
const App = function (props) {
    const codeRef = React.useRef();
    const fileRef = React.useRef();
    const [sandbox, setSandbox] = React.useState(createSandbox({}));
    const [currentLanguage, setCurrentLanguage] = React.useState("html");
    //const [preferencesVisible, setPreferencesVisible] = React.useState(false);
    //const [welcomeVisible, setWelcomeVisible] = React.useState(true);
    const [theme, setTheme] = React.useState(props.defaultTheme);
    const [codeVisible, setCodeVisible] = React.useState(true);
    const [resultVisible, setResultVisible] = React.useState(false);
    //Get sandbox content
    const getSandbox = function () {
        const currentSandbox = Object.assign({}, sandbox);
        if (codeVisible === true) {
            currentSandbox[currentLanguage] = codeRef.current.getValue();
        }
        currentSandbox.key = Date.now(); //Update run key
        //Return the current sandbox content
        return currentSandbox;
    };
    //Run after app is rendered for the first time
    const importSandbox = function () {
        //console.log("Import pad data");
        if (window.location.hash.length < 2) {
            codeRef.current.setValue(sandbox[currentLanguage]);
            return;
        }
        //ref.dialogs.welcome.current.hide(); //Hide welcome dialog
        const source = kofi.qs.decode(window.location.hash.slice(1));
        fetchSandbox(source).then(function (content) {
            //setWelcomeVisible(false); //Hide welcome screen
            setSandbox(content); //Update sandbox
            codeRef.current.setValue(content[currentLanguage]);
        }).catch(function (error) {
            //Error importing pad content
            //TODO:displat error in console
        });
    };
    React.useEffect(importSandbox, []);
    //React.useEffect(reloadSandbox, [sandbox]);
    //Handle configure click --> display configure dialog
    //const handlePreferencesClick = function () {
    //    return setPreferencesVisible(true);
    //};
    //Handle settings submit
    //const handlePreferencesSubmit = function (values) {
    //    return playgroundRef.current.update(values);
    //};
    //Handle file change --> load the selected file
    const handleLoad = function () {
        const file = fileRef.current.files[0];
        if (typeof file === "undefined") {
            return null; // --> no file to load
        }
        //Read the file and import to the playground
        return kofi.file.readAsJSON(file).then(function (content) {
            return playgroundRef.current.load(content);
        });
    };
    //Handle save --> download pad content
    const handleSaveClick = function () {
        return playgroundRef.current.toJSON().then(function (content) {
            return exportSandbox(content, null);
        });
    };
    //Handle load --> load pad from file
    const handleLoadClick = function () {
        return fileRef.current.click();
    };
    //Handle language change
    const handleLanguageChange = function (newLang) {
        const newSandbox = getSandbox(); //Get current sandbox data
        setCurrentLanguage(newLang); //Update current language
        setSandbox(newSandbox); //Update sandbox data
        //Update the code content
        if (codeVisible) {
            //console.log("Update code to " + newLang);
            codeRef.current.setValue(newSandbox[newLang]);
        }
    };
    //Handle run
    const handleRun = function () {
        const newSandbox = getSandbox(); //Get current sandbox
        setSandbox(newSandbox);
        setResultVisible(true); //Show result panel
    };
    //Render left side of the header
    const headerButtons = [];
    //const headerButtons = [
    //    {"icon": "folder", "onClick": handleLoadClick},
    //    {"icon": "download", "onClick": handleSaveClick},
    //    {"icon": "gear", "onClick": handlePreferencesClick}
    //];
    //Render app component
    return (
        <Layout theme={theme} buttons={headerButtons}>
            <div className="has-flex has-flex-row has-flex-grow has-w-full has-h-full">
                {/* Check for rendering code panel */}
                <If condition={codeVisible} render={function () {
                    return React.createElement(CodePanel, {
                        //"key": this.state.currentKey,
                        "ref": codeRef,
                        "currentLanguage": currentLanguage,
                        "languages": ["html"], //["html", "js"],
                        "onLanguageChange": handleLanguageChange,
                        "onRunClick": handleRun,
                        "theme": theme
                    });
                }} />
                {/* Separator space */}
                <If condition={codeVisible && resultVisible}>
                    <div className="has-h-full has-w-4" />
                </If>
                {/* Check for rendering result panel */}
                <If condition={resultVisible} render={function () {
                    return React.createElement(ResultPanel, {
                        "key": sandbox.key || null,
                        "onCloseClick": () => setResultVisible(false),
                        "theme": theme,
                        "sandbox": sandbox
                    });
                }} />
            </div>
            {/* Load file input */}
            <input type="file" ref={fileRef} hidden onChange={handleLoad} />
            {/* Welcome dialog */}
            {/*
            <If condition={welcomeVisible} render={function () {
                return React.createElement(WelcomeDialog, {
                    "onClose": () => setWelcomeVisible(false)
                });
            }} />
            */}
            {/* Preferences dialog */}
            {/*
            <If condition={preferencesVisible} render={function () {
                return React.createElement(PreferencesDialog, {
                    "onClose": () => setPreferencesVisible(false),
                    "onSubmit": handlePreferencesSubmit,
                    "theme": theme,
                    "onThemeChange": (t) => setTheme(t)
                });
            }} />
            */}
        </Layout>
    );
};

//Mount playground application
kofi.ready(function () {
    const parent = document.getElementById("root");
    //const client = createLocalClient({"name": "playground"});
    //let config = window.config || {}; //Get config from global
    //Create app element
    //let appElement = (
    //    <UserProvider appId="playground" appName="Playground" render={function (user) {
    //        return (<App user={user} />);
    //    }} />
    //);
    const appElement = React.createElement(App, {
        "title": "sandbox",
        "defaultTheme": "light",
        "externalLinks": []
    });
    //Mount app element and hide warning message
    ReactDOM.render(appElement, parent);
});

