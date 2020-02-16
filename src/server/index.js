const port = 3000;

const path = require('path'); // eslint-disable-line no-unused-vars
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('src/client'));

console.log(__dirname);

app.get('/', function(req, res) {
  res.sendFile('/client/views/index.html', {root: __dirname + '/..'});
});

// designates what port the app will listen to for incoming requests
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});
