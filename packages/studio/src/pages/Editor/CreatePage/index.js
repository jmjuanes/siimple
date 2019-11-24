import React from "react";
import {Input, Btn} from "@siimple/neutrine";
import {Field, FieldLabel, FieldHelper} from "@siimple/neutrine";

//Create a new page component
export class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        //Referenced elements
        this.ref = {
            "name": React.createRef()
        };
        //Bind methods
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        //TODO
    }
    render() {
        let self = this;
        return (
            <React.Fragment>
                {/* Page name */}
                <Field>
                    <FieldLabel>Page name</FieldLabel>
                    <Input type="text" fluid ref={this.ref.name} />
                    <FieldHelper>
                        The page name will be also the title of the page.
                    </FieldHelper>
                </Field>
                {/* Submit the page */}
                <div align="left">
                    <Btn color="success" onClick={this.handleSubmit}>
                        Create <strong>new page</strong>
                    </Btn>
                    <Btn onClick={this.props.onCancel} className="siimple--ml-1">
                        <strong>Cancel</strong>
                    </Btn>
                </div>
            </React.Fragment>
        );
    }
}

CreatePage.defaultProps = {
    "onSubmit": null,
    "onCancel": null
};


