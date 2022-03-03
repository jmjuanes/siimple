import React from "react";
import {MDXProvider} from "@mdx-js/react"

import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {Seo} from "../components/Seo.js";
import {shortcodes} from "../markdown.js";

const DefaultLayout = props => {
    const size = props.pageContext?.frontmatter?.pageSize || props.size || "xlarge";
    const title = props.pageContext?.frontmatter?.title || props.title;
    return (
        <React.Fragment>
            <Seo title={title} />
            <Header size={size} />
            <div className={`content is-${size} ${props.className || ""}`}>
                <MDXProvider components={shortcodes}>
                    {props.children}
                </MDXProvider>
            </div>
            <Footer size={size} />
        </React.Fragment>
    )
};

DefaultLayout.defaultProps = {
    className: "",
    title: "",
    size: "xlarge",
};

export default DefaultLayout;
