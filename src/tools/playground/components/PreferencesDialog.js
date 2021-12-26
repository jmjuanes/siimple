import React from "react";
import {ForEach} from "siimple-react";
import {Heading, Paragraph} from "siimple-react";
import {Btn, Rule} from "siimple-react";
//import {Input, Select} from "siimple-react";
import {Field, FieldHelper, FieldLabel} from "siimple-react";

import {Dialog} from "common/src/components/Dialog.js";
import {ThemeOption} from "common/src/components/ThemeOption.js";

//import {UrlList} from "./UrlList.js";
//import {VersionList} from "./VersionList.js";

//Export dialog to configure the playground editor
export function PreferencesDialog (props) {
    const {theme, onClose} = props;
    const title = "Preferences";
    const handleSubmit = function () {
        return props.onSubmit();
    };
    //Render the preferences dialog
    return (
        <Dialog theme={theme} title={title} onClose={onClose} onSubmit={handleSubmit}>
            {/* Theme option */}
            <Field className="">
                <FieldLabel>Editor theme</FieldLabel>
                <ThemeOption theme={theme} value={theme} onChange={props.onThemeChange} />
            </Field>
        </Dialog>
    );
}


