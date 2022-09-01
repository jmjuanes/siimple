/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import {ThemeProvider} from "@siimple/react";
import {Box, Alert} from "@siimple/components";

const selector = `style[data-siimple="siimple-react"]`;

describe("Box", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <Box css={{color: "white"}}>Hello world</Box>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("All components", () => {
    it("should render", () => {
        const component = renderer.create((
            <ThemeProvider theme={{}}>
                <Alert>Hello world</Alert>
            </ThemeProvider>
        ));

        expect(component.toJSON()).toMatchSnapshot();
    });
});
