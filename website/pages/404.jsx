import React from "react";
import Helmet from "react-helmet";
import {Link} from "gatsby";

export default () => (
    <React.Fragment>
        <Helmet>
            <link rel="stylesheet" href="/siimple.css" />
            <title>Not found · siimple CSS</title>
        </Helmet>
        <div className="is-flex has-items-center has-justify-center has-w-full has-h-screen">
            <div className="has-p-12 is-rounded has-bg-light" style={{"maxWidth":"600px"}}>
                {/* Siimple logo */}
                <div className="has-mb-4">
                    <Link to="/" className="is-not-underlined has-text-dark">
                        <strong className="siimple" style={{"fontSize":"56px"}}>siimple.</strong>
                    </Link>
                </div>
                {/* Warning message */}
                <h2 className="has-mt-none">Something went wrong.</h2>
                <p className="has-mb-4">
                    We are sorry, but we can not find the page you are trying to reach... 
                    Please check that you typed the address correctly or go back to your previous page. 
                </p>
                {/* Back to home page */}
                <div className="has-mt-6">
                    <Link to="/" className="button is-primary is-inline-flex has-items-center">
                        <i className="si-arrow-left" style={{"fontSize":"18px"}} />
                        <strong className="has-ml-2">Return to Home</strong>
                    </Link>
                </div>
            </div>
        </div>
    </React.Fragment>
);
