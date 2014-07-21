var APIConnectConfigService = require('./api-connect-config-service');
var APIConnectService = require('./api-connect-service');

// Declare the module.
var apiConnect = angular.module('app.components.apiConnect', []);

apiConnect.factory('APIConnectService', APIConnectService);
apiConnect.factory('APIConnectConfigService', APIConnectConfigService);