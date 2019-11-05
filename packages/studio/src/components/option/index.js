import React from "react";
import {If, Renderer} from "@siimple/neutrine";
import {Field, FieldLabel, FieldHelper} from "@siimple/neutrine";

import style from "./style.scss";

//Option types
import {ColorOption} from "./color/index.js";
import {ListOption} from "./list/index.js";
import {TextOption} from "./text/index.js";
import {TextareaOption} from "./textarea/index.js";
import {ThemeOption} from "./theme/index.js";
import {SelectOption} from "./select/index.js";

//Build options types
let types = {
    "color": ColorOption,
    "list": ListOption,
    "text": TextOption,
    "textarea": TextareaOption,
    "theme": ThemeOption,
    "select": SelectOption
};

//Export option component
export const Option = React.forwardRef(function (props, ref) {
    return (
        <Field className={style.option}>
            {/* Option label */}
            <If condition={typeof props.label === "string"}>
                <FieldLabel>{props.label}</FieldLabel>
            </If>
            {/* Option content */}
            <Renderer render={function () {
                let optionType = types[props.type];
                let optionProps = Object.assign({}, props, {
                    "ref": ref
                });
                return React.createElement(optionType, optionProps);
            }} />
            {/* Option helper */}
            <If condition={typeof props.helper === "string"}>
                <FieldHelper>{props.helper}</FieldHelper>
            </If>
        </Field>
    );
});

