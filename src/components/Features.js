import React from "react"
//import {graphql, Link} from "gatsby";
import {ForEach} from "siimple-react";
import {Icon} from "siimple-react";

import {Link} from "../components/Link.js";

const data = [
    {
        "title": "Modular",
        "icon": "box",
        "content": "siimple is built using SASS/SCSS, so you can import only the css elements that you really need!",
        "link": "/installation"
    },
    {
        "title": "Responsive",
        "icon": "mobile",
        "content": "Design a web page that looks great on all devices such as desktops, tablets and phones.",
        "link": "/concepts/responsive"
    },
    {
        "title": "Easy to learn",
        "icon": "book",
        "content": "siimple is so intuitive, so you can learn it and start building your amazing website in minutes.",
        "link": "/concepts/naming"
    }
];

export const Features = (props) => {
    return (
        <div className="siimple-content is-xlarge has-pt-12 has-pb-24">
            <div className="has-text-primary has-weight-bold">You will love siimple</div>
            <div className="siimple-title is-1 has-mt-0 has-mb-8">
                Why siimple is <strong className="has-text-primary">awesome</strong>?
            </div>
            <div className="siimple-columns has-mb-0">
                <ForEach items={data} render={(item, key) => (
                    <div key={key} className="siimple-column mobile:is-12 has-py-4">
                        <div align="center" className="has-text-white has-bg-dark has-radius has-p-6">
                            <Icon icon={item.icon} style={{"fontSize":"72px"}} />
                        </div>
                        <div className="siimple-title is-4 has-mb-2 has-weight-normal">{item.title}</div>
                        <div className="siimple-paragraph">{item.content}</div>
                        <div className="">
                            <Link to={item.link} className="siimple-text is-link has-flex-inline has-items-center">
                                <strong className="has-mr-1">Learn more</strong>
                                <Icon icon="arrow-right" style={{"fontSize":"18px"}} />
                            </Link>
                        </div>
                    </div>
                )} />
            </div>
        </div>
    );
};


