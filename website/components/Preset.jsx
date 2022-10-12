import React from "react";
import Helmet from "react-helmet";
import {css as buildSiimple} from "@siimple/core";
import {injectModules} from "@siimple/modules";
import {markup} from "@siimple/modules/markup.js";
import * as presets from "@siimple/presets";

const tableData = {
    header: ["Rank", "Name", "Team", "Total Points"],
    body: [
        ["1", "Sandra Hoyles", "The Champs", "80.005"],
        ["2", "Mathew Sims", "Java Lovers", "68.750"],
        ["3", "Helen Booth", "Code Plus Plus", "49.120"],
    ],
};

const joinColorNames = (...args) => args.filter(n => !!n).join(".");

const getVariants = obj => {
    return [...new Set(["primary", "secondary", ...Object.keys(obj || {})])].filter(n => n !== "default");
};

// Theme provider component
const ThemeContext = React.createContext(null);
const useTheme = () => React.useContext(ThemeContext);
const ThemeProvider = props => {
    const theme = presets[props.preset] || {};
    const css = React.useMemo(
        () => {
            const config = injectModules({
                ...theme,
                prefix: "preset-",
                useRootStyles: false,
                useBorderBox: false,
                useColorModes: false,
                useCssVariables: false,
                modules: ["elements"],
                styles: {
                    ".preset-demo": {
                        backgroundColor: "background",
                        color: "text",
                        fontFamily: "body",
                        fontWeight: "body",
                        lineHeight: "body",
                        padding: "1.5rem",
                        "& hr": {
                            backgroundColor: "muted",
                            ...theme?.styles?.hr,
                        },
                        "& h1,& h2,& h3,& h4,& h5,& h6": {
                            color: "heading",
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                        },
                        "& table": {
                            ...markup.table,
                        },
                        "& p": {
                            ...markup.p,
                        },
                    },
                },
            });
            return buildSiimple(config);
        },
        [props.preset],
    );
    return (
        <ThemeContext.Provider value={theme}>
            <Helmet>
                {(theme?.meta?.fonts || []).map(font => (
                    <link href={font} rel="stylesheet" />
                ))}
            </Helmet>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div className="preset-demo">
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};

// Title wrapper
const Title = props => <h2>{props.children}</h2>;

const Divider = () => (
    <div className="has-mt-6 has-mb-6">
        <hr />
    </div>
);

const ColorsDemo = () => {
    const theme = useTheme();
    return (
        <ColorPalette colors={theme.colors} />
    );
};

const ColorPalette = ({colors, name}) => (
    <React.Fragment>
        {/* Basic colors */}
        <h3 className="is-capitalized">{name || "base colors"}</h3>
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

const TypographyDemo = () => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <h3>Font family</h3>
            {Object.keys(theme?.fonts || {}).map(key => (
                <div className="columns" key={key}>
                    <div className="column is-one-quarter is-full-mobile">
                        <strong className="is-capitalized">{key}</strong>
                    </div>
                    <div
                        className="column is-three-quarters is-full-mobile"
                        style={{
                            fontFamily:theme.fonts[key],
                            fontSize: "2rem",
                        }}
                    >
                        {theme.fonts[key]}
                    </div>
                </div>
            ))}
            <h3>Font sizes</h3>
            <div className="is-flex has-items-end has-flex-wrap" style={{gap: "1rem"}}>
                {(theme?.fontSizes || []).map(s => (
                    <span key={s} style={{fontSize: s}}>{s}</span>
                ))}
            </div>
        </React.Fragment>
    );
};

const ElementDemo = props => {
    const theme = useTheme();
    return ( 
        <React.Fragment>
            {getVariants(theme[props.field]).map(key => props.render(key))}
        </React.Fragment>
    );
};

const TableDemo = () => (
    <table>
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

const CardDemo = () => {
    const theme = useTheme();
    const bg = {
        primary: {
            backgroundColor: theme.colors.primary,
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
        },
    };
    return (
        <div className="columns">
            {["primary", "secondary"].map(key => (
                <div key={key} className="column is-half is-full-mobile">
                    <div className="preset-card">
                        <div className="is-rounded has-w-full has-p-12" style={bg[key]} align="center">
                            <i className="si-image has-size-9 has-text-white" />
                        </div>
                        <h5>Heading</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={`preset-button is-${key} is-full`}>
                            <strong>Action</strong>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const FormField = props => (
    <div className="columns">
        <div className="column is-one-third">
            <label className="preset-label">{props.title}</label>
        </div>
        <div class="column is-two-thids">
            {props.children}
        </div>
    </div>
);

const FormDemo = () => (
    <React.Fragment>
        <FormField title="Full name">
            <input className="preset-input" type="text" placeholder="Liam Wilson" />
        </FormField>
        <FormField title="Email">
            <input className="preset-input" type="email" placeholder="liam.wilson@email.com" />
        </FormField>
        <FormField title="How many people are comming?">
            <select className="preset-select">
                <option>From 1 to 5</option>
                <option>More than 5 people</option>
            </select>
        </FormField>
        <FormField title="Custom message">
            <textarea className="preset-textarea" placeholder="Your message"></textarea>
        </FormField>
        <FormField title="Preferences">
            <label className="preset-label">
                <input type="checkbox" className="preset-checkbox" />
                <span className="has-ml-2">I agree to the terms and conditions.</span>
            </label>
            <label className="preset-label">
                <input type="checkbox" className="preset-checkbox" />
                <span className="has-ml-2">Subscribe to our newsletter.</span>
            </label>
        </FormField>
    </React.Fragment>
);

const ModalDemo = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <React.Fragment>
            <div className="preset-button" onClick={() => setVisible(true)}>Open modal</div>
            {visible && (
                <div className="preset-scrim">
                    <div className="preset-modal">
                        <div className="is-flex has-items-center">
                            <h4 className="has-mt-none">Modal title</h4>
                            <div className="has-ml-auto">
                                <div className="preset-close" onClick={() => setVisible(false)} />
                            </div>
                        </div>
                        <div className="">Modal content</div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

// preset data is in props.pageContext
export const Preset = props => (
    <ThemeProvider preset={props.preset}>
        {/* Colors list */}
        <Title>Colors</Title>
        <ColorsDemo />
        <Divider />
        <Title>Typography</Title>
        <TypographyDemo /> 
        <Divider />
        <Title>Buttons</Title>
        <ElementDemo
            field="buttons"
            render={name => (
                <div key={name} className={`preset-button is-${name} is-capitalized has-mr-1`}>
                    <strong>{name}</strong>
                </div>
            )}
        />
        <Divider />
        <Title>Alerts</Title>
        <ElementDemo
            field="alerts"
            render={name => (
                <div key={name} className={`preset-alert is-${name}`}>
                    <div className="">
                        <span className="is-capitalized">{name}</span> alert
                    </div>
                    <div className="preset-close has-ml-auto" />
                </div>
            )}
        />
        <Divider />
        <Title>Badges</Title>
        <ElementDemo
            field="badges"
            render={name => (
                <span key={name} className={`preset-badge is-${name} is-capitalized has-mr-1`}>
                    <strong>{name}</strong>
                </span>
            )}
        />
        <Divider />
        <Title>Table</Title>
        <TableDemo />
        <Divider />
        <Title>Cards</Title>
        <CardDemo />
        <Divider />
        <Title>Forms</Title>
        <FormDemo />
        <Divider />
        <Title>Modals</Title>
        <ModalDemo />
        <Divider />
        <Title>Navigation</Title>
        <div className="is-flex">
            <a className="preset-navlink">Default link</a>
            <a className="preset-navlink is-active">Active link</a>
            <a className="preset-navlink is-disabled">Disabled link</a>
        </div>
        <Divider />
        <Title>Dropdown</Title>
        <div className="is-block">
            <div className="is-inline-block with-dropdown">
                <div className="preset-button">Dropdown</div>
                <div className="preset-dropdown">
                    <a className="preset-navlink">Dropdown link 1</a>
                    <a className="preset-navlink">Dropdown link 2</a>
                    <a className="preset-navlink">Dropdown link 3</a>
                </div>
            </div>
        </div>
        <Divider />
    </ThemeProvider>
);
