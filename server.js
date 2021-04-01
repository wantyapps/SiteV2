const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/idk', (req, res) => {
    res.send('yo');
})

app.listen(80, () => { console.log('App is listening on port 80') });