console.log("Server JS")
var express = require("express")
var app = express();
var http = require("http").createServer(app);

var io = require("socket.io")(http);
io.on("connection", function (socket) {
	console.log("User: ", socket.id);
});

app.get("/", function (request, result) {
	result.send("Bismillah...");
});

var port = 3000;
http.listen(port, function () {
	console.log("Listening to port " + port);
});
