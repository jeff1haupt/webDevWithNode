const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');
const app = express();

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', handlers.home);
app.get('/about', handlers.about);

// custom 404 and 500 pages
app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen( port, () => console.log(
    `Express started on http://localhost:${port}: ` +
    `press Ctrl-C to terminate.`
))