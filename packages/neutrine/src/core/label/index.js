//Import components helpers
import * as helpers from "../../helpers.js";

//Import label styles
import "@siimple/css/scss/form/label.scss";

//Label component
export const Label = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-label"
    });
};

