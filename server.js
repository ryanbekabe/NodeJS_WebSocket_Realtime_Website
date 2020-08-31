console.log("Server JS NodeJS https://www.youtube.com/watch?v=cXQGJ_8QYK0")
var express = require("express")
var app = express();
app.use(function (request, result, next) {
	result.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

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
	console.log("User connected ", socket.id);
	
	socket.on("delete_message", function (messageId) {
		connection.query("DELETE FROM messages WHERE id = '" + messageId + "'", function (error, result) {});
		io.emit("delete_message", messageId);
		});
	
	socket.on("new_message", function (data) {
		console.log("Client says: ", data);
		connection.query("INSERT INTO messages (message) VALUES ('" + data + "')", function(error, result) {});
			io.emit("new_message", {message: data});
		});
});

app.get("/get_messages", function (request, result) {
	connection.query("SELECT * FROM messages", function (error, messages) {
		result.end(JSON.stringify(messages));
	});
});

app.get("/", function (request, result) {
	result.send("Bismillah... Hello world !");
});

var port = 3000;
http.listen(port, function () {
	console.log("Listening to port " + port);
});