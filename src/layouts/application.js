import React from "react";
import kofi from "kofi";
// import {Link} from "../components/Link.js";
import {Icon} from "../components/Icon.js";

// Layout base component
const ApplicationLayout = props => {
    const rootClass = kofi.classNames({
        "has-flex has-flex-column has-items-stretch": true,
        "has-p-4 has-w-full has-h-screen": true,
        "has-bg-coolgray-800": props.theme === "dark",
        "has-bg-coolgray-100": props.theme === "light"
    });
    const headerClass = kofi.classNames("content is-fluid", {
        "has-py-6 has-mb-2": true,
        "has-radius": true,
        "has-d-flex has-items-center": true,
        "has-bg-white": props.theme === "light",
    });
    const buttonClass = kofi.classNames({
        "has-cursor-pointer": true,
        "has-d-flex has-radius has-opacity-100": true,
        "has-py-2 has-px-3 has-ml-2": true,
        "has-text-coolgray-600 has-text-no-underline": true,
        "hover:has-bg-blue-200 hover:has-text-blue-700": true
    });
    return (
        <div className={rootClass}>
            {/* Heading section */}
            <div className={headerClass}>
                <div className="has-mr-0">
                    <div className="has-d-flex has-items-center has-text-coolgray-700 has-text-no-underline">
                        <Icon icon="siimple" style={{"fontSize":"40px"}} />
                        {kofi.when(!!props.title, () =>(
                            <div class="has-pl-2 has-text-xl has-weight-bold">{props.title}</div>
                        ))}
                    </div>
                </div>
                {/* Additional buttons */}
                <div className="has-d-flex has-ml-auto">
                    {(props.buttons || []).map((item, key) => (
                        <div key={key} className={buttonClass} onClick={item.onClick}>
                            <Icon icon={item.icon} style={{"fontSize":"22px"}} />
                            {item.text ? (
                                <strong className="has-pl-1">{item.text}</strong>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            {/* Application content */}
            <div className="has-flex-grow has-w-full has-d-flex has-items-stretch has-minh-0">
                {props.children}
            </div>
        </div>
    );
}

//Layout default props
ApplicationLayout.defaultProps = {
    theme: "light",
    title: "",
    buttons: [],
};

export default ApplicationLayout;
