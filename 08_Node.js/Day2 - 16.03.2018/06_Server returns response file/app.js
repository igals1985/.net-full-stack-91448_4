var fs = require("fs");  //fs = file-system
var http = require("http");

var content="<h1>default msg</h1>";

fs.readFile("./data/content.html", "utf-8", function(err, data){
	content=data;
});

// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
	
	// Send back content: 
	response.write(content);
	
	// End response:
	response.end();
});

// Start listening on port 3500:
myServer.listen(3500);
