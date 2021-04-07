const express = require('express');
const path = require('path');
const app = express();
const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
  windowMs: 1*60*1000,
  max: 5
});

app.use(limiter)
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/v1', (req, res) => {
    if ( req.headers.username == "wantyapps", req.headers.password == "password") {
        res.send({
            "success": true,
            "error": false
        });
    } else {
        res.send({
            "success": false,
            "error": "Username or password incorrect"
        });
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

app.listen(80, () => { console.log('App is listening on port 80') });