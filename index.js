require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('./data/mongodb');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`);
});
