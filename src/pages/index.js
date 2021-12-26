import React from "react"
import {classNames} from "siimple-react";
import {ForEach, If} from "siimple-react";
import {Icon} from "siimple-react";
import {Btn} from "siimple-react";

import Layout from "../layouts/default.js";
import {Card} from "../components/Card.js";
import {Link} from "../components/Link.js";
//import {GetStarted} from "../components/GetStarted.js";
//import {Testimonials} from "../components/Testimonials.js";
//import {Features} from "../components/Features.js";
import reviewsData from "../data/reviews.json";


// Action button component wrapper
const Button = (props) => {
    const btnClass = classNames(props.className, [
        "has-d-inline-flex has-justify-center",
        "has-px-6 has-py-3",
        "mobile:has-w-full mobile:has-mb-2",
    ]);
    return (
        <Btn className={btnClass} style={{"fontSize": "24px"}}>
            <Icon className="has-pr-3" icon={props.icon} />
            <strong>{props.text}</strong>
        </Btn>
    );
};

//Export home page
export default (props) => {
    const repoUrl = process.env.REPO_URL || "aaa";
    return (
        <Layout>
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
                    <Link to="/getting-started">
                        <Button text="Getting started" icon="rocket" color="primary" />
                    </Link>
                    <If condition={repoUrl !== ""}>
                        <Link to={repoUrl} target="_blank" className="has-text-no-underline tablet:has-ml-3">
                            <Button text="View on GitHub" icon="external-link" className="has-bg-dark" />
                        </Link>
                    </If>
                </div>
            </div>
            {/* Features block */}
            {/* Reviews block */}
            <div className="siimple-content is-xlarge has-pt-12 has-pb-24">
                <div align="center" className="has-mb-8">
                    <span className="siimple-subhead">What people say about siimple?</span>
                </div>
                <div className="siimple-columns has-mb-0">
                    <ForEach items={reviewsData} render={(item, key) => (
                        <div key={key} className="siimple-column is-4 mobile:is-12">
                            <div style={{"minHeight": "300px"}} className="has-p-8 has-radius has-bg-coolgray-100">
                                <div className="has-text-body has-text-opacity-50 has-mb-3">
                                    <Icon icon="quote" style={{"fontSize":"3.5rem"}} />
                                </div>
                                <Link to={item.url} target="_blank" className="has-text-heading" style={null}>
                                    <div className="siimple-title is-4">{item.site}</div>
                                </Link>
                                <div className="has-mb-0 has-text-body has-text-opacity-80">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    )} />
                </div>
            </div>
        </Layout>
    );
}
