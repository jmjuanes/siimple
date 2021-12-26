import React from "react";
import {ForEach} from "siimple-react";
import {Select} from "siimple-react";

//Export component to select the siimple version
export class VersionList extends React.Component {
    constructor(props) {
        super(props);
        this.ref = {
            "value": React.createRef()
        };
        //Bind methods
        this.value = this.value.bind(this);
    }
    //Get version value
    value() {
        return this.ref.value.current.value || "latest";
    }
    //Render version list component
    render() {
        let self = this;
        return (
            <Select full ref={this.ref.value} defaultValue={this.props.defaultValue}>
                <option value="latest">Latest version ({process.env.CURRENT_SIIMPLE_VERSION})</option>
            </Select>
        );
    }
}

//Version list default props
VersionList.defaultProps = {
    "defaultValue": "latest"
};


