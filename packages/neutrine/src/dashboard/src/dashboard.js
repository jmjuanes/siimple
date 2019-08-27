//Import dependencies
import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import dashboard styles
import "../styles/dashboard.scss";

//Base class
let baseClass = "neutrine-dashboard";

//Export dashboard component
export const Dashboard = function (props) {
    //Dashboard class styles
    let classList = [baseClass];
    //Check if sidebar is not visible
    if (props.hideSidebar === true) {
        classList.push(baseClass + "--hide-sidebar");
    }
    //Check if sidebar is collapsed
    else if (props.collapseSidebar === true) {
        classList.push(baseClass + "--collapse-sidebar");
    }
    //Check for light dashboard
    if (props.light === true) {
        classList.push(baseClass + "--light");
    }
    //Build the dashboard props
    let dashboardProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the dahsboard element
    return React.createElement("div", dashboardProps, props.children);
};

//Dashboard default props
Dashboard.defaultProps = {
    "light": false,
    "hideSidebar": false,
    "collapseSidebar": false
};

//Export sidebar component
export const DashboardSidebar = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-sidebar"
    });
};

//Sidebar separator
export const DashboardSidebarSeparator = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-sidebar-separator"
    });
};

//Sidebar item
export const DashboardSidebarItem = function (props) {
    //Initialize the button props
    let itemProps = {
        "className": [baseClass + "-sidebar-item"],
        "onClick": props.onClick
    };
    //Add the button icon
    let icon = null;
    if (props.icon !== null) {
        icon = React.createElement(Icon, {
            "icon": props["icon"],
            "className": baseClass + "-sidebar-item-icon"
        });
    }
    //itemProps.className.push(baseClass + "-link-" + key);
    //Check if this link is active
    if (typeof props.active === "boolean" && props.active === true) {
        itemProps.className.push(baseClass + "-sidebar-item--active");
    }
    //Merge the classnames
    itemProps.className = itemProps.className.join(" ");
    //Return the sidebar item element
    return React.createElement("div", itemProps, icon, props.text);
};

//Sidebar item default props
DashboardSidebarItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//Export header component
export const DashboardHeader = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header"
    });
};

//Dashboard header toggle
export const DashboardHeaderToggle = function (props) {
    let toggleProps = {
        "className": baseClass + "-header-toggle",
        "onClick": props.onClick
    };
    //Build the toggle icon
    let icon = React.createElement(Icon, {
        "icon": "menu",
        "style": {
            "fontSize": "30px"
        }
    });
    //Return the header toggle element
    return React.createElement("div", toggleProps, icon);
};

//Dashboard header title
export const DashboardHeaderTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header-title"
    });
};

//Dashboard header subtitle
export const DashboardHeaderSubtitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header-subtitle"
    });
};

//Export dashboard content container
export const DashboardContent = function (props) {
    //Content class list
    let classList = [baseClass + "-content"];
    //Check for Fixed content
    if (props.fixed === true) {
        classList.push(baseClass + "-content--fixed");
    }
    //Check for fluid content
    if (props.fluid === true) {
        classList.push(baseClass + "-content--fluid");
    }
    //Build the dashboard content props
    let contentProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the content element
    return React.createElement("div", contentProps, props.children);
};

//Dashboard content props
DashboardContent.defaultProps = {
    "fixed": false,
    "fluid": false
};

