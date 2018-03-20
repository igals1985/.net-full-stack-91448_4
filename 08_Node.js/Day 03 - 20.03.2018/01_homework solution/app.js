var fs = require("fs");  //fs = file-system
var http = require("http");

var pageArray = [];
var pageSrc = ["morning", "afternoon", "evening", "night"];

for (let x of pageSrc)
    fs.readFile("./data/" + x + ".html", "utf-8", function (err, data) {
        if (!err) {
            pageArray.push(
                {
                    type: x,
                    content: data
                });
        }
    });


// Create http server:
var myServer = http.createServer(function (request, response) {

    // Send back header:
    response.writeHead(200, { "Content-Type": "text/html" });

    let dayPart = getDayPart();
    // Send back data:
    for (let x of pageArray) {
        if (x.type == dayPart)
            response.write(x.content);
    }

    // End response:
    response.end();
});

// Start listening on port 3500:
myServer.listen(3500, () => {
    console.log("listening to port 3500");
});




function getDayPart() {

    let currentHour = (new Date()).getHours();
    let dayPart = "night";

    if (currentHour > 6 && currentHour <= 12) {
        dayPart = "morning";
    }
    else if (currentHour > 12 && currentHour <= 16) {
        dayPart = "afternoon";
    }
    else if (currentHour > 16 && currentHour <= 20) {
        dayPart = "evening";
    }

    return dayPart;
}