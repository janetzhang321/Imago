angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('index', {
        abstract: true,
        templateUrl: 'templates/sideNav.html',
        controller: 'sideNavCtrl'
      })

      .state('tabsController', {
        parent: 'index',
        url: '/tabs',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('tabsController.imagoMap', {
        url: '/map',
        views: {
          'tab1': {
            templateUrl: 'templates/imagoMap.html',
            controller: 'imagoMapCtrl'
          }
        }
      })

      .state('tabsController.leaderboard', {
        url: '/leaderboard',
        views: {
          'tab2': {
            templateUrl: 'templates/leaderboard.html',
            controller: 'leaderboardCtrl'
          }
        }
      })

      .state('tabsController.bucketList', {
        url: '/bucketList',
        views: {
          'tab3': {
            templateUrl: 'templates/bucketList.html',
            controller: 'bucketListCtrl'
          }
        }
      })

      .state('login', {
        parent: 'index',
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('profile', {
        parent: 'index',
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      })

      .state('about', {
        parent: 'index',
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })

      .state('rewards', {
        parent: 'index',
        url: '/rewards',
        templateUrl: 'templates/rewards.html',
        controller: 'rewardsCtrl'
      })

      .state('points', {
        parent: 'index',
        url: '/points',
        templateUrl: 'templates/points.html',
        controller: 'pointsCtrl'
      })

      .state('camera', {
        url: '/camera',
        controller: 'pictureCtrl'
      })
    
      .state('mmuseumm', {
        parent: 'index',
        url: '/mmuseumm',
        templateUrl: 'templates/MmuseummDet.html',
        controller: 'detailCtrl'
      })

    $urlRouterProvider.otherwise('/')



  });