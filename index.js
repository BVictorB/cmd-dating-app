const camelCase = require('camelcase');
console.log(camelCase('this-is-camelcase'));

const express = require('express');
const app = express();
const port = 1900;

app.use('/static', express.static('static'));

app.get('/', home);

function home(req, res) {
    res.send('<h1>TEST!</h1>\n');
}

app.listen(port, function() {
    console.log('Server running!');
});