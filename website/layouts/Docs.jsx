import React from "react";
import Helmet from "react-helmet";
import {Link} from "gatsby";
import {MDXProvider} from "@mdx-js/react"

import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {ColorPalette} from "../components/ColorPalette.jsx";
import {ModalExample} from "../components/ModalExample.jsx";
import {LiveCode} from "../components/LiveCode.jsx";
import {Sidebar} from "../components/Sidebar.jsx";
import {Pagination} from "../components/Pagination.jsx";
import {Preset} from "../components/Preset.jsx";

import {sidebarItems} from "../sidebar.js";

// Alias to create a HTML element
const html = (type, className) => {
    return props => {
        const newProps = {
            ...props,
            className: [className, props.className].filter(c => !!c).join(" "),
            // style: style || props.style,
        };
        return React.createElement(type, newProps, props.children);
    };
};

// Table container wrapper
const TableContainer = props => (
    <div className="has-w-full has-mb-8">
        <table>
            {props.children}
        </table>
    </div>
);

// Custom markdown components
const shortcodes = {
    Tip: () => null,
    pre: html("div", ""),
    code: LiveCode,
    li: html("li", "has-mb-1"),
    table: TableContainer,
    // "th": html("th", "has-bg-white is-sticky has-top-none"),
    // "td": html("td", "", {padding: "1rem !important"}),
    ColorPalette,
    ModalExample,
    Link,
    Preset,
};

const getPathname = props => {
    const items = props.location.pathname.replace(/(\/|\/index\.html)$/, "").split("/");
    if (process.env.DOCS_ONLY) {
        items.splice(1, 1);
    }
    return "/" + items.filter(p => !!p).join("/");
};
const getCurrentSidebarIndex = p => sidebarItems.findIndex(s => s.url === p) || 0;
const getSidebarItem = i => (0 <= i && i < sidebarItems.length) ? sidebarItems[i] : null;

export default props => {
    const pathname = getPathname(props);
    const index = getCurrentSidebarIndex(pathname);
    return (
        <React.Fragment>
            <Helmet>
                <title>{props.pageContext?.frontmatter?.title || ""} · siimple CSS</title>
            </Helmet>
            <Header />
            <div className="container has-pb-10 has-pt-none">
                <div className="columns has-mb-none">
                    <div className="column is-one-quarter is-full-mobile">
                        <div className="has-pr-8-tablet">
                            <Sidebar
                                current={getSidebarItem(index)}
                                items={sidebarItems}
                                pathname={pathname}
                            />
                        </div>
                    </div>
                    <div className="column is-three-quarters is-full-mobile docs-content">
                        <MDXProvider components={shortcodes}>
                            {props.children}
                        </MDXProvider>
                        <Pagination
                            prev={getSidebarItem(index - 1)}
                            next={getSidebarItem(index + 1)}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
};
