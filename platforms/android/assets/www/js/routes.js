angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('index', {
        abstract: true,
        templateUrl: 'templates/sideNav.html',
        controller: 'sideNavCtrl',
        resolve: {
          currentAuth: ['Auth', function (Auth) {
            return Auth.$requireSignIn();
          }],
          currentUser: ['currentAuth', 'Users', function (currentAuth, Users) {
            return Users.getCurrent();
          }],
          allUsers: ['currentAuth', 'Users', function (currentAuth, Users) {
            return Users.getAll();
          }]
        }
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
        url: '/points/:imagoName',
        templateUrl: 'templates/points.html',
        controller: 'pointsCtrl'
      })

      .state('camera', {
        parent: 'index',
        controller: 'cameraCtrl',
        params: { imagoName: null }
      })

      .state('detail', {
        parent: 'index',
        url: '/detail/:imagoName',
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      })
      
      .state('buildings', {
        parent: 'index',
        url: '/templates/buildings',
        templateUrl: 'templates/buildings.html',
        controller: 'buildingsCtrl'
      })
      
      .state('landmarks', {
        parent: 'index',
        url: '/templates/landmarks',
        templateUrl: 'templates/landmarks.html',
        controller: 'landmarksCtrl'
      })
      
      .state('businesses', {
        parent: 'index',
        url: '/templates/businesses',
        templateUrl: 'templates/businesses.html',
        controller: 'businessesCtrl'
      })

    $urlRouterProvider.otherwise('/')



  });