/* global require */
// The line above is to get rid of an error that ESLint gives when using require.

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const MongoClient = require('mongodb').MongoClient;
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});

const port = 1900;
// eslint-disable-next-line no-undef
const url = process.env.MONGO_URL;
const sessionID = 'sessionID';
const sessionSecret = '4T-8*9gMbvMUXpbYdofXkGf3';
const store = new MongoDBStore({
	uri: url,
	collection: 'sessions'
});

store.on('error', (error) => {
	console.log('Session MongoDB error:' + error);
});

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

app.use(session({
	name: sessionID,
	secret: sessionSecret,
	store: store,
	resave: false,
	saveUninitialized: false,
	cookie: {
		sameSite: true,
		secure: false
	}
}));

const userRedirectLogin = (req, res, next) => {
	if (!req.session.sessionID) {
		res.redirect('/login');
	} else {
		next();
	}
};

const userRedirectProfile = (req, res, next) => {
	if (req.session.sessionID) {
		res.redirect('/profile');
	} else {
		next();
	}
};

app.get('/', (req, res) => {
	const { sessionID } = req.session;

	if (!sessionID) {
		res.redirect('/login');
		console.log(sessionID);
	} else {
		res.redirect('/profile');
		console.log(sessionID);
	}

	// res.render('partials/home/home');
});

app.get('/login', userRedirectProfile, (req, res) => {
	res.render('partials/login/login');
});

app.get('/profile', userRedirectLogin, (req, res) => {
	// res.render('partials/profile/profile');

	MongoClient.connect(url, (err, client) => {
		const db = client.db('datingsite');

		if (err) {
			console.log('MongoDB Error:' + err);
		} else {
			console.log('MongoDB Connnected!');

			const users = db.collection('users');

			users.findOne({
				_id: req.session.sessionID
			}, (err, user) => {
				if (err) {
					console.log('MongoDB Error:' + err);
				}
				if (user) {
					console.log('id found');
					console.log(user.username);

					res.render('partials/profile/profile', {
						'userInfo': user
					});
				} else {
					console.log('could not find id');
				}
			});
		}
	});

});

app.post('/logout', userRedirectLogin, (req, res) => {
	console.log('User has logged out');
	req.session.destroy((err) => {
		if (err) {
			res.redirect('/profile');
		}

		res.clearCookie(sessionID);
		res.redirect('/login');
	});
});

// app.get('*', (req, res) => {
// 	res.redirect('/');
// });

app.post('/login', urlencodedParser, (req, res) => {
	if (req.body.loginEmail && req.body.loginPassword) {
		MongoClient.connect(url, (err, client) => {
			const db = client.db('datingsite');
	
			if (err) {
				console.log('MongoDB Error:' + err);
			} else {
				console.log('MongoDB Connnected!');
	
				const users = db.collection('users');
	
				users.findOne({
					email: req.body.loginEmail
				}, (err, user) => {
					if (err) {
						console.log('MongoDB Error:' + err);
					}
					if (user && user.password === req.body.loginPassword) {
						console.log('email and password correct');
						req.session.sessionID = user._id;
						res.redirect('/profile');
					} else {
						console.log('email and/or password incorrect');
					}
				});
			}
		});
	} else {
		console.log('Please fill in your email and password');
	}
});

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

	console.log(req.session);
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