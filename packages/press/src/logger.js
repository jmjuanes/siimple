let currentLogLevel = 0;
let logLevels = ["info", "warning", "error"];

//Print a logging message
let printMessage = function (level, logger, message) {
    if (logLevels.indexOf(level) >= currentLogLevel) {
        return logger("[" + level.toUpperCase() + "] " + message);
    }
};

//Display info message
module.exports.info = function (message) {
    return printMessage("info", console.log, message);
};

//Display a warning message
module.exports.warning = function (message) {
    return printMessage("warning", console.warn, message);
};

//Display an error message
module.exports.error = function (message) {
    return printMessage("error", console.error, message);
};

//Set the log level
module.exports.setLevel = function (level) {
    currentLogLevel = logLevels.indexOf(level);
};

