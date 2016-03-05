(function() {
  'use strict';

  angular
    .module('taskTimer', [])
    .config(['$locationProvider', AppConfig])
    .controller('MainController', MainController);

  function AppConfig($locationProvider) {
    $locationProvider.html5Mode(true);
  };

  MainController.$inject = ['$scope'];
  function MainController($scope) {
    var vm = this;
  };
}());
