import React from "react";
import {MDXProvider} from "@mdx-js/react"

import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {Seo} from "../components/Seo.js";
import {shortcodes} from "../markdown.js";

const DefaultLayout = props => {
    const title = props.pageContext?.frontmatter?.title || props.title;
    return (
        <React.Fragment>
            <Seo title={title} />
            <Header />
            <div className={`container ${props.className || ""}`}>
                <MDXProvider components={shortcodes}>
                    {props.children}
                </MDXProvider>
            </div>
            <Footer />
        </React.Fragment>
    )
};

DefaultLayout.defaultProps = {
    className: "",
    title: "",
};

export default DefaultLayout;
