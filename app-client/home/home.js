var HomeController = require('./home-controller');

// Declare the module - this has lowercase leading letter as it is a essential a package or 'wrapper' for angular elements
var home = angular.module('app.home', []);

home.controller('HomeController', HomeController);