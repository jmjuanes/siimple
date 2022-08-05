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
                <div className="has-weight-black has-size-9 has-text-dark has-mb-none">
                    Explore our <span className="has-text-primary">examples</span>.
                </div>
                <div className="has-text-dark is-semitransparent has-size-3" style={{maxWidth:"48rem"}}>
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
        </Layout>
    );
};
