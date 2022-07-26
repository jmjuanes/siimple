import React from "react";
import Layout from "../layouts/default.js";

export default props => (
    <Layout title="Presets">
        <div className="has-pt-24-tablet has-pt-12-mobile has-pb-24" align="center">
            <div className="has-weight-black has-size-9 has-text-gray-700 has-mb-0">
                <span className="has-text-blue-500">Presets</span> for siimple.
            </div>
            <div className="has-text-gray-500 has-size-3 has-maxw-192">
                Rapidly customize <b>siimple</b> with new colors, fonts and styles from our official presets, 
                or use them for building your own theme!
            </div>
        </div>
        <div className="columns has-mb-24">
            {(props.pageContext?.presets || []).map(preset => (
                <div key={preset.id} className="column is-one-third is-full-mobile">
                    <div className="card has-shadow-md">
                        <div
                            align="center"
                            className="has-radius-md has-py-4"
                            style={{
                                backgroundColor: "#fff",
                            }}
                        >
                            <img src={`/preset-${preset.id}.${"svg"}`} width="120px" />
                        </div>
                        <div className="title is-4 is-capitalized">{preset.id}</div>
                        <div className="paragraph has-minh-12">{preset.description}</div>
                        <a href={`/presets/${preset.id}`} className="button is-not-underlined is-full">
                            <strong>Demo</strong>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </Layout>
);
