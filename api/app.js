const express = require("express");
const dotenv = require("dotenv")
const app = express();

dotenv.config()


var ProcessDebug = false;
if ( process.argv[2] === "d" || process.argv[2] === "debug" ) {
	ProcessDebug = true
	console.log("Debug mode enabled.");
};

function tellJoke() {
	const jokes = ["Two guys are busted stealing a calender. The both got 6 months", "Who knows about math and science and is always close by? An engi-near!", "What is a cat's favorite website? Reddot.com", "Why did the woman fall into the well? She couldn't see that well.", "Why didn't the chicken cross the road? Because It was eggshausted."];
	let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
	return randomJoke;
}

app.get('/api/v1', (req, res) => {
	if ( req.headers.username === process.env.WANTYAPIUSERNAME && req.headers.password == process.env.WANTYAPIPASSWORD) {
		if ( ProcessDebug === true ) {
			console.log("API: Success");
		};
		var toSend = {"success": true, "error": false};
		if ( req.headers.action === "joke" ) {
			toSend["joke"] = tellJoke();
		};
		res.send(toSend);	
	} else {
		res.send({"success": false, "error": "Username or password incorrect"});
		if ( ProcessDebug === true ) {
			console.log("API: Fail");
		};
	};
});

module.exports = app;