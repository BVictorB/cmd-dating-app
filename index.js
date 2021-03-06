/* eslint-disable no-undef */
/* global require */
// The line above is to get rid of an error that ESLint gives when using require.

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const MongoClient = require('mongodb').MongoClient;
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'static/uploads');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '.jpg');
	}
});
const upload = multer({
	storage: storage
});

const app = express();
const urlencodedParser = bodyParser.urlencoded({
	extended: false
});

const port = 1900;
const url = process.env.DB_URL;
const dbname = process.env.DB_NAME;
const sessionSecret = process.env.SESSION_SECRET;
const sessionID = 'sessionID';
const store = new MongoDBStore({
	uri: url,
	collection: 'sessions'
});
let db = null;
let users = null;

store.on('error', (err) => {
	console.log('Session MongoDB error:' + err);
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

MongoClient.connect(url, (err, client) => {
	if (err) {
		console.log('MongoDB Error:' + err);
	} else {
		db = client.db(dbname);
		users = db.collection('users');
	}
});

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
	if (!req.session.sessionID) {
		res.redirect('/login');
	} else {
		res.redirect('/profile');
	}
});

app.get('/login', userRedirectProfile, (req, res) => {
	res.render('partials/login/login', {
		title: 'Login page'
	});
});

app.post('/login', urlencodedParser, (req, res) => {
	if (req.body.loginEmail && req.body.loginPassword) {
		users.findOne({
			email: req.body.loginEmail.toLowerCase()
		}, (err, user) => {
			if (err) {
				console.log('MongoDB Error:' + err);
			}
			if (user && user.password === req.body.loginPassword) {
				req.session.sessionID = user._id;
				res.redirect('/profile');
			} else {
				res.render('partials/login/login', {
					data: req.body
				});
			}
		});
	} else {
		res.render('partials/login/login', {
			data: req.body
		});
	}
});

app.post('/signup', urlencodedParser, (req, res) => {
	users.findOne({
		username: req.body.signupUser
	}, (err, user) => {
		if (err) {
			console.log('MongoDB Error:' + err);
		}
		if (user) {
			res.render('partials/login/login', {
				data: req.body
			});
		} else {
			const user = {
				username: req.body.signupUser,
				email: req.body.signupEmail.toLowerCase(),
				password: req.body.signupPassword,
				description: '',
				age: '',
				location: '',
				avatar: ''
			};

			users.insert([user], (err) => {
				if (err) {
					console.log('MongoDB Error:' + err);
				} else {
					res.render('partials/login/signup-completed', {
						data: req.body
					});
				}
			});
		}
	});
});

app.get('/profile', userRedirectLogin, (req, res) => {
	users.findOne({
		_id: req.session.sessionID
	}, (err, user) => {
		if (err) {
			console.log('MongoDB Error:' + err);
		}
		if (user) {
			res.render('partials/profile/profile', {
				'userInfo': user,
				title: 'Profile page'
			});
		} else {
			console.log('Error: client ID could not been found!');
		}
	});
});

app.post('/profile', upload.single('editImage'), urlencodedParser, (req, res) => {
	users.findOne({
		_id: req.session.sessionID
	}, (err, user) => {
		if (err) {
			console.log('MongoDB Error:' + err);
		}
		if (req.body.editUser != user.username) {
			users.findOne({
				username: req.body.editUser
			}, (err, username) => {
				if (err) {
					console.log('MongoDB Error:' + err);
				}
				if (username) {
					console.log('name taken');
					res.render('partials/profile/profile', {
						'userInfo': user,
						data: req.body
					});
				} else if (req.file){
					const img = 'uploads/' + req.file.path.split('/').pop();
					users.updateMany({
						_id: req.session.sessionID
					}, {
						$set: {
							'username': req.body.editUser,
							'age': req.body.editAge,
							'location': req.body.editLocation,
							'description': req.body.editDescription,
							'avatar': img
						}
					});
					res.redirect('/login');
				} else {
					users.updateMany({
						_id: req.session.sessionID
					}, {
						$set: {
							'username': req.body.editUser,
							'age': req.body.editAge,
							'location': req.body.editLocation,
							'description': req.body.editDescription
						}
					});
					res.redirect('/login');
				}
			});
		} else if (req.file){
			const img = 'uploads/' + req.file.path.split('/').pop();
			users.updateMany({
				_id: req.session.sessionID
			}, {
				$set: {
					'age': req.body.editAge,
					'location': req.body.editLocation,
					'description': req.body.editDescription,
					'avatar': img
				}
			});
			res.redirect('/login');
		} else {
			users.updateMany({
				_id: req.session.sessionID
			}, {
				$set: {
					'age': req.body.editAge,
					'location': req.body.editLocation,
					'description': req.body.editDescription
				}
			});
			res.redirect('/login');
		}

	});
});

app.get('/remove', urlencodedParser, (req, res) => {
	res.render('partials/remove/remove');
});

app.post('/remove', urlencodedParser, (req, res) => {
	users.findOne({
		_id: req.session.sessionID
	}, (err, user) => {
		if (err) {
			console.log('MongoDB Error:' + err);
		}
		if (user) {
			if (req.body.removePassword === user.password) {
				users.deleteOne({
					'_id': req.session.sessionID
				});
				req.session.destroy((err) => {
					if (err) {
						console.log('Error deleting user:' + err);
					}

					res.clearCookie(sessionID);
					res.redirect('/login');
				});
			} else {
				console.log('password incorrect');
				res.render('partials/remove/remove', {
					data: 'The entered password is incorrect.'
				});
			}

		} else {
			res.redirect('/');
		}
	});
});

app.post('/logout', userRedirectLogin, (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.redirect('/profile');
		}

		res.clearCookie(sessionID);
		res.redirect('/login');
	});
});

//The code below this line will not be used in the final product

// app.get('*', (req, res) => {
// 	res.redirect('/');
// });

app.get('/users', (req, res) => {
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
});