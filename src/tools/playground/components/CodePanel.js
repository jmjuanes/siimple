import React from "react";
import {classNames} from "siimple-react";
//import {If, ForEach} from "siimple-react";
import {Btn} from "siimple-react";

import {Editor} from "../../../components/Editor.js";
//import {lightTheme} from "../editor/themes/light.js";
//import {languages} from "../languages.js";

//Export code panel component
export const CodePanel = React.forwardRef((props, ref) => {
    const isDarkTheme = props.theme === "dark";
    const rootClass = classNames("has-d-flex has-flex-column has-p-6 has-radius", {
        "has-w-full has-h-full": true,
        "has-bg-dark": isDarkTheme,
        "has-bg-white": !isDarkTheme
    });
    //const ruleClass = classNames("siimple-rule has-mt-0 has-mb-0", {
    //    "has-bg-coolgray-600": isDarkTheme,
    //    "has-bg-coolgray-300": !isDarkTheme,
    //    "has-d-none": true
    //});
    return (
        <div className={rootClass}>
            {/* Panel header --> language tabs */}
            {/*
            <If condition={props.languages.length > 1}>
                <Navigation tabs className="has-mb-6">
                    <ForEach items={props.languages} render={function (key, index) {
                        const active = props.currentLanguage === key; //Active button
                        const classList = classNames({
                            "has-bg-transparent has-text-opacity-60": !active,
                            "has-text-white hover:has-bg-coolgray-600": isDarkTheme && !active,
                            "has-bg-white hover:has-bg-white has-text-dark": isDarkTheme && active,
                            "has-text-dark hover:has-bg-coolgray-200": !isDarkTheme && !active,
                            "has-bg-primary has-text-white": !isDarkTheme && active,
                            "is-active": active
                        });
                        const handleClick = function () {
                            return props.onLanguageChange(key);
                        };
                        //Return button
                        return (
                            <NavigationItem key={index} className={classList} onClick={handleClick}>
                                <strong>{languages[key].title}</strong>
                            </NavigationItem>
                        );
                    }} />
                </Navigation>
            </If>
            */}
            {/* Panel body --> Code editor */}
            <Editor
                ref={ref}
                className="has-d-flex has-w-full has-h-full"
                language={props.currentLanguage}
                theme={props.theme}
                defaultValue=""
            />
            {/* Footer --> run sandbox button */}
            <div className="has-mt-6">
                <Btn full color="success" onClick={props.onRunClick}>
                    Run <strong>sandbox</strong>
                </Btn>
            </div>
        </div>
    );
});

//CodePanel default props
CodePanel.defaultProps = {
    "currentLanguage": "html",
    "languages": ["html"],
    "theme": "dark",
};

