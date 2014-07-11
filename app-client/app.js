var angular = require('angular');
require('angular-module-resource');
// As Angular Route is not available as an 'offical' NPM module we use this plug-in
require('angular-router-browserify')(angular)

// require all our custom modules
var pageNav     = require('./page-nav/page-nav');
var home        = require('./home/home');
var about       = require('./about/about');
var apiConnect  = require('./components/api-connect/api-connect');


// Initiate the app and pass in required modules
var app = angular.module('app', [ 'ngRoute',
                                  'ngResource',
                                  'app.pageNav',
                                  'app.home',
                                  'app.about',
                                  'app.components.apiConnect'
]);


// Setup up routing
app.config(function($routeProvider){
  $routeProvider
    .when('/home', {templateUrl:'./home/home.html', controller:'HomeController'})
    .when('/about', {templateUrl:'./about/about.html', controller:'AboutController'})
    .otherwise({redirectTo: '/home'});
});
