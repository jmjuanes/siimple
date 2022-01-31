import React from "react";
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {Seo} from "../components/Seo.js";

const DefaultLayout = props => {
    const size = props.size || "xlarge";
    return (
        <React.Fragment>
            <Seo title={props.title} />
            <Header size={size} />
            {props.children}
            <Footer size={size} />
        </React.Fragment>
    )
};

DefaultLayout.defaultProps = {
    title: "",
    size: "xlarge",
};

export default DefaultLayout;
