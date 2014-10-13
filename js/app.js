'use strict';

angular.module('resume', ['ngResource'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/experience', {templateUrl: 'partials/experience.html', controller: 'ExperienceCtrl'});
  $routeProvider.when('/pets', {templateUrl: 'partials/pets.html', controller: 'PetsCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('MenuCtrl', function($scope, $location) {
  $scope.items = [
    {value: '/home', label: 'Home'},
    {value: '/experience', label: 'Experience'},
    {value: '/pets', label: 'Pet Projects'}
  ];

  $scope.getClass = function(item) {
    return $location.path() == item.value ? "pure-menu-selected" : "pure-menu-non-selected";
  }
})


.factory('$octo', ['$resource', '$q', function($resource, $q) {
  var res = $resource('https://api.github.com/repos/:user/:repo')

  return function(user, repo) {
    return {
      stargazers: function() {
        var deferred = $q.defer()
        res.get({user: user, repo: repo}, function(data) {
          deferred.resolve({
            count: data.stargazers_count,
            link: 'https://github.com/' + user + '/' + repo + '/stargazers'
          });
        });

        return deferred.promise;
      },

      link: function() {

      }
    }
  }
}])

.controller('PetsCtrl', function($scope, $octo) {
  mixpanel.track("Pets");
  $scope.projects = [
    {
      who: 'n3-charts',
      stargazers: $octo('n3-charts', 'line-chart').stargazers(),
      what: [
        'A 2-dimensional data visualization library for AngularJS.',
        '95% average test coverage rate, plus visual regression CI.',
        'Built on top of D3.js.'
      ],
      demo: 'http://n3-charts.github.io/line-chart',
      github: 'https://github.com/n3-charts/line-chart',
      image: 'images/n3-charts.png'
    },
    {
      who: 'cammy',
      stargazers: $octo('lorem--ipsum', 'cammy').stargazers(),
      what: [
        'A proof-of-concept for 3-dimensional visualizations using D3.js and Canvas.',
        'Uses a simple orthogonal projection camera.',
        'Oddly satisfying.'
      ],
      demo: 'http://lorem--ipsum.github.io/cammy',
      github: 'https://github.com/lorem--ipsum/cammy',
      image: 'images/cammy.png'
    },
    {
      who: 'percival',
      stargazers: $octo('lorem--ipsum', 'percival').stargazers(),
      what: [
        'An Abstract Syntax Tree editor for AngularJS.',
        'Well-tested, rock-solid and very configurable.',
        'Hard to write, probably hard to read.'
      ],
      demo: 'http://lorem--ipsum.github.io/percival',
      github: 'https://github.com/lorem--ipsum/percival',
      image: 'images/percival.png'
    },
    {
      who: 'APOJOP',
      stargazers: $octo('lorem--ipsum', 'apojop').stargazers(),
      what: [
        'A Plain old JavaScript Objects Pretty-printer for AngularJS.',
        'Well-tested and versatile, most likely prod-ready.',
        'Truly awesome, sadly not editable.'
      ],
      demo: 'http://lorem--ipsum.github.io/apojop',
      github: 'https://github.com/lorem--ipsum/apojop',
      image: 'images/apojop.png'
    },
    {
      who: 'platypus',
      stargazers: $octo('lorem--ipsum', 'platypus').stargazers(),
      what: [
        'Converts plain text expressions to ASTs using a micro-grammar parser.',
        'Even the term "micro-grammar" is sweet.',
        'Pluggable into Percival.'
      ],
      demo: 'http://lorem--ipsum.github.io/platypus',
      github: 'https://github.com/lorem--ipsum/platypus',
      image: 'images/platypus.png'
    },
    {
      who: 'minesweeper',
      stargazers: $octo('lorem--ipsum', 'mine-sweeper').stargazers(),
      what: [
        'The classic minesweeper built using AngularJS.',
        'With gorillas, cats, love, passion, adventure and much more !',
        'But mostly with a gorilla.'
      ],
      demo: 'http://lorem--ipsum.github.io/mine-sweeper',
      github: 'https://github.com/lorem--ipsum/mine-sweeper',
      image: 'images/minesweeper.png'
    }
  ];
})

.controller('ExperienceCtrl', function($scope) {
  mixpanel.track("Experience");
  $scope.experiences = [
    {
      what: 'Front-end engineer',
      when: 'since january 2014',
      how: 'Remotely working for an industry-leading SaaS startup based in San Francisco on the client-side layer of an exploratory analytics application. Also developing creative solutions for data visualization using D3.js (heck, this rocks).',
      tags: ['CoffeeScript', 'HTML', 'AngularJS', 'D3.js', 'Sass', 'LESS', 'Python', 'Bash']
    },
    {
      what: 'Front-end developer',
      when: 'from january 2011 to november 2013',
      how: "Built three versions of the graphical interface of a cellular networks (both railways and mobile) monitoring solution. I've successfully solved several data visualization issues in a creative, user-centric way : representing technical data linked to a phone call, for instance, which can not be achieved in a classical chart but must be friendlier than a regular grid.",
      tags: ['JavaScript', 'HTML', 'Qooxdoo', 'D3.js', 'CSS', 'LESS', 'Python', 'Flex', 'AngularJS']
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
      how: 'Degree from a generalist engineering school. Learned disciplins such as physics, thermodynamics, industrial electricity, automatisms, electronics...',
      tags: []
    }
  ];
})
;
