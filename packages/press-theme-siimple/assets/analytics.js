//Initialize the analytics plugin
let __init_analytics = function(analyticsID, domain) {
    //Load analytics
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    //Cookies consent name
    let name = "analytics-consent";
    //Method for registering the consent cookie
    let registerConsentCookie = function (expireDate) {
        //console.log(`cookie ${name} registered`);
        document.cookie = `${name}=allow; expire=${expireDate}; domain=${domain}`;
    };
    //Cookies accepted
    let cookiesAccepted = function () {
        //Build the expire date
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 365);
        //Create the allow cookie
        registerConsentCookie(expireDate.toUTCString());
        //Register analytics
        window.ga("create", analyticsID, "auto");
        window.ga("set", "anonymizeIp", true);
        window.ga("send", "pageview");
    };
    //Check for no localhost server
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        //Check if cookies has been accepted
        let cookiesList = document.cookie.split("; ").filter(function (value) {
            return value.indexOf(`${name}=`) === 0;
        });
        //Check if this cookie exists
        if (cookiesList.length === 1) {
            return cookiesAccepted();
        }
        //Display the dialog
        document.getElementById("__analytics-dialog").style.display = "block";
        document.getElementById("__analytics-button").addEventListener("click", function () {
            //Hide the dialog
            document.getElementById("__analytics-dialog").style.display = "none";
            //Cookies has been accepted
            return cookiesAccepted();
        });
    }
};

