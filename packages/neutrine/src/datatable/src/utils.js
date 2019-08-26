//Generate an array range 
export const range = function (start, length) {
    return Array(length).fill().map(function (el, index) {
        return start + index;
    });
};

//Convert an array to an object
export const arrayToObject = function (array, obj) {
    //Check for valid array
    if (typeof array === "object" && array !== null && array.length > 0) {
        array.forEach(function (value) {
            obj["" + value + ""] = true;
        });
    }
    //Return the provided object
    return obj;
};

//Find a class-name in a node list
export const findClassInNodeList = function (list, className, callback) {
    for(let i = 0; i < list.length; i++) {
        //Check if this node contains the provided class name
        if (list[i].classList.contains(className) === true) {
            return callback.call(null, list[i], i);
        }
    }
    //Item not found
    return null;
};

