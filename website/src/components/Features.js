import React from "react"
import kofi from "kofi";
import {Icon} from "./Icon.js";
import {Link} from "./Link.js";

const data = [
    {
        title: "Modular",
        icon: "box",
        content: "siimple is built using SASS/SCSS, so you can include only the modules that you really need!",
        link: "/installation"
    },
    {
        title: "Themeable",
        icon: "brush",
        content: "Easily customize siimple for building you own custom and unique version.",
        link: "/configuration",
    },
    {
        title: "Responsive",
        icon: "mobile",
        content: "Design a website that looks great on all devices such as desktops, tablets and phones.",
        link: "/responsive",
    },
    {
        title: "Easy to learn",
        icon: "book",
        content: "siimple is so intuitive that you can learn it and start building your amazing website in minutes.",
        link: "/naming",
    }
];

export const Features = () => (
    <div className="has-pt-12 has-pb-24">
        <div className="columns has-mb-0">
            {data.map((item, index) => {
                const headerClass = kofi.classNames({
                    "has-text-white has-p-8": true,
                    "has-bg-coolgray-700": index % 2 === 0,
                    "has-bg-blue-500": index % 2 !== 0,
                });
                return (
                    <div key={index} className="column is-full-mobile">
                        <div className="has-radius has-overflow-hidden">
                            <div className={headerClass} align="center">
                                <Icon icon={item.icon} style={{"fontSize":"72px"}} />
                            </div>
                            <div className="has-bg-coolgray-100 has-px-8 has-pt-8 has-minh-48">
                                <div className="title is-4 has-mb-2 has-weight-normal">{item.title}</div>
                                <div className="paragraph has-mb-0">{item.content}</div>
                            </div>
                            <div className="has-bg-coolgray-100 has-p-8">
                                <Link to={item.link} className="text is-link has-flex-inline has-items-center">
                                    <strong className="has-mr-1">Learn more</strong>
                                    <Icon icon="arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
