import React from "react";
import {Link} from "gatsby";
//import {Icon} from "siimple-react";
import {Card} from "./Card.js";
//import {DISCUSSIONS_URL} from "../globals.js";

const DISCUSSIONS_URL = "";
//Export getting started block
export const GetStarted = (props) => {
    return (
        <div className="siimple-content is-xlarge has-py-12">
            <div className="siimple-title is-1">Get started</div>
            <div className="siimple-columns has-mb-0">
                {/* Read the documentation */}
                <div className="siimple-column is-6 mobile:is-12">
                    <Card title="Documentation" 
                        linkUrl="/getting-started" 
                        linkTitle="Read the documentation"
                        icon="book"
                    >
                        Our documentation covers all you need to know to start building 
                        your website with <strong>siimple</strong>!
                    </Card>
                </div>
                {/* Get help */}
                <div className="siimple-column is-6 mobile:is-12">
                    <Card title="Get support" 
                        icon="comment" 
                        linkType="external"
                        linkUrl={DISCUSSIONS_URL}
                        linkTitle="Join our discussion forum"
                    >
                        Need more help? Join our <strong>Discussions forum</strong> for 
                        getting help from the <strong>siimple</strong> community!
                    </Card>
                </div>
            </div>
        </div>
    );
};

