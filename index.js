const camelCase = require('camelcase');
const express = require('express');

console.log(camelCase('this-is-camelcase'));

app.use('/static', express.static('public'));

express()
    .get('/', onhome)
    .listen(1900);

function onhome(req, res) {
    res.send('<h1>TEST!</h1>\n');
}