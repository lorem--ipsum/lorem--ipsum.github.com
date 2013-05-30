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
    {value: '/experience', label: 'Experience'},
    {value: '/contact', label: 'Contact'}
  ];
  
  $scope.getClass = function(item) {
    if ($location.path() == item.value) {
      return "pure-menu-selected"
    } else {
      return ""
    }
  }
})

.controller('ExperienceCtrl', function() {
  
})
;