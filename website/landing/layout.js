import React from "react";
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby";

import {LiveCode} from "siimple-docs/components/LiveCode.js";

import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";
import {Seo} from "./components/Seo.js";

const shortcodes = {
    "Link": Link,
    "pre": props => (<div>{props.children}</div>),
    "code": LiveCode,
};

export default props => (
    <React.Fragment>
        <Seo title={props.pageContext?.frontmatter?.title} />
        <Header />
        <div className="container">
            <MDXProvider components={shortcodes}>
                {props.children}
            </MDXProvider>
        </div>
        <Footer />
    </React.Fragment>
);
