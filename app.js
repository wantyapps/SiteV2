const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const RateLimit = require('express-rate-limit');

const limiter = new RateLimit({
	windowMs: 15*60*1000,
	max: 500
});

var ProcessDebug = false; // For future implementations

if ( process.argv[2] == "d" || process.argv[2] == "debug" ) {
	ProcessDebug = true;
	console.log("Debug mode enabled.");
};

app.use(limiter);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/v1/doc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api/doc.html'));
});

app.get('/api/v1/doc.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/api/doc.css'));
});

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});

module.exports = app;