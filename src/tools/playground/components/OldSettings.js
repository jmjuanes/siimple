import React from "react";
import {ForEach} from "siimple-react";
import {Heading, Paragraph} from "siimple-react";
import {Btn, Rule} from "siimple-react";
//import {Input, Select} from "siimple-react";
import {Field, FieldHelper, FieldLabel} from "siimple-react";

import {Dialog} from "common/src/components/Dialog.js";

import {UrlList} from "./UrlList.js";
import {VersionList} from "./VersionList.js";

//Export dialog to configure the current pad
export class SettingsDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "visible": false,
            "values": {}
        };
        //Referenced elements
        this.ref = {
            //"name": React.createRef(),
            //"description": React.createRef(),
            "version": React.createRef(),
            "externalScripts": React.createRef(),
            "externalStyles": React.createRef()
        };
        //Bind methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.open = this.open.bind(this);
    }
    //Open settings dialog
    open(values) {
        return this.setState({"visible": true, "values": values});
    }
    //Handle submit --> save pad options
    handleSubmit() {
        let self = this;
        let newValues = {
            //"name": this.ref.name.current.value || "Untitled",
            "siimpleVersion": this.ref.version.current.value() || "latest",
            "externalStyles": this.ref.externalStyles.current.value(),
            "externalScripts": this.ref.externalScripts.current.value()
        };
        //Hide the configuration window and submit changes
        return this.setState({"visible": false}, function () {
            return self.props.onSubmit(newValues);
        });
    }
    //Handle cancel --> hide pad configuration
    handleCancel() {
        return this.setState({"visible": false, "values": null});
    }
    //Render the configure dialog component
    render() {
        const self = this;
        const theme = props.theme;
        //Render the settings dialog
        return (
            <Dialog theme={theme}
            <Modal size="small">
                <ModalHeader>
                    <strong>Settings</strong>
                    <ModalClose onClick={this.handleCancel} />
                </ModalHeader>
                <ModalBody className="has-pb-0 has-bg-coolgray-100">
                    {/* Version of siimple */}
                    <Field>
                        <FieldLabel>Version of siimple</FieldLabel>
                        <VersionList defaultValue={values.siimpleVersion} ref={this.ref.version} />
                        <FieldHelper>Select the version of <strong>siimple</strong> to use on this pad.</FieldHelper>
                    </Field>
                    {/* External styles */}
                    <Field>
                        <FieldLabel>External styles</FieldLabel>
                        <UrlList defaultValue={values.externalStyles} ref={this.ref.externalStyles} />
                        <FieldHelper>Add external <strong>CSS</strong> libraries from a CDN.</FieldHelper>
                    </Field>
                    {/* External scripts */}
                    <Field>
                        <FieldLabel>External scripts</FieldLabel>
                        <UrlList defaultValue={values.externalScripts} ref={this.ref.externalScripts} />
                        <FieldHelper>Add external <strong>JavaScript</strong> libraries from a CDN.</FieldHelper>
                    </Field>
                </ModalBody>
                <ModalFooter align="center" className="has-bg-coolgray-100">
                    <Btn onClick={this.handleSubmit} full color="success">
                        <strong>Save settings</strong>
                    </Btn>
                </ModalFooter>
            </Modal>
        );
    }
}


