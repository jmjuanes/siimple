import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

const HEADER_ITEMS = [
    // {"text": "Getting started", "icon": "rocket", "href": "/getting-started"},
    {"text": "Getting started", "icon": "rocket", "href": "/installation"},
    {"text": "Icons", "icon": "shapes", "href": "/icons"},
    {"text": "Colors", "icon": "palette", "href": "/colors"},
    {"text": "Try it", "icon": "code", "href": "/try"},
];

// Navigation link
const NavLink = props => {
    const linkClass = kofi.classNames([
        "has-d-flex has-items-center has-mt-3",
        `has-text-${props.color || "coolgray-700"}`,
        `hover:has-text-${props.hoverColor || "blue-500"}`,
        // "hover:has-weight-bold",
    ]);
    return (
        <Link to={props.to} target={props.target} className={linkClass}>
            <Icon icon={props.icon} className="has-mr-2 has-text-lg" />
            <div className="has-weight-bold">{props.text}</div>
        </Link>
    );
};

export const Header = props => {
    const [collapsed, setCollapsed] = React.useState(true);
    const size = props.size || "desktop";
    const togglerClass = kofi.classNames({
        "toggler": true,
        "has-opacity-100 has-bg-blue-500 has-text-white": !collapsed,
    });
    // Handle collapse toggle
    const handleCollapseToggle = () => {
        return setCollapsed(!collapsed);
    };
    return (
        <div className={`content is-${size} has-position-relative`}>
            <div className="has-d-flex has-py-6">
                <Link to="/" className="has-flex has-text-coolgray-700 has-text-no-underline has-items-center">
                    <Icon icon="siimple" className="has-align-middle" style={{"fontSize":"28px"}} />
                    <strong className="has-ml-2 siimple" style={{"fontSize":"24px"}}>siimple.</strong>
                </Link>
                <div className="has-ml-auto">
                    <div className={togglerClass} onClick={handleCollapseToggle}/>
                </div>
            </div>
            {kofi.when(!collapsed, () => (
                <div className="has-mb-8" style={{userSelect:"none"}}>
                    <div className="has-radius has-bg-coolgray-200 has-p-6">
                        <div className="columns">
                            <div className="column is-one-third is-full-mobile has-py-0">
                                <div className="has-bg-blue-500 has-p-8 has-radius">
                                    <div className="title is-3 has-mt-0 has-text-white has-weight-normal">
                                        About <b>siimple</b>
                                    </div>
                                    <div className="paragraph has-text-white">
                                        A minimal and themeable CSS toolkit for building flat and clean websites and apps.
                                    </div>
                                    <NavLink
                                        color="white"
                                        hoverColor="blue-200"
                                        icon="rocket"
                                        to="/installation"
                                        text="Getting started"
                                    />
                                    <NavLink
                                        color="white"
                                        hoverColor="blue-200"
                                        icon="code"
                                        to="/try"
                                        text="Try siimple"
                                    />
                                    <NavLink
                                        color="white"
                                        hoverColor="blue-200"
                                        icon="box"
                                        to={process.env.REPO_URL}
                                        text="Repository"
                                    />
                                </div>    
                            </div>
                            <div className="column is-two-thirds is-full-mobile has-py-0">
                                <div className="columns has-p-6">
                                    <div className="column is-one-third is-full-mobile has-pt-0 mobile:has-mb-8">
                                        <div className="title is-5 has-mt-0 has-weight-normal">Explore</div>
                                        <div className="paragraph">
                                            Everything you need to build your website or application.
                                        </div>
                                        <NavLink icon="clone" to="/components/alert" text="Components" />
                                        <NavLink icon="layers" to="/utilities/color" text="Utilities" />
                                        <NavLink icon="heart" to="/icons" text="Icons" />
                                    </div>
                                    <div className="column is-one-third is-full-mobile has-pt-0 mobile:has-mb-8">
                                        <div className="title is-5 has-mt-0 has-weight-normal">Customize</div>
                                        <div className="paragraph">
                                            Extend and build your own version of <b>siimple</b>.
                                        </div>
                                        <NavLink icon="gear" to="/configuration" text="Configuration" />
                                        <NavLink icon="fill" to="/colors" text="Colors" />
                                    </div>
                                    <div className="column is-one-third is-full-mobile has-pt-0">
                                        <div className="title is-5 has-mt-0 has-weight-normal">Recipes</div>
                                        <div className="paragraph">
                                            Learn how to build reusable UI elements with <b>siimple</b>.
                                        </div>
                                        <NavLink icon="book" to="/recipes/navbar" text="Building a navbar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Header default props
Header.defaultProps = {
    size: "desktop",
};
