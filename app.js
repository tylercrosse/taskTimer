(function() {
  'use strict';

  angular
    .module('taskTimer', [])
    .config(['$locationProvider', AppConfig])
    .controller('MainController', MainController);

  function AppConfig($locationProvider) {
    $locationProvider.html5Mode(true);
  };

  // MainController.$inject = ['$interval'];
  function MainController($interval) {
    var vm = this;

    tick()
    $interval(tick, 1000);

    function tick() {
      vm.clock = Date.now()
      vm.timeRound = Math.floor(vm.clock / 1000)
      if ((vm.timeRound % 900) === 0) { // play sound every 15mins
        console.log(vm.clock);
        chime();
      }
    };
    function chime() {
      var sound = new Audio( 'chime.wav' );
      sound.play();
    };

  };
}());

//  900000 ms / 15min
// 3600000 ms / 1hr
