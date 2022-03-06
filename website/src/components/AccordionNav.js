import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

//Get list of expanded groups
const getExpandedGroups = current => {
    const expandedGroups = {};
    if (current !== null) {
        expandedGroups[current.group] = true;
    }
    return expandedGroups;
};

//Export accordion navigation
export const AccordionNav = props => {
    const [expanded, setExpanded] = React.useState(getExpandedGroups(props.current));
    let currentGroup = null; //Current group
    return (
        <div className="has-pt-4 has-pb-4 has-mb-0">
            {(props.items || []).map((item, key) => {
                //Return link to the provided item
                const isActive = props.pathname === item.url;
                const itemClass = kofi.classNames({
                    "navlink has-mb-1 has-pr-3 has-pl-6": true,
                    "has-weight-normal": true,
                    "has-bg-coolgray-700 hover:has-text-white has-text-white has-weight-bold": isActive,
                    "hover:has-bg-coolgray-200": !isActive,
                });
                const itemVisible = expanded[item.group] === true; // || item.group === "global";
                const displayGroup = currentGroup !== item.group; // && item.group !== "global"; //Display group
                currentGroup = item.group; //Update current group
                return (
                    <React.Fragment key={key}>
                        {/* Group item */}
                        {kofi.when(displayGroup, () => {
                            const groupIcon = expanded[item.group] === true ? "chevron-down" : "chevron-right";
                            const groupClass = kofi.classNames({
                                "has-cursor-hand": true,
                                "has-mt-6": currentGroup === null,
                            });
                            //Handle group click --> expand/collapse this group
                            const handleGroupClick = () => {
                                const isExpanded = typeof expanded[item.group] === "boolean" && expanded[item.group];
                                return setExpanded(Object.assign({}, expanded, {
                                    [item.group]: !isExpanded,
                                }));
                            };
                            //currentGroup = item.group; //Change current group
                            return (
                                <div className={groupClass} onClick={handleGroupClick}>
                                    <div className="has-flex has-py-3">
                                        <div className="has-flex-grow has-text-capitalize">
                                            <strong>{item.group.replace("-", " ")}</strong>
                                        </div>
                                        <div className="has-flex-nogrow has-ml-0">
                                            <Icon icon={groupIcon} className="has-py-1" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Page link */}
                        {kofi.when(itemVisible, () => (
                            <Link to={item.url} className={itemClass}>{item.label}</Link>
                        ))}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
