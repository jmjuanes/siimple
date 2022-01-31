import React from "react";
import Helmet from "react-helmet";
// import {useStaticQuery, graphql} from "gatsby";

// Return SEO template
export const Seo = props => {
    // const {title, description} = useStaticQuery(query);
    const pageTitle = props.title || "";
    return (
        <Helmet>
            <title>{pageTitle} · siimple CSS</title>
        </Helmet>
    );
};

// Default query to get site metadata
// const query = graphql`
//     query Seo {
//         site {
//             siteMetadata {
//                 title
//                 description
//                 url
//             }
//         }
//     }
// `;
