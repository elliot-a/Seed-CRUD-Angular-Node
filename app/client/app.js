var angular = require('angular');
// As Angular Route is not available as an 'offical' NPM module we use this plug-in
require('angular-router-browserify')(angular)

var pageNav = require('./page-nav/page-nav');
var home = require('./home/home');
var about = require('./about/about');


// Initiate the app and pass in required modules
var app = angular.module('app', [ 'ngRoute',
                                  'app.pageNav',
                                  'app.home',
                                  'app.about'
]);


// Setup up routing
app.config(function($routeProvider){
  $routeProvider
    .when('/home', {templateUrl:'./home/home.html', controller:'HomeController'})
    .when('/about', {templateUrl:'./about/about.html', controller:'AboutController'})
    .otherwise({redirectTo: '/'});
});
