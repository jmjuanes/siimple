import React from "react";
import {LiveCode} from "./LiveCode.js";
import {Tabs} from "./Tabs.js";

const minimalExampleCode = `
import colors from "@siimple/colors";
import theme from "@siimple/preset-theme";

// Import other presets, for example helpers or elements
// import elements from "@siimple/preset-elements";
// import helpers from "@siimple/preset-helpers";

export default {
    ...theme,
    colors: {
        ...theme.colors,
        primary: colors.blue["500"],
        secondary: colors.royal["500"],
        text: colors.gray["700"],
        muted: colors.gray["200"],
    },
    fonts: {
        ...theme.fonts,
        body: ["Roboto", "sans-serif"],
    },
    // ...other configuration
};
`;

const cleanExampleCode = `
import colors from "@siimple/colors";
import theme from "@siimple/preset-theme";

// Import other presets, for example helpers or elements
// import elements from "@siimple/preset-elements";
// import helpers from "@siimple/preset-helpers";

export default {
    ...theme,
    colors: {
        ...theme.colors,
        primary: colors.royal["400"],
        secondary: colors.blue["600"],
        text: colors.gray["600"],
        muted: colors.gray["200"],
    },
    fonts: {
        ...theme.fonts,
        body: ["Nunito", "sans-serif"],
        heading: "inherit",
    },
    // ...other configuration
};
`;

const sepiaExampleCode = `
import colors from "@siimple/colors";
import theme from "@siimple/preset-theme";

// Import other presets, for example helpers or elements
// import elements from "@siimple/preset-elements";
// import helpers from "@siimple/preset-helpers";

export default {
    ...theme,
    colors: {
        ...theme.colors,
        primary: colors.orange["500"],
        secondary: colors.orange["600"],
        text: colors.orange["900"],
        muted: colors.beige["200"],
    },
    fonts: {
        ...theme.fonts,
        body: ["Roboto", "sans-serif"],
        heading: "inherit",
    },
    // ...other configuration
};
`;

const examples = [
    {
        name: "Minimal",
        code: minimalExampleCode,
        text: {
            fontName: "Roboto",
            style: {
                fontFamily: "Roboto, 'sans-serif'",
            },
        },
        heading: {
            fontName: "inherit (Roboto)",
            style: {},
        },
        colors: {
            primary: "has-bg-primary",
            secondary: "has-bg-secondary",
            text: "has-bg-gray-700",
            muted: "has-bg-gray-200",
        },
    },
    {
        name: "Clean",
        code: cleanExampleCode,
        heading: {
            fontName: "inherit (Nunito)",
            className: "has-text-gray-600",
            style: {
                fontFamily: "Nunito,sans-serif",
            },
        },
        text: {
            fontName: "Nunito",
            className: "has-text-gray-600",
            style: {
                fontFamily: "Nunito,sans-serif",
            },
        },
        colors: {
            primary: "has-bg-royal-400",
            secondary: "has-bg-blue-600",
            text: "has-bg-gray-600",
            muted: "has-bg-gray-200",
        },
    },
    {
        name: "Sepia",
        code: sepiaExampleCode,
        heading: {
            fontName: "inherit",
            className: "has-text-orange-900",
            style: {},
        },
        text: {
            fontName: "Roboto",
            className: "has-text-orange-900",
            style: {
                fontFamily: "Roboto,sans-serif",
            },
        },
        colors: {
            primary: "has-bg-orange-500",
            secondary: "has-bg-orange-600",
            text: "has-bg-orange-900",
            muted: "has-bg-beige-200"
        },
    },
];

// Section wrapper
const Section = props => (
    <div className="has-mt-8 has-mb-4">
        <div className="is-flex has-text-gray-600">
            <div className="has-weight-bold">{props.title}</div>
            <div className="has-ml-auto">{props.value || ""}</div>
        </div>
        <div className="">
            <hr className="has-mt-0 has-mb-0" />
        </div>
    </div>
);

// Export theme example
export const ThemeExample = () => {
    const [theme, setTheme] = React.useState(examples[0]);
    const handleThemeChange = name => {
        setTheme(examples.find(item => item.name === name));
    };
    return (
        <React.Fragment>
            <div className="has-mb-8 has-mx-auto has-maxw-96 has-w-full">
                <Tabs
                    items={examples.map(item => item.name)}
                    active={theme.name}
                    onChange={item => handleThemeChange(item)}
                />
            </div>
            <div className="columns">
                <div className="column is-half is-full-mobile has-py-0">
                    <Section title="Headings" value={theme.heading?.fontName} />
                    <div className="has-mt-0">
                        <div className={`title is-1 has-mt-0 ${theme.heading.className}`} style={theme.heading?.style}>
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                    <Section title="Body text" value={theme.text?.fontName} />
                    <div className={`paragraph has-text-justified ${theme.text?.className}`} style={theme.text?.style}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat.
                    </div>
                    <Section title="Colors" />
                    <div className="columns">
                        {Object.keys(theme.colors).map(name => (
                            <div key={name} class="column is-full-mobile has-py-0">
                                <div className={`has-radius-md has-h-12 ${theme.colors[name]}`}></div>
                                <div className="has-size-0 has-text-gray-500">{name}</div>
                            </div>
                        ))}
                    </div>
                    <Section title="Buttons" />
                    <div className="">
                        <button className={`button ${theme.colors.primary} has-mr-1`}>Primary</button>
                        <button className={`button ${theme.colors.secondary}`}>Secondary</button>
                    </div>
                </div>
                <div className="column is-half is-full-mobile has-py-0">
                    <LiveCode className="language-js" title="siimple.config.js" key={theme.name}>
                        {theme.code.trim()}
                    </LiveCode>
                </div>
            </div>
        </React.Fragment>
    );
};
