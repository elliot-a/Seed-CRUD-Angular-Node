var PrettyListDirective = require('./pretty-list-directive');

// Declare the module.
var prettyList = angular.module('app.components.prettyList', []);

prettyList.directive('PrettyListDirective', PrettyListDirective);
