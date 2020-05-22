const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const port = 1900;

app.listen(port, function() {
	console.log('Server running!');
});

app.engine('hbs', hbs({ extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.render('partials/login/login.hbs');
} );
