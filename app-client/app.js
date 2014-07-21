var angular = require('angular');
require('angular-module-resource');
// As Angular Route is not available as an 'offical' NPM module we use this plug-in
require('angular-router-browserify')(angular)


// Require ALL our custom modules - this initializes them ready for injection into our app.
var pageNav     = require('./page-nav/page-nav');
var home        = require('./home/home');
var about       = require('./about/about');
var apiConnect  = require('./components/api-connect/api-connect');
var prettyList  = require('./components/pretty-list/pretty-list');


// Initiate the app and pass in ALL the modules
// ALL the modules are injected into the app so we can access any element of a module from anywhere else in the application.
var app = angular.module('app', [ 'ngRoute',
                                  'ngResource',
                                  'app.pageNav',
                                  'app.home',
                                  'app.about',
                                  'app.components.apiConnect',
                                  'app.components.prettyList'
]);


// Setup up our application routing
app.config(function($routeProvider){
  $routeProvider
    .when('/home', {templateUrl:'./home/home.html', controller:'HomeController'})
    .when('/about', {templateUrl:'./about/about.html', controller:'AboutController'})
    .otherwise({redirectTo: '/home'});
});
