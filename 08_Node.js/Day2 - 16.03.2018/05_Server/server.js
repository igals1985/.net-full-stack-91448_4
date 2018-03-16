
// Create http module:
var http = require("http");

// Create http server:
var myServer = http.createServer(
    
    //this function will be executed each time a client sends a request
    function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
	
	// Send back content: 
	response.write("<h1>Hello All!</h1>");
	
	// End response:
	response.end();
});

// Start listening on port 3000:
myServer.listen(3000);