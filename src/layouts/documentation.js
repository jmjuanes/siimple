import React from "react";
import {MDXProvider} from "@mdx-js/react"

import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {AccordionNav} from "../components/AccordionNav.js";
import {Pagination} from "../components/Pagination.js";
import {shortcodes} from "../markdown.js";
import {documentationNav} from "../navs/documentation.js";

//Get current sidebar item
const getCurrentSidebarIndex = p => {
    return documentationNav.findIndex(s => s.url === p) || 0;
};

//Get sidebar item by index
const getSidebarItem = i => {
    return (0 <= i && i < documentationNav.length) ? documentationNav[i] : null;
};

// Export layout component
// const SIDEBAR_CLASS = "has-maxh-screen has-overflow-y-auto tablet:has-position-sticky has-top-0 has-pr-6";
export default props => {
    //console.log(props.location);
    //let sidebarItems = extractNodesFromGraphql(props.data.allSidebarJson); //Get sidebar items
    const pathname = props.location.pathname.replace(/(\/|\/index\.html)$/, ""); //Get current pathname
    const index = getCurrentSidebarIndex(pathname);
    const currentSidebarItem = getSidebarItem(index);
    const prevSidebarItem = getSidebarItem(index - 1);
    const nextSidebarItem = getSidebarItem(index + 1);
    return (
        <React.Fragment>
            {/* Header block */}
            <Header />
            {/* Main content */}
            <div className="siimple-content is-xlarge has-pb-10 has-pt-0">
                <div className="siimple-columns has-mb-0">
                    {/* Sidebar wrapper */}
                    <div className="siimple-column mobile:is-hidden" style={{"maxWidth":"18rem"}}>
                        <div className="has-pr-6">
                            <AccordionNav
                                current={currentSidebarItem}
                                items={documentationNav}
                                pathname={pathname}
                            />
                        </div>
                    </div>
                    {/* Content column */}
                    <div className="siimple-column mobile:is-12">
                        <div className="has-mx-auto has-w-full" style={{"maxWidth":"768px"}}> 
                            <MDXProvider components={shortcodes}>
                                {props.children}
                            </MDXProvider>
                            {/* Page navigation */}
                            <Pagination
                                next={nextSidebarItem}
                                prev={prevSidebarItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer block */}
            <Footer />
        </React.Fragment>
    )
};
