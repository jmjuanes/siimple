import React from "react";

// Chearseet section
const Section = props => {
    return (
        <div className="siimple-columns">
            <div className="siimple-column is-one-fifth">
                {props.title}
            </div>
            <div className="siimple-column is-four-fifths">
                {props.children}
            </div>
        </div>
    );
};

export const CheatSheet = props => {
    return (
        <React.Fragment>
            <Section title="Alert">Alert content</Section>
            <Section title="Button">Button content</Section>
        </React.Fragment>
    );
};
