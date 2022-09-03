import React from "react";
import Helmet from "react-helmet";

const publicPath = process.env.DOCS_ONLY ? `/${process.env.VERSION}` : "";

export const Seo = props => (
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" />
        <link rel="stylesheet" href={`${publicPath}/codecake.css`} />
        <link rel="stylesheet" href={`${publicPath}/siimple.css`} />
        <link rel="stylesheet" href={`${publicPath}/siimple-icons.css`} />
        <link rel="stylesheet" href={`${publicPath}/styles.css`} />
        <title>{props.title} · siimple CSS</title>
    </Helmet>
);
