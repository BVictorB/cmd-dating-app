/* global require */
// The line above is to get rid of an error that ESLint gives when using require.

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
// const fs = require('fs');

const uri = 'mongodb+srv://bvictorb:victor5@cluster0-wtktd.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
  })
  .then(() => {
	console.log('MongoDB Connected!');
  })
  .catch(err => console.log(err));

//Going to switch this all up and replace it with the mongodb package setup to simplify my project for now.

const app = express();
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});

const port = 1900;

app
	.set('view engine', 'hbs')
	.set('views', 'src/views')
	.engine('hbs', hbs({
		extname: 'hbs'
	}))
	.use(express.static('static'))
	.listen(port, () => {
		console.log('Server running!');
	});

app.get('/', (req, res) => {
	res.render('partials/login/login.hbs');
});

app.get('*', (req, res) => {
	res.redirect('/');
});

app.post('/signup', urlencodedParser, (req, res) => {
	res.render('partials/login/signup-completed', {
		data: req.body
	});
});