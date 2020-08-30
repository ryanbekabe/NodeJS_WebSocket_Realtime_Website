console.log("Server JS NodeJS https://www.youtube.com/watch?v=cXQGJ_8QYK0")
var express = require("express")
var app = express();
var http = require("http").createServer(app);

var io = require("socket.io")(http);
var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "11kmzwA8awaa11_!",
	database: "hanyajasa"
});
connection.connect(function (error) {
	
});

io.on("connection", function (socket) {
	console.log("User: ", socket.id);
	
	socket.on("new_message", function (data) {
		console.log("Client says: ", data);
		io.emit("new_message", data);
		connection.query("INSERT INTO messages (message) VALUES ('" + data + "')", function(error, result) {});
	});
});

app.get("/", function (request, result) {
	result.send("Bismillah...");
});

var port = 3000;
http.listen(port, function () {
	console.log("Listening to port " + port);
});