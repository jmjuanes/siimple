import React from "react";
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

const DefaultLayout = props => {
    const size = props.size || "xlarge";
    return (
        <React.Fragment>
            <Header size={size} />
            {props.children}
            <Footer size={size} />
        </React.Fragment>
    )
};

DefaultLayout.defaultProps = {
    "size": "xlarge",
};

export default DefaultLayout;
