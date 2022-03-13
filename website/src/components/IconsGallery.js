import React from "react"
import kofi from "kofi";
import icons from "siimple-icons";

import {Link} from "./Link.js";
import {Icon} from "./Icon.js";
import {LiveCode} from "./LiveCode.js";
import {copyTextToClipboard} from "../utils/clipboard.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.id < b.id ? -1 : +1);

// Generate icon usage string
const getIconUsage = icon => {
    return `<i class="icon-${icon.id}"></i>`;
};

// Get icon unicode
const getIconUnicode = icon => icon.unicode.toString(16).toLowerCase();

// Get displayed icons
const getDisplayedIcons = query => {
    return !query ? sortedIcons : sortedIcons.filter(icon => icon.id.includes(query)); 
};

// Icons list component
const IconsList = props => {
    const [page, setPage] = React.useState(0);
    const displayedIcons = getDisplayedIcons(props.query);
    const totalPages = Math.ceil(displayedIcons.length / props.pageSize);
    const start = props.pageSize * page;
    const visibleIcons = !props.pagination ? displayedIcons : displayedIcons.slice(start, start + props.pageSize);
    return (
        <div>
            <div className="has-radius has-bg-coolgray-200 has-p-6 has-mb-4">
                {/* Current query */}
                <div className="has-mb-4 has-d-flex has-items-center">
                    <div className="has-mr-4 has-text-xl">
                        <strong>{displayedIcons.length}</strong>
                        <span> icons</span>
                    </div>
                    {kofi.when(!!props.query, () => (
                        <div className="has-bg-coolgray-600 has-d-flex has-items-center has-radius-full has-px-3 has-py-1">
                            <div className="has-size-lg has-pr-3 has-text-white">{props.query}</div>
                            <div className="icon-cross has-cursor-pointer has-text-white" onClick={props.onQueryClear} />
                        </div>
                    ))}
                </div>
                {/* No icons found message */}
                {kofi.when(displayedIcons.length === 0, () => (
                    <div align="center" className="has-mx-auto has-w-full has-maxw-128 has-py-8">
                        <div className="">
                            <Icon icon="face-sad" style={{fontSize: "96px"}} />
                        </div>
                        <div className="title is-2 has-mt-3 has-mb-2">No icons found</div>
                        <div className="paragraph has-text-lg">
                            There are no icons that matches <strong>"{props.query}"</strong>.
                        </div>
                    </div>
                ))}
                {/* Display visible icons */}
                {kofi.when(displayedIcons.length > 0, () => (
                    <div className="has-d-flex has-flex-wrap">
                        {visibleIcons.map(icon => {
                            const isActive = icon.id === props.activeIcon?.id;
                            const iconClass = kofi.classNames({
                                "has-p-6 has-w-24 has-radius has-d-flex has-cursor-pointer": true,
                                "hover:has-bg-white": !isActive,
                                "has-bg-blue-500 has-text-white": isActive,
                            });
                            return (
                                <div key={icon.id} className={iconClass} onClick={() => props.onIconClick(icon)}>
                                    <Icon icon={icon.id} className="has-text-4xl" />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            {/* Display pagination */}
            {kofi.when(props.pagination && displayedIcons.length > 0, () => {
                const pages = Array.from(Array(totalPages).keys());
                const firstClass = kofi.classNames({
                    "has-weight-bold has-py-3 has-px-4": true,
                    "has-cursor-pointer hover:has-text-blue-500": page > 0,
                    "has-text-coolgray-400": page === 0,
                });
                const lastClass = kofi.classNames({
                    "has-weight-bold has-py-3 has-px-4": true,
                    "has-cursor-pointer hover:has-text-blue-500": page < totalPages - 1,
                    "has-text-coolgray-400": totalPages - 1 <= page,
                });
                return (
                    <div className="has-d-flex">
                        <div className="has-ml-auto has-p-2 has-radius has-bg-coolgray-200 has-d-flex">
                            <div className={firstClass} onClick={() => setPage(0)}>First</div>
                            {pages.map(index => {
                                const itemClass = kofi.classNames({
                                    "has-radius has-py-3 has-px-4": true,
                                    "has-cursor-pointer hover:has-text-blue-500": index !== page,
                                    "has-bg-white has-text-blue-500": index === page,
                                });
                                return (
                                    <div key={index} className={itemClass} onClick={() => setPage(index)}>
                                        <strong>{(index + 1)}</strong>
                                    </div>
                                );
                            })}
                            <div className={lastClass} onClick={() => setPage(totalPages - 1)}>Last</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// Icon modal component
const IconModal = props => {
    const [iconCopied, setIconCopied] = React.useState(false);
    const previewClass = kofi.classNames([
        "has-d-flex has-justify-center has-p-12 has-radius",
        "has-mb-4",
        "has-bg-coolgray-200 has-text-coolgray-700",
    ]);
    const iconHtml = getIconUsage(props.icon);
    const iconSvgUrl = `${process.env.REPO_URL}/raw/main/icons/${props.icon.id}.svg`;
    const handleIconCopy = () => {
        copyTextToClipboard(iconHtml);
        setIconCopied(true);
    };
    return (
        <div className="scrim">
            <div className="modal is-medium">
                <div className="has-d-flex has-items-center has-mb-6">
                    <div className="title is-3 has-mb-0">
                        {props.icon.id} <span className="has-weight-normal">({getIconUnicode(props.icon)})</span>
                    </div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className={previewClass}>
                    <Icon icon={props.icon.id} style={{fontSize:"128px"}} />
                </div>
                <div className="paragraph">Using this icon as a webfont:</div>
                <LiveCode className="html">{iconHtml}</LiveCode>
                <div className="columns">
                    <div className="column has-py-0">
                        <div
                            className="btn has-d-flex has-items-center has-justify-center"
                            onClick={() => handleIconCopy()}
                        >
                            <Icon icon="copy" className="has-pr-1 has-text-lg" />
                            <strong>{iconCopied ? "Copied!" : "Copy HTML"}</strong>
                        </div>
                    </div>
                    <div className="column has-py-0">
                        <Link
                            to={iconSvgUrl}
                            target="_blank"
                            className="btn is-secondary has-d-flex has-items-center has-justify-center"
                        >
                            <Icon icon="download" className="has-pr-1 has-text-lg" />
                            <strong>Download SVG</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export Icons Gallery component
export const IconsGallery = () => {
    const queryRef = React.useRef();
    const [query, setQuery] = React.useState("");
    const [activeIcon, setActiveIcon] = React.useState(null);
    const handleQueryClear = () => {
        queryRef.current.value = ""; // Reset query in input
        setQuery("");
    };
    return (
        <div className="has-mb-24">
            <div className="has-d-flex has-items-center has-mb-4 has-bg-coolgray-200 has-radius">
                <Icon icon="search" className="has-text-xl has-pl-3 has-pr-0" />
                <input
                    ref={queryRef}
                    type="text"
                    className="input has-flex-grow"
                    placeholder="Search for icons..."
                    onChange={e => setQuery(e.target.value || "")}
                />
            </div>
            <IconsList
                key={query}
                icons={sortedIcons}
                activeIcon={activeIcon}
                query={query}
                onIconClick={icon => setActiveIcon(icon)}
                onQueryClear={handleQueryClear}
                pagination={true}
                pageSize={48}
            />
            {/* Active Icon --> display modal */}
            {kofi.when(!!activeIcon, () => (
                <IconModal
                    icon={activeIcon}
                    onClose={() => setActiveIcon(null)}
                />
            ))}
        </div>
    );
};
