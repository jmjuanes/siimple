import React from "react";
import {Link} from "gatsby";
import {Seo} from "../components/Seo.js";

//Export 404 error page
export default () => {
    return (
        <div className="is-flex has-items-center has-justify-center has-w-full has-h-screen">
            <div className="has-p-12 is-rounded has-bg-gray-100" style={{"maxWidth":"600px"}}>
                {/* Siimple logo */}
                <div className="has-mb-4">
                    <Link to="/" className="is-not-underlined has-text-gray-700">
                        <strong className="siimple" style={{"fontSize":"56px"}}>siimple.</strong>
                    </Link>
                </div>
                {/* Warning message */}
                <div className="title is-2 has-mt-none">Something went wrong.</div>
                <div className="paragraph">
                    We are sorry, but we can not find the page you are trying to reach... 
                    Please check that you typed the address correctly or go back to your previous page. 
                </div>
                {/* Back to home page */}
                <div className="has-mt-6">
                    <Link to="/" className="button is-primary is-inline-flex has-items-center">
                        <i className="si-arrow-left" style={{"fontSize":"18px"}} />
                        <strong className="has-ml-2">Return to Home</strong>
                    </Link>
                </div>
            </div>
            <Seo title="Not found" />
        </div>
    );
};
