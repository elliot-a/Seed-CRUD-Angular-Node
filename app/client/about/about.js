var AboutController = require('./about-controller');

// Declare the module - this has lowercase leading letter as it is a essential a package or 'wrapper' for angular elements
var about = angular.module('app.about', []);

about.controller('AboutController', AboutController);