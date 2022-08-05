import React from "react"
import {Link} from "./Link.js";

const data = [
    {
        title: "Elements",
        icon: "si-box",
        content: "We provide a collection of essential UI elements that you can customize and reuse across your projects",
        link: "/docs/elements"
    },
    {
        title: "Helpers",
        icon: "si-tools",
        content: "A collection of utility CSS classes that can be used to change the style of any element.",
        link: "/docs/helpers",
    },
    {
        title: "Colors",
        icon: "si-palette",
        content: "A flat color palette that you can use for customizing your theme.",
        link: "/docs/colors",
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
        <div className="columns has-mb-none">
            {data.map((item, index) => (
                <div key={index} className="column is-full-mobile">
                    <div className="has-mb-6">
                        <div className="has-text-primary has-bg-highlight is-rounded is-inline-block has-p-3 has-lh-none">
                            <i className={`${item.icon} has-size-5`} />
                        </div>
                    </div>
                    <Link to={item.link} className="has-text-dark has-text-primary-hover">
                        <div className="title is-3">{item.title}</div>
                    </Link>
                    <div className="paragraph has-text-dark is-semitransparent has-mb-none">
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
