(function(){
  angular.module('NALP')
    .factory('plan_fac', plan_fac)

    plan_fac.$inject = ['$http'];

    function plan_fac($http) {
      var api = '/plans/';
      var service = {
        createPlan: createPlan,
        auto_suggest: auto_suggest,
        show: show
      }
      function createPlan(id, data) {
        return $http.post(api + id, data);
      }
      function auto_suggest(data) {
        return $http.post('/yelpapi', data);
      }
      function show(id) {
        return $http.get(api + id);
      }
      return service;
    }
})()