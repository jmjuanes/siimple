import React from "react";

//Export for each component
export function ForEach (props) {
    //Build the rendererd items
    let items = props.items.map(function (item, index) {
        //return React.createElement(React.Fragment, {"key": index}, props.render(item, index));
        return props.render(item, index);
    });
    //Return the rendered items
    return React.createElement(React.Fragment, {}, items);
}

//Default props
ForEach.defaultProps = {
    "items": [],
    "render": null
};


