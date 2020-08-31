console.log("Server JS NodeJS https://www.youtube.com/watch?v=cXQGJ_8QYK0 | https://adnan-tech.com/realtime-web-based-chat-in-node-js-mysql/")
var express = require("express")
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
app.use(function (request, result, next) {
	result.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

io.on("connection", function (socket) {
	console.log("User connected ", socket.id);
	socket.on("new_message", function (data) {
		console.log("Client " + socket.id + " says: ", data);
		io.emit("new_message", data);
		// alert("1" + data);
	});

	app.get("/", function (request, result) {
		result.send("Bismillah... Hello world !");
	});
});

var port = 3000;
http.listen(port, function () {
	console.log("Listening to port " + port);
});