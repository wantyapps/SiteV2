const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'build')});
});

app.listen(80, () => { console.log('App is listening on port 80') });