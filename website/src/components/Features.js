import React from "react"
import {Icon} from "./Icon.js";
import {Link} from "./Link.js";

const data = [
    {
        title: "Elements",
        icon: "box",
        content: "We provide a collection of essential UI elements that you can customize and reuse across your projects",
        link: "/elements"
    },
    {
        title: "Helpers",
        icon: "gear",
        content: "A collection of utility CSS classes that can be used to change the style of any element.",
        link: "/helpers",
    },
    {
        title: "Colors",
        icon: "fill",
        content: "A flat color palette that you can use for customizing your theme.",
        link: "/colors",
    },
    {
        title: "Icons",
        icon: "shapes",
        content: "A collection of hand-crafted and pure CSS icons that can be used in web and mobile projects.",
        link: "/icons",
    }
];

export const Features = () => (
    <div className="has-mb-24">
        <div className="columns has-mb-0">
            {data.map((item, index) => (
                <div key={index} className="column is-full-mobile">
                    <div className="has-mb-6">
                        <div className="has-text-primary has-bg-blue-200 has-radius-md is-inline-block has-p-3 has-lh-none">
                            <Icon icon={item.icon} className="has-size-5" />
                        </div>
                    </div>
                    <Link to={item.link} className="has-text-gray-700 has-text-primary-hover">
                        <div className="title is-3">{item.title}</div>
                    </Link>
                    <div className="paragraph has-text-gray-600 has-mb-0">
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
