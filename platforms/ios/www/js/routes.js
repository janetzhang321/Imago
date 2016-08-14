angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController', {
    url: '/Tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('welcome', {
    url: '/StartPage',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('signIn', {
    url: '/SignIn',
    templateUrl: 'templates/signIn.html',
//    controller: 'signInCtrl'
    controller: 'GeoCtrl'
  })

  .state('signUp', {
    url: '/SignUp',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('map', {
    url: '/Map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('profile', {
    url: '/Profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('leaderboard', {
    url: '/Leaderboard',
    templateUrl: 'templates/leaderboard.html',
    controller: 'leaderboardCtrl'
  })

  .state('camera', {
    url: '/Camera',
    //templateUrl: 'templates/camera.html',
//    controller: 'cameraCtrl'
      controller: 'PictureCtrl'
  })

  .state('points', {
    url: '/Points',
    templateUrl: 'templates/points.html',
    controller: 'pointsCtrl'
  })

  .state('details', {
    url: '/Details',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

  .state('rewards', {
    url: '/Rewards',
    templateUrl: 'templates/rewards.html',
    controller: 'rewardsCtrl'
  })

  .state('friends', {
    url: '/Friends',
    templateUrl: 'templates/friends.html',
    controller: 'friendsCtrl'
  })

  .state('addToBucketList', {
    url: '/AddToBucketList',
    templateUrl: 'templates/addToBucketList.html',
    controller: 'addToBucketListCtrl'
  })

  .state('share', {
    url: '/Share',
    templateUrl: 'templates/share.html',
    controller: 'shareCtrl'
  })

  .state('friend1', {
    url: '/JennyXu',
    templateUrl: 'templates/friend1.html',
    controller: 'friend1Ctrl'
  })

  .state('friend2', {
    url: '/AliceJiang',
    templateUrl: 'templates/friend2.html',
    controller: 'friend2Ctrl'
  })

  .state('friend3', {
    url: '/FidelOsorio',
    templateUrl: 'templates/friend3.html',
    controller: 'friend3Ctrl'
  })

  .state('friend4', {
    url: '/DavidSilva',
    templateUrl: 'templates/friend4.html',
    controller: 'friend4Ctrl'
  })

$urlRouterProvider.otherwise('/StartPage')

  

});