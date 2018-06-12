//Clean a dom node
let resetDOMNode = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
//Add a new dom node
let addDOMNode = function (parent, tag, attr, text) {
    let element = document.createElement(tag.toUpperCase());
    Object.keys(attr).forEach(function (key) {
        if (key === "className") {
            element.className = attr.className;
        }
        else {
            element.setAttribute(key, attr[key]);
        }
    });
    if (typeof text === "string") {
        element.textContent = text;
    }
    parent.appendChild(element);
    return element;
};
//Initialize the search box listener
let initSearchBox = function (searchInput, searchSubmit, searchPage) {
    //Submit the search
    let redirectToSearch = function () {
        let str = document.getElementById(searchInput).value;
        if (typeof str !== "string" || str.length > 0) {
            let redirectUrl = searchPage + "#query=" + window.encodeURIComponent(str);
            //console.log(redirectUrl);
            window.location.href = redirectUrl;
        }
    };
    //Enter key listener
    document.getElementById(searchInput).addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            return redirectToSearch();
        }
    });
    //Submit button press
    document.getElementById(searchSubmit).addEventListener("click", function () {
        return redirectToSearch();
    });
};

//Initialize the main search component 
let initSearchPage = function (searchInput, searchSubmit, searchResults, searchContent) {
    //Search on content
    let search = function (str) {
        console.log("Search string: " + str);
        //Split the search string by spaces
        //let searchItems = str.trim().toLowerCase().split(" ");
        let parent = document.getElementById(searchResults);
        resetDOMNode(parent);
        let countResults = 0;
        //Append the results count
        let countElement = addDOMNode(parent, "div", {"className": "sd-search-results-count", "id": "search-results-count"}, "");
        //Find items in the search content array
        searchContent.forEach(function (item) {
            let name = item.name.toLowerCase();
            let description = item.description.toLowerCase();
            let keywords = item.keywords.toLowerCase();
            if (name.indexOf(str) !== -1 || description.indexOf(str) !== -1 || keywords.indexOf(str) !== -1) {
                let container = addDOMNode(parent, "a", {"className": "sd-search-results-item", "href": item.url}, null);
                addDOMNode(container, "div", {"className": "sd-search-results-item-name"}, item.name);
                addDOMNode(container, "div", {"className": "sd-search-results-item-url"}, item.url);
                addDOMNode(container, "div", {"className": "sd-search-results-item-description"}, item.description);
                //Increment the results counter
                countResults = countResults + 1;
            }
        });
        //Save the number of results
        countElement.textContent = "" + countResults + " results found";
    };
    //Change the hash
    let updateHash = function () {
        let str = document.getElementById(searchInput).value;
        if (str.length > 0) {
            window.location.hash = "#query=" + window.encodeURIComponent(str);
        }
    };
    //Extract from hash
    let extractHash = function () {
        let str = window.location.hash.substr(1);
        let findStr = "query="
        if (str.indexOf(findStr) === 0 && str.length > findStr.length ) {
            let decodedStr = window.decodeURIComponent(str.replace(findStr, ""));
            return search(decodedStr.toLowerCase());
        }
    };
    //Register the hash change listener
    window.addEventListener("hashchange", function () {
        return extractHash();
    });
    //Enter key listener
    document.getElementById(searchInput).addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            return updateHash();
        }
    });
    //Submit button press
    document.getElementById(searchSubmit).addEventListener("click", function () {
        return updateHash();
    });
    //Extract the hash the first time
    return extractHash();
};

