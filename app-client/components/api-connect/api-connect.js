var APIConnectService = require('./api-connect-service');

// Declare the module - this has lowercase leading letter as it is a essential a package or 'wrapper' for angular elements
var apiConnect = angular.module('app.components.apiConnect', []);

apiConnect.factory('APIConnectService', APIConnectService);
