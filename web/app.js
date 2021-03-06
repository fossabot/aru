const config = require("../config.json"),
	logger = require("../utils/logger.js"),
	express = require("express"),
	ejs = require("ejs");
module.exports = function() {
	var app = express();
	var serverIP = config.server_ip;
	var serverPort = config.server_port;
	app.set("view engine", "ejs");
	app.set("views", __dirname + "/views");
	app.use(express.static(__dirname + '/public'));
	app.get('/', function(req, res) {
		res.render("pages/index.ejs");
	});
	app.listen(serverPort);
}