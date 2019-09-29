import * as Router from "rouct";

//Export method to redirect to the provided url
export const redirect = function (to) {
    return Router.redirectHashbang(to);
};

