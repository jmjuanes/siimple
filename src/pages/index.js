import React from "react"
import kofi from "kofi";

import Layout from "../layouts/default.js";
import {Link} from "../components/Link.js";
import {Icon} from "../components/Icon.js";
import {Testimonials} from "../components/Testimonials.js";
//import {GetStarted} from "../components/GetStarted.js";
//import {Features} from "../components/Features.js";

// Action button component wrapper
const Button = props => {
    const btnClass = kofi.classNames(props.className, [
        "siimple-btn",
        "has-d-inline-flex has-justify-center",
        "has-px-6 has-py-3",
        "mobile:has-w-full mobile:has-mb-2",
    ]);
    return (
        <div className={btnClass} style={{"fontSize": "24px"}}>
            <Icon className="has-pr-3" icon={props.icon} />
            <strong>{props.text}</strong>
        </div>
    );
};

//Export home page
export default () => (
    <Layout title="Minimal and themeable CSS toolkit">
        {/* Hero block */}
        <div className="siimple-content is-xlarge tablet:has-pt-24 mobile:has-pt-12 has-pb-32">
            <div className="siimple-headline has-mb-12">
                a minimal and themeable css toolkit.
            </div>
            <div className="has-text-muted" style={{"fontSize":"28px"}}>
                <strong>Siimple</strong> is an open source css toolkit that provides a 
                <strong> responsive</strong> and <strong>minimalistic</strong> starting 
                point for your next amazing website or application.
            </div>
            <div className="has-mt-12 mobile:has-mt-8">
                <Link to="/installation">
                    <Button
                        text="Getting started"
                        icon="rocket"
                        className="is-primary"
                    />
                </Link>
                <Link
                    to={process.env.REPO_URL}
                    target="_blank"
                    className="has-text-no-underline tablet:has-ml-3"
                >
                    <Button
                        text="View on GitHub"
                        icon="external-link"
                        className="has-bg-coolgray-700"
                    />
                </Link>
            </div>
        </div>
        {/* Features block */}
        {/* Reviews block */}
        <Testimonials />
    </Layout>
);
