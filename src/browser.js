//const ua = (window.navigator.userAgent || "").toLowerCase(); //Get user agent

//Check for safari browser
export const isSafariBrowser = () => {
    //return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1;
    return false;
};
