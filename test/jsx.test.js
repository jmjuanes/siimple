/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import {jsx} from "@siimple/jsx";
import {ThemeProvider} from "@siimple/theme-provider";

const selector = `style[data-siimple="siimple-react"]`;

describe("jsx", () => {
    it("should return a React.createElement if no 'css' prop is provided", () => {
        const component = renderer.create(
            jsx("div", {}, "Hello world"),
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should style the element", () => {
        const component = renderer.create(
            jsx("div", {
                css: {
                    color: "red",
                },
            }, "Hello world in red"),
        );
        const div = component.root.findByType("div");

        expect(div).toBeDefined();
        expect(div.props.className).toEqual(expect.stringContaining("sii-"));
        expect(document.querySelector(selector).innerHTML).toEqual(expect.stringContaining("color:red"));
    });

    it("should style the element using the theme", () => {
        const theme = {
            colors: {
                primary: "black",
            },
        };
        const component = renderer.create(
            jsx(ThemeProvider, {theme},
                jsx("div", {css: {color: "primary"}}, "Hello world"),
            ),
        );
        const div = component.root.findByType("div");

        expect(div).toBeDefined();
        expect(div.props.className).toEqual(expect.stringContaining("sii-"));
        expect(document.querySelector(selector).innerHTML).toEqual(expect.stringContaining("color:black"));
    });
});
