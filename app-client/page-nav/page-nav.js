var PageNavController = require('./page-nav-controller');
var PageNavDirective = require('./page-nav-directive');
var PageNavDataService = require('./page-nav-data-service');

// Declare the module.
var pageNav = angular.module('app.pageNav', []);

// Add all the angular elements to the module (note the lowercase 'p' on the directive)
pageNav.directive('pageNavDirective', PageNavDirective);
pageNav.controller('PageNavController', PageNavController);
pageNav.factory('PageNavDataService', PageNavDataService);