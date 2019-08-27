import React from "react";

//Export renderer component
//Render the result of the provided function 
export function Renderer (props) {
    if (typeof props.render === "function") {
        return props.render();
    }
    //No render function provided: return null
    return null;
}

//Renderer default props
Renderer.defaultProps = {
    "render": null
};

