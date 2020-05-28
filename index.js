/* global require */
// The line above is to get rid of an error that ESLint gives when using require.

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});

const port = 1900;
// eslint-disable-next-line no-undef
const url = process.env.MONGO_URL;

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
	res.render('partials/login/login');
});

// app.get('*', (req, res) => {
// 	res.redirect('/');
// });

app.get('/users', (req, res) => {
	MongoClient.connect(url, (err, client) => {
		const db = client.db('datingsite');

		if (err) {
			console.log('MongoDB Error:' + err);
		} else {
			console.log('MongoDB Connected!');

			const users = db.collection('users');

			users.find({}).toArray((err, result) => {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.render('partials/users/userlist', {
						'userlist': result
					});
				} else {
					res.send('No data found');
				}
			});
			client.close();
		}
	});
});

app.post('/signup', urlencodedParser, (req, res) => {
	MongoClient.connect(url, (err, client) => {
		const db = client.db('datingsite');

		if (err) {
			console.log('MongoDB Error:' + err);
		} else {
			console.log('MongoDB Connnected!');

			const users = db.collection('users');

			users.findOne({
				username: req.body.signupUser
			}, (err, user) => {
				if (err) {
					console.log('MongoDB Error:' + err);
				}
				if (user) {
					console.log('Username is taken');
					console.log(req.body);
					res.render('partials/login/login', {
						data: req.body
					});
				} else {
					const user = {
						username: req.body.signupUser,
						email: req.body.signupEmail,
						password: req.body.signupPassword
					};

					users.insert([user], (err) => {
						if (err) {
							console.log('MongoDB Error:' + err);
						} else {
							console.log('User Registered!');

							res.render('partials/login/signup-completed', {
								data: req.body
							});
						}
						client.close();
					});
				}
			});
		}
	});

});