import React from "react";
import {If} from "@siimple/neutrine";
import style from "./style.scss";

//Export snippet component
export class Snippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "showCode": true,
            "showExample": true
        };
    }
    //Render the snippet block
    render() {
        let self = this;
        let code = this.props.children.join("\n");
        return (
            <div className={style.root}>
                <pre className={style.code}>{code}</pre>
                {/* Show snippet example */}
                <If condition={this.state.showExample} render={function () {
                    return React.createElement("div", {
                        "dangerouslySetInnerHTML": {
                            "__html": code
                        },
                        "className": style.example
                    });
                }} />
            </div>
        );
    }
}

