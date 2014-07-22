
// ------------------------- Settings ---------------------------------

// CHANGE THIS URL TO REFLECT THE LOCATION OF YOUR CLIENT
const CLIENT_URL = 'http://pixely.dev';

// --------------------------------------------------------------------




// Create a new server instance
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


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


// Sample Data
var quotes = [
  { author : 'Audrey Hepburn',        text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney',           text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown',               text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch',   text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];


// Get all quotes
app.get('/quote', function(req, res) {
  res.json(quotes);
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