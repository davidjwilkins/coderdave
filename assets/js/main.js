angular.module('app',['ngResource','ngRoute','ui.bootstrap'])
	.config(function ($routeProvider, $locationProvider) {
    	$routeProvider
      		.when('/', {
        		templateUrl: 'views/home.html',
        		controller: 'HomeCtrl'
      		})
      		.when('/resume', {
        		templateUrl: 'views/resume.html',
        		controller: 'ResumeCtrl'
      		})
      		.when('/code', {
        		templateUrl: 'views/code.html',
        		controller: 'CodeCtrl'
      		})
      		.when('/portfolio', {
        		templateUrl: 'views/portfolio.html',
        		controller: 'PortfolioCtrl'
      		})
      		.otherwise({
        		redirectTo: '/'
      		});  
      		$locationProvider.html5Mode(true);
  	})
  	.controller('HomeCtrl', ['$scope', function($scope) {
  	}])
  	.controller('NavbarCtrl', ['$scope', function($scope) {
  		$scope.isCollapsed = true;
  		$scope.$on("$routeChangeSuccess", function () {
  			$scope.isCollapsed = true;
  		});
  	}])
  	.controller('CodeCtrl', ['$scope', function($scope) {
  	}])
  	.controller('PortfolioCtrl', ['$scope', function($scope) {
  		$scope.websites = [
  			{title: "TuneWiki", url: "http://www.tunewiki.com", image: "/assets/img/tunewiki.png"},
  			{title: "XYZ.com", url: "http://xyz.com", image: "/assets/img/xyz.png"},
  			{title: "Buxton Style", url: "http://www.buxton.co", image: "/assets/img/buxton.png"},
  		]
  	}])
  	.controller('ResumeCtrl', ['$scope', function($scope) {
  		$scope.jobs = [
  			{ company: "ConsumerTrack",
			  title: "Contractor",
			  when: "2014",
			  description: "Built an administration panel with AngularJS and Zend Framework to allow the sales team\
			  				to do tasks the previously required changes to the codebase.  Modified old code base to \
			  				be data-driven.  Built a reporting section to allow management to have better insight into\
			  				customers.",
			  tags: ["Zend Framework", "AngularJS", "Responsive Design", "Bootstrap 3", "MySQL", "Git", "RESTful API"]
			},
  			{ company: "Cyber2Media",
			  title: "Lead Backend Developer",
			  when: "2012 - 2013",
			  description: "Migrated multiple (100+) sites to Amazon EC2 / RDS / EC2 / SQS.  Created a one-click deployment tool\
			   				that would stage a git branch, and when ready, would allow you to send a percentage of \
			   				live traffic to it ensure conversion rates were not negatively impacted. Integrated multiple \
			   				vendor's APIs into our codebase.",
			  tags: ["Zend Framework", "jQuery", "Amazon EC2", "Amazon RDS", "Amazon EC2", "Amazon SQS", "Git"]
			},
			{ company: "TuneWiki",
			  title: "Web Developer",
			  when: "2010-2012",
			  description: "Helped to create and maintain features of the TuneWiki desktop and mobile\
			  				web sites, as well as their Spotify app. Helped develop an API used by our\
			  				web, Spotify, and native mobile apps.  Integrated the Spotify API into the application.",
			  tags: ["FuelPHP", "Spotify", "Javascript"]
			}
  		];
  	}])
  	.directive('bsActiveLink', ['$location', function($location) {
	  	return {
	  		restrict: 'A',
	      	replace: false,
	      	link: function(scope, elem) {
	      		
	      		scope.$on("$routeChangeSuccess", function () {
	      			var selectors = ['li > [href="#' + $location.path() + '"]',
	      							 'li > [href="/#' + $location.path() + '"]', //html5: false
	      						 	 'li > [href="' + $location.path() + '"]']; //html5: true
	      			$(elem).find(selectors.join(',')) //find the matching link
	      				   .parent('li').addClass('active') //add active class to the matching element
	      				   .siblings('li').removeClass('active'); //remove it from the sibling elements
	      		});
	      	}
	      }
	 }])
  	.directive('prettyprint', function() {
	    return {
	        restrict: 'C',
	        link: function postLink(scope, element, attrs) {
	              element.html(prettyPrintOne(element.html()));
	        }
	    };
	});

