/* global require */
// The line above is to get rid of an error that ESLint gives when using require.

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
// const fs = require('fs');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = 1900;

app.listen(port, function () {
	console.log('Server running!');
});

app.engine('hbs', hbs({
	extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.render('partials/login/login.hbs');
});

app.post('/signup', urlencodedParser, function (req, res) {
	res.render('partials/login/signup-completed', {data: req.body});
});