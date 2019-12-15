import React from "react";
import {Renderer} from "@siimple/neutrine";
import {Input} from "@siimple/neutrine";
import {Field, FieldLabel, FieldHelper} from "@siimple/neutrine";
import {Grid, GridRow, GridCol} from "@siimple/neutrine";

export class LinkOption extends React.Component {
    constructor(props) {
        super(props);
        //Referenced elements
        this.ref = {
            "text": React.createRef(),
            "url": React.createRef()
        };
        //Bind methods
        this.getValue = this.getValue.bind(this);
    }
    //Get current value
    getValue() {
        return {
            "text": this.ref.text.current.value.trim(),
            "url": this.ref.url.current.value.trim()
        };
    }
    //Render the text element
    render() {
        let self = this;
        let value = {}; 
        if (this.props.value !== null && typeof this.props.value.text !== "undefined") {
            value = this.props.value; //Get current value
        }
        return (
            <GridRow>
                {/* Link text column */}
                <GridCol className="siimple--py-0" size="6">
                    <Field className="siimple--mb-0">
                        <FieldLabel>Link text</FieldLabel>
                        <Renderer render={function () {
                            return React.createElement(Input, {
                                "type": "text",
                                "ref": self.ref.text,
                                "defaultValue": value.text,
                                "fluid": true
                            });
                        }} />
                    </Field>
                </GridCol>
                {/* Link url column */}
                <GridCol className="siimple--py-0" size="6">
                    <Field className="siimple--mb-0">
                        <FieldLabel>Link URL</FieldLabel>
                        <Renderer render={function () {
                            return React.createElement(Input, {
                                "type": "text",
                                "ref": self.ref.url,
                                "defaultValue": value.url,
                                "fluid": true
                            });
                        }} />
                    </Field>
                </GridCol>
            </GridRow>
        );
    }
}

