import React from "react";
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby";

import {Seo} from "../components/Seo.jsx";
import {LiveCode} from "../components/LiveCode.jsx";
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

const shortcodes = {
    Link,
    pre: props => (<div>{props.children}</div>),
    code: LiveCode,
};

export default props => (
    <React.Fragment>
        <Seo title={props.pageContext?.frontmatter?.title || props.title || ""} />
        <Header />
        <div className="container">
            <MDXProvider components={shortcodes}>
                {props.children}
            </MDXProvider>
        </div>
        <Footer />
    </React.Fragment>
);
