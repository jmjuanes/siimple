/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import {ThemeProvider} from "@siimple/react";
import {Elements, Markup} from "@siimple/components";

// const selector = `style[data-siimple="siimple-react"]`;

describe("Elements", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <Elements.alert>Hello world</Elements.alert>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("Markup", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <Markup.h1>Hello world</Markup.h1>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});
