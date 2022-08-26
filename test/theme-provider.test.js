/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import {ThemeProvider, useTheme} from "@siimple/theme-provider";

describe("[theme-provider] ThemeProvider component", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <div>Hello world</div>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("[theme-provider] useTheme hook", () => {
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
