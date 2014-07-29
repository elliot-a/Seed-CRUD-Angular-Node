
// ------------------------- Settings ---------------------------------

// CHANGE THIS URL TO REFLECT THE DOMAIN OF YOUR CLIENT -
// The setting below will probably be correct if using WebStorm and open your client by clicking 'open in browser on dist/index.html'
const CLIENT_URL = 'http://localhost:63342';

// --------------------------------------------------------------------


// Create a new server instance
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

// Add Database connectivity libs
var db          = require('monk')('localhost:27017/quotesDatabase');


// Get the quotes collection
var quotes = db.get("quotes");

// Add body parsing
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) );


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

  var promise = quotes.count({});

  promise.on('complete', function(err, count){

    var randomIndex = Math.floor( (Math.random() * count) );

    quotes.find( {}, { limit:-1, skip:randomIndex }, (function (err, docs) {
      if(err) return console.log(err);
      res.json(docs);
    }));

  });

});



// Delete a quote by ID
app.delete('/quote/:id', function(req, res) {

  console.log('deleting : ' + req.params.id);

  var promise = quotes.remove({_id:req.params.id});

  promise.on('error', function(err){
    console.log(err);
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  });

  promise.on('success', function(doc){});

  promise.on('complete', function(err, doc){
    console.log(err);
    console.log(doc);
    res.json(true);
  });


});


// Edit a specific quote
app.post('/quote/:id', function(req, res) {

  console.log('editing : ' + req.params.id);

  if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text') ) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newQuoteData = {
    author : req.body.author,
    text : req.body.text
  };

  var promise = quotes.updateById(req.params.id, newQuoteData);

  promise.on('complete', function(err, doc){
      res.json(true);
    }
  );

  promise.on('error', function(err){
      console.log(err);
      res.statusCode = 404;
      return res.send('Error 404: Quote not updated');
    }
  );

});

/*
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
*/


// Listen for connections
app.listen(process.env.PORT || 8000);