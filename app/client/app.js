var angular = require('angular');
// As Angular Route is not available as an 'offical' NPM module we use this plug-in
require('angular-router-browserify')(angular)

var pageNav = require('./page-nav/page-nav');


// Initiate the app and pass in required modules
var app = angular.module('app', [ 'ngRoute',
                                  'app.pageNav'
]);


/*
// Setup up routing
app.config(function($routeProvider){
  $routeProvider.when('/', {templateUrl:'./view.html', controller:'MainController'})
  $routeProvider.when('/', {templateUrl:'./view2.html', controller:'NavController'});
});



// Our main controller for our application
app.controller('MainController', function(){

  console.log("MainController initialized");

});


// Our main controller for our application
app.controller('NavController', function(){

  console.log("NavController initialized");

});

*/


