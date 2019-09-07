export const ready = function (callback) {
    //Check if the state is not loading
    if (document.readyState !== "loading") {
        return callback.call(null, null);
    }
    //Register the event listener
    document.addEventListener("DOMContentLoaded", function (event) {
        if (document.readyState === "loading") {
            return;
        }
        //Call the provided callback function
        return callback.call(null, event);
    });
};

