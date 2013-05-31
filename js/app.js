'use strict';


// Declare app level module which depends on filters, and services
angular.module('resume', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/experience', {templateUrl: 'partials/experience.html', controller: 'ExperienceCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('MenuCtrl', function($scope, $location) {
  $scope.items = [
    {value: '/home', label: 'Home'},
    {value: '/experience', label: 'Experience'}
  ];
  
  $scope.getClass = function(item) {
    return $location.path() == item.value ? "pure-menu-selected" : "pure-menu-non-selected";
  }
})

.controller('ContactCtrl', function($scope) {
  
})

.controller('ExperienceCtrl', function($scope) {
  $scope.experiences = [
    {
      what: 'Front-end developer',
      when: 'since january 2011',
      how: "Built three versions of the graphical interface of a cellular networks (both railways and mobile) monitoring solution. I've successfully solved several data visualization issues in a creative, user-centric way : representing technical data linked to a phone call, for instance, which can not be achieved in a classical chart but must be friendlier than a regular grid.",
      tags: ['JavaScript', 'HTML5', 'Qooxdoo', 'D3.js', 'CSS', 'LESS', 'Python', 'Flex', 'AngularJS']
    },
    {
      what: 'Flex developer',
      when: 'from 2008 to 2011',
      how: 'Build a three dimensional chart for mathematical data visualization. Mostly worked on a Matlab-like Rich Internet Application, and on internal tools such as an Air-based icon builder.',
      tags: ['Flex', 'ActionScript', 'XML', 'Flex Charts']
    },
    {
      what: "Engineer's degree",
      when: 'from 2003 to 2008',
      how: 'Degree from a generalist engineering school. Learned disciplins such as physics, thermodynamics, industrial electricy, automatisms, electronics...',
      tags: []
    }
  ];
})
;