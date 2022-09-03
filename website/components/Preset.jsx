import React from "react";
import Helmet from "react-helmet";
import {create} from "@siimple/css";

const tableData = {
    header: ["Rank", "Name", "Team", "Total Points"],
    body: [
        ["1", "Sandra Hoyles", "The Champs", "80.005"],
        ["2", "Mathew Sims", "Java Lovers", "68.750"],
        ["3", "Helen Booth", "Code Plus Plus", "49.120"],
    ],
};

const joinColorNames = (...args) => args.filter(n => !!n).join(".");

const getVariants = obj => Object.keys(obj).filter(selector => /\.is-([\w\-_]+)/.test(selector));
const getVariantName = selector => selector.match(/\.is-([\w\-_]+)/)[1];

// Theme provider
const ThemeProvider = props => {
    const value = React.useRef(null);
    if (!value.current) {
        value.current = create(props.theme);
    }
    return props.render(value.current);
};

// Title wrapper
const Title = props => (
    <div className="has-mt-16">
        <div className="title is-2">{props.children}</div>
    </div>
);

const ColorsDemo = props => {
    return (
        <ColorPalette colors={props.theme.colors} />
    );
};

const ColorPalette = ({colors, name}) => (
    <React.Fragment>
        {/* Basic colors */}
        <div className="title is-4 is-capitalized">{name || "base colors"}</div>
        <div className="is-flex has-flex-wrap" style={{gap: "0.5rem"}}>
            {Object.keys(colors).filter(c => typeof colors[c] === "string").map(color => (
                <div key={color}>
                    <div
                        className="has-w-24 has-h-24 is-rounded"
                        style={{
                            backgroundColor: colors[color],
                        }}
                    />
                    <div className="has-mt-1 has-size-0">
                        {joinColorNames(name, color)}
                    </div>
                </div>
            ))}
        </div>
        {/* Complex colors */}
        {Object.keys(colors).filter(c => typeof colors[c] === "object").map(color => (
            <ColorPalette
                key={color}
                colors={colors[color]}
                name={joinColorNames(name, color)}
            />
        ))}
    </React.Fragment>
);

const TypographyDemo = props => (
    <React.Fragment>
        <div className="title is-4">Font family</div>
        {Object.keys(props.theme.fonts).map(key => (
            <div className="columns" key={key}>
                <div className="column is-one-quarter is-full-mobile">
                    <strong className="is-capitalized">{key}</strong>
                </div>
                <div
                    className="column is-three-quarters is-full-mobile"
                    style={{
                        fontFamily: props.theme.fonts[key],
                        fontSize: "2rem",
                    }}
                >
                    {props.theme.fonts[key]}
                </div>
            </div>
        ))}
        <div className="title is-4">Font sizes</div>
        <div className="is-flex has-items-end has-flex-wrap" style={{gap: "1rem"}}>
            {props.theme.fontSizes.map(s => (
                <span key={s} style={{fontSize: s}}>{s}</span>
            ))}
        </div>
    </React.Fragment>
);

const ElementDemo = props => {
    const theme = props.theme[props.field] || {};
    return ( 
        <React.Fragment>
            {["primary", "secondary", ...getVariants(theme)].map(key => {
                const name = theme[key] ? getVariantName(key) : key;
                let className = "";
                if (theme[key] && (key === "primary" || key === "secondary")) {
                    className = props.css({
                        backgroundColor: key,
                        ...theme[key],
                    });
                }
                else if (theme[key]) {
                    className = props.css(theme[key]);
                }
                else if (key === "primary" || key === "secondary") {
                    className = props.css({
                        backgroundColor: key,
                    });
                }
                return props.render(name, className);
            })}
        </React.Fragment>
    );
};

const TableDemo = props => {
    return (
        <table className="table is-divided">
            <thead className="">
                <tr className="">
                    {tableData.header.map(cell => (<th key={cell}>{cell}</th>))}
                </tr>
            </thead>
            <tbody>
                {tableData.body.map((row, index) => (
                    <tr key={index}>
                        {row.map(cell => (<td key={cell}>{cell}</td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const CardDemo = props => {
    const buttonClass = props.css({
        backgroundColor: "primary",
        "&.is-secondary": {
            backgroundColor: "secondary",
        },
        ...props.theme?.buttons || {},
    });
    return (
        <div className="columns">
            {["primary", "secondary"].map(key => {
                const imageClass = props.css({
                    backgroundColor: key,
                });
                return (
                    <div key={key} className="column is-half is-full-mobile">
                        <div className="card is-shadowed">
                            <div className={`is-rounded has-w-full has-p-12 ${imageClass}`} align="center">
                                <i className="si-image has-size-9 has-text-white" />
                            </div>
                            <div className="title is-5">Heading</div>
                            <div className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className={`button ${buttonClass} is-${key} is-full`}>
                                <strong>Action</strong>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const FormField = props => (
    <div className="columns">
        <div className="column is-one-third">
            <label className={`label ${props.className}`}>{props.title}</label>
        </div>
        <div class="column is-two-thids">
            {props.children}
        </div>
    </div>
);

const FormDemo = props => {
    const labelClass = props.css({
        ...props.theme.forms?.label || {},
    });
    const inputClass = props.css({
        ...props.theme.forms?.input || {},
    });
    const selectClass = props.css({
        ...props.theme.forms?.select || {},
    });
    const textareaClass = props.css({
        ...props.theme.forms?.textarea || {},
    });
    const checkboxClass = props.css({
        ...props.theme.forms?.checkbox || {},
    });
    return (
        <React.Fragment>
            <FormField title="Full name" className={labelClass}>
                <input type="text" className={`input ${inputClass}`} placeholder="Liam Wilson" />
            </FormField>
            <FormField title="Email" className={labelClass}>
                <input type="email" className={`input ${inputClass}`} placeholder="liam.wilson@email.com" />
            </FormField>
            <FormField title="How many people are comming?" className={labelClass}>
                <select className={`select ${selectClass}`}>
                    <option>From 1 to 5</option>
                    <option>More than 5 people</option>
                </select>
            </FormField>
            <FormField title="Custom message" className={labelClass}>
                <textarea className={`textarea ${textareaClass}`} placeholder="Your message"></textarea>
            </FormField>
            <FormField title="Preferences" className={labelClass}>
                <label className={`label ${labelClass}`}>
                    <input type="checkbox" className={`checkbox ${checkboxClass}`} />
                    <span className="has-ml-2">I agree to the terms and conditions.</span>
                </label>
                <label className={`label ${labelClass}`}>
                    <input type="checkbox" className={`checkbox ${checkboxClass}`} />
                    <span className="has-ml-2">Subscribe to our newsletter.</span>
                </label>
            </FormField>
        </React.Fragment>
    );
};

// preset data is in props.pageContext
export const Preset = props => (
    <React.Fragment>
        <Helmet>
            {(props.fonts || []).map(fontPath => (
                <link href={fontPath} rel="stylesheet" />
            ))}
        </Helmet>
        <ThemeProvider theme={props.theme} render={({css}) => (
            <div
                className=""
                style={{
                    fontFamily: props.theme.fonts.body,
                    fontSize: props.theme.fontSizes["1"],
                }}
            >
                {/* Header section */}
                <div className="title is-1 has-mb-none">{props.name}</div>
                {/* Colors list */}
                <Title>Colors</Title>
                <ColorsDemo theme={props.theme || {}} />
                <Title>Typography</Title>
                <TypographyDemo theme={props.theme || {}} /> 
                <Title>Buttons</Title>
                <ElementDemo
                    css={css}
                    theme={props.theme || {}}
                    field="buttons"
                    render={(name, className) => (
                        <div key={name} className={`button ${className} is-capitalized has-mr-1`}>
                            <strong>{name}</strong>
                        </div>
                    )}
                />
                <Title>Alerts</Title>
                <ElementDemo
                    css={css}
                    theme={props.theme || {}}
                    field="alerts"
                    render={(name, className) => (
                        <div key={name} className={`alert ${className}`}>
                            <div className="">
                                <span className="is-capitalized">{name}</span> alert
                            </div>
                            <div className="close has-ml-auto"></div>
                        </div>
                    )}
                />
                <Title>Badges</Title>
                <ElementDemo
                    css={css}
                    theme={props.theme || {}}
                    field="badges"
                    render={(name, className) => (
                        <span key={name} className={`badge ${className} is-capitalized has-mr-1`}>
                            <strong>{name}</strong>
                        </span>
                    )}
                />
                <Title>Table</Title>
                <TableDemo
                    theme={props.theme || {}}
                    css={css}
                />
                <Title>Cards</Title>
                <CardDemo
                    css={css}
                    theme={props.theme || {}}
                />
                <Title>Forms</Title>
                <FormDemo
                    css={css}
                    theme={props.theme || {}}
                />
            </div>
        )} />
    </React.Fragment>
);
