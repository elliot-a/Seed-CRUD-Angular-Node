var APIConnectService = function($resource, config){

  return {
    quote     :  $resource(config.baseURL+"quote/:id")
  }

};

APIConnectService['$inject'] = ['$resource', 'APIConnectConfigService'];

module.exports = APIConnectService;