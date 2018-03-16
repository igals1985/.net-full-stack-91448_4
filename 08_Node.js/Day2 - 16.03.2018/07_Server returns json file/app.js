var fs = require("fs");  //fs = file-system
var http = require("http");
var content=require("./data/content.json");


// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "application/json"});
	
	// Send back content: 
	response.write(JSON.stringify(content));
	
	// End response:
	response.end();
});

// Start listening on port 3000:
myServer.listen(3000);
