import React from "react";
import {If, Renderer} from "@siimple/neutrine";
import {Field, FieldLabel, FieldHelper} from "@siimple/neutrine";

import style from "./style.scss";

//Option types
import {ColorOption} from "./Color/index.js";
import {ListOption} from "./List/index.js";
import {TextOption} from "./Text/index.js";
import {TextareaOption} from "./Textarea/index.js";
import {ThemeOption} from "./Theme/index.js";
import {SelectOption} from "./Select/index.js";
import {LinkOption} from "./Link/index.js";
import {IconOption} from "./Icon/index.js";

//Build options types
let types = {
    "color": ColorOption,
    "list": ListOption,
    "text": TextOption,
    "textarea": TextareaOption,
    "theme": ThemeOption,
    "select": SelectOption,
    "link": LinkOption,
    "icon": IconOption
};

//Default helpers texts
let defaultHelpers = {
    "theme": "Use the light theme in lighten backgrounds, or the dark theme in darken backgrounds."
};

//Export option component
export const Option = React.forwardRef(function (props, ref) {
    let optionType = types[props.type];
    let optionProps = Object.assign({}, props, {
        "ref": ref
    });
    //Get the option helper
    let optionHelper = null;
    if (typeof props.helper === "string") {
        optionHelper = props.helper; //Get helper text from props
    }
    else if (typeof defaultHelpers[props.type] === "string") {
        optionHelper = defaultHelpers[props.type]; //Default helper
    }
    //Return the option wrapper
    return (
        <Field className={style.option}>
            {/* Option label */}
            <If condition={typeof props.label === "string"}>
                <FieldLabel>{props.label}</FieldLabel>
            </If>
            {/* Option content */}
            <Renderer render={function () {
                return React.createElement(optionType, optionProps);
            }} />
            {/* Option helper */}
            <If condition={typeof optionHelper === "string"}>
                <FieldHelper className="siimple--mb-0 siimple--mt-2">
                    {optionHelper}
                </FieldHelper>
            </If>
        </Field>
    );
});

