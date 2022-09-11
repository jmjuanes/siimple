import React from "react";
import Helmet from "react-helmet";
import {ThemeProvider, useTheme, useCss} from "@siimple/react";
import {BaseStyles, Elements} from "@siimple/components";
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

// Title wrapper
const Title = props => (
    <Elements.title className="is-2">{props.children}</Elements.title>
);

const Divider = () => (
    <div className="has-mt-6 has-mb-6">
        <Elements.divider />
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
        <Elements.title className="is-3 is-capitalized">{name || "base colors"}</Elements.title>
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

const TypographyDemo = props => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Elements.title className="is-3">Font family</Elements.title>
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
            <Elements.title className="title is-3">Font sizes</Elements.title>
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
    <Elements.table className="is-divided">
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
    </Elements.table>
);

const CardDemo = () => {
    const backgrounds = {
        primary: useCss({
            backgroundColor: "primary",
        }),
        secondary: useCss({
            backgroundColor: "secondary",
        }),
    };
    return (
        <div className="columns">
            {["primary", "secondary"].map(key => (
                <div key={key} className="column is-half is-full-mobile">
                    <Elements.card>
                        <div className={`is-rounded has-w-full has-p-12 ${backgrounds[key]}`} align="center">
                            <i className="si-image has-size-9 has-text-white" />
                        </div>
                        <Elements.title className="is-5">Heading</Elements.title>
                        <Elements.paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Elements.paragraph>
                        <Elements.button variant={key} className="is-full">
                            <strong>Action</strong>
                        </Elements.button>
                    </Elements.card>
                </div>
            ))}
        </div>
    );
};

const FormField = props => (
    <div className="columns">
        <div className="column is-one-third">
            <Elements.label>{props.title}</Elements.label>
        </div>
        <div class="column is-two-thids">
            {props.children}
        </div>
    </div>
);

const FormDemo = () => (
    <React.Fragment>
        <FormField title="Full name">
            <Elements.input type="text" placeholder="Liam Wilson" />
        </FormField>
        <FormField title="Email">
            <Elements.input type="email" placeholder="liam.wilson@email.com" />
        </FormField>
        <FormField title="How many people are comming?">
            <Elements.select>
                <option>From 1 to 5</option>
                <option>More than 5 people</option>
            </Elements.select>
        </FormField>
        <FormField title="Custom message">
            <Elements.textarea placeholder="Your message"></Elements.textarea>
        </FormField>
        <FormField title="Preferences">
            <Elements.label>
                <Elements.checkbox />
                <span className="has-ml-2">I agree to the terms and conditions.</span>
            </Elements.label>
            <Elements.label>
                <Elements.checkbox />
                <span className="has-ml-2">Subscribe to our newsletter.</span>
            </Elements.label>
        </FormField>
    </React.Fragment>
);

const ModalDemo = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <React.Fragment>
            <Elements.button onClick={() => setVisible(true)}>Open modal</Elements.button>
            {visible && (
                <Elements.scrim>
                    <Elements.modal>
                        <div className="is-flex">
                            <Elements.title className="is-4">Modal title</Elements.title>
                            <div className="has-ml-auto">
                                <Elements.close onClick={() => setVisible(false)} />
                            </div>
                        </div>
                        <div className="">Modal content</div>
                    </Elements.modal>
                </Elements.scrim>
            )}
        </React.Fragment>
    );
};

// preset data is in props.pageContext
export const Preset = props => (
    <ThemeProvider theme={presets[props.preset]}>
        <Helmet>
            {(presets[props.preset]?.meta?.fonts || []).map(font => (
                <link href={font} rel="stylesheet" />
            ))}
        </Helmet>
        <BaseStyles style={{padding: "1.5rem"}}>
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
                    <Elements.button key={name} variant={name} className="is-capitalized has-mr-1">
                        <strong>{name}</strong>
                    </Elements.button>
                )}
            />
            <Divider />
            <Title>Alerts</Title>
            <ElementDemo
                field="alerts"
                render={name => (
                    <Elements.alert key={name} variant={name}>
                        <div className="">
                            <span className="is-capitalized">{name}</span> alert
                        </div>
                        <Elements.close className="has-ml-auto" as="div" />
                    </Elements.alert>
                )}
            />
            <Divider />
            <Title>Badges</Title>
            <ElementDemo
                field="badges"
                render={name => (
                    <Elements.badge key={name} variant={name} className="is-capitalized has-mr-1">
                        <strong>{name}</strong>
                    </Elements.badge>
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
                <Elements.navlink>Default link</Elements.navlink>
                <Elements.navlink className="is-active">Active link</Elements.navlink>
                <Elements.navlink className="is-disabled">Disabled link</Elements.navlink>
            </div>
            <Divider />
            <Title>Dropdown</Title>
            <div>
                <div className="is-inline-block with-dropdown">
                    <Elements.button>Dropdown</Elements.button>
                    <Elements.dropdown>
                        <Elements.navlink>Dropdown link 1</Elements.navlink>
                        <Elements.navlink>Dropdown link 2</Elements.navlink>
                        <Elements.navlink>Dropdown link 3</Elements.navlink>
                    </Elements.dropdown>
                </div>
            </div>
            <Divider />
        </BaseStyles>
    </ThemeProvider>
);
