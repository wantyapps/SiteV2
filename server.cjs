const express = require('express');
const path = require('path');
const app = express();
const RateLimit = require('express-rate-limit');

const limiter = new RateLimit({
  windowMs: 15*60*1000,
  max: 500
});

var ProcessDebug = false;

if ( process.argv[2] == "d" || process.argv[2] == "debug" ) {
	ProcessDebug = true;
	console.log("Debug mode enabled.");
};

app.use(limiter);
app.use(express.static(path.join(__dirname, 'build')));

function tellJoke() {
    const jokes = ["Two guys are busted stealing a calender. The both got 6 months", "Who knows about math and science and is always close by? An engi-near!", "What is a cats favorite website? Reddot.com", "Why did the woman fall into the well? She couldn't see that well.", "Why didn't the chicken cross the road? Because It was eggshausted."];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return randomJoke;
}

// TODO: Make a more secure way of logging in to the API

app.get('/api/v1', (req, res) => {
    if ( req.headers.username == "wantyapps" && req.headers.password == "password") {
	if ( ProcessDebug == true ) {
		console.log("API: Success");
	};
	if ( req.headers.action == "joke" ) {
	    res.send({"success": true, "error": false, "joke": tellJoke()});
	} else {
	    res.send({"success": true, "error": false});
	};
    } else {
        res.send({"success": false, "error": "Username or password incorrect"});
	if ( ProcessDebug == true ) {
		console.log("API: Fail");
	};
    };
});

app.get('/api/v1/doc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api/doc.html'));
});

app.get('/api/v1/doc.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api/doc.css'));
});

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});

app.listen(80, () => { console.log('App is listening on port 80'); });
