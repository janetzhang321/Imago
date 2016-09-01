// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'ngCordovaOauth', 'firebase', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'app.factories'])

  .run(function ($ionicPlatform, $rootScope, $state, $ionicSideMenuDelegate, $cordovaGeolocation) {
    $ionicPlatform.ready(function () {
      // for side menu
      $rootScope.isMenuOpen = $ionicSideMenuDelegate.isOpen.bind($ionicSideMenuDelegate);

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // get location of device on app.run
      // returns a promise
      var watchOptions = {
        timeout: 10000,
        enableHighAccuracy: true // may cause errors if true
      };

      $rootScope.watchPosition = $cordovaGeolocation.watchPosition(watchOptions);

      // State change errors
      $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        // AUTH - We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
          $state.go('login');
        }
      });
    });
  });