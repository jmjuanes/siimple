/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import {ThemeProvider, useTheme, styled} from "@siimple/react";

const selector = `style[data-siimple="siimple-react"]`;

describe("ThemeProvider", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <div>Hello world</div>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("useTheme", () => {
    it("should return current theme", () => {
        const defaultTheme = {
            colors: {
                primary: "black",
            },
        };
        let theme = null;
        let TestComponent = () => {
            theme = useTheme();
            return null;
        };
        renderer.create((
            <ThemeProvider theme={defaultTheme}>
                <TestComponent />
            </ThemeProvider>
        ));

        expect(theme).not.toBeNull();
        expect(theme?.colors?.primary).toBe(defaultTheme.colors.primary);
    });
});

describe("styled", () => {
    it("should return a valid React component", () => {
        const StyledComponent = styled("div", {
            color: "white",
        });
        const component = renderer.create((
            <StyledComponent>Hello world</StyledComponent>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should apply theme", () => {
        const theme = {
            colors: {
                primary: "black",
            },
        };
        const StyledComponent = styled("div", {
            color: "primary",
        });
        const component = renderer.create((
            <ThemeProvider theme={theme}>
                <StyledComponent>Hello</StyledComponent>
            </ThemeProvider>
        ));
        const div = component.root.findByType("div");

        expect(div).toBeDefined();
        expect(div.props.className).toEqual(expect.stringContaining("sii-"));
        expect(document.querySelector(selector).innerHTML).toEqual(expect.stringContaining("color:black"));
    });
});
