import React from "react";
import Helmet from "react-helmet";
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby";
import {LiveCode} from "siimple-docs/components/LiveCode.js";

import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

const shortcodes = {
    "Link": Link,
    "pre": props => (<div>{props.children}</div>),
    "code": LiveCode,
};

export default props => (
    <React.Fragment>
        <Helmet>
            <link rel="stylesheet" href="/siimple.css" />
            <link rel="stylesheet" href="/landing.css" />"
            <title>{props.pageContext?.frontmatter?.title || props.title || ""} · siimple CSS</title>
        </Helmet>
        <Header />
        <div className="container">
            <MDXProvider components={shortcodes}>
                {props.children}
            </MDXProvider>
        </div>
        <Footer />
    </React.Fragment>
);
