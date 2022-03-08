import React from "react"
// import kofi from "kofi";
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
        content: "Easily customize siimple for building your own version that best fits your project.",
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
            {data.map((item, index) => (
                <div key={index} className="column is-full-mobile">
                    <div className="has-radius has-overflow-hidden has-bg-coolgray-100">
                        <div className="has-text-blue-500 has-p-8" align="center">
                            <Icon icon={item.icon} style={{"fontSize":"72px"}} />
                        </div>
                        <div className="has-px-8 has-minh-32">
                            <div className="title is-5 has-mb-2">{item.title}</div>
                            <div className="paragraph has-text-coolgray-600 has-mb-0">{item.content}</div>
                        </div>
                        <div className="has-p-8">
                            <Link to={item.link} className="text is-link has-flex-inline has-items-center">
                                <strong className="has-mr-1">Learn more</strong>
                                <Icon icon="arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
