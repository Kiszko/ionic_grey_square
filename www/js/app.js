angular.module('starter', [
	'ionic', 
	'ngCordova', 
	'run',
	'services', 
	'controllers', 
	'fcsa-number'
])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider)
{
	// -------------------------------------------------
	// Config

	$ionicConfigProvider.backButton.text('');
	$ionicConfigProvider.backButton.previousTitleText(false);

	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.tabs.position('bottom');
	$ionicConfigProvider.tabs.style('standard');

	// -------------------------------------------------
	// States

	$stateProvider
	.state('app', {
		url: '/app',
		abstract: true,
		controller: 'AppCtrl',
		templateUrl: 'templates/global/menu.html'
	})

	.state('app.home', {
		url: '/home',
		views: {
		  'tab-home': {
		  	controller: 'HomeCtrl',
		    templateUrl: 'templates/home/index.html'
		  }
		}
	})

	$urlRouterProvider.otherwise('/app/home');
})
