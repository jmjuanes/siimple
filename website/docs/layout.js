import React from "react";
import kofi from "kofi";
import {Link} from "gatsby";
import {MDXProvider} from "@mdx-js/react"

import {Header} from "siimple-landing/components/Header.js";
import {Footer} from "siimple-landing/components/Footer.js";
import {Seo} from "siimple-landing/components/Seo.js";

import {ColorPalette} from "./components/ColorPalette.js";
import {LiveCode} from "./components/LiveCode.js";
import {ModalExample} from "./components/ModalExample.js";
import {NavbarExample} from "./components/NavbarExample.js";
import {Sidebar} from "./components/Sidebar.js";
import {Pagination} from "./components/Pagination.js";
import {sidebarItems} from "./sidebar.js";

// Alias to create a HTML element
const html = (type, className) => {
    return props => {
        const newProps = {
            ...props,
            className: kofi.classNames(className, props.className),
            // style: style || props.style,
        };
        return React.createElement(type, newProps, props.children);
    };
};

// Table container wrapper
const TableContainer = props => (
    <div className="has-w-full has-mb-8">
        <table className="table is-divided has-header-fixed has-mb-none">
            {props.children}
        </table>
    </div>
);

// Custom markdown components
const shortcodes = {
    "Tip": () => null,
    "h1": html("div", "title is-1"),
    "h2": html("div", "title is-2"),
    "h3": html("div", "title is-3"),
    "h4": html("div", "title is-4"),
    "h5": html("div", "title is-5"),
    "h6": html("div", "title is-6"),
    "pre": html("div", ""),
    "code": LiveCode,
    "li": html("li", "has-mb-1"),
    "table": TableContainer,
    "th": html("th", "has-bg-white is-sticky has-top-none"),
    // "td": html("td", "", {padding: "1rem !important"}),
    ColorPalette,
    ModalExample,
    NavbarExample,
    Link,
};

const getPathname = props => {
    const items = props.location.pathname.replace(/(\/|\/index\.html)$/, "").split("/");
    items.splice(1, 1);
    return "/" + items.filter(p => !!p).join("/");
};
const getCurrentSidebarIndex = p => sidebarItems.findIndex(s => s.url === p) || 0;
const getSidebarItem = i => (0 <= i && i < sidebarItems.length) ? sidebarItems[i] : null;

export default props => {
    // const pathname = props.location.pathname.replace(/(\/|\/index\.html)$/, "");
    const pathname = getPathname(props);
    const index = getCurrentSidebarIndex(pathname);
    return (
        <React.Fragment>
            <Seo title={props.pageContext?.frontmatter?.title} />
            <Header />
            <div className="container has-pb-10 has-pt-0">
                <div className="columns has-mb-0">
                    <div className="column is-one-quarter is-full-mobile">
                        <div className="has-pr-8-tablet">
                            <Sidebar
                                current={getSidebarItem(index)}
                                items={sidebarItems}
                                pathname={pathname}
                            />
                        </div>
                    </div>
                    <div className="column is-three-quarters is-full-mobile">
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
