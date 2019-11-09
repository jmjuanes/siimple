import React from "react";

//Import available elements
import {renderJumbotron} from "./jumbotron.js";

//Build renderers
let render = {
    "jumbotron": renderJumbotron
};

//Export element renderer
export function Element (props) {
    return render[props.type](props.attributes);
};

