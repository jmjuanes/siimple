import React from "react";

// Columns example data
const columnsData = [
    ["full"],
    ["one-half", "one-half"],
    ["one-third", "one-third", "one-third"],
    ["one-third", "two-thirds"],
    ["one-quarter", "one-quarter", "one-quarter", "one-quarter"],
    ["three-quarter", "one-quarter"],
    ["one-fifth", "one-fifth", "one-fifth", "one-fifth", "one-fifth"],
    ["two-fifths", "three-fifths"],
    ["four-fifths", "one-fifth"],
];

// Input status
const inputStatus = [
    "unchecked",
    "checked",
    "disabled",
];

// Headings
const headings = ["1", "2", "3", "4", "5", "6"];

// CheatSheet section
const Section = props => (
    <div className="siimple-columns has-mb-12">
        <div className="siimple-column is-one-fifth">
            <div className="has-position-sticky has-top-0">
                <div className="siimple-title is-3">
                    <strong>{props.title}</strong>
                    {props.experimental ? (
                        <span className="siimple-badge has-ml-4">Experimental</span>
                    ) : null}
                </div>
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
                <span className="siimple-badge has-mr-2">Primary</span>
                <span className="siimple-badge is-secondary has-mr-2">Secondary</span>
                <span className="siimple-badge has-bg-red-500 has-mr-2">Custom Red</span>
                <span className="siimple-badge has-bg-green-600 has-mr-2">Custom Green</span>
                <span className="siimple-badge has-bg-yellow-600 has-mr-2">Custom Yellow</span>
            </Section>
            {/* Button example */}
            <Section title="Button">
                <div className="has-mb-8">
                    <div className="siimple-btn has-mr-2">Primary</div>
                    <div className="siimple-btn is-secondary has-mr-2">Secondary</div>
                    <div className="siimple-btn is-disabled has-mr-2">Disabled</div>
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
                {inputStatus.map(status => (
                    <label key={status} className="siimple-label has-mb-2" htmlFor={`c${status}`}>
                        <input
                            type="checkbox"
                            id={`c${status}`}
                            className="siimple-checkbox has-mr-2"
                            defaultChecked={status === "checked"}
                            disabled={status === "disabled"}
                        />
                        Checkbox {status}
                    </label>
                ))}
            </Section>
            {/* Close example */}
            <Section title="Close button">
                <div className="siimple-close"></div>
            </Section>
            {/* Column example */}
            <Section title="Column">
                {columnsData.map((columns, rowIndex) => (
                    <div key={rowIndex} className="siimple-columns has-mb-2">
                        {columns.map((name, colIndex) => (
                            <div
                                key={colIndex}
                                className={`siimple-column is-${name} has-bg-coolgray-200 has-text-center`}
                                style={{
                                    "borderLeft": "1px solid #000000",
                                    "borderRight": "1px solid #000000",
                                }}
                            >
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </Section>
            {/* Crumb example */}
            <Section title="Crumb">
                <div className="siimple-crumbs">
                    <a className="siimple-crumb">Home</a>
                    <a className="siimple-crumb">Posts</a>
                    <a className="siimple-crumb is-active">New post...</a>
                </div>
            </Section>
            {/* Divider example */}
            <Section title="Divider">
                <ExampleText />
                <div className="siimple-divider" />
                <ExampleText />
            </Section>
            {/* Input example */}
            <Section title="Input">
                <div className="has-mb-3">
                    <input type="text" className="siimple-input" defaultValue="Text input" />
                </div>
                <div className="has-mb-3">
                    <input type="text" className="siimple-input" disabled defaultValue="Disabled input" />
                </div>
            </Section>
            {/* Label element */}
            <Section title="Label">
                <label className="siimple-label">Label content</label>
            </Section>
            {/* Navlink element */}
            <Section title="NavLink">
                <div className="has-d-flex has-flex-column has-maxw-64">
                    <a className="siimple-navlink">Default link</a>
                    <a className="siimple-navlink is-active">Active link</a>
                </div>
            </Section>
            {/* Paragraph */}
            <Section title="Paragraph">
                <div className="siimple-paragraph">
                    <ExampleText />
                </div>
            </Section>
            {/* Quote */}
            <Section title="Paragraph">
                <div className="siimple-quote">
                    <ExampleText />
                </div>
            </Section>
            {/* Radio */}
            <Section title="Radio">
                {inputStatus.map(status => (
                    <label key={status} className="siimple-label has-mb-2" htmlFor={`r${status}`}>
                        <input
                            type="radio"
                            id={`r${status}`}
                            className="siimple-radio has-mr-2"
                            defaultChecked={status === "checked"}
                            disabled={status === "disabled"}
                        />
                        Radio {status}
                    </label>
                ))}
            </Section>
            {/* Select example */}
            <Section title="Select">
                <select className="siimple-select">
                    <option>Value 1</option>
                    <option>Value 2</option>
                    <option>Value 3</option>
                </select>
            </Section>
            {/* Spinner */}
            <Section title="Spinner">
                <div className="siimple-spinner"></div>
            </Section>
            {/* Switch */}
            <Section title="Switch">
                {inputStatus.map(status => (
                    <label key={status} className="siimple-label has-mb-2" htmlFor={`s${status}`}>
                        <input
                            type="checkbox"
                            id={`s${status}`}
                            className="siimple-switch has-mr-2"
                            defaultChecked={status === "checked"}
                            disabled={status === "disabled"}
                        />
                        Switch {status}
                    </label>
                ))}
            </Section>
            {/* Tab example */}
            <Section title="Tab">
                <div className="siimple-tabs">
                    <a className="siimple-tab">Tab</a>
                    <a className="siimple-tab is-active">Active tab</a>
                    <a className="siimple-tab">Tab</a>
                </div>
            </Section>
            {/* Table example */}
            <Section title="Table">
                <table className="siimple-table"></table>
            </Section>
            {/* Text example */}
            <Section title="Text">
                <div className="siimple-paragraph">
                    This is text <span className="siimple-text is-bold">marked as bold</span>.
                </div>
            </Section>
            {/* Textarea example */}
            <Section title="Textarea">
                <textarea
                    className="siimple-textarea"
                    defaultValue="Textarea content"
                    rows="5"
                />
            </Section>
            {/* Title example */}
            <Section title="Title">
                {headings.map(type => (
                    <div key={type} className={`siimple-title is-${type}`}>
                        Heading {type}
                    </div>
                ))}
            </Section>
            {/* Modal and scrim example */}
            <Section title="Modal">
                <div align="center" className="has-mb-4">
                    <div className="siimple-btn is-full" data-role="open-modal">
                        <strong>Display modal</strong>
                    </div>
                </div>
                <div data-role="modal" style={{"display":"none"}}>
                    <div className="siimple-scrim">
                        <div className="siimple-modal">
                            <div className="has-flex has-items-center">
                                <div className="siimple-title is-4 has-mb-0">
                                    <strong>Modal</strong>
                                </div>
                                <div className="siimple-close has-ml-auto" data-role="close-modal" />
                            </div>
                            <div className="has-pt-6">
                                Content of the modal
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* Progress example */}
            <Section title="Progress">
                <progress className="siimple-progress" max="100" value="50" />
            </Section>
            {/* Slider example */}
            <Section title="Slider">
                <input type="range" min="0" max="100" defaultValue="50" className="siimple-slider" />
            </Section>
        </React.Fragment>
    );
};
