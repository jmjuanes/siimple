//Import components helpers
import * as helpers from "../../helpers.js";

//Label component
export const Label = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-label"
    });
};

