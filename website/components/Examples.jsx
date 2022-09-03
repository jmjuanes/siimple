import React from "react";
import {Tabs} from "./Tabs.jsx";

const getExampleCodeUrl = example => {
    return `${process.env.REPO_URL}/tree/main/examples/${example.url}`;
};

export const Examples = props => {
    const [tab, setTab] = React.useState("all");
    const visibleExamples = (props.examples || []).filter(e => tab === "all" || e.type === tab);
    return (
        <React.Fragment>
            <div className=" has-mb-8">
                <Tabs
                    active={tab}
                    items={["all", "sections", "templates"]}
                    onChange={t => setTab(t)}
                />
            </div>
            <div className="columns has-mb-24">
                {visibleExamples.map(example => (
                    <div key={example.title} className="column is-one-third is-full-mobile">
                        <div className="card is-shadowed">
                            <div className="title is-4 is-capitalized">{example.title}</div>
                            <div className="paragraph" style={{minHeight:"4rem"}}>{example.description}</div>
                            <div className="is-flex has-direction-column-mobile" style={{gap:"0.5rem"}}>
                                <div className="has-w-full">
                                    <a
                                        href={`/examples/${example.url}`}
                                        className="button is-not-underlined is-full"
                                        target="_blank"
                                    >
                                        <strong>Demo</strong>
                                    </a>
                                </div>
                                <div className="has-w-full">
                                    <a
                                        href={getExampleCodeUrl(example)}
                                        className="button is-full has-bg-white has-text-primary has-bg-highlight-hover"
                                        target="_blank"
                                    >
                                        <strong>Code</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};
