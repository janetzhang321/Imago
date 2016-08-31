angular.module('app.controllers', [])

  .controller('imagoMapCtrl', function ($scope, $cordovaGeolocation, $ionicPlatform, $rootScope, ImagoFactory, DistanceCalculationsFactory) {
    var div, map;

    $ionicPlatform.ready(function () {
      $scope.showCamera = true;

      div = document.getElementById("map_canvas");
      // Initialize the map view
      map = plugin.google.maps.Map.getMap(div, {
        controls: {
          compass: true,
          myLocationButton: true,
          zoom: true
        }
      });

      map.addEventListener(plugin.google.maps.event.MAP_READY, function () {
        //$rootScope.currentPosition.then(
        map.getMyLocation({ enableHighAccuracy: true }, function (position) {
          var currentPosition = new plugin.google.maps.LatLng(position.latLng.lat, position.latLng.lng);

          // camera view, zoom, and tilt
          map.animateCamera({
            target: currentPosition,
            tilt: 30,
            zoom: 12,
          });

          // place all Imagos/Markers on map
          ImagoFactory.getAllImagos(map);

          // add tracking circle
          map.addCircle({
            'center': currentPosition,
            'radius': 77, // in meters
            'strokeColor': '#159966',
            'strokeWidth': 2,
            'fillColor': '#23FFAA'
          }, function (circle) {

            // track location
            $rootScope.watchPosition.then(null,
              function (err) {
                // TODO: handleError
              },
              function (position) {
                var latestPosition = new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                circle.setCenter(latestPosition);

                // CHECK NEARBY IMAGOS
                var currentLocation = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }

                // IMAGOS NEARBY
                if (DistanceCalculationsFactory.isAnImagoNearby(currentLocation)) {
                  $scope.showCamera = true;
                } else {
                  $scope.showCamera = true;
                }
              });

          });
        });
      });
    });
  })

  .controller('sideNavCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$rootScope', '$ionicSideMenuDelegate',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicHistory, $state, $rootScope, $ionicSideMenuDelegate) {

      if ($state.current.name.indexOf('tabsController') !== -1) {
        $scope.showBackButton = false;
        $scope.showHamburgerMenu = true;
      } else {
        $scope.showHamburgerMenu = false;
        $scope.showBackButton = true;
      }

      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
          console.log('toState', toState)
          if (toState.name.indexOf('tabsController') !== -1) {
            $scope.showBackButton = false;
            $scope.showHamburgerMenu = true;
          } else {
            $scope.showHamburgerMenu = false;
            $scope.showBackButton = true;
          }
        })

      $scope.goBack = function () {
        $state.go('tabsController.imagoMap');
      }

      $scope.$watch(function () {
        return $ionicSideMenuDelegate.getOpenRatio();
      }, function (newValue, oldValue) {

        console.log('new', newValue)
        console.log('old', oldValue)

        if (newValue == 0) {
          $scope.hideLeft = true;
          $scope.hideRight = true;
        } else {
          if (newValue == 1) {
            $scope.hideLeft = false;
          } else {
            $scope.hideRight = false;
          }
        }
      });


    }])

  .controller('leaderboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('bucketListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('aboutCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicHistory) {

      $scope.goBack = function () {
        $ionicHistory.goBack();
      }


    }])


  .controller('pointsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])




  .controller('rewardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('pictureCtrl', function ($scope, $cordovaCamera, $ionicPlatform, $state, $timeout, $stateParams) {

    $ionicPlatform.ready(function () {

      document.addEventListener("deviceready", function () {

        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {

          // redirects to points page
          $state.go('points');

          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
        }, function (err) {
          // error
        });

      }, false);
    });
  })

  .controller('compassCtrl', function ($scope, $cordovaDeviceOrientation, $ionicPlatform) {

    $ionicPlatform.ready(function () {

      $cordovaDeviceOrientation.getCurrentHeading().then(function (result) {
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;

        $scope.magneticHeading = "magneticHeading: " + magneticHeading;
        $scope.trueHeading = "trueheading: " + trueHeading;
        $scope.accuracy = "accuracy: " + accuracy;
        $scope.timeStamp = "timeStamp: " + timeStamp;


        var options = {
          frequency: 3000,
        }

        var watch = $cordovaDeviceOrientation.watchHeading(options).then(
          null,
          function (error) {
            // An error occurred
          },
          function (result) {   // updates constantly (depending on frequency value)
            var magneticHeading = result.magneticHeading;
            var trueHeading = result.trueHeading;
            var accuracy = result.headingAccuracy;
            var timeStamp = result.timestamp;

            $scope.magneticHeading = "magneticHeading: " + magneticHeading;
            $scope.trueHeading = "trueheading: " + trueHeading;
            $scope.accuracy = "accuracy: " + accuracy;
            $scope.timeStamp = "timeStamp: " + timeStamp;
          });

      }, function (err) {
        // An error occurred
      });

      //    watch.clearWatch();
      //    // OR
      //    $cordovaDeviceOrientation.clearWatch(watch)
      //      .then(function(result) {
      //        // Success!
      //      }, function(err) {
      //        // An error occurred
      //      });
      //
      //      }, false);
    })
  });
