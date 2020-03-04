import React from "react";
import * as helpers from "../../helpers.js";
import "./style.scss";

//Global styles
let baseClass = "neutrine__splitpanel";
let separatorSize = 5;

//Get children elements
let getChildren = function (props) {
    return React.Children.toArray(props.children);
};

//Get primary panel
let getPrimaryPanel = function (props) {
    let children = getChildren(props);
    return (children[0].props.primary === true) ? children[0] : children[1];
};

//Get initial panel size
let getInitialSize = function (props) {
    //Get the primary children
    //let primary = getPrimaryPanel(props);
    //Check for undefined children
    //if (typeof primary === "undefined" || primary === null) {
    //    //TODO
    //}
    //Check for default panel size
    if (typeof props.defaultSize !== "undefined" && props.defaultSize !== null) {
        return props.defaultSize;
    }
    //Default: return the min size
    return props.minSize;
};

//Export split panel wrapper
export class SplitPanel extends React.Component {
    constructor(props) {
        super(props);
        //Get children panels
        let children = getChildren(this.props);
        let index = (children[0].props.primary === true) ? 0 : 1;
        //let primary = (children[0].props.primary === true) ? children[0] : children[1];
        //Get the initial panel size
        let size = getInitialSize(children[index].props);
        //Initial state
        this.state = {
            "primaryPanel": {
                "index": index,
                "maxSize": children[index].props.maxSize,
                "minSize": children[index].props.minSize
            },
            "active": false,
            "currentPosition": null,
            "currentSize": size
        };
        //Referenced elements
        this.ref = {
            "parent": React.createRef(),  //Parent reference
            "panel0": React.createRef(),  //First panel reference
            "panel1": React.createRef()   //Second panel reference
        };
        //Bind methods
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    //Component did mount
    componentDidMount() {
        this.ref.parent.current.addEventListener("mouseup", this.handleMouseUp);
        this.ref.parent.current.addEventListener("mousemove", this.handleMouseMove);
    }
    //Component will unmount
    componentWillUnmount() {
        //TODO
    }
    //Handle mouse down
    handleMouseDown(event) {
        if (this.props.resize === true) {
            //Get the initial position
            let position = this.isVerticalSplit() ? event.clientX : event.clientY;
            //Initialize the resize
            return this.setState({
                "active": true,
                "currentPosition": position
            });
        }
    }
    //Handle mouse move
    handleMouseMove(event) {
        //Check if resize is not allowed or is not active
        if (this.props.resize === false || this.state.active === false) {
            return null;
        }
        //Get the primary panel node
        let node = this.ref["panel" + this.state.primaryPanel.index].current;
        //Check if getBoundingClientRect is not defined
        if (typeof node.getBoundingClientRect !== "function") {
            return null;
        }
        //Get the current position and size
        let currentPosition = this.isVerticalSplit() ? event.clientX : event.clientY;
        let currentSize = this.isVerticalSplit() ? node.getBoundingClientRect().width : node.getBoundingClientRect().height; 
        //Calculate the resize increment
        let increment = this.state.currentPosition - currentPosition;
        //Check for step imcrement
        if (typeof this.props.step === "number" && this.props.step > 0) {
            if (Math.abs(increment) < step) {
                return null;
            }
            //Calculate the step in function of the step value
            increment = this.props.step * Math.floor(increment / this.props.step);
        }
        //Check if the primary panel is the second panel
        if (this.state.primaryPanel === 1) {
            //TODO
        }
        //Get the max and min panel size
        let maxSize = this.state.primaryPanel.maxSize;
        let minSize = this.state.primaryPanel.minSize;
        //Check the maxSize property
        //TODO
        //Calculate the new size
        let newSize = currentSize - ((this.state.primaryPanel.index === 0) ? increment : (-1 * increment));
        let newPosition = this.state.currentPosition - increment;
        //Check if the new size is lower than the minSize value (if defined)
        if (typeof minSize === "number" && newSize < minSize) {
            return this.setState({
                "currentSize": minSize
            });
        }
        //Check if the new size is greather than the maxSize value (if defined)
        else if (typeof maxSize === "number" && maxSize < newSize) {
            return this.setState({
                "currentSize": maxSize
            });
        }
        //Update the state
        return this.setState({
            "currentSize": newSize,
            "currentPosition": newPosition
        });
    }
    //Handle mouse up
    handleMouseUp(event) {
        if (this.state.active === true) {
            return this.setState({
                "active": false
            });
        }
    }
    //Check if split is vertical
    isVerticalSplit() {
        return this.props.split === "vertical";
    }
    //Render the panel
    renderPanel(children, index) {
        //Build the panel props
        let panelProps = {
            "className": baseClass + "-item",
            "ref": this.ref["panel" + index],
            "style": {
                "flex": 1,
                "position": "relative",
                "outline": "none"
            }
        };
        //Check if this is the primary panel
        if (this.state.primaryPanel.index === index) {
            //Check for vertical split
            if (this.isVerticalSplit() === true) {
                Object.assign(panelProps.style, {
                    "width": this.state.currentSize
                });
            }
            else {
                Object.assign(panelProps.style, {
                    "height": this.state.currentSize,
                    "display": "flex"
                });
            }
            //Assign the flex property
            panelProps.style.flex = "none";
        }
        //Add the second panel width/height
        else {
            let styleProp = (this.isVerticalSplit() === true) ? "width" : "height";
            //Add hack to prevent fill width/height panels
            panelProps.style[styleProp] = "0px";
        }
        //Return the panel wrapper
        return React.createElement("div", panelProps, children[index]);
    }
    //Render the separator
    renderSeparator() {
        let self = this;
        //Default separator class-list
        let classList = [baseClass + "-separator", baseClass + "-separator--" + this.props.split];
        //Return the separator element
        return React.createElement("div", {
            "className": helpers.classNames(classList, self.props.resizeClassName),
            "style": self.props.resizeStyle,
            "onMouseDown": self.handleMouseDown,
            "onMouseUp": self.handleMouseUp
        });
    }
    //Render the panels wrapper
    render() {
        //Get panel children elements
        let children = getChildren(this.props);
        //Render elements
        let firstPanel = this.renderPanel(children, 0);
        let secondPanel = this.renderPanel(children, 1);
        let separator = this.renderSeparator();
        //Build the parent props
        let parentProps = {
            "ref": this.ref.parent,
            "className": [baseClass, baseClass + "--" + this.props.split].join(" ")
        };
        //Redner the split panel component
        return React.createElement("div", parentProps, firstPanel, separator, secondPanel);
    }
}

//Split panel wrapper default props
SplitPanel.defaultProps = {
    "split": "vertical", //horizontal|vertical
    "step": null,
    "resize": true,
    "resizeClassName": null,
    "resizeStyle": null
};

//Panel Item
export const SplitPanelItem = function (props) {
    return React.createElement(React.Fragment, {}, props.children);
};

//Default props
SplitPanelItem.defaultProps = {
    "primary": false,
    "defaultSize": null,
    "minSize": null,
    "maxSize": null
};

