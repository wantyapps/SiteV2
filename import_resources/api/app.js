const express = require("express");
const dotenv = require("dotenv");
const action = require("./action.js");
const app = express();

dotenv.config()


var ProcessDebug = false;
if ( process.argv[2] === "d" || process.argv[2] === "debug" ) {
	ProcessDebug = true
	console.log("Debug mode enabled.");
};

app.get('/api/v1', (req, res) => {
	if ( req.headers.username === process.env.WANTYAPIUSERNAME && req.headers.password == process.env.WANTYAPIPASSWORD) {
		if ( ProcessDebug === true ) {
			console.log("API: Success");
		};
		var toSend = {"success": true, "error": false};
		switch ( req.headers.action ) {
			case "joke":
				toSend["joke"] = action.tellJoke();
				break;
			case "usage":
				toSend["usage"] = action.usage();
				break;
			default:
				break;
		}
		res.send(toSend);	
	} else {
		res.send({"success": false, "error": "Username or password incorrect"});
		if ( ProcessDebug === true ) {
			console.log("API: Fail");
		};
	};
});

module.exports = app;