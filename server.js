const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/dist/spaFaxstone/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist/spaFaxstone')));

const fs = require('fs');

let rawdata = fs.readFileSync('mockdata.json');
let building = JSON.parse(rawdata);

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/api/offerings', function (req, res) {
    return res.send(building);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/spaFaxstone', 'index.html'));
});

app.listen(port);
