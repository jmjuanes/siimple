import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";

// Get list of expanded groups
const getExpandedGroups = current => {
    const expandedGroups = {};
    if (current !== null) {
        expandedGroups[current.group] = true;
    }
    return expandedGroups;
};

export const Sidebar = props => {
    const [expanded, setExpanded] = React.useState(getExpandedGroups(props.current));
    let currentGroup = null; //Current group
    return (
        <div className="has-pt-none has-pb-4 has-mb-none">
            {(props.items || []).map((item, key) => {
                //Return link to the provided item
                const isActive = props.pathname === item.url;
                const itemClass = kofi.classNames({
                    "navlink has-mb-1 has-pr-3 has-pl-6": true,
                    "has-weight-normal": true,
                    "has-bg-blue-500 has-text-white-hover has-text-white has-weight-bold": isActive,
                    "has-bg-gray-200-hover": !isActive,
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
                                "is-clickable": true,
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
                                    <div className="is-flex has-pt-3 has-pb-3 has-items-center">
                                        <div className="is-capitalized">
                                            <strong>{item.group.replace("-", " ")}</strong>
                                        </div>
                                        <div className="has-ml-auto">
                                            <i className={`si-${groupIcon} has-pt-1 has-pb-1`} />
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
