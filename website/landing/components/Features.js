import React from "react"
import {Link} from "./Link.js";

const data = [
    {
        title: "Elements",
        icon: "si-box",
        content: "We provide a collection of essential UI elements that you can customize and reuse across your projects",
        link: "/elements"
    },
    {
        title: "Helpers",
        icon: "si-tools",
        content: "A collection of utility CSS classes that can be used to change the style of any element.",
        link: "/helpers",
    },
    {
        title: "Colors",
        icon: "si-palette",
        content: "A flat color palette that you can use for customizing your theme.",
        link: "/colors",
    },
    {
        title: "Icons",
        icon: "si-heart",
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
                            <i className={`${item.icon} has-size-5`} />
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
