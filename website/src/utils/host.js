//Check for localhost
// --> check if hostname is localhost or 127.0.0.1
export const isLocalhost = () => {
    return location.hostname === "localhost" || location.hostname === "127.0.0.1"; 
};

//Get application host
export const getHost = () => {
    return window.location.origin;
};
