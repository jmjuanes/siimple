// Parse a classnames list
export const parseClassNames = items => {
    if (typeof items === "string") {
        return items.split(" ").filter(item => item.length > 0);
    }
    else if (Array.isArray(items)) {
        return items.filter(item => item && typeof item === "string");
    }
    else if (typeof items === "object" && items !== null) {
        return Object.keys(items).filter(key => items[key] === true);
    }
    //Over value --> return an empty array
    return [];
};

//Join class names
export const classNames = (...args) => {
    return args.map(arg => parseClassNames(arg)).flat().join(" ");
};
