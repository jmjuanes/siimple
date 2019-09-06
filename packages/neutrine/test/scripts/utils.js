let NeutrineUtils = {
    "loadJSON": function (path, callback) {
        let request = fetch(path).then(function (response) {
            return response.json();
        });
        //Request completed
        request.then(function (data) {
            return callback(data);
        });
        //Request error
        request.catch(function (error) {
            console.error(error);
        });
    }
};

