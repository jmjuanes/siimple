import React from "react";

// CheatSheet section
const Section = props => (
    <div className="siimple-columns">
        <div className="siimple-column is-one-fifth">
            <div className="has-position-sticky has-top-0">
                <strong>{props.title}</strong>
                {props.experimental ? (
                    <span className="siimple-badge has-ml-4">Experimental</span>
                ) : null}
            </div>
        </div>
        <div className="siimple-column is-four-fifths">
            {props.children}
        </div>
    </div>
);

// Example text component
const ExampleText = () => (
    <React.Fragment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </React.Fragment>
);

// CheatSheet main component
export const CheatSheet = props => {
    return (
        <React.Fragment>
            {/* Alert example */}
            <Section title="Alert">
                <div className="siimple-alert">
                    <div>Primary alert content.</div>
                    <div className="siimple-close has-ml-auto"></div>
                </div>
                <div className="siimple-alert is-secondary">
                    <div>Secondary alert content.</div>
                    <div className="siimple-close has-ml-auto"></div>
                </div>
            </Section>
            {/* Badge example */}
            <Section title="Badge">
                <span className="siimple-badge">Primary</span>
                <span className="siimple-badge is-secondary">Secondary</span>
                <span className="siimple-badge has-bg-red-500">Custom Red</span>
                <span className="siimple-badge has-bg-greem-500">Custom Green</span>
                <span className="siimple-badge has-bg-yellow-700">Custom Yellow</span>
            </Section>
            {/* Button example */}
            <Section title="Button">
                <div className="has-mb-8">
                    <div className="siimple-btn">Primary</div>
                    <div className="siimple-btn is-secondary">Secondary</div>
                    <div className="siimple-btn is-disabled">Disabled</div>
                </div>
                <div className="">
                    <div className="siimple-btn is-full">Block button</div>
                </div>
            </Section>
            {/* Card example */}
            <Section title="Card">
                <div className="siimple-card has-w-64">
                    <ExampleText />
                </div>
            </Section>
            {/* Checkbox */}
            <Section title="Checkbox">
                <label className="siimple-label" htmlFor="checkbox0">
                    <input type="checkbox" id="checkbox0" className="siimple-checkbox" />
                    <span className="has-ml-2">I agree with the terms of service.</span>
                </label>
            </Section>
            {/* Close example */}
            <Section title="Close button">
                <div className="siimple-close"></div>
            </Section>
            {/* Crumb example */}
            <Section title="Crumb">
                <div className="siimple-crumbs"></div>
            </Section>
        </React.Fragment>
    );
};
