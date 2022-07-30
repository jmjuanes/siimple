import React from "react";
import Layout from "../layout.js";
import {Tabs} from "../components/Tabs.js";

const getExampleCodeUrl = example => {
    return `${process.env.REPO_URL}/tree/main/examples/${example.url}`;
};

export default props => {
    const [tab, setTab] = React.useState("all");
    const visibleExamples = (props.pageContext?.examples || []).filter(e => tab === "all" || e.type === tab);
    return (
        <Layout title="Examples">
            <div className="has-pt-24-tablet has-pt-12-mobile has-pb-24" align="center">
                <div className="has-weight-black has-size-9 has-text-gray-700 has-mb-0">
                    Explore our <span className="has-text-blue-500">examples</span>.
                </div>
                <div className="has-text-gray-500 has-size-3 has-maxw-192">
                    Get started with <b>siimple</b> using any of our examples 
                    or use parts of them for building your custom layouts and content.
                </div>
            </div>
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
                        <div className="card has-shadow-md">
                            <div className="title is-4 is-capitalized">{example.title}</div>
                            <div className="paragraph has-minh-16">{example.description}</div>
                            <div className="is-flex has-direction-column-mobile" style={{gap:"0.75rem"}}>
                                <div className="has-w-full">
                                    <a
                                        href={`/examples/${example.url}`}
                                        className="button is-not-underlined is-full has-bg-blue-600-hover"
                                        target="_blank"
                                    >
                                        <strong>Demo</strong>
                                    </a>
                                </div>
                                <div className="has-w-full">
                                    <a
                                        href={getExampleCodeUrl(example)}
                                        className="button is-full has-bg-blue-100 has-text-blue-800 has-bg-blue-200-hover"
                                        target="_blank"
                                    >
                                        <strong>View code</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
