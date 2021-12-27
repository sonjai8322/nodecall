var http = require('http'),
    PORT = 8013;

var request = require('request');

var server = http.createServer(function(req, res) {});

setInterval(function() {
    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=gateway-isuandok', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=gateway-hosweb', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=iroute', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=isuandok-connect', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=isuandok-ipatient', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=isuandok-opr', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

    request('https://isuandok.med.cmu.ac.th/apps/iTransfer/logs_monitor?db_name=gateway-isuandok', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        } else {
            console.log("Error " + response.statusCode)
        }
    });

}, 60 * 1000 * 15); //15 นาที


server.listen(PORT, function() {
    console.log('Server is running on port ' + PORT + '...');
});