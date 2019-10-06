import React from "react";

//Export for loop component
export const For = function (props) {
    let items = [];
    //Iterate
    for (let index = props.from; index < props.to; index++) {
        items.push(props.render(index));
    }
    //Return the for loop wrapper
    return React.createElement(React.Fragment, {}, items);
};

//For loop default props
For.defaultProps = {
    "from": 0,
    "to": 0,
    "render": null
};

