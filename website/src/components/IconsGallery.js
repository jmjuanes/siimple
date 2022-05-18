import React from "react"
import kofi from "kofi";
import icons from "@siimple/preset-icons/icons.js";

import {Link} from "./Link.js";
import {Icon} from "./Icon.js";
import {LiveCode} from "./LiveCode.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.name < b.name ? -1 : +1);

// Generate icon usage string
const getIconUsage = icon => {
    return `<i class="icon-${icon.name}"></i>`;
};

// Get displayed icons
const getDisplayedIcons = query => {
    return !query ? sortedIcons : sortedIcons.filter(icon => icon.name.includes(query)); 
};

// Icons list component
const IconsList = props => {
    const displayedIcons = getDisplayedIcons(props.query);
    return (
        <div className="">
            {/* Current query */}
            <div className="has-mb-4 is-flex has-items-center">
                <div className="has-mr-4 has-size-3">
                    <strong>{displayedIcons.length}</strong>
                    <span> icons</span>
                </div>
                {kofi.when(!!props.query, () => (
                    <div className="has-bg-gray-700 is-flex has-items-center has-radius-full has-px-3 has-py-1">
                        <div className="has-size-2 has-pr-3 has-text-white">{props.query}</div>
                        <div className="icon-cross is-clickable has-text-white" onClick={props.onQueryClear} />
                    </div>
                ))}
            </div>
            {/* No icons found message */}
            {kofi.when(displayedIcons.length === 0, () => (
                <div align="center" className="has-mx-auto has-w-full has-maxw-128 has-p-8">
                    <div className="has-mb-2">
                        <Icon icon="face-sad" className="has-size-9" />
                    </div>
                    <div>
                        <div className="title is-2 has-mb-2">No icons found</div>
                        <div className="paragraph has-size-2">
                            There are no icons that matches <strong>"{props.query}"</strong>.
                        </div>
                    </div>
                </div>
            ))}
            {/* Display visible icons */}
            {kofi.when(displayedIcons.length > 0, () => (
                <div className="columns has-flex-wrap">
                    {displayedIcons.map(icon => {
                        const isActive = icon.name === props.activeIcon?.name;
                        const iconClass = kofi.classNames({
                            "has-radius-md is-clickable has-p-4": true,
                            "has-text-blue-500-hover has-bg-gray-200": !isActive,
                            "has-bg-blue-500 has-text-white": isActive,
                        });
                        return (
                            <div key={icon.name} className="column is-one-fifth-tablet is-half-mobile">
                                <div className={iconClass} onClick={() => props.onIconClick(icon)} align="center">
                                    <Icon icon={icon.name} className="has-size-7" />
                                    <div className="has-size-0 has-mt-2">{icon.name}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

// Icon modal component
const IconModal = props => {
    const [iconCopied, setIconCopied] = React.useState(false);
    const previewClass = kofi.classNames([
        "is-flex has-justify-center has-p-12 has-radius-md",
        "has-mb-4",
        "has-bg-gray-200 has-text-gray-700",
    ]);
    const iconHtml = getIconUsage(props.icon);
    const iconSvgUrl = `${process.env.REPO_URL}/raw/main/icons/${props.icon.name}.svg`;
    const handleIconCopy = () => {
        navigator.clipboard.writeText(iconHtml).then(() => {
            setIconCopied(true);
        });
    };
    return (
        <div className="scrim">
            <div className="modal">
                <div className="is-flex has-items-center has-mb-6">
                    <div className="title is-3 has-mb-none">{props.icon.name}</div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className={previewClass}>
                    <Icon icon={props.icon.name} style={{fontSize:"128px"}} />
                </div>
                <div className="paragraph">Using this icon as a webfont:</div>
                <LiveCode className="html">{iconHtml}</LiveCode>
                <div className="columns">
                    <div className="column has-py-none">
                        <div
                            className="button is-flex has-items-center has-justify-center"
                            onClick={() => handleIconCopy()}
                        >
                            <Icon icon="copy" className="has-pr-1 has-size-2" />
                            <strong>{iconCopied ? "Copied!" : "Copy HTML"}</strong>
                        </div>
                    </div>
                    <div className="column has-py-none">
                        <Link
                            to={iconSvgUrl}
                            target="_blank"
                            className="button is-secondary is-flex has-items-center has-justify-center"
                        >
                            <Icon icon="download" className="has-pr-1 has-size-2" />
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
        <div>
            <div className="is-flex has-items-center has-mb-8 has-bg-gray-200 has-radius-md">
                <Icon icon="search" className="has-size-3 has-pl-3 has-pr-0 has-text-gray-700" />
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
