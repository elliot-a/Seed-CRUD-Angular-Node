
// ------------------------- Settings ---------------------------------

// CHANGE THIS URL TO REFLECT THE LOCATION OF YOUR CLIENT
const CLIENT_URL = 'http://pixely.dev';

// --------------------------------------------------------------------



// Create a new server instance
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

// Add Database connectivity libs
var db          = require('monk')('localhost:27017/quotesDatabase');


// Clear any old collections and create a new quotes collection
var quotes = db.get("quotes");

// print out contents of the quotes collection
quotes.find({}, {}, function (err, docs) {
  if(err) return console.log(err);
  console.log(docs);
});


// Add body parsing
app.use(bodyParser.json());


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', CLIENT_URL);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



// Get all quotes
app.get('/quote', function(req, res) {

  quotes.find({}, {}, function (err, docs) {
    if(err) return console.log(err);
    res.json(docs);
  });

});


// Get a random quote
app.get('/quote/random', function(req, res) {

  var randomIndex = Math.floor((Math.random() * quotes.length));
  res.json(quotes[randomIndex]);
});


// Get a quote by ID
app.get('/quote/:id', function(req, res) {

  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  var q = quotes[req.params.id];
  res.json(q);
});


// Delete a quote by ID
app.delete('/quote/:id', function(req, res) {

  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  quotes.splice(req.params.id, 1);
  res.json(true);
});


// Edit a specific quote
app.post('/quote/:id', function(req, res) {

  if(!req.params.hasOwnProperty('id') || !req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newQuoteData = {
    author : req.body.author,
    text : req.body.text
  };

  quotes[req.params.id] = newQuoteData;

  res.json(true);

});


// Add a new Quote
app.post('/quote/new', function(req, res) {

  if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newQuote = {
    author : req.body.author,
    text : req.body.text
  };

  quotes.push(newQuote);
  res.json(true);

});


// Listen for connections
app.listen(process.env.PORT || 8000);